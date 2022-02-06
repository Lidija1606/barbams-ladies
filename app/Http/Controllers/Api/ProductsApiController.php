<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;
use App\ProductPrice;

class ProductsApiController extends Controller
{

    public function get()
    {
        $products = Product::get();

//        $orders = Order::with(['paymentTypes', 'paymentTypes.productPrice'])->get();
//        Log::error('====== orders get ====== ' . json_encode($orders));

        return response()->json(['success' => true, 'data' => $products]);
    }

    public function getProductPrices()
    {
        $productPrices = ProductPrice::get();
        return response()->json(['success' => true, 'data' => $productPrices]);
    }

//    public function post(Request $request)
//    {
//        $data = $request->post('order');
//
//
//        $visitor = Tracker::currentSession();
//
//        Log::error('======= test 123 ========= $data');
//
//        $order = new Order();
////        $order->first_name = $data['firstname'];
////        $order->last_name = $data['lastname'];
////        $order->phone_number = $data['phone'];
////        $order->email = $data['email'];
////        $order->address = $data['address'];
////        $order->city = $data['city'];
////        $order->zip = $data['zip'];
////        $order->note = $data['note'];
////        $order->total = $data['price'];
////
////        $product = Product::find($data['productId']);
////        $product->orders()->save($order, ['quantity' => $data['quantity']]);
//
//        return response()->json(['success' => true, 'data' => $order]);
//    }

//    public function put(Request $request, $id)
//    {
////        $data = $this->receiveJSON();
//        $newStatus = $request->post('newStatus');
//
//        $order = Order::find($id);
//        if (!isset($order)) {
//            throw new HttpException(500, \Illuminate\Support\Facades\Config::get('constants.errorMessages.notFound'));
//        }
//
//        $order->status = $newStatus;
//        $order->save();
//
//        return response()->json(['success' => true, 'data' => $order]);
//    }

    protected function receiveJSON(bool $assoc = false, bool $strip_tags = true)
    {
        $json = file_get_contents('php://input');
        if ($strip_tags) {
            $json = strip_tags($json, '<br><p><h1><h2><h3><h4><h5><h6><span>');
        }
        return json_decode($json, $assoc);
    }
}