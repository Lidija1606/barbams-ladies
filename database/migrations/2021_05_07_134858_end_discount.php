<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EndDiscount extends Migration
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
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 39.99]);

        DB::table('product_prices')
            ->where('price', '=', '23')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 26.9]);


        DB::table('product_prices')
            ->where('country_code', '=', 'RS')
            ->update(['old_price_active' => 0, 'old_price' => null, 'price' => 2260]);

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
