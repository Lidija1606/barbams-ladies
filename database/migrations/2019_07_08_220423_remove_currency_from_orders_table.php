<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveCurrencyFromOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('currency');
            $table->string('payment_provider_payment_id', 200)->nullable();
            $table->string('payment_provider_payer_id', 200)->nullable();
            $table->float('sub_total');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('currency');
            $table->dropColumn('payment_provider_payment_id');
            $table->dropColumn('payment_provider_payer_id');
            $table->dropColumn('sub_total');
        });
    }
}
