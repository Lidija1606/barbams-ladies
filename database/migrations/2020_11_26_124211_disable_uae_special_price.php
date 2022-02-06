<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DisableUaeSpecialPrice extends Migration
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
            ->update(['special_price_active' => 0, 'old_price' => 137, 'shipping' => 15, 'price' => 94.99]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('product_prices')
            ->where('country_code', '=', 'AE')
            ->update(['special_price_active' => 1, 'old_price' => 157, 'shipping' => 15, 'price' => 117]);
    }
}
