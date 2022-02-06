<?php

namespace App\Providers;

use App\Helpers\PaymentProviders\CashOnDeliveryProvider;
use App\Helpers\PaymentProviders\IPaymentProvider;
use App\Order;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class CorvusProvider implements IPaymentProvider
{
    private static $instance;

    /**
     * @return IPaymentProvider
     */
    public static function getInstance(): IPaymentProvider
    {
        if (self::$instance === null) {
            self::$instance = new CorvusProvider();
        }
        return self::$instance;
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function processPayment(Order $order): array
    {
        $formData = [
            'amount' => $order->total,
            'cardholder_address' => $order->address,
            'cardholder_city' => $order->city,
            'cardholder_email' => $order->email,
            'cardholder_name' => $order->first_name,
            'cardholder_surname' => $order->last_name,
            'cardholder_zip_code' => $order->zip,
            'cart' => 'Beard Growth Elixir x '.$order->quantity,
            'currency' => Config::get('corvus.currency'),
            'language' => Config::get('corvus.language'),
            'order_number' => $order->id,
            'require_complete' => Config::get('corvus.require_complete') ? 'true':'false',
            'store_id' => Config::get('corvus.store_id'),
            'subscription' => false ? 'true':'false',
            'version' => Config::get('corvus.version'),
        ];

        $signatureData = '';

        foreach($formData as $key => $value) {
            $signatureData .= $key.$value;
        }

        $signature = hash_hmac('sha256', $signatureData, Config::get('corvus.api_key'));

        $formData = array_merge($formData, ['signature' => $signature]);

        return $formData;
    }
}
