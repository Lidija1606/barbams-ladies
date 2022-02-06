<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShippingErrorLog extends Model
{
    protected $table = "table_shipping_error_logs";

    public function order()
    {
        return $this->belongsTo(Order::class, "order_reference");
    }

}
