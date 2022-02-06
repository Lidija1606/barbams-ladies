<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UaePriceUpdate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')
            ->where('country_code', '=', 'AE')
            ->update(['special_price_active' => 0, 'old_price' => 137, 'shipping' => 0, 'price' => 110, 'promo_code_active' => 0]);

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
