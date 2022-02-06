<?php

namespace App\Console\Commands;

use App\Notifications\ShippingProviderNotification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use App\Exports\OrderUaeExport;


class SendShippingProviderUaeOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:SendUaeOrdersToShippingProvider';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $excel =$this->getReportExcele();

        Notification::route('mail', 'maryam.chaudhary14@gmail.com')->
        notify(new ShippingProviderNotification($excel));

        Notification::route('mail', 'maryam@gomakank.com')->
        notify(new ShippingProviderNotification($excel));

        Notification::route('mail', 'hafiz@gomakank.com')->
        notify(new ShippingProviderNotification($excel));

    }

    public function getReportExcele(){
        return (new OrderUaeExport)->download('report.xlsx', \Maatwebsite\Excel\Excel::XLSX)->getFile();
    }
}
