<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Promotion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')
            ->where('country_code', '=', 'CH')
            ->update(['old_price_active' => 1, 'old_price' => 49.99, 'price' => 30 ]);


        DB::table('product_prices')
            ->where('price', '=', '26.9')
            ->where('shipping', '=', '10')
            ->update(['old_price_active' => 1, 'old_price' => 36.9, 'price' => 20.25]);

        DB::table('product_prices')
            ->where('price', '=', '26.9')
            ->where('shipping', '=', '15')
            ->update(['old_price_active' => 1, 'old_price' => 41.9, 'price' => 20.25]);

        DB::table('product_prices')
            ->where('price', '=', '26.9')
            ->where('shipping', '=', '20')
            ->update(['old_price_active' => 1, 'old_price' => 46.9, 'price' => 20.25]);

        DB::table('product_prices')
            ->where('country_code', '=', 'RS')
            ->update(['old_price_active' => 1, 'old_price' => 2280, 'price' => 1710]);

        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['old_price_active' => 1, 'old_price' => 199.99, 'price' => 149 ]);

        DB::table('product_prices')
            ->where('country_code', '=', 'BA')
            ->update(['old_price_active' => 1, 'old_price' => 46.9, 'price' => 38]);

        DB::table('product_prices')
            ->where('country_code', '=', 'MK')
            ->update(['old_price_active' => 1, 'old_price' => 1550, 'price' => 1150]);

        DB::table('product_prices')
            ->where('country_code', '=', 'ME')
            ->update(['old_price_active' => 0, 'old_price' => 23.9 , 'price' => 17.99]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
