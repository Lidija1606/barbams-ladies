<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{

    const PAYMENT_TYPE_PAYPAL = "PAYPAL";
    const PAYMENT_TYPE_TELR = "CARD";
    const PAYMENT_TYPE_CASH = "CASH";

    protected $table = "payment_types";

    public function productPrice()
    {
        return $this->belongsTo(ProductPrice::class, 'product_price_id');
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function payments()
    {
        return $this->belongsToMany(Order::class, 'order_payments')
            ->withPivot('status')
            ->withPivot('type')
            ->withPivot('created_at')
            ->withPivot('updated_at');
    }
}
