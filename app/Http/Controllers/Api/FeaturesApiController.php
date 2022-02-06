<?php

namespace App\Http\Controllers\Api;

use App\Country;
use App\Feature;
use App\Http\Controllers\Controller;
use App\Notifications\OrderShipped;
use App\Notifications\NotificationOnSendTrackingId;
use App\Order;
use App\PaymentType;
use App\ProductPrice;
use App\Shipping;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Helpers\Helper;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tracker;
use Tymon\JWTAuth\Facades\JWTAuth;

class FeaturesApiController extends Controller
{
    public function setDate($date)
    {
        $featureTimer =  Feature::where('name', 'timer')->first();
        $featureTimer->value = $date;
        $featureTimer->is_active = true;
        $featureTimer->save();

        return response()->json(['success' => true, 'data' =>  $featureTimer->value]);
    }

    public function setCounter($number)
    {
        $featureTimer =  Feature::where('name', 'elixir_countdown')->first();
        $featureTimer->value = $number;
        $featureTimer->is_active = true;
        $featureTimer->save();

        return response()->json(['success' => true, 'data' =>  $featureTimer->value]);
    }

}
