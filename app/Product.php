<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    public function orders()
    {
        return $this->belongsToMany(
            'App\Order',
            'order_products',
            'product_id',
            'order_id')
            ->withPivot('quantity')
            ->withTimestamps();
    }

    public function prices()
    {
        return $this->hasMany(ProductPrice::class);
    }
}
