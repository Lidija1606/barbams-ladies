<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Eid2021 extends Migration
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
            ->update(['price' => 116 , 'old_price' => 157, 'shipping' => 0, 'special_price_active' => 0]);
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
            ->update(['price' => 116 , 'old_price' => 157, 'shipping' => 21, 'special_price_active' => 1]);
    }
}
