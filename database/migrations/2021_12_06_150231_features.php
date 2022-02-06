<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Features extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('features', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('value');
            $table->string('excluded_regions');
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
        DB::table('features')->insert([
            [
                'name' => 'elixir_countdown',
                'value' => '300',
                'excluded_regions' => 'AS',
                'is_active' => false,
                'created_at' => date('  Y-m-d H:i:s')
            ],
            [
                'name' => 'timer',
                'value' => '25-12-2021',
                'excluded_regions' => 'AS',
                'is_active' => false,
                'created_at' => date('  Y-m-d H:i:s')
            ]
        ]);
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
