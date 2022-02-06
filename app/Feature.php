<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model {

    protected $table = 'features';

    public static function isFeature2for1Active(): ?Feature
    {
        return self::where('name', '=', '2for1')
            ->where('is_active', true)
            ->first();
    }

}
