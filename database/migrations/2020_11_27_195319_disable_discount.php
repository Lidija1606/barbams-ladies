<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DisableDiscount extends Migration
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
            ->update(['price' => 199, 'old_price' => null, 'old_price_active' => 0]);
        DB::table('product_prices')
            ->where('country_code', '=', 'AT')
            ->update(['price' => 26.9, 'old_price' => null, 'old_price_active' => 0]);
        DB::table('product_prices')
            ->where('country_code', '=', 'DE')
            ->update(['price' => 26.9, 'old_price' => null, 'old_price_active' => 0]);
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
