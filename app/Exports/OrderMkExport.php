<?php

namespace App\Exports;

use App\Order;
use Illuminate\Support\Carbon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;




class OrderMkExport implements FromQuery, WithHeadings, WithMapping
{
    use Exportable;

    public function collection()
    {
        return Order::all();
    }

    public function map($order): array
    {
        return [
            $order->id,
            $order->first_name,
            $order->last_name,
            $order->phone_number,
            $order->email,
            $order->address,
            $order->city,
            $order->zip,
            $order->note,
            $order->total,
            $order->quantity,
            $order->paymentTypes->type,
            date('d/m/Y H:i:s', strtotime($order->created_at))
        ];
    }

    public function headings(): array
    {
        return [
            'Order Id',
            'First Name',
            'Last Name',
            'Phone',
            'Email',
            'Address',
            'City',
            'Zip',
            'Note',
            'Total',
            'Quantity',
            'Payment Type',
            'Created On'
        ];
    }

    public function query()
    {
        $order = Order::with(['paymentTypes', 'paymentTypes.productPrice'])
            ->select(
                'orders.*',
                'product_prices.country_code'
            )->join('payment_types', 'orders.payment_type_id', '=', 'payment_types.id')
            ->join('product_prices', 'payment_types.product_price_id', '=', 'product_prices.id')
            ->where('product_prices.country_code', 'MK')
            ->where('status', 'PAID')
            ->whereBetween('orders.created_at', array(Carbon::now()->subHours(24)->toDateTimeString(), Carbon::now()->toDateTimeString()));
        return $order;
    }

}
