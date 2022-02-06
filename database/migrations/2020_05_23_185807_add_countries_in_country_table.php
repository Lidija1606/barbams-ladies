<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCountriesInCountryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('countries')->insert([
            [  'currency' => 'RSD', 'code' => 'RS', 'name' => 'Serbia', 'region' => 'EU', 'calling_code' => '381' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'KN', 'code' => 'HR', 'name' => 'Croatia', 'region' => 'EU', 'calling_code' => '385' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'KM', 'code' => 'BA', 'name' => 'Bosnia and Herzegovina', 'region' => 'EU', 'calling_code' => '387' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'AED', 'code' => 'AE', 'name' => 'United Arab Emirates', 'region' => 'AS', 'calling_code' => '971' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'SI', 'name' => 'Slovenia', 'region' => 'EU', 'calling_code' => '386' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'HU', 'name' => 'Hungary', 'region' => 'EU', 'calling_code' => '36' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'SK', 'name' => 'Slovakia', 'region' => 'EU', 'calling_code' => '421' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'AT', 'name' => 'Austria', 'region' => 'EU', 'calling_code' => '43' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'CZ', 'name' => 'The Czech Republic', 'region' => 'EU', 'calling_code' => '420' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'RO', 'name' => 'Romania', 'region' => 'EU', 'calling_code' => '40' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'IT', 'name' => 'Italy', 'region' => 'EU', 'calling_code' => '39' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'BG', 'name' => 'Bulgaria', 'region' => 'EU', 'calling_code' => '359' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'DK', 'name' => 'Denmark', 'region' => 'EU', 'calling_code' => '45' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'GB', 'name' => 'Great Britain', 'region' => 'EU', 'calling_code' => '44' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'PL', 'name' => 'Poland', 'region' => 'EU', 'calling_code' => '48' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'DE', 'name' => 'Germany', 'region' => 'EU', 'calling_code' => '49' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'EUR', 'code' => 'OTHER', 'name' => 'EU GENERAL', 'region' => 'EU', 'calling_code' => null , 'created_at' => date('  Y-m-d H:i:s')  ],
            [ 'currency' => 'AED', 'code' => 'IN', 'name' => 'India', 'region' => 'AS', 'calling_code' => '91' , 'created_at' => date('  Y-m-d H:i:s')  ],

            [  'currency' => 'EUR', 'code' => 'AD', 'name' => 'Andorra', 'region' => 'EU', 'calling_code' => '376' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'BE', 'name' => 'Belgium', 'region' => 'EU', 'calling_code' => '32' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'CY', 'name' => 'Cyprus', 'region' => 'EU', 'calling_code' => '357' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'EE', 'name' => 'Estonia', 'region' => 'EU', 'calling_code' => '372' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'FI', 'name' => 'Finland', 'region' => 'EU', 'calling_code' => '358' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'FR', 'name' => 'France', 'region' => 'EU', 'calling_code' => '33' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'GI', 'name' => 'Gibraltar', 'region' => 'EU', 'calling_code' => '350' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'GR', 'name' => 'Greece', 'region' => 'EU', 'calling_code' => '30' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'IE', 'name' => 'Ireland', 'region' => 'EU', 'calling_code' => '353' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'LV', 'name' => 'Latvia', 'region' => 'EU', 'calling_code' => '371' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'LI', 'name' => 'Liechtenstein', 'region' => 'EU', 'calling_code' => '423' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'LT', 'name' => 'Lithuania', 'region' => 'EU', 'calling_code' => '370' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'LU', 'name' => 'Luxemburg', 'region' => 'EU', 'calling_code' => '352' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'MT', 'name' => 'Malta', 'region' => 'EU', 'calling_code' => '356' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'MC', 'name' => 'Monaco', 'region' => 'EU', 'calling_code' => '377' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'ME', 'name' => 'Montenegro', 'region' => 'EU', 'calling_code' => '382' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'NL', 'name' => 'Netherlands', 'region' => 'EU', 'calling_code' => '31' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'MK', 'name' => 'North Macedonia', 'region' => 'EU', 'calling_code' => '389' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'NO', 'name' => 'Norway', 'region' => 'EU', 'calling_code' => '47' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'PT', 'name' => 'Portugal', 'region' => 'EU', 'calling_code' => '351' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'SM', 'name' => 'San Marino', 'region' => 'EU', 'calling_code' => '378' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'ES', 'name' => 'Spain', 'region' => 'EU', 'calling_code' => '34' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'SE', 'name' => 'Sweden', 'region' => 'EU', 'calling_code' => '46' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'VA', 'name' => 'Vatican', 'region' => 'EU', 'calling_code' => '379' , 'created_at' => date('  Y-m-d H:i:s')  ],
            [  'currency' => 'EUR', 'code' => 'CH', 'name' => 'Switzerland', 'region' => 'EU', 'calling_code' => '41' , 'created_at' => date('  Y-m-d H:i:s')  ],

        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('country', function (Blueprint $table) {
            //
        });
    }
}
