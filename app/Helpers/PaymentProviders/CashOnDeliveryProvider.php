<?php

namespace App\Helpers\PaymentProviders;

use App\Helpers\Helper;
use App\Helpers\ShippingProviders\Fetchr;
use App\Helpers\ShippingProviders\Smsa;
use App\Language;
use App\Notifications\OrderPaid;
use App\Notifications\VacationMail;
use App\Order;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;

class CashOnDeliveryProvider implements IPaymentProvider
{
    private static $instance;

    /**
     * @return IPaymentProvider
     */
    public static function getInstance(): IPaymentProvider
    {
        if (self::$instance === null) {
            self::$instance = new CashOnDeliveryProvider();
        }
        return self::$instance;
    }

    /**
     * @param Order $order
     * @return array
     */
    public function processPayment(Order $order): array
    {
        $order->status = Config::get('constants.order.status.paid');
        $order->save();

        if ($order->paymentTypes->productPrice->fetchr) {
            Fetchr::getInstance()->postOrder($order);
        }
        /*if ($order->paymentTypes->productPrice->country_code === 'SA') {
            Smsa::getInstance()->Shipping($order);
        }*/

        $order->notify(
            (new OrderPaid($order))->locale($order->language->code)
        );
        return [
            'success' => true,
            'redirectType' => 'internal',
            'url' => '/thankyou'
        ];
    }
}
