<?php

namespace App\Console\Commands;

use App\Notifications\UaeWeeklyOrdersNotification;
use App\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;

class getWeeklyUaeReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:getWeeklyUaeReport';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send weekly uae orders report to admins';

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
    public function handle()
    {
        $date = \Carbon\Carbon::today()->subDays(7);
        $allOrders = Order::with(['paymentTypes', 'paymentTypes.productPrice'])
            ->select('orders.*'
            )->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')
            ->whereDate('orders.created_at', '>=',$date)
            ->where('product_prices.country_code', 'AE')
            ->get();

        $myCollection = collect($allOrders);

        $uniqueCollection = $myCollection->unique(function ($item) {
            return $item['email'];
        });

        $orders = 0;
        foreach ($uniqueCollection->all() as $order) {
            $orders += $order['quantity'];

        }

        Notification::route('mail', 'milutinbr@gmail.com')->notify(new UaeWeeklyOrdersNotification($orders));
        Notification::route('mail', 'peter@381marketing.com')->notify(new UaeWeeklyOrdersNotification($orders));
        Notification::route('mail', 'tmrastojanovic@gmail.com')->notify(new UaeWeeklyOrdersNotification($orders));

    }

}
