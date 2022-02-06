<?php

namespace App\Helpers\ShippingProviders;

use App\Notifications\NotificationOnFailedOrder;
use App\Order;
use App\PaymentType;
use App\Shipping;
use App\ShippingErrorLog;
use App\User;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

class Fetchr
{
    private $token;
    private $baseUrl;
    private $warehouseId;
    private $headers = array();
    private static $instance;

    /**@var Client */
    private $client;

    private function __construct()
    {
        $fetchrConfig = Config::get('fetchr');
        $mode = $fetchrConfig['mode'];
        $this->token = $fetchrConfig[$mode]['token'];
        $this->baseUrl = $fetchrConfig[$mode]['baseUrl'];
        $this->warehouseId = $fetchrConfig['warehouseId'];
        $this->client = new Client([
            'base_uri' => $this->baseUrl
        ]);

        $this->headers = [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $fetchrConfig[$mode]['token']
        ];
    }

    public static function getInstance(): Fetchr
    {
        if (self::$instance === null) {
            self::$instance = new Fetchr();
        }

        return self::$instance;
    }

    public function postOrder(Order $order)
    {
        if($order->paymentTypes->productPrice->special_price_active && $order->quantity > 1){
            $pricePerUnit = (($order->paymentTypes->productPrice->price * ($order->quantity - 1)) + $order->paymentTypes->productPrice->special_price)/$order->quantity ;
        }else{
            $pricePerUnit  = $order->paymentTypes->productPrice->price;
        }

        $params['data'] = [
            [
                "items" => [[
                    "name" => $order->paymentTypes->productPrice->product->name,
                    "description" => $order->paymentTypes->productPrice->product->description,
//                    "sku" => "dk01",
                    "sku" => $order->paymentTypes->productPrice->product->sku,
                    "quantity" => $order->quantity,
                    "price_per_unit" => $pricePerUnit
                ]],
                "warehouse_location" => [
                    "id" => $this->warehouseId
                ],
                "details" => [
                    "discount" => 0,
                    "extra_fee" => $order->paymentTypes->productPrice->shipping,
                    "payment_type" => $order->paymentTypes->type == PaymentType::PAYMENT_TYPE_CASH ? "COD" : "Credit Card",
                    "order_reference" => $order->id,
                    "customer_name" => "$order->first_name $order->last_name",
                    "customer_phone" => $order->phone_number,
                    "customer_email" => $order->email,
                    "customer_address" => $order->address,
                    "customer_country" => $order->paymentTypes->productPrice->country_name,
                    "customer_city" => $order->city,
                    "comments" => $order->note,
                ]
            ]
        ];

        $result = $this->client->post('/fulfillment', ['headers' => $this->headers, 'body' => json_encode($params)]);
        $resData = json_decode($result->getBody()->getContents(), true);

        if ($resData['status'] === 'error') {
            $shippingErrorLog = new ShippingErrorLog();
            $shippingErrorLog->status = 'request failed';
            $shippingErrorLog->message = $resData['message'];
            $shippingErrorLog->error_code = $resData['error_code'];
            $shippingErrorLog->trace_id = "exception";

            $order->shippingErrorLog()->save($shippingErrorLog);
            User::getAdmin()->notify(new NotificationOnFailedOrder($order));
        }

        if ($resData['data'][0]['status'] === 'success') {
            $shipping = new Shipping();
            $shipping->status = $resData['data'][0]['status'];
            $shipping->tracking_no = $resData['data'][0]['tracking_no'];
            $shipping->so_no = $resData['data'][0]['so_no'];
            $shipping->trace_id = $resData['trace_id'];

            $order->shipping()->save($shipping);
        } else {
            $shippingErrorLog = new ShippingErrorLog();
            $shippingErrorLog->status = $resData['data'][0]['status'];
            $shippingErrorLog->message = $resData['data'][0]['message'];
            $shippingErrorLog->error_code = $resData['data'][0]['error_code'];
            $shippingErrorLog->trace_id = $resData['trace_id'];

            $order->shippingErrorLog()->save($shippingErrorLog);
            User::getAdmin()->notify(new NotificationOnFailedOrder($order));
        }
    }

}