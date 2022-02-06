<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCountriesIntoProductPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('product_prices')->insert([
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'AD', 'country_name' => 'Andorra', 'region' => 'EU', 'shipping_time' => '6-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'BE', 'country_name' => 'Belgium', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'CY', 'country_name' => 'Cyprus', 'region' => 'EU', 'shipping_time' => '5-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'EE', 'country_name' => 'Estonia', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'FI', 'country_name' => 'Finland', 'region' => 'EU', 'shipping_time' => '6-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'FR', 'country_name' => 'France', 'region' => 'EU', 'shipping_time' => '5-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'GI', 'country_name' => 'Gibraltar', 'region' => 'EU', 'shipping_time' => '6-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'GR', 'country_name' => 'Greece', 'region' => 'EU', 'shipping_time' => '6-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'IE', 'country_name' => 'Ireland', 'region' => 'EU', 'shipping_time' => '5-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'XK', 'country_name' => 'Kosovo', 'region' => 'EU', 'shipping_time' => '5-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'LV', 'country_name' => 'Latvia', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'LI', 'country_name' => 'Liechtenstein', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'LT', 'country_name' => 'Lithuania', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'LU', 'country_name' => 'Luksemburg', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'MT', 'country_name' => 'Malta', 'region' => 'EU', 'shipping_time' => '5-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'MC', 'country_name' => 'Monako', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'ME', 'country_name' => 'Montenegro', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'NL', 'country_name' => 'Netherlands', 'region' => 'EU', 'shipping_time' => '4-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'MK', 'country_name' => 'North Macedonia', 'region' => 'EU', 'shipping_time' => '5-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'NO', 'country_name' => 'Norway', 'region' => 'EU', 'shipping_time' => '5-7'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'PT', 'country_name' => 'Portugal', 'region' => 'EU', 'shipping_time' => '5-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'SM', 'country_name' => 'San Marino', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'ES', 'country_name' => 'Spain', 'region' => 'EU', 'shipping_time' => '5-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'SE', 'country_name' => 'Sweden', 'region' => 'EU', 'shipping_time' => '4-6'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 15, 'currency' => 'EUR', 'country_code' => 'CH', 'country_name' => 'Switzerland', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 20, 'currency' => 'EUR', 'country_code' => 'VA', 'country_name' => 'Vatican', 'region' => 'EU', 'shipping_time' => '3-4'],
        ]);

        $results2 = DB::table('product_prices')->select()->whereRaw('id > 18')->get();
        foreach ($results2 as $result) {
            DB::table('payment_types')->insert([
                ['product_price_id' => $result->id, 'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type.paypal'), 'currency' => 'EUR', 'conversion_rate' => 1],
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
