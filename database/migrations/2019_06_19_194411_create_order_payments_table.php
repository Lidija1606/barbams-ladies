<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_payments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('payment_id', 500);
            $table->unsignedInteger('order_id');

            $table->enum('status', \Illuminate\Support\Facades\Config::get('constants.order.payment.status'))->default('CREATED');
            $table->enum('type', \Illuminate\Support\Facades\Config::get('constants.order.payment.type'))->default('PAYPAL');
            $table->timestamps();
        });
        Schema::table('order_payments', function (Blueprint $table) {
            $table->foreign('order_id')->references('id')->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_payments');
    }
}
