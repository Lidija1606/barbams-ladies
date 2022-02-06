<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ShippingProviderNotification extends Notification
{
    use Queueable;
    private $excel;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($excel)
    {
        $this->excel = $excel;
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
        return (new MailMessage)
            ->subject('ORDERS TO BE SHIPPED')
            ->greeting('Hello Maryam! ')
            ->line('The attached spreadsheet contains orders which should be shipped.')
            ->line('If you have any questions,')
            ->line('feel free to contact us.')
            ->salutation('Barbam`s team.')
            ->attach($this->excel, ['as' => 'report.xlsx']);
    }
}
