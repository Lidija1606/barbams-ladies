<?php

namespace App\Console\Commands;

use App\Helpers\Helper;
use App\Notifications\PostOrder40DaysReminder;
use App\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class getClientFeedback extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:getUserFeedback';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ask user for feedback';

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
        $dayToCheck = Carbon::today()->subDays(40)->toDateString();
        $orders = Order::with(['paymentTypes', 'paymentTypes.productPrice'])
            ->select(
                'orders.*',
                'product_prices.country_code'
            )->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')->whereDate('orders.created_at', $dayToCheck)->get();

        foreach ($orders as $order){
            if(!in_array($order->country_code, Helper::getBalkansCountries())){
                $order->notify(
                    (new PostOrder40DaysReminder($order))->locale('en')
                );
            }else{
                $order->notify(
                    (new PostOrder40DaysReminder($order))->locale('sr')
                );
            }
        }

        $this->info('get user feedback sent to All Users');

    }
}
