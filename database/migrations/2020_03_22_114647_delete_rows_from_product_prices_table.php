<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\ProductPrice;

use Illuminate\Support\Facades\Log;


class DeleteRowsFromProductPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_prices', function (Blueprint $table) {

            $rows2delete = DB::table('product_prices')->select()
                ->where('country_name', 'LIKE', 'Switzerland')
                ->orWhere('country_name', 'LIKE', 'Kosovo')->get();
            foreach ($rows2delete as $result) {
                $product_prices = ProductPrice::find($result->id);
                $product_prices->paymentTypes()->delete();
                $product_prices->delete();
            }
        });
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
