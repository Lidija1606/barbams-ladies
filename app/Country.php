<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    /**
     * Get the shipping services for the country
     */
    public function shippingServices()
    {
        return $this->hasMany(ShippingService::class);
    }

    public function language()
    {
        return $this->hasOne(Language::class);
    }
}
