<?php
/**
 * Created by PhpStorm.
 * User: natasajevtovic
 * Date: 7/3/20
 * Time: 6:20 PM
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShippingService extends Model
{
    /**
     * Get the country that owns the shipping service.
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

}