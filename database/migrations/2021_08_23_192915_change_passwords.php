<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangePasswords extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')
            ->where('name', 'EU')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('mrO7ki9BgZsyuW4m')]);

        DB::table('users')
            ->where('name', 'Croatia')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('pea2mKxK09HIcgJi')]);
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
