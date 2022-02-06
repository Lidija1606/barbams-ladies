<?php

namespace App\Console;

use App\Console\Commands\getClientFeedback;
use App\Console\Commands\getDailyUaeOrders;
use App\Console\Commands\getDailySaOrders;
use App\Console\Commands\getDailyChOrders;
use App\Console\Commands\getDailyMkOrders;
use App\Console\Commands\SendShippingProviderUaeOrders;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        getClientFeedback::class,
        getDailyUaeOrders::class,
        getDailySaOrders::class,
        SendShippingProviderUaeOrders::class,
        getDailyMkOrders::class,
        getDailyChOrders::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('notification:getUserFeedback')->dailyAt('09:00');
        $schedule->command('notification:getDailyChOrders')->dailyAt('09:00');
        $schedule->command('notification:getDailyMkOrders')->dailyAt('09:00');
        $schedule->command('notification:SendUaeOrdersToShippingProvider')->dailyAt('10:55');
        $schedule->command('notification:getDailyUaeOrders')->dailyAt('07:00');
        $schedule->command('notification:getDailySaOrders')->dailyAt('07:00');
        $schedule->command('notification:soldElixirsReport')->dailyAt('07:00');
        $schedule->command('notification:getWeeklyUaeReport')->weekly()->sundays()->at('09:00');

    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
