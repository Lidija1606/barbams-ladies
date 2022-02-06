<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLanguagesToLanguagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('languages', function (Blueprint $table) {
            DB::table('languages')->insert([
                [
                    'name' => 'Srpski',
                    'code' => 'rs',
                    'created_at' => date('  Y-m-d H:i:s')
                ],
                [   'name' => 'English',
                    'code' => 'en',
                    'created_at' => date('  Y-m-d H:i:s')
                ],
                [   'name' => 'العربية',
                    'code' => 'ae',
                    'created_at' => date('  Y-m-d H:i:s')
                ]
                ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('languages', function (Blueprint $table) {
            //
        });
    }
}
