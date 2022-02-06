<?php

use Illuminate\Database\Seeder;

class ProductPricesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = DB::select('select * from products');

        DB::table('product_prices')->insert([
            'product_id' => $products[0]->id,
            'country_code' => 'RS',
            'country_name' => 'Serbia',
            'region' => 'EU',
            'price' => 2250,
            'shipping' => 250,
            'currency' => 'RSD'
        ]);
        DB::table('product_prices')->insert([
            'product_id' => $products[0]->id,
            'country_code' => 'HR',
            'country_name' => 'Croatia',
            'region' => 'EU',
            'price' => 199,
            'shipping' => 39,
            'currency' => 'KN'
        ]);
        DB::table('product_prices')->insert([
            'product_id' => $products[0]->id,
            'country_code' => 'BA',
            'country_name' => 'Bosnia and Herzegovina',
            'region' => 'EU',
            'price' => 49,
            'shipping' => 8,
            'currency' => 'KM'
        ]);
    }
}
