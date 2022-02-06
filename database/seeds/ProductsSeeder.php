<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('products')->insert([
            'name' => 'Elixir',
            'code' => 'ELX',
            'img' => '/img/elixir/image1.png'
        ]);
    }
}
