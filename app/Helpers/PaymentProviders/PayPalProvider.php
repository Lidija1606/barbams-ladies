<?php

namespace App\Helpers\PaymentProviders;

use App\Exceptions\Handler as ExceptionHandler;
use App\Order;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Srmklive\PayPal\Services\ExpressCheckout;
use Exception;

class PayPalProvider implements IPaymentProvider
{
    private static $instance;
    private $provider;
    /** @var Order */
    private $order;

    private function __construct()
    {
        $paypal_conf = Config::get('paypal');
        try {
            $this->provider = new ExpressCheckout();
            $this->provider->setApiCredentials($paypal_conf);
        } catch (Exception $e) {
            ExceptionHandler::sendEmail($e);
            Log::error("Paypal init failed: " . $e->getMessage());
        }
    }

    public static function getInstance(): IPaymentProvider
    {
        if (self::$instance === null) {
            self::$instance = new PayPalProvider();
        }
        return self::$instance;
    }

    public function processPayment(Order $order): array
    {
        $data = $this->getCheckoutData($order);
        $returnData=[];
        try {
            $response = $this->provider->setExpressCheckout($data);

            if (in_array(strtoupper($response['ACK']), ['SUCCESS', 'SUCCESSWITHWARNING'])) {
                $returnData['success'] = true;
                $returnData['url'] = $response['paypal_link'];
                $returnData['redirectType'] = 'internal';
                $order->payment_provider_payment_id = $response['TOKEN'];
                $order->status = Config::get('constants.order.status.prePayment');
                $order->update();

                /** redirect to paypal **/
                return $returnData;
            }
            Log::error('No SUCCESS in response '.json_encode($response));

        } catch (Exception $e) {
            ExceptionHandler::sendEmail($e);
            Log::error('Failed to setExpressCheckout: '. $e->getMessage());
        }

        return $returnData;
    }

    protected function getCheckoutData(Order $order):array
    {
        $this->order = $order;
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
}
