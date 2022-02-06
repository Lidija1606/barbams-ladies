<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Config;

class AddCardPaymentForCroatia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('product_prices') && Schema::hasTable('payment_types')) {
            $productPriceId = DB::table('product_prices')->where('country_code', 'LIKE', 'HR')->first()->id;

            DB::table('payment_types')->insert([
                'product_price_id' => $productPriceId,
                'type' => Config::get('constants.order.payment.type')['cash'],
            ]);
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
