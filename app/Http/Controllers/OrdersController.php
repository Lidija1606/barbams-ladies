<?php

namespace App\Http\Controllers;

use App\BlackList;
use App\Exceptions\Handler as ExceptionHandler;
use App\Helpers\Helper;
use App\Helpers\PaymentProviders\PaymentProviderLocator;
use App\Language;
use App\Notifications\BlackListedUser;
use App\Order;
use App\Country;
use App\PaymentType;
use App\Product;
use App\PromoCode;
use App\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
use Exception;
use Tracker;

class OrdersController extends Controller
{
    public function setLocale($locale)
    {
        App::setLocale($locale);

    }

    private function beardGrowthElixir()
    {
        $productId = 'beard-growth-elixir';
        $visitorData = Helper::getVisitorData();
        $countryCode = $visitorData['countryCode'];

        $sessionId = $visitorData['sessionId'];
        $product = Product::where('code', $productId)->first();
        if (empty($product)) {
            throw new Exception("Product not found with code: $productId", 404);
        }

        $price = Helper::getProductPrice($product, $countryCode);
        $paymentTypes = [];

        foreach ($price->paymentTypes as $payment) {
            if ($payment->isActive) {
                $label = 'order.form.onDelivery';
                if ($payment->type === 'PAYPAL') {
                    $label = 'order.form.paypal';
                } elseif ($payment->type === 'CARD') {
                    $label = 'order.form.creditCard';
                } elseif ($payment->type === 'CORVUS') {
                    $label = 'order.form.creditCard';
                }
                $paymentTypes[$payment->id] = $label;
            }
        }
        $prices = $price->price;
        $shipping = $price->shipping;

        if (!in_array($countryCode, array_merge(Helper::getBalkansCountries(), ['HR']))) {
            $prices = $price->price + $shipping;
        }

        $country = Country::where('code', 'like', $countryCode)->first();

        if (empty($country)) {
            $country = Country::where('code', 'like', 'OTHER')->first();
        }

        $paymentTypes = array_reverse($paymentTypes, true);

        $data = [
            'product' => $product,
            'price' => $prices,
            'shipping' => $shipping,
            'shippingTime' => $price->shipping_time,
            'currency' => $price->currency,
            'appLocale' => App::getLocale(),
            'sessionId' => $sessionId,
            'productPriceId' => $price->id,
            'paymentTypes' => $paymentTypes,
            'countryCode' => $price->country_code,
            'region' => $price->region,
            'oldPriceActive' => $price->old_price_active,
            'oldPrice' => $price->old_price,
            'specialPrice' => $price->special_price,
            'specialPriceActive' => $price->special_price_active,
            'promoCodeActive' => $price->promo_code_active,
            'callingCode' => $country->calling_code,
            'timer' => $this->timer() ?: null,
            'elixirCounter' => $this->elixirCounter() ?: null,
            'twoForOne'=> Feature::isFeature2for1Active(),
            'cities' => [
                'Abu Dhabi',
                'Al Ain',
                'Dubai',
                'Ajman',
                'Fujairah',
                'Ras al Khaimah',
                'Sharjah',
                'Umm al Quwain'
            ]
        ];

        return View::make('pages/product/order')->with($data);
    }

    private function timer(): ?Feature
    {
         return Feature::where('name', '=', 'timer')
             ->where('is_active', true)
             ->first();
    }

    private function elixirCounter(): ?Feature
    {
        return Feature::where('name', '=', 'elixir_countdown')
            ->where('is_active', true)
            ->first();
    }

    public function index($productId)
    {
        Redirect::to('/order/beard-growth-elixir', 301);
        switch ($productId) {
            case '1':
                return \redirect()->to("/order/beard-growth-elixir", 301);
            case 'beard-growth-elixir':
                return $this->beardGrowthElixir();
        }
    }

    public function get($id)
    {
        $product = Product::find($id);

        return response()->json(['product' => $product]);
    }

    public function post(Request $request)
    {
        //TODO - validation and sanitization !!!
        $data = $request->post('order');
        $email = preg_replace('/\s+/', '', $data['email']);
        $firstnameAndlastname = explode(' ', $data['firstnameAndLastname']);
        $blackListedClient = BlackList::where('email', 'like', $email)->first();

        if ($blackListedClient) {
            $blackListedClient->notify(
                (new BlackListedUser($blackListedClient))
            );
            return response()
                ->json(['status' => false, 'error' => 'Something went wrong, please contact us!']);
        }

        $languageId = Language::where('code', 'like', $data['lang'])->first();
        $order = new Order();
        $order->first_name = $firstnameAndlastname[0];
        $order->last_name = trim($data['firstnameAndLastname'], $firstnameAndlastname[0]);
        $order->phone_number = $data['phone'];
        $order->email = $email;
        $order->address = $data['address'];
        $order->city = $data['city'];
        $order->zip = $data['zip'];
        $order->note = $data['note'];
        $order->session_id = $data['sessionId'];
        $order->quantity = $data['quantity'];
        $order->language_id = $languageId->id;

        $paymentType = PaymentType::find($data['paymentType']);
        $isSpecialPriceActive = $paymentType->productPrice->special_price_active;
        $isPromoCodeActive = $paymentType->productPrice->promo_code_active;

        if ($isSpecialPriceActive && $order->quantity > 1) {
            $specialPrice = $paymentType->productPrice->special_price;
            $quantityWithoutSpecialPrice = $order->quantity - 1;
            $price = ($paymentType->productPrice->price * $quantityWithoutSpecialPrice) + $specialPrice;
            $total = $price + $paymentType->productPrice->shipping;
            $subTotal = ($paymentType->productPrice->price * $quantityWithoutSpecialPrice) + $specialPrice;
        } else {
            $price = $paymentType->productPrice->price * $order->quantity;
            $total = $price + $paymentType->productPrice->shipping;
            $subTotal = $paymentType->productPrice->price * $order->quantity;
        }
        $order->total = $total;
        $order->sub_total = $subTotal;
        $paymentType->orders()->save($order);

        if ($isPromoCodeActive && $data['promoCode']) {
            $promoCode = PromoCode::where('name', 'like BINARY', $data['promoCode'])->first();
            if (!isset($promoCode)) {

                return response()->json(['status' => 'promoCodeError']);
            }
            $order->total -= (($promoCode->value / 100) * $total);
            $order->sub_total -= (($promoCode->value / 100) * $total);
            $promoCode->orders()->save($order);
        }

        if ($paymentType->type == 'CARD') {
            $order->status = 'PRE-PAYMENT';
            $order->save();
        }

        $paymentProvider = PaymentProviderLocator::getProvider($paymentType->type);

        try {
            $result = $paymentProvider->processPayment($order);

            if (\App\Helpers\Helper::getVisitorCountryCode() == 'HR' && PaymentType::find($data['paymentType'])->type == 'CARD') {
                return response()->json(['status' => true, 'data' => $result, 'type' => 'corvus', 'url' => Config::get('corvus.form_url')]);
            }
            if (!isset($result['success']) || !$result['success']) {
                $order->payments()->attach($paymentType->id, ['order_id' => $order->id, 'status' => 'ERROR', 'type' => $paymentType->type]);
                Log::error('ProcessPayment() failed ' . json_encode($result));

                throw new Exception('ProcessPayment() failed!: ' . $paymentType->type);
            }

            return response()->json(['status' => true, 'redirect' => $result['redirectType'], 'url' => $result['url']]);
        } catch (Exception $exception) {
            ExceptionHandler::sendEmail($exception);

            return response()
                ->json(['status' => false, 'error' => 'Something went wrong, please contact us!']);
        }
    }

    public function validatePromoCode(Request $request)
    {
        $promoCode = strip_tags($request->post('promoCode'));
        $validator = Validator::make($request->all(),
            ['promoCode' => 'regex:[^[a-zA-Z0-9_.-]*$]|max:10']
        );
        if ($validator->fails()) {

            return response()->json(['status' => 'promoCodeError']);
        }

        $discountInPercent = PromoCode::where('name', '=', $promoCode)->get()->first();

        if ($discountInPercent === null) {

            return response()->json(['status' => 'promoCodeError']);
        }

        return response()->json(['status' => true, 'discount' => $discountInPercent->value]);
    }
}
