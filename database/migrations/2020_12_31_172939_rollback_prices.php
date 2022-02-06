<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RollbackPrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        DB::table('product_prices')
            ->where('country_code', '=', 'SA')
            ->update(['old_price' => 157, 'price' => 136]);

        DB::table('product_prices')
            ->where('country_code', '=', 'CH')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 39.99]);


        DB::table('product_prices')
            ->where('price', '=', '22')
            ->where('shipping', '=', '10')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 26.9]);

        DB::table('product_prices')
            ->where('price', '=', '22')
            ->where('shipping', '=', '15')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 26.9]);

        DB::table('product_prices')
            ->where('price', '=', '22')
            ->where('shipping', '=', '20')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 26.9]);

        DB::table('product_prices')
            ->where('country_code', '=', 'RS')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 2250]);

        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 199]);

        DB::table('product_prices')
            ->where('country_code', '=', 'BA')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 46]);

        DB::table('product_prices')
            ->where('country_code', '=', 'MK')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 1550]);

        DB::table('product_prices')
            ->where('country_code', '=', 'ME')
            ->update(['old_price_active' => 0, 'old_price' => null , 'price' => 23.9]);

        DB::table('product_prices')
            ->where('country_code', '=', 'AL')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 2977]);
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
