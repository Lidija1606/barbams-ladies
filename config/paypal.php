<?php

return [
    'mode'    => env('PAYPAL_MODE','sandbox'), // Can only be 'sandbox' Or 'live'. If empty or invalid, 'live' will be used.
    'sandbox' => [
        'username'    => 'barbamsorders-facilitator_api1.gmail.com',
        'password'    => 'CGXU3TNDPHSS5CJZ',
        'secret'      =>  env('PAYPAL_SECRET','AHitN3-PvBF99PzKZLCpJvZZBe8HAvRHZXXdwQ.GHVSNYrORQJXk17p9'),
        'certificate' => '',
        'app_id'      => '', // Used for testing Adaptive Payments API in sandbox mode
    ],
    'live' => [
        'username'    => env('PAYPAL_LIVE_API_USERNAME', ''),
        'password'    => env('PAYPAL_LIVE_API_PASSWORD', ''),
        'secret'      => env('PAYPAL_LIVE_API_SECRET', ''),
        'certificate' => env('PAYPAL_LIVE_API_CERTIFICATE', ''),
        'app_id'      => '', // Used for Adaptive Payments API
    ],
    'payment_action' => 'Sale', // Can only be 'Sale', 'Authorization' or 'Order'
    'currency'       => 'EUR',
    'notify_url'     => '', // Change this accordingly for your application.
    'locale'         => '', // force gateway language  i.e. it_IT, es_ES, en_US ... (for express checkout only)
    'validate_ssl'   => true, // Validate SSL when creating api client.
];

