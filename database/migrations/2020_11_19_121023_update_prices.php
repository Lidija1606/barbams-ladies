<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatePrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')
            ->where('price', '=', 26.9)
            ->update(['price' => 19.99, 'old_price' => 26.9, 'old_price_active' => 1]);

        DB::table('product_prices')
            ->where('country_code', '=', 'RS')
            ->update(['price' => 1680, 'old_price' => 2250, 'old_price_active' => 1]);

        DB::table('product_prices')
            ->where('country_code', '=', 'BA')
            ->update(['price' => 36, 'old_price' => 46, 'old_price_active' => 1]);

        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['price' => 143, 'old_price' => 199, 'old_price_active' => 1]);

        DB::table('product_prices')
            ->where('country_code', '=', 'MK')
            ->update(['price' => 1070 , 'old_price' => 1550, 'old_price_active' => 1]);

        DB::table('product_prices')
            ->where('country_code', '=', 'ME')
            ->update(['price' => 18 , 'old_price' => 23.9, 'old_price_active' => 1]);

        DB::table('product_prices')
            ->where('country_code', '=', 'AL')
            ->update(['price' => 2100 , 'old_price' => 2977, 'old_price_active' => 1]);
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
