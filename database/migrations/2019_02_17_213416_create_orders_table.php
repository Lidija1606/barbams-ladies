<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');

            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone_number');
            $table->string('email');
            $table->string('address');
            $table->string('city');
            $table->string('zip');
            $table->string('note')->nullable();
            $table->float('total')->default(0);
            $table->enum('status', \Illuminate\Support\Facades\Config::get('constants.order.status'))->default('ordered');
            $table->enum('currency', \Illuminate\Support\Facades\Config::get('constants.order.currency'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
