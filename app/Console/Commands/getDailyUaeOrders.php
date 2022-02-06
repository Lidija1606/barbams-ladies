<?php

namespace App\Console\Commands;

use App\Notifications\UaeSumOrdersNotification;
use Illuminate\Support\Facades\Notification;

class getDailyUaeOrders extends InternalDailyReportByCountry
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:getDailyUaeOrders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send daily uae orders to admins';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $orders = $this->getNumberOfOrdersForYesterday('AE');

        Notification::route('mail', 'jevtovicnatasha@gmail.com')->notify(new UaeSumOrdersNotification($orders));
        Notification::route('mail', 'milutinbr@gmail.com')->notify(new UaeSumOrdersNotification($orders));
        Notification::route('mail', 'peter@381marketing.com')->notify(new UaeSumOrdersNotification($orders));
        Notification::route('mail', 'tmrastojanovic@gmail.com')->notify(new UaeSumOrdersNotification($orders));

    }

}
