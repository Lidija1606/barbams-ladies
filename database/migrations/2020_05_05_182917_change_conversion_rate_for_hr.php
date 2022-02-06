<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeConversionRateForHr extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $hrPP = DB::table('product_prices')->select()->where('country_code', '=' , 'HR')->get();
        foreach ($hrPP as $hrP) {
            DB::table('payment_types')
                ->where('product_price_id', '=', $hrP->id)
                ->update(['conversion_rate' => 0.1315]);
        }

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
