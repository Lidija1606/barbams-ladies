<?php

return [
    'order' => [
        'status' => [
            'ordered' => 'ORDERED',
            'prePayment' => 'PRE-PAYMENT',
            'paid' => 'PAID',
            'shipped' => 'SHIPPED',
            'delivered' => 'DELIVERED',
            'paymentDeclined' => 'PAYMENT-DECLINED'
        ],
        'currency' => [
            'USD',
            'RSD',
            'EUR'
        ],
        'payment' => [
            'status' => [
                'CREATED',
                'AUTHORIZED',
                'EXECUTED',
                'ERROR'
            ],
            'type' => [
                'paypal' => 'PAYPAL',
                'card' => 'CARD',
                'cash' => 'CASH',
                'corvus' => 'CORVUS'
            ]
        ]
    ],
    'errorMessages' => [
        'order' => [
            'notFound' => 'NOT FOUND'
        ]
    ],
    'language' => [
        'english' => 'en',
        'serbian' => 'sr',
        'arabian' => 'ar'
    ],
    'countries_language' => [
        'HR' => 'sr',
        'BA' => 'sr',
        'RS' => 'sr',
        'AE' => 'en',
        'IN' => 'ar',
        'OTHER' => 'en',
        'AD' => 'en',
        'BE' => 'en',
        'CY' => 'en',
        'EE' => 'en',
        'FI' => 'en',
        'FR' => 'en',
        'GI' => 'en',
        'GR' => 'en',
        'IE' => 'en',
        'XK' => 'en',
        'LV' => 'en',
        'LI' => 'en',
        'LT' => 'en',
        'LU' => 'en',
        'MT' => 'en',
        'MC' => 'en',
        'ME' => 'en',
        'NL' => 'en',
        'MK' => 'en',
        'NO' => 'en',
        'PT' => 'en',
        'SM' => 'en',
        'ES' => 'en',
        'SE' => 'en',
        'CH' => 'en',
        'VA' => 'en'
    ],
    'notification' => [
        'mail',
        'feedback'
    ],
];
