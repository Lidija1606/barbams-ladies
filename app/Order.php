<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Order extends Model
{

    use Notifiable;
    //
    protected $fillable = [
        'first_name',
        'last_name',
        'phone_number',
        'email',
        'address',
        'city',
        'zip',
        'note',
        'total',
        'quantity'
    ];

    public function paymentTypes()
    {
        return $this->belongsTo(PaymentType::class, 'payment_type_id');
    }

    public function shipping()
    {
        return $this->hasOne(Shipping::class);
    }

    public function shippingErrorLog()
    {
        return $this->hasOne(ShippingErrorLog::class);
    }

    public function payments()
    {
        return $this->belongsToMany(PaymentType::class, 'order_payments')
            ->withPivot('status')
            ->withPivot('type')
            ->withPivot('created_at')
            ->withPivot('updated_at');
    }
    public function language()
    {
        return $this->belongsTo(Language::class, 'language_id');
    }

    public function promoCodes()
    {
        return $this->belongsTo(PromoCode::class, 'promo_code_id');
    }


}
