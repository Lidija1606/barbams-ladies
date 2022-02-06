<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PriceUpdateForEu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        $euPP = DB::table('product_prices')->select()->where('country_code', '!=' , 'ME')->where('currency','=', 'EUR')->get();

        foreach ($euPP as $euP){
            DB::table('product_prices')
                ->where('id', '=', $euP->id)
                ->update(['price' => 26.9]);
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
