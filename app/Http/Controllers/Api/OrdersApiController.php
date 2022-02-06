<?php

namespace App\Http\Controllers\Api;

use App\Country;
use App\Http\Controllers\Controller;
use App\Notifications\OrderShipped;
use App\Notifications\NotificationOnSendTrackingId;
use App\Order;
use App\PaymentType;
use App\ProductPrice;
use App\Shipping;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Helpers\Helper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tracker;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrdersApiController extends Controller
{

    const ALL_COUNTRIES = 'ALL';

    public function get(Request $request)
    {
        $user = JWTAuth::toUser($request->header('Authorization'));
        $country_code = [$request->get('country')];
        $offset= $request->get('offset');
        $limit= $request->get('limit');
        if(strpos($country_code[0],",") !== false){
            $country_code = explode(',', $country_code[0]);
        }
        $status = $request->get('status');

        if ($user->id != 1) {
            $idArray = $user->productPrices->pluck('id')->toArray();
        } elseif ($country_code == 0) {
            $idArray = ProductPrice::all(['id'])->pluck('id')->toArray();
        } else {
            $idArray = $country_code;
        }

        $query = Order::with(['paymentTypes', 'paymentTypes.productPrice'])
            ->select(
                'orders.*',
                'payment_types.type',
                'product_prices.currency',
                'product_prices.price',
                'product_prices.shipping',
                'product_prices.country_code',
                'shippings.tracking_no'
            )->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')
            ->leftJoin('shippings', 'orders.id', '=', 'shippings.order_id');

            if($idArray[0] != 0){
                $query->whereIn('product_prices.id', $idArray);
            }else{
               $query->whereDate('orders.created_at', '>', Carbon::now()->subDays(10));
            }

        if ($status && $status !== self::ALL_COUNTRIES) {
            $query->where('orders.status', $status);
        }

        if(isset($offset, $limit)) {
            $query->skip($offset)->take($limit);
        }
        $orders = $query->orderBy('orders.created_at', 'desc')->get();

        return response()->json(['success' => true, 'data' => $orders]);
    }

    public function getOrder(Request $request)
    {
        $orderId = $request->id;

        $orderData = Order::with(['paymentTypes', 'paymentTypes.productPrice', 'shippings'])
            ->select(
                'orders.*',
                'payment_types.type',
                'product_prices.currency',
                'product_prices.price',
                'product_prices.shipping',
                'product_prices.country_code',
                'shippings.tracking_no'
            )->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')
            ->leftJoin('shippings', 'orders.id', '=', 'shippings.order_id')
            ->where('orders.id', '=', $orderId)->get();


       Log::info('====== order data ====== ' . json_encode($orderData));

        return response()->json(['success' => true, 'data' => $orderData]);
    }

    public function updateOrder(Request $request)
    {


        Log::error('================ natasa ======= ' . json_encode($t));
        $data = $request->user_id;
        $t = $request->data;
        Log::error('================ natasa ======= ' . json_encode($t));
        var_dump($data);exit;
        var_dump($request->first_name);
        var_dump($request->first_name);exit;
        $order = Order::find($request->id);
        $order->first_name = $request->firstname;
        $order->last_name = $request->lastname;
        $order->phone_number = $request->phone;
        $order->email = $request->email;
        $order->address = $request->address;
        $order->city = $request->city;
        $order->zip = $request->zip;
        $order->note = $request->note;
        $order->total = $request->price;
        $order->status = $request->status;

        $shipping =  Shipping::find($request->shipping->id);
        var_dump($shipping);exit;
        $shipping->status = $request->shipping->status;
        $shipping->tracking_no = $request->shipping->tracking_no;
        $shipping->so_no = $request->shipping->so_no;
        $shipping->trace_id =$request->shipping->trace_id;
        $order->shipping()->save($shipping);
        $order->save();
        return response()->json(['success' => true, 'data' =>  $order]);
    }


    protected function receiveJSON(bool $assoc = false, bool $strip_tags = true)
    {
        $json = file_get_contents('php://input');
        if ($strip_tags) {
            $json = strip_tags($json, '<br><p><h1><h2><h3><h4><h5><h6><span>');
        }
        return json_decode($json, $assoc);
    }

    public function put(Request $request, $id)
    {
//        $data = $this->receiveJSON();
        $newStatus = $request->post('newStatus');

        $order = Order::find($id);
        if (!isset($order)) {
            throw new HttpException(500, \Illuminate\Support\Facades\Config::get('constants.errorMessages.notFound'));
        }

        $order->status = $newStatus;
        $order->save();

        return response()->json(['success' => true, 'data' => $order]);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function put_trackingId(Request $request, $id)
    {
        $trackingNo = $request->post('tracking_no');

        $order = Order::find($id);
        if (!isset($order)) {
            throw new HttpException(500, \Illuminate\Support\Facades\Config::get('constants.errorMessages.notFound'));
        }
        $shipping = new Shipping();
        $shipping->status = 'success';
        $shipping->order_id = $id;
        $shipping->tracking_no = $trackingNo;
        $shipping->so_no = '';
        $shipping->trace_id = 'dashboard';

        $order->shipping()->save($shipping);
        $paymentType = PaymentType::find($order->payment_type_id);


        if($order->language === null){
            $mailLang = Helper::KNOWN_COUNTRIES_LANG[$paymentType->productPrice->country_code];
        }else{
            $mailLang = $order->language->code;
        }

        $order->notify(
                (new OrderShipped($order))->locale($mailLang)
            );

        Notification::route('mail', 'pop.jelena96@gmail.com')->notify(new NotificationOnSendTrackingId($order));

        return response()->json(['success' => true, 'data' => $order]);
    }

}
