<?php

namespace App\Http;

use App\Http\Middleware\UrlLanguage;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Tymon\JWTAuth\Middleware\GetUserFromToken;
use Tymon\JWTAuth\Middleware\RefreshToken;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \App\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        \App\Http\Middleware\TrustProxies::class,

    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,

            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \PragmaRX\Tracker\Vendor\Laravel\Middlewares\Tracker::class,
            \App\Http\Middleware\Language::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],

        'pagespeed' => [
            \RenatoMarinho\LaravelPageSpeed\Middleware\InlineCss::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\ElideAttributes::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\InsertDNSPrefetch::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\RemoveComments::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\TrimUrls::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\RemoveQuotes::class,
            \RenatoMarinho\LaravelPageSpeed\Middleware\CollapseWhitespace::class,
        ]
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'jwt-auth' => \App\Http\Middleware\JwtMiddleware::class,
        'jwt.auth' => GetUserFromToken::class,
        'jwt.refresh' => RefreshToken::class,
        'localize' => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRoutes::class,
        'localizationRedirect' => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationRedirectFilter::class,
        'localeSessionRedirect' => \Mcamara\LaravelLocalization\Middleware\LocaleSessionRedirect::class,
        'localeViewPath' => \Mcamara\LaravelLocalization\Middleware\LaravelLocalizationViewPath::class,
        'urlLanguage' => UrlLanguage::class
    ];

    /**
     * The priority-sorted list of middleware.
     *
     * This forces non-global middleware to always be in the given order.
     *
     * @var array
     */
    protected $middlewarePriority = [
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\Authenticate::class,
        \Illuminate\Session\Middleware\AuthenticateSession::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        \Illuminate\Auth\Middleware\Authorize::class,
    ];
}
