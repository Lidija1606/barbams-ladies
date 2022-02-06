<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;

class TestController extends Controller
{
    public function index()
    {
//        return \redirect()->to("/order/beard-growth-elixir", 301);
//        Redirect::to('/order/beard-growth-elixir', 301);
//        Fetchr::getInstance()->postOrder();
//        $token = '';
//        $client = new Client([
//            'base_uri' => 'https://xapi.stag.fetchr.us'
//        ]);
//
//
//        $headers = [
//            'Content-Type' => 'application/json',
//            'Authorization' => 'Bearer' . $token
//        ];
//
//        $response = $client->post('/order', ['headers' => [
//            'Content-Type' => 'application/json',
//            'Authorization' => 'Bearer ' . $token,
//        ], 'body' => json_encode([
//            'hello' => 'World'
//        ])]);
//        Log::error('======== index resposne ========= ' . $response->getBody()->getContents());
//        print_r(Helper::setLocale('en'));

//        //PAYID-LUR4U7I4L2622644N5549120
        //PAYID-LUR4U7I4L2622644N5549120

//        $order = Order::where('payment_provider_payment_id', 'PAYID-LUR4U7I4L2622644N5549120')->first();
//
//        Log::error('===TEST==== RODER ' . json_encode($order));
//
//        echo '<pre>';
//        print_r($order);
//        echo '</pre>';
//        die();
//        echo $order->email;
//        $test = \Illuminate\Support\Facades\Config::get('constants.order.status.ordered');
////        echo
//        print_r($test);
//        die();
    }

    public function product()
    {
        $product = new Product();
        $product->name = 'Elixir';
        $product->code = 'ELX';
        $product->description = 'Odlican elixir za bradu';
        $product->price = 123;

        $product->save();
    }

    public function order()
    {
        $order = new Order();
        $order->first_name = 'Marko';
        $order->last_name = 'Marko';
        $order->phone_number = '+38163454247';
        $order->email = 'markos494@gmail.com';
        $order->address = 'Kneginje Zorke 30';
        $order->city = 'Belgrade';
        $order->zip = '11000';
        $order->note = 'note123 ';


        $product = Product::find(1);
        $product->orders()->save($order, array('quantity' => $data->quantity));
//        $product->orders()

    }

    public function getorder()
    {
        $orders = Order::all();
        foreach ($orders as $order) {
            print_r($order->products());
        }
    }
}