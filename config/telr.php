<?php
return [
    // The current mode is live|production or test
    'test_mode' => env('TELR_TEST_MODE', FALSE),

    // The currency of store

    'currency' => 'AED',

    // The sale endpoint that receive the params
    // @see https://telr.com/support/knowledge-base/hosted-payment-page-integration-guide
    'sale' => [
        'endpoint' => 'https://secure.telr.com/gateway/order.json',
    ],

    // The hosted payment page use the following params as it explained in the integration guide
    // @see https://telr.com/support/knowledge-base/hosted-payment-page-integration-guide/#request-method-and-format
    'create' => [
        'ivp_method' => 'create',
        'ivp_store' => env('TELR_STORE_ID', 22187),
        'ivp_authkey' => env('TELR_STORE_AUTH_KEY', '9Mbg-ssWqF#9Rx6g'),
        'return_auth' => '/telrStatus',
        'return_can' => '/telrStatus',
        'return_decl' => '/telrStatus',
    ]
];
