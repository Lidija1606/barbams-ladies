<?php
return [
    'mode' => env('FETCHR_MODE', ''),
    'warehouseId' => env('FETCHR_WAREHOUSE_ID', 'UAE_DXB_WHS_001'),
    'live' => [
        'baseUrl' => 'https://xapi.fetchr.us',
        'token' => env('FETCHR_LIVE_TOKEN', '015bb293-fc53-4d28-bac6-41a5e875fbaa')
    ],
    'staging' => [
        'baseUrl' => 'https://xapi.stag.fetchr.us',
        'token' => env('FETCHR_STAGING_TOKEN', ''),
    ]
];