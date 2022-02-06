<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Helpers\ShippingProviders\Smsa;
use App\Notifications\NotificationOnFailedPayPal;
use App\Notifications\OrderPaid;
use App\Exceptions\Handler as ExceptionHandler;
use App\User;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use App\Order;
use App\Helpers\ShippingProviders\Fetchr;
use Illuminate\Support\Facades\URL;
use Srmklive\PayPal\Services\ExpressCheckout;
use TelrGateway\TelrManager;
use TelrGateway\Transaction;
use Exception;

class WebhookController extends Controller
{
    public function telrStatus(Request $request)
    {
        $telrManager = new TelrManager();

        try {

            $response = $telrManager->handleTransactionResponse($request);

            $order = Order::find($response->order_id);

            if ($response->isApproved()) {
                $order->status = Config::get('constants.order.status.paid');
                $order->update();

                /*if ($order->paymentTypes->productPrice->country_code === 'SA') {
                    Smsa::getInstance()->Shipping($order);
                }*/

                $order->notify(
                    (new OrderPaid($order))->locale($order->language->code)
                );

                return Redirect::to('/thankyou');
            }
            $order->status = Config::get('constants.order.status.paymentDeclined');
            $order->update();
            return Redirect::to('/order/beard-growth-elixir?canceled=1');

        } catch ( Exception $exception ) {
            ExceptionHandler::sendEmail($exception);
            return Redirect::to('/order/beard-growth-elixir');
        }
    }
    public function paypalCancel()
    {
        return Redirect::to('/order/beard-growth-elixir');
    }

    public function paypalStatus(Request $request)
    {
        try {
            $this->provider = new ExpressCheckout();
            $token = $request->get('token');
            $PayerID = $request->get('PayerID');
            $order = Order::where('payment_provider_payment_id', $token)->first();

            if (empty($order)) {
                return Redirect::to('/order/beard-growth-elixir');
            }

            $cart = $this->getCheckoutData($order);

            // Verify Express Checkout Token
            $response = $this->provider->getExpressCheckoutDetails($token);

            if (in_array(strtoupper($response['ACK']), ['SUCCESS', 'SUCCESSWITHWARNING'])) {

                $payment_status = $this->provider->doExpressCheckoutPayment($cart, $token, $PayerID);
                $this->logPayment($order, $payment_status);

                if($payment_status['ACK'] === 'Success') {
                    $order->status = Config::get('constants.order.status.paid');
                    $order->save();
                    $order->notify(
                        (new OrderPaid($order))->locale($order->language->code)
                    );

                    return Redirect::to('/thankyou');
                }

                $order->status = Config::get('constants.order.status.paymentDeclined');
                $order->update();
                User::getAdmin()->notify(new NotificationOnFailedPayPal($response));
                Log::error('Paypal - paymentDeclined');
                Log::error(json_encode($response));
                return Redirect::to('/order/beard-growth-elixir?canceled=1');
            }
            User::getAdmin()->notify(new NotificationOnFailedPayPal($response));

            Log::error('paypal failed');
            Log::error(json_encode($response));
            Log::error('paypal failed');


            return Redirect::to('/order/beard-growth-elixir?canceled=1');
        } catch (Exception $exception) {
            ExceptionHandler::sendEmail($exception);

            return Redirect::to('/order/beard-growth-elixir?canceled=1');
        }
    }

    protected function getCheckoutData(Order $order):array
    {
        $data = [];

        $order_id = $order->id;
        $productName = $order->paymentTypes->productPrice->product->name;

        $conversionRate = $order->paymentTypes->conversion_rate;

        $price = round($order->paymentTypes->productPrice->price * $conversionRate);
        $shipping = round($order->paymentTypes->productPrice->shipping * $conversionRate);

        $subTotal = $price * $order->quantity;
        $total = $subTotal + $shipping;

        $data['items'] = [
            [
                'name'  => $productName,
                'price' => $price,
                'qty'   => $order->quantity,
            ]
        ];

        $data['return_url'] = URL::route('paypalStatus');
        $data['shipping'] = $shipping;
        $data['subtotal'] = $subTotal;
        $data['invoice_id'] = config('paypal.invoice_prefix').'_'.$order_id;
        $data['invoice_description'] = "Order #$order_id Invoice";
        $data['cancel_url'] = URL::route('paypalCancel');
        $data['total'] = $total;

        return $data;
    }

    protected function logPayment(Order $order, $payment_status)
    {
        $transaction = new Transaction();
        $transaction->cart_id = 'PAYPAL-'.$order->id;
        $transaction->order_id = $order->id;
        $transaction->store_id = $payment_status['BUILD'];
        $transaction->amount = $order->total;
        $transaction->description = json_encode($payment_status);
        $transaction->billing_fname = $order->first_name;
        $transaction->billing_sname = $order->last_name;
        $transaction->billing_address_1 = $order->address;
        $transaction->billing_city = $order->city;
        $transaction->billing_zip = $order->zip;
        $transaction->billing_country = $order->country;
        $transaction->billing_email = $order->email;
        $transaction->success_url = '/thankyou';
        $transaction->canceled_url = '/order/beard-growth-elixir?canceled=1';
        $transaction->declined_url = '/order/beard-growth-elixir?canceled=1';
        $transaction->approved = (in_array(strtoupper($payment_status['PAYMENTINFO_0_ACK']), ['SUCCESS', 'SUCCESSWITHWARNING'])) ? 1 : 0;
        $transaction->status = (in_array(strtoupper($payment_status['PAYMENTINFO_0_ACK']), ['SUCCESS', 'SUCCESSWITHWARNING'])) ? 1 : 0;
        $transaction->response = $payment_status['PAYMENTINFO_0_PAYMENTTYPE'];
        $transaction->save();
    }
}
