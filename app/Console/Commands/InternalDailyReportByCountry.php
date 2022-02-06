<?php
namespace App\Console\Commands;

use App\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

abstract class InternalDailyReportByCountry extends Command
{
    public function getNumberOfOrdersForYesterday(string $countryCode): int
    {
        $allOrders = Order::with(['paymentTypes', 'paymentTypes.productPrice'])
            ->select('orders.*'
            )->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')
            ->whereDate('orders.created_at', Carbon::yesterday()->toDateString())
            ->where('product_prices.country_code', $countryCode)
            ->get();
        $myCollection = collect($allOrders);

        $uniqueCollection = $myCollection->unique(function ($item) {
            return $item['email'];
        });

        $numberOfOrders = 0;
        foreach ($uniqueCollection->all() as $order) {
            $numberOfOrders += $order['quantity'];
        }

        return $numberOfOrders;
    }
}
