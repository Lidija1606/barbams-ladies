<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameColumnFeatureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('features', function(Blueprint $table) {
            $table->renameColumn('excluded_regions', 'excluded_countries');
        });

        DB::table('features')
            ->where('name', '=', '2for1')
            ->update(['excluded_countries' => 'AE,IN,SA,AL,MK']);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('features', function(Blueprint $table) {
            $table->renameColumn('excluded_countries', 'excluded_regions');
        });
    }
}
