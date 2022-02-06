<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatePasswords extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')
            ->where('name', 'Srbija')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('hea2HKXK07HIcgBi')]);
 DB::table('users')
            ->where('name', 'Croatia')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('fCssCgqGb8XGJh48')]);
 DB::table('users')
            ->where('name', 'BIH')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('mrO3ki6BgZsyuW4m')]);
DB::table('users')
            ->where('name', 'GCC')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('SDLJeRJzIsJJex4p')]);
DB::table('users')
            ->where('name', 'EU')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('L5EVfBmQZiJEq1Wp')]);
DB::table('users')
            ->where('name', 'Montenegro')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('hiTFvpR9xzmuHZHB')]);
DB::table('users')
            ->where('name', 'Macedonia')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('EPUyZ0TyHWHBhgHo')]);

DB::table('users')
            ->where('name', 'UAE')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('QfGtWxqk2CThoexC')]);

DB::table('users')
            ->where('name', 'Albania')
            ->update(['password' => \Illuminate\Support\Facades\Hash::make('XbMIJ365UjwnFse1')]);

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
