<?php

namespace App\Console\Commands;

use App\Exports\OrderChExport;
use App\Notifications\InternalReportNotification;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;


class getDailyChOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:getDailyChOrders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends daily report to CH';

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
        Notification::route('mail', 'jasminhodza9@gmail.com')->
        notify(new InternalReportNotification($excel));
    }

    public function getReportExcele(){
        return (new OrderChExport())->download('report.xlsx', \Maatwebsite\Excel\Excel::XLSX)->getFile();
    }
}
