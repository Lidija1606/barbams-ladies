<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'path', 'thumbnailPath', 'order_number','position',
    ];


    /**
     * The roles that belong to the user.
     */
    public function languages()
    {
        return $this->belongsToMany(Language::class, 'image_languages')
            ->withPivot('title')
            ->withPivot('altText')
            ->withPivot('description');
    }

    public function delete(){
        $this->languages()->detach();
        return parent::delete();
    }
}
