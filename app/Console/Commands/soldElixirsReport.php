<?php

namespace App\Console\Commands;

use App\Helpers\Helper as Helper;
use App\Notifications\PostOrder40DaysReminder;
use App\Notifications\SumOrdersNotification;
use App\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class soldElixirsReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:soldElixirsReport';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send daily countries orders to admins';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(){
        $userstoNotify = ["peter@381marketing.com", "tmrastojanovic@gmail.com"];
        $balkansOrders = $this->getOrders(array_merge(Helper::getBalkansCountries(), ["HR"]), "in");
        $otherCountries = $this->getOrders(array_merge(Helper::getBalkansCountries(), ["HR", "AE", "SA", "IN"]), "not_in");
        foreach ($userstoNotify as $userToNotify){
            if(!empty($balkansOrders)) Notification::route('mail', $userToNotify )->notify(new SumOrdersNotification($balkansOrders, 'Balkan'));
            if(!empty($otherCountries)) Notification::route('mail', $userToNotify )->notify(new SumOrdersNotification($otherCountries, 'Rest Of The World'));
        }
    }

    private function getOrders(Array $countries, String $condition){

        $allOrders = Order::with(['paymentTypes', 'paymentTypes.productPrice']);
        $allOrders->select(DB::raw('product_prices.country_name, orders.email, orders.quantity'))->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')
            ->whereDate('orders.created_at', Carbon::yesterday()->toDateString())
            ->where('orders.status', 'PAID');
            if($condition == 'in'){
                $allOrders->whereIn('product_prices.country_code', $countries);
            }else{
                $allOrders->whereNotIn('product_prices.country_code', $countries);
            }
        $orders = $allOrders->get();
        $myCollection = collect($orders);

        $uniqueCollection = $myCollection->unique(function ($item) {
            return $item['email'];
        });


        $orders = [];
        foreach ($uniqueCollection->all() as $order) {
            if( ! isset($orders[$order['country_name']]) )
            {
                $orders[$order['country_name']] = $order->quantity;
            }else{
                $orders[$order['country_name']] += $order->quantity;;
            }
        }
        return $orders;
    }

}
