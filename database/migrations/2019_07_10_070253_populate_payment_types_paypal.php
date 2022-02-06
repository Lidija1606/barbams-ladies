<?php

use Illuminate\Database\Migrations\Migration;

class PopulatePaymentTypesPaypal extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        $results2 = DB::table('product_prices')->select()->get();

        $eurPrices = DB::table('product_prices')->select()->where('currency', 'EUR')->get();

        foreach ($eurPrices as $eu) {
            DB::table('payment_types')->insert([
                [
                    'product_price_id' => $eu->id,
                    'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal'],
                    'currency' => 'EUR',
                    'conversion_rate' => 1
                ],
            ]);
        }

        DB::table('payment_types')->insert([
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'HR')->first()->id,
                'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal'],
                'currency' => 'EUR',
                'conversion_rate' => 0.14
            ],
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'AE')->first()->id,
                'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal'],
                'currency' => 'USD',
                'conversion_rate' => 0.27
            ],
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'IN')->first()->id,
                'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal'],
                'currency' => 'USD',
                'conversion_rate' => 0.27
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
