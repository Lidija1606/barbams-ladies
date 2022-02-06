<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CountriesApiController extends Controller
{


    public function get(Request $request)
    {
        $country_code = $request->get('country_code');

        $criteria = [];

//        if ($country_code) {
//            $criteria['country_code']
//        } else {
//            Log::error('======== get ========== jeste ' . $country_code);
//        }

        $query = DB::table('tracker_geoip')
            ->select(['country_code', 'country_name', 'region']);

        if ($country_code && $country_code != self::ALL_COUNTRIES) {
            $query->where('country_code', '=', $country_code);
        }

        $countries = $query->where('country_code', '!=', 'null')
            ->groupBy(['country_code', 'country_name', 'region'])
            ->get();

//        $orders = Order::with(['paymentTypes', 'paymentTypes.productPrice'])->get();
//        Log::error('====== orders get ====== ' . json_encode($orders));

        return response()->json(['success' => true, 'data' => $countries]);
    }


    protected function receiveJSON(bool $assoc = false, bool $strip_tags = true)
    {
        $json = file_get_contents('php://input');
        if ($strip_tags) {
            $json = strip_tags($json, '<br><p><h1><h2><h3><h4><h5><h6><span>');
        }
        return json_decode($json, $assoc);
    }
}