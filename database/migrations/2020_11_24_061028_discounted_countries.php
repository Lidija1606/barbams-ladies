<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DiscountedCountries extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')
            ->where('country_code', '=', 'HR')
            ->update(['price' => 143, 'old_price' => 199, 'old_price_active' => 1]);
        DB::table('product_prices')
            ->where('country_code', '=', 'AT')
            ->update(['price' => 19.99, 'old_price' => 26.9, 'old_price_active' => 1]);
        DB::table('product_prices')
            ->where('country_code', '=', 'DE')
            ->update(['price' => 19.99, 'old_price' => 26.9, 'old_price_active' => 1]);
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
