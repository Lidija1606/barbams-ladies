<?php

namespace App\Http\Controllers;

use App\Feature;
use App\Helpers\Helper;
use App\Product;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Lang;
use App\Http\Controllers\ImagesController as Images;


class ProductsController extends Controller
{

    protected $imageColection;

    function __construct(Images $images)
    {
        $this->imageColection = $images;
    }

    public function setLocale($locale)
    {
        App::setLocale($locale);
    }

    public function elixir()
    {
        $visitorData = Helper::getVisitorData();
        $product = Product::where('code', 'beard-growth-elixir')->first();
        $countryCode = $visitorData['countryCode'];

        $productPrice = Helper::getProductPrice($product, $countryCode);
        $carouselImagesPath = Helper::getImagesWithTitles('elixir', 0,18);
        $carousel = [];
        foreach ($carouselImagesPath as $image) {

            $carousel[] = ['imagePath' => '/img/elixir/results_gallery/'.$image->path, 'thumbnail' => '/img/elixir/results_gallery/'.$image->thumbnailPath, 'title' => $image->title];
        }
        $prices = $productPrice->price;
        $shipping = $productPrice->shipping;
        if (!in_array($countryCode, Helper::getBalkansCountries())) {
            $prices = $productPrice->price + $shipping;
        }
        $data = [
            'countryCode' => $countryCode,
            'price' => $prices,
            'currency' => $productPrice->currency,
            'shipping' => $productPrice->shipping,
            'oldPriceActive' => $productPrice->old_price_active,
            'oldPrice' => $productPrice->old_price,
            'specialPrice' => $productPrice->special_price,
            'specialPriceActive' => $productPrice->special_price_active,
            'carousel' => $carousel,
            'twoForOne'=> Feature::isFeature2for1Active(),
            'region' => $productPrice->region,
        ];

        return View::make('pages/product/elixir')->with($data);

    }

    public function products()
    {

        $visitorData = Helper::getVisitorData();
        $countryCode = $visitorData['countryCode'];
        $data = [
            'countryCode' => $countryCode
        ];
        return \Illuminate\Support\Facades\View::make('pages/product/products')->with($data);
    }

}
