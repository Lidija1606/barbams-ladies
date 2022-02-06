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
            ->where('price', '=', 19.99)
            ->update(['price' => 26.9, 'old_price' => null, 'old_price_active' => 0]);

        DB::table('product_prices')
            ->where('country_code', '=', 'ME')
            ->update(['price' => 23.9 , 'old_price' => null, 'old_price_active' => 0]);

        DB::table('product_prices')
            ->where('country_code', '=', 'AL')
            ->update(['price' => 2977 , 'old_price' => null, 'old_price_active' => 0]);

        DB::table('product_prices')
            ->where('country_code', '=', 'RS')
            ->update(['price' => 2250, 'old_price' => null, 'old_price_active' => 0]);

        DB::table('product_prices')
            ->where('country_code', '=', 'BA')
            ->update(['price' => 46, 'old_price' => null, 'old_price_active' => 0]);

        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['price' => 199, 'old_price' => null, 'old_price_active' => 0]);

        DB::table('product_prices')
            ->where('country_code', '=', 'MK')
            ->update(['price' => 1550 , 'old_price' => null, 'old_price_active' => 0]);


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
