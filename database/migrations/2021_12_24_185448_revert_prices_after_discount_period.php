<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RevertPricesAfterDiscountPeriod extends Migration
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
            ->update(['old_price_active' => 0, 'price' => 39.99]);

        DB::table('product_prices')
            ->where('price', '=', '22.5')
            ->where('shipping', '=', '10')
            ->update(['old_price_active' => 0, 'price' => 26.9]);

        DB::table('product_prices')
            ->where('price', '=', '22.5')
            ->where('shipping', '=', '15')
            ->update(['old_price_active' => 0, 'price' => 26.9]);

        DB::table('product_prices')
            ->where('price', '=', '22.5')
            ->where('shipping', '=', '20')
            ->update(['old_price_active' => 0, 'price' => 26.9]);

        DB::table('product_prices')
            ->where('country_code', '=', 'RS')
            ->update(['old_price_active' => 0, 'price' => 2280]);

        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['old_price_active' => 0, 'price' => 199.99]);

        DB::table('product_prices')
            ->where('country_code', '=', 'BA')
            ->update(['old_price_active' => 0, 'price' => 46.9]);

        DB::table('product_prices')
            ->where('country_code', '=', 'MK')
            ->update(['old_price_active' => 0, 'price' => 1550]);

        DB::table('product_prices')
            ->where('country_code', '=', 'ME')
            ->update(['old_price_active' => 0, 'price' => 23.9]);

        DB::table('product_prices')
            ->where('country_code', '=', 'AL')
            ->update(['old_price_active' => 0, 'price' => 2977]);

        DB::table('features')
            ->where('name', '=', 'elixir_countdown')
            ->update(['is_active' => false]);

        DB::table('features')
            ->where('name', '=', 'timer')
            ->update(['is_active' => false]);

        DB::table('features')
            ->where('name', '=', '2for1')
            ->update(['is_active' => true]);
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
