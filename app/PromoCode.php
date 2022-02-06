<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PromoCode extends Model
{
    protected $table = "promo_codes";

    protected $fillable = [
        'name',
        'value',
        'is_active'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
