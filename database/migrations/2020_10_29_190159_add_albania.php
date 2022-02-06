<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAlbania extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')->insert([
            ['product_id' => 1, 'price' => 2977, 'shipping' => 310, 'currency' => 'ALL', 'country_code' => 'AL', 'country_name' => 'Albania', 'region' => 'EU', 'shipping_time' => '7-8']
        ]);
        DB::table('countries')->insert([
            [  'currency' => 'ALL', 'code' => 'AL', 'name' => 'Albania', 'region' => 'EU', 'calling_code' => '355' , 'created_at' => date('  Y-m-d H:i:s') ]
        ]);
        DB::table('users')->insert(array('name'=>'Albania', 'email'=>'albania@barbams.com', 'password' => Hash::make('SWNyDVZqbGpqHh3r'), 'email_notification' => 0));

        DB::table('payment_types')->insert([
            [
                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'AL')->first()->id,
                'type' =>  \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash'),
                'currency' => 'ALL',
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
