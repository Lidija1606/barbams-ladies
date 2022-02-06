<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::post('/order', ['uses' => 'OrdersController@post']);
Route::post('/validatePromoCode', ['uses' => 'OrdersController@validatePromoCode']);
Route::get('/order/{id}', ['uses' => 'OrdersController@get']);

Route::prefix('auth')->group(function () {
    Route::get('/adduser', ['uses' => 'Api\AuthController@addUser']);
    Route::post('/login', ['uses' => 'Api\AuthController@login']);
    Route::post('/logout', ['uses' => 'Api\AuthController@logout']);
});

Route::group([
    'prefix' => 'feature'
],function () {
    Route::get('/date/{date}', ['uses' => 'Api\FeaturesApiController@setDate']);
    Route::get('/elixir-counter/{number}', ['uses' => 'Api\FeaturesApiController@setCounter']);
});


Route::group(
    [
        'prefix' => 'orders',
        'middleware' => ['jwt-auth']
    ], function () {
    Route::get('/', ['uses' => 'Api\OrdersApiController@get']);

    Route::put('/{id}', ['uses' => 'Api\OrdersApiController@put']);
    Route::put('/updateTracking/{id}', ['uses' => 'Api\OrdersApiController@put_trackingId']);
});

Route::post('updateorder', ['uses' => 'Api\OrdersApiController@updateOrder']);
//Route::prefix('orders')->group(function () {
//    Route::get('/', ['uses' => 'Api\OrdersApiController@get']);
//
//    Route::put('/{id}', ['uses' => 'Api\OrdersApiController@put']);
//});


Route::prefix('products')->group(function () {
    Route::get('/', ['uses' => 'Api\ProductsApiController@get']);
    Route::get('/prices', ['uses' => 'Api\ProductPricesApiController@get']);
    Route::get('/prices/all', ['uses' => 'Api\ProductPricesApiController@getAll']);
});

Route::prefix('countries')->group(function () {
    Route::get('/', ['uses' => 'Api\CountriesApiController@get']);
});


Route::prefix('clients')->group(function () {
    Route::get('/blacklistedEmails', ['uses' => 'Api\ClientsApiController@get_blacklistedEmails']);
    Route::put('/blacklistEmail', ['uses' => 'Api\ClientsApiController@put_blackListEmail']);
    Route::delete('/deleteBlacklistedEmail', ['uses' => 'Api\ClientsApiController@delete_blackListedEmail']);
});
