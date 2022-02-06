<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductPrice extends Model
{
    //
    protected $table = "product_prices";

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function paymentTypes()
    {
        return $this->hasMany(PaymentType::class);
    }

    public function users()
    {
        return $this->belongsToMany(
            'App\ProductPrice',
            'users_product_prices',
            'product_price_id',
            'user_id');
    }
}
