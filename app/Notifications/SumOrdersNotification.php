<?php


namespace App\Notifications;

use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use App\Order;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class SumOrdersNotification extends Notification
{
    private $orders;
    private $region;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($orders, $region)
    {
        $this->orders = $orders;
        $this->region = $region;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Daily report - ' . $this->region . ' '. Carbon::yesterday()->toDateString())
            ->view(
                'emails.sumOrdersMail',['orders' => $this->orders]
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
            'order_id' => $this->order->id,
            'email' => $this->order->email,
            'country' => $this->order->paymentTypes->productPrice->country_code
        ];
    }
}
