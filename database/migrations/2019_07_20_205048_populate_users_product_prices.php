<?php

use Illuminate\Database\Migrations\Migration;

class PopulateUsersProductPrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        DB::table('users')->insert([
            [
                'name' => 'Srbija',
                'email' => 'srbija@barbams.com',
                'password' => \Illuminate\Support\Facades\Hash::make('HhwHJKVc5y5IahDS')
            ],
            [
                'name' => 'Croatia',
                'email' => 'croatia@barbams.com',
                'password' => \Illuminate\Support\Facades\Hash::make('LHXNbvQbMLicPT1R')
            ],
            [
                'name' => 'BIH',
                'email' => 'bih@barbams.com',
                'password' => \Illuminate\Support\Facades\Hash::make('yqk6OZqgRmoCFRG2')
            ],
            [
                'name' => 'GCC',
                'email' => 'gcc@barbams.com',
                'password' => \Illuminate\Support\Facades\Hash::make('0Ob5Ty42te5MzA1P')
            ],
            [
                'name' => 'EU',
                'email' => 'eu@barbams.com',
                'password' => \Illuminate\Support\Facades\Hash::make('14QGnDbBcwl629FU')
            ]
        ]);

        $srbija = DB::table('users')->where('email', 'srbija@barbams.com')->first();

        $srbijaPP = DB::table('product_prices')->where('country_code', 'RS')->first();

        $croatia = DB::table('users')->where('email', 'croatia@barbams.com')->first();
        $croatiaPP = DB::table('product_prices')->where('country_code', 'HR')->first();

        $bih = DB::table('users')->where('email', 'bih@barbams.com')->first();
        $bihPP = DB::table('product_prices')->where('country_code', 'BA')->first();

        $gcc = DB::table('users')->where('email', 'gcc@barbams.com')->first();
        $gccPP = DB::table('product_prices')->where('country_code', 'AE')->first();


        $eu = DB::table('users')->where('email', 'eu@barbams.com')->first();
        $euPP = DB::table('product_prices')->where('currency', 'EUR')->get();

        DB::table('users_product_prices')->insert([
            [
                'user_id' => $srbija->id,
                'product_price_id' => $srbijaPP->id
            ],
            [
                'user_id' => $croatia->id,
                'product_price_id' => $croatiaPP->id
            ],
            [
                'user_id' => $bih->id,
                'product_price_id' => $bihPP->id
            ],
            [
                'user_id' => $gcc->id,
                'product_price_id' => $gccPP->id
            ]
        ]);

        foreach ($euPP as $euP) {
            DB::table('users_product_prices')->insert([
                [
                    'user_id' => $eu->id,
                    'product_price_id' => $euP->id
                ]
            ]);
        }
//        DB::table('users_product_prices')->insert([
//            [
//                'user_id' => DB::table('product_prices')->select('id')->where('country_code', 'HR')->first()->id,
//                'product_price_id' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal']
//            ],
//            [
//                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'AE')->first()->id,
//                'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal'],
//                'currency' => 'USD',
//                'conversion_rate' => 0.27
//            ],
//            [
//                'product_price_id' => DB::table('product_prices')->select('id')->where('country_code', 'IN')->first()->id,
//                'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type')['paypal'],
//                'currency' => 'USD',
//                'conversion_rate' => 0.27
//            ]
//        ]);
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
