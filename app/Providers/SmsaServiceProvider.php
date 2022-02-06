<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Helpers\ShippingProviders\Smsa as SmsaClient;

class SmsaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('Smsa',
            function ($app) {
                return new SmsaClient();
        });

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if(!file_exists(config_path('smsa.php'))){
            $this->publishes([
                __DIR__.'/../config/smsa.php' => config_path('smsa.php')
            ]);

            $this->publishes([
                __DIR__.'/../public' => public_path(''),
            ]);
        }
    }
}
