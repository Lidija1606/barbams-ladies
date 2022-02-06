<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class LastMinuteDiscountUpdates extends Migration
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
            ->update(['old_price_active' => 1, 'old_price' => 49.99, 'price' => 35]);

        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['old_price_active' => 1, 'old_price' => 234, 'price' => 165]);

        DB::table('product_prices')
            ->where('country_code', '=', 'BA')
            ->update(['old_price_active' => 1, 'old_price' => 46, 'price' => 39]);

        DB::table('product_prices')
            ->where('country_code', '=', 'MK')
            ->update(['old_price_active' => 1, 'old_price' => 1550, 'price' => 1250]);

        DB::table('product_prices')
            ->where('country_code', '=', 'ME')
            ->update(['old_price_active' => 1, 'old_price' => 23.9, 'price' => 19.99]);

        DB::table('product_prices')
            ->where('price', '=', '22')
            ->where('shipping', '=', '10')
            ->update(['old_price_active' => 1, 'old_price' => 36.9, 'price' => 22.5]);

        DB::table('product_prices')
            ->where('price', '=', '22')
            ->where('shipping', '=', '15')
            ->update(['old_price_active' => 1, 'old_price' => 41.9, 'price' => 22.5]);

        DB::table('product_prices')
            ->where('price', '=', '22')
            ->where('shipping', '=', '20')
            ->update(['old_price_active' => 1, 'old_price' => 46.9, 'price' => 22.5]);
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
