<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use App\Order;

use Illuminate\Support\Facades\Log;

/**
 * Class OrderPaid
 * @package App\Notifications
 */
class VacationMail extends Notification
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
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Order Paid')
            ->view(
            'emails.vacation_mail', ['order' => $this->order]
        );
    }
    public function toArray($notifiable)
    {
        return [
            'order_id' => $this->order->id,
            'email' => $this->order->email,
        ];
    }
}
