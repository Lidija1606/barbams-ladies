<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;
use Tracker;

class Language
{

    const KNOWN_COUNTRIES_LANG = ['HR' => 'rs', 'BA' => 'rs', 'RS' => 'sr', 'AE' => 'ar', 'OTHER' => 'en'];

    public function handle($request, \Closure $next)
    {
//        $visitor = Tracker::currentSession();
//
//        if (!empty($visitor->geoIp)) {
//            $countryCode = $visitor->geoIp->country_code;
//        } else {
//            $countryCode = 'OTHER';
//        }
//
//        if (!array_key_exists($countryCode, self::KNOWN_COUNTRIES_LANG)) {
//            $countryCode = 'OTHER';
//        }


//        $locale = self::KNOWN_COUNTRIES_LANG[$countryCode];
//        $locale = 'en';

//        Log::error('===== LANGUAGE MIDDLEWARE ======= LOCALE ' . $locale);
//
//        Session::put('applocale', $locale);
//        Log::error('======== language middleware ======= session ' . Session::get('applocale'));
//
//        Log::error('======== language middleware ======= localization ' . json_encode(Config::get('laravellocalization')['supportedLocales']));


        if (Session::has('applocale') && array_key_exists(Session::get('applocale'), Config::get('laravellocalization')['supportedLocales'])) {

            App::setLocale(Session::get('applocale'));
//            Log::error('===== first If ========= ' . App::getLocale());
        } else { // This is optional as Laravel will automatically set the fallback language if there is none specified
//            Log::error('===== else ========= ');
            App::setLocale(Config::get('app.fallback_locale'));
        }
        return $next($request);
    }
}