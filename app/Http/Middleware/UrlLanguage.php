<?php

namespace App\Http\Middleware;

use App\Helpers\Helper;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use View;

class UrlLanguage
{
    public function handle($request, \Closure $next)
    {
        $setLocale = Session::get('setLocale');
//        if ($setLocale) {
//            Log::error('======== url language ======== has ' . $setLocale);
//        } else {
//            Log::error('======== url language ======== donesnt has ' . $setLocale);
//        }

        $urlSegments = explode('/', $request->path());


        if (!$setLocale) {
            $locale = Helper::getVisitorLocale();
        } else {
            $locale = $urlSegments[0];
        }

        View::share('language', $locale); // All views will have $language variable now

        App::setLocale($locale); // Laravel locale is set to $language now
        Cookie::queue(Cookie::make('siteLanguage', $locale, 10800 * 7)); // We can also set a cookie, so that language is remembered

        return $next($request);
    }
}