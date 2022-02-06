<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_types', function (Blueprint $table) {
            $table->increments('id');
                $table->unsignedInteger('product_price_id');
                $table->foreign('product_price_id')->references('id')->on('product_prices');
            $table->enum('type', \Illuminate\Support\Facades\Config::get('constants.order.payment.type'))->default('CASH');
            $table->timestamps();
        });


//        DB::table('payment_types')->insert([
//            ['product_price_id' => 1, 'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash')],
//            ['product_price_id' => 2, 'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash')],
//            ['product_price_id' => 3, 'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash')],
//            ['product_price_id' => 4, 'type' => \Illuminate\Support\Facades\Config::get('constants.order.payment.type.cash')]
//        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_types');
    }
}
