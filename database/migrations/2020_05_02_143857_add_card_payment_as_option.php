<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCardPaymentAsOption extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $countries = DB::table('product_prices')->select()->where('country_name', '!=' , 'EU GENERAL')->where('country_name', '!=' , 'MONTENEGRO')->where('currency', 'LIKE' , 'EUR')->get();

        foreach ( $countries as $country_price) {
            DB::table('payment_types')->insert([
                [
                    'product_price_id' => $country_price->id,
                    'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['card'],
                    'currency' => 'EUR',
                    'conversion_rate' => 1,
                    'isActive' => 1
                ],
            ]);
        }
        DB::table('payment_types')->insert([
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'HR')->first()->id,
                'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['card'],
                'currency' => 'EUR',
                'conversion_rate' => 0.14,
                'isActive' => 1
            ]
        ]);

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
