<?php

namespace App\Helpers\PaymentProviders;

use App\Providers\CorvusProvider;

class PaymentProviderLocator
{
    private static $providers = [
        'PAYPAL' => PayPalProvider::class,
        'CASH' => CashOnDeliveryProvider::class,
        'CARD' => ''
    ];

    /**
     * @param string $providerType
     * @return IPaymentProvider
     * @throws \RuntimeException
     */
    public static function getProvider(string $providerType): IPaymentProvider
    {
        if (!isset(self::$providers[$providerType])) {
            throw new \RuntimeException('Provider not registered for provider type [' . $providerType . ']');
        }

        if ($providerType != 'CARD') {
            $providerClass = self::$providers[$providerType];
        } else {
            switch(\App\Helpers\Helper::getVisitorCountryCode()) {
                case 'HR':
                    $providerClass = CorvusProvider::class;
                    break;
                default:
                    $providerClass = TelrProvider::class;
                    break;
            }
        }

        return $providerClass::getInstance();
    }
}
