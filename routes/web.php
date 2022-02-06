<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Redirect;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::get('/login', function () {
    return view('admin/index');
});

Route::prefix('/dashboard')->group(function () {

    Route::get('/', function () {
        return view('admin/index');
    });

    Route::get('/index', function () {
        return view('admin/index');
    });
    Route::get('/orders', function () {
        return view('admin/index');
    });
    Route::get('/products', function () {
        return view('admin/index');
    });
    Route::get('/products/list', function () {
        return view('admin/index');
    });
    Route::get('/products/prices', function () {
        return view('admin/index');
    });
    Route::get('/blacklist', function () {
        return view('admin/index');
    });

});


Route::get('/orders', function () {
    return view('admin/index');
});

Route::get('lang/{lang}', ['as' => 'lang.switch', 'uses' => 'LanguageController@switch']);

Route::post('/lang', ['uses' => 'LanguageController@setLang']);

Route::prefix('webhook')->group(function () {

    Route::get('/order/paypalStatus', ['uses' => 'WebhookController@paypalStatus'])->name('paypalStatus');
    Route::get('/order/paypalCancel', ['uses' => 'WebhookController@paypalCancel'])->name('paypalCancel');

});

Route::get('/', ['uses' => 'HomeController@index'])->middleware('localeSessionRedirect', 'localizationRedirect', 'localeViewPath', 'urlLanguage');

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath', 'urlLanguage','pagespeed']
    ], function () {
    /** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/

    Route::get('/', ['uses' => 'HomeController@index']);


    Route::get('/home', ['uses' => 'HomeController@index']);
    Route::get('/products/elixir', function () {
        return Redirect::to('/products/beard-growth-elixir', 301);

    });
    Route::get('/products/beard-growth-elixir', ['uses' => 'ProductsController@elixir']);
    Route::get('/products', ['uses' => 'ProductsController@products']);
    Route::get('/images/{position}/{offset}/{limit}', ['uses' => 'ImagesController@getImages']);

    Route::get('/about/crew', ['uses' => 'HomeController@crew']);

    Route::get('/about/faq', ['uses' => 'HomeController@faq']);
    Route::get('/about/results', ['uses' => 'HomeController@results']);
    Route::get('/telrStatus', ['uses' => 'WebhookController@telrStatus']);

    Route::get('/order/{productId}', ['uses' => 'OrdersController@index']);


    Route::get('/thankyou', ['uses' => 'HomeController@thankYou']);
    Route::get('/cancel', ['uses' => 'HomeController@cancel']);


    Route::get('/about/contact', ['uses' => 'HomeController@contact']);
    Route::get('/testimonials', ['uses' => 'TestimonialsController']);

});

Route::get('/imageUpdateResultsPage', ['uses' => 'ImagesController@imageUploadResultsPage']);
Route::get('/imageUpdateElixirPage', ['uses' => 'ImagesController@imageUploadElixirPage']);
Route::get('/imageUploadHomePage', ['uses' => 'ImagesController@imageUploadHomePage']);
Route::get('/imageUploadTestimonialsPage/clear', ['uses' => 'ImagesController@clearTestimonials']);
Route::get('/imageUploadTestimonialsPage/{language}', ['uses' => 'ImagesController@imageUploadTestimonialsPage']);

/*
use Illuminate\Support\Facades\View;

use App\Order;
Route::get('/mail-preview', function () {
    \App::setLocale('ar');
    $order = Order::find(7473);
    return View::make('emails.mail', ['order'=>$order]);
});*/
