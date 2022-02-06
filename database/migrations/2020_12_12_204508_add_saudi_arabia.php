<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSaudiArabia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')->insert([
            ['product_id' => 1, 'price' => 136, 'shipping' => 21, 'currency' => 'SAR', 'country_code' => 'SA', 'country_name' => 'SaudiArabia', 'region' => 'IN', 'shipping_time' => '7-8', 'old_price' => 197, 'old_price_active' => 1]
        ]);
        DB::table('countries')->insert([
            [  'currency' => 'SAR', 'code' => 'SA', 'name' => 'SaudiArabia', 'region' => 'AS', 'calling_code' => '966' , 'created_at' => date('  Y-m-d H:i:s') ]
        ]);
        DB::table('users')->insert(array('name'=>'SaudiArabia', 'email'=>'sa@barbams.com', 'password' => Hash::make('SWNyDVZqbGpqHh3r'), 'email_notification' => 0));

        DB::table('payment_types')->insert([
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'SA')->first()->id,
                'type' =>  \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash'),
                'currency' => 'SAR',
                'conversion_rate' => 1
            ],
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'SA')->first()->id,
                'type' =>  \Illuminate\Support\Facades\Config::get('constants.order.payment.type.card'),
                'currency' => 'AED',
                'conversion_rate' => 1
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
