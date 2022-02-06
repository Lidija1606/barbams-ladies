<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddServicesIntoShippingServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('shipping_services')->insert(
            ['name' => 'GLS-GROUP', 'trackingUrl'=> 'https://gls-group.eu/HR/en/parcel-tracking', 'country_id' => 2]
            );

        $results = DB::table('countries')->select()->get();

        foreach ($results as $result) {

            if(!in_array($result->code, ['HR', 'AE'])){
                DB::table('shipping_services')->insert([
                    'name' => 'GLS-GROUP',
                    'trackingUrl'=> 'https://gls-group.eu',
                    'country_id' => $result->id
                ]);
            }

        }
        DB::table('shipping_services')->insert(
            ['name' => 'FETCHR', 'trackingUrl'=> 'https://track.fetchr.us/', 'country_id' => 4 ]
        );
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
