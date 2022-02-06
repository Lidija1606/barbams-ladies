<?php

namespace App\Notifications;

use App\Country;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Order;
use Illuminate\Support\Facades\Log;

class OrderShipped extends Notification
{
    use Queueable;

    /**
     * @var Order
     */
    protected $order;

    /**
     * Create a new notification instance.
     * @param Order
     * @return void
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $countryCode = $this->order->paymentTypes->productPrice->country_code;
        $country = Country::with('shippingServices')->where('code', 'like', $countryCode)->first();
        $shippingServices = $country->shippingServices;

        return (new MailMessage)
            ->subject('Order Paid')
            ->view(
                'emails.orderShipped', ['order' => $this->order, 'shippingServiceName' => $shippingServices[0]->name,'shippingServiceUrl' => $shippingServices[0]->trackingUrl]
            );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
