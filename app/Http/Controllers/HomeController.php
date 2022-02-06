<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use App\Product;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;

class HomeController extends Controller
{
    public function index()
    {
        $visitorData = Helper::getVisitorData();
        $countryCode = $visitorData['countryCode'];
        $langFolder = Helper::getVisitorDefaultLanguage($countryCode);
        $product = Product::where('code', 'beard-growth-elixir')->first();
        $productPrice = Helper::getProductPrice($product, $countryCode);
        $carouselImagesPath = Helper::getImagesWithTitles('homepage', 0, 12);
        $resultCarousel = $this->prepareImagesForCarousel($carouselImagesPath, '/results/homepage');
        $testimonialsCarousel = $this->homepageTestimonials();

        $data = [
            'appLocale' => App::getLocale(),
            'countryCode' => $countryCode,
            'price' => $productPrice->price,
            'currency' => $productPrice->currency,
            'shipping' => $productPrice->shipping,
            'oldPriceActive' => $productPrice->old_price_active,
            'oldPrice' => $productPrice->old_price,
            'carousel' => $resultCarousel,
            'testimonialsCarousel' => $testimonialsCarousel,
            'localLangFolder' => $langFolder,
            'specialPrice' => $productPrice->special_price,
            'specialPriceActive' => $productPrice->special_price_active,
        ];

        return View::make('pages/home')->with($data);
    }

    private function prepareImagesForCarousel($images, $path):array
    {
        $carouselImages = [];
        foreach ($images as $image) {
            $carouselImages[] = [
                'imagePath' => '/img' . $path . '/' . $image->path,
                'thumbnail' => '/img' . $path . '/' . $image->thumbnailPath,
                'title' => $image->title
            ];
        }

        return $carouselImages;
    }

    public function results()
    {
        $textForBoxes = Lang::get('results_boxes');
        $featureImagesPath = Helper::getImages('/public/img/results/featureImages');
        $featureImages = [];

        foreach ($featureImagesPath as $imagePath) {
            $featureImages[] = [
                'imagePath' => URL::asset('/img/results/featureImages/' . $imagePath)
            ];
        }

        return View::make('pages/about/results')->with([
            'featureImages' => $featureImages,
            'textBoxes' => $textForBoxes,
            'countryCode' => Helper::getVisitorCountryCode()
        ]);
    }

    private function homepageTestimonials():array
    {
        $selectedLanguage = App::getLocale() === 'ar' ? 'en' : App::getLocale();
        $testimonialImagesFromFolder = Helper::getImages('/public/img/testimonials/homepage/' . $selectedLanguage . '/thumb');
        $testimonials = [];

        foreach ($testimonialImagesFromFolder as $imagePath) {
            $testimonials[] = [
                'thumbnail' => URL::asset('/img/testimonials/homepage/' . $selectedLanguage . '/thumb/' . $imagePath),
            ];
        }

        return $testimonials;
    }

    public function thankYou()
    {
        if (isset($_GET['order_number'])) {
            $order = Order::find($_GET['order_number']);
            if ($order) {
                $order->status = 'PAID';
                $order->save();
            }
        }

        return View::make('pages/about/thankyou')->with([
            'countryCode' => Helper::getVisitorCountryCode()
        ]);
    }

    public function cancel(Request $request)
    {
        if (isset($_GET['order_number'])) {
            $order = Order::find($_GET['order_number']);
            if ($order) {
                $order->status = 'PAYMENT-DECLINED';
                $order->save();
            }
        }

        return View::make('pages/about/cancel')->with([
            'countryCode' => Helper::getVisitorCountryCode()
        ]);
    }


    public function crew()
    {
        return View::make('pages/about/crew')->with([
            'countryCode' => Helper::getVisitorCountryCode()
        ]);
    }

    public function faq()
    {
        $countryCode = Helper::getVisitorCountryCode();
        $imagesPath = Helper::getImages('/public/img/faq/');
        $imageData = [];
        $matches = array();
        $title = '';

        foreach ($imagesPath as $imagePath) {
            if (preg_match('/faq-(.*?).jpg/', $imagePath, $matches) == 1) {
                $title = $matches[1];
            }
            if ($countryCode === 'AE' && $title === 'vitamins') {
                continue;
            } else {
                $imageData [] = ['answer' => 'faq.' . $title . 'Answer', 'imagePath' => URL::asset('/img/faq/') . '/' . $imagePath, 'question' => 'faq.' . $title . 'Question'];
            }
        }

        return View::make('pages/about/faq')->with([
            'countryCode' => $countryCode,
            'imagesData' => $imageData
        ]);
    }


    public function contact()
    {
        return View::make('pages/about/contactus')->with([
            'countryCode' => Helper::getVisitorCountryCode()
        ]);
    }

}
