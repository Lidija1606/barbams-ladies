<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use App\BlackList;

class BlackListedUser extends Notification
{
    use Queueable;

    protected $blackListedClient;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(BlackList $blackListedClient)
    {
        $this->blackListedClient = $blackListedClient;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
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
            'email' => $this->blackListedClient->email,
        ];
    }
}
