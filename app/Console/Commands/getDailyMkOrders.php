<?php

namespace App\Console\Commands;

use App\Exports\OrderMkExport;
use App\Notifications\InternalReportNotification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;


class getDailyMkOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:getDailyMkOrders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends daily report to MK';

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
        Notification::route('mail', 'petar.kashuba@topla.mk')->
        notify(new InternalReportNotification($excel));
    }

    public function getReportExcele(){
        return (new OrderMkExport())->download('report.xlsx', \Maatwebsite\Excel\Excel::XLSX)->getFile();
    }
}
