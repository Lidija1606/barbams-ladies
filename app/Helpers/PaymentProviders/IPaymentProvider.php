<?php

namespace App\Helpers\PaymentProviders;

use App\Order;

interface IPaymentProvider
{
    public static function getInstance(): IPaymentProvider;

    /**
     * @param Order $order
     * @return array
     * @throws \Exception
     */
    public function processPayment(Order $order): array;
}