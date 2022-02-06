<?php

namespace App\Helpers;

use App\Product;
use App\ProductPrice;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Lang;
use Tracker;
use App\Language;
use App\Image;

class Helper
{
    const
        KNOWN_COUNTRIES_LANG = [
        'RS' => 'sr',
        'HR' => 'sr',
        'BA' => 'sr',
        'AE' => 'en',
        'AL' => 'en',
        'SI' => 'en',
        'HU' => 'en',
        'SK' => 'en',
        'AT' => 'en',
        'CZ' => 'en',
        'RO' => 'en',
        'IT' => 'en',
        'BG' => 'en',
        'DK' => 'en',
        'GB' => 'en',
        'PL' => 'en',
        'DE' => 'en',
        'OTHER' => 'en',
        'IN' => 'ar',
        'AD' => 'en',
        'BE' => 'en',
        'CY' => 'en',
        'EE' => 'en',
        'FI' => 'en',
        'FR' => 'en',
        'GI' => 'en',
        'GR' => 'en',
        'IE' => 'en',
        'LV' => 'en',
        'LI' => 'en',
        'LT' => 'en',
        'LU' => 'en',
        'MT' => 'en',
        'MC' => 'en',
        'ME' => 'sr',
        'NL' => 'en',
        'MK' => 'sr',
        'NO' => 'en',
        'PT' => 'en',
        'SM' => 'en',
        'ES' => 'en',
        'SE' => 'en',
        'VA' => 'en',
        'CH' => 'en',
        'US' => 'en',
        'CA' => 'en',
        'SA' => 'ar'];

    public static function getVisitorData(): array
    {
        $visitorData = [
            'sessionId' => 0,
            'countryCode' => 'OTHER'
        ];
        $visitor = Tracker::currentSession();

        if (!empty($visitor)) {
            $visitorData['sessionId'] = $visitor->id;
        }
        if (!empty($visitor->geoIp)) {
            if($visitor->geoIp->country_code) {
                $visitorData['countryCode'] = $visitor->geoIp->country_code;
            } else {
                Log::error('$visitor geoIp country_code is null');
                Log::error($visitor->geoIp);
            }
        }
        return $visitorData;
    }

    public static function getProductPrice(Product $product, string $countryCode): ProductPrice
    {
        $productPrice = $product->prices->first(function ($price) use ($countryCode) {

            return $price->country_code === $countryCode;
        });

        if (empty($productPrice)) {
            $productPrice = $product->prices->first(function ($price) {
                return $price->country_code === "OTHER";
            });
        }

        return $productPrice;
    }

    public static function getVisitorLocale()
    {
        $visitor = Tracker::currentSession();
        if (!empty($visitor->geoIp)) {
            $countryCode = $visitor->geoIp->country_code;
        } else {
            $countryCode = 'OTHER';
        }

        if (!array_key_exists($countryCode, self::KNOWN_COUNTRIES_LANG)) {
            $countryCode = 'OTHER';
        }
        $locale = self::KNOWN_COUNTRIES_LANG[$countryCode];

        return $locale;
    }

    public static function getVisitorCountryCode()
    {
        $visitor = Tracker::currentSession();
        if (!empty($visitor->geoIp)) {
            $countryCode = $visitor->geoIp->country_code;
        } else {
            $countryCode = 'OTHER';
        }
        return $countryCode;
    }

    public static function getImages($dir){
        $resultImages = [];
        $imgPath = base_path() . $dir;
        $imgFiles = File::files($imgPath);
        foreach ($imgFiles as $file) {
            $resultImages[] = $file->getRelativePathname();
        }

        return $resultImages;
    }

    public static function getVisitorDefaultLanguage($countryCode)
    {
        if (!array_key_exists($countryCode, self::KNOWN_COUNTRIES_LANG)) {
            $lang = 'en';
        } else {
            $lang = self::KNOWN_COUNTRIES_LANG[$countryCode];
        }

        return $lang;
    }

    public static function getImagesWithTitles($position, $offset, $limit){

        $code = Lang::getLocale();
        $languageParam = Language::where('code', '=', $code)->first();
        try{
             return Image::select(
                'images.path',
                'images.thumbnailPath',
                'images.order_number',
                'image_languages.title',
                'image_languages.altText'
            )->join('image_languages', 'images.id', '=', 'image_languages.image_id')
                ->where('image_languages.language_id',$languageParam->id)
                ->where('images.position',$position)->skip($offset)->take($limit)
                ->orderBy('images.order_number', 'desc')
                ->get();
        } catch ( \Exception $e) {
            Log::error('====== getImagesWithTitles ' . json_encode($e->getMessage()));
        }
    }

    public static function getBalkansCountries(): array
    {
        return ['BA', 'RS', 'ME', 'MK'];
    }

}
