<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    //
    protected $fillable = [
        'name',
        'code'
    ];

    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_languages')
            ->withPivot('title')
            ->withPivot('altText')
            ->withPivot('description');
    }


    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function country()
    {
        return $this->hasMany(Country::class);
    }
}
