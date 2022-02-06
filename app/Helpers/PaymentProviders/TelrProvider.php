<?php
/**
 * Created by PhpStorm.
 * User: natasajevtovic
 * Date: 2/28/20
 * Time: 10:32 PM
 */

namespace App\Helpers\PaymentProviders;

use App\Order;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use \TelrGateway\TelrManager;

class TelrProvider extends TelrManager implements IPaymentProvider
{
    private static $instance;

    public static function getInstance(): IPaymentProvider
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * @param Order $order
     * @return array
     * @throws \Exception
     */
    public function processPayment(Order $order): array
    {
        $billingParams = [
            'first_name' => $order->first_name,
            'sur_name' => $order->last_name,
            'address_1' => $order->address,
            'city' => $order->city,
            'zip' => $order->zip,
            'email' => $order->email
        ];
        $conversionRate = $order->paymentTypes->conversion_rate;
        $total = $order->total * $conversionRate;

        $paymentUrl = $this->pay($order->id, ceil($total), $order->paymentTypes->currency, 'Barbams elixir', $billingParams)->redirectURL();

        $order->status = Config::get('constants.order.status.prePayment');
        $order->total = ceil($total);
        $order->update();
        return [
            'success' => true,
            'url' => $paymentUrl,
            'redirectType' => 'internal',
        ];
    }
}
