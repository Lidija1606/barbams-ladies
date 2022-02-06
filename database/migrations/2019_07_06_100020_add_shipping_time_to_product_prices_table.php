<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShippingTimeToProductPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_prices', function (Blueprint $table) {
            $table->string('country_code', 10)->change();
            $table->string('shipping_time')->default(4 - 6);
        });

        DB::table('product_prices')->insert([
            ['product_id' => 1, 'price' => 136, 'shipping' => 21, 'currency' => 'AED', 'country_code' => 'AE', 'country_name' => 'United Arab Emirates', 'region' => 'AS']
        ]);


        $results = DB::table('product_prices')->select()->get();

        foreach ($results as $result) {

            DB::table('product_prices')
                ->where('id', $result->id)
                ->update(['shipping_time' => '2-3']);
        }

        DB::table('product_prices')->insert([
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'SI', 'country_name' => 'Slovenia', 'region' => 'EU', 'shipping_time' => '1-2'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'HU', 'country_name' => 'Hungary', 'region' => 'EU', 'shipping_time' => '1-2'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'SK', 'country_name' => 'Slovakia', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'AT', 'country_name' => 'Austria', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'CZ', 'country_name' => 'The Czech Republic', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'RO', 'country_name' => 'Romania', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'IT', 'country_name' => 'Italy', 'region' => 'EU', 'shipping_time' => '3-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'BG', 'country_name' => 'Bulgaria', 'region' => 'EU', 'shipping_time' => '3-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'DK', 'country_name' => 'Denmark', 'region' => 'EU', 'shipping_time' => '3-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'GB', 'country_name' => 'Great Britain', 'region' => 'EU', 'shipping_time' => '3-5'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'PL', 'country_name' => 'Poland', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'DE', 'country_name' => 'Germany', 'region' => 'EU', 'shipping_time' => '3-4'],
            ['product_id' => 1, 'price' => 26, 'shipping' => 10, 'currency' => 'EUR', 'country_code' => 'OTHER', 'country_name' => 'EU GENERAL', 'region' => 'EU', 'shipping_time' => '3-4'],
        ]);


        $results2 = DB::table('product_prices')->select()->get();
        foreach ($results2 as $result) {
            DB::table('payment_types')->insert([
                ['product_price_id' => $result->id, 'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash')]
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
        Schema::table('product_prices', function (Blueprint $table) {
            //
        });
    }
}
