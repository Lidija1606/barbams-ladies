<?php
/**
 * Created by PhpStorm.
 * User: natasajevtovic
 * Date: 8/14/20
 * Time: 10:57 AM
 */


namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class BlackList extends Model {

    use Notifiable;

    protected $table = 'blackListed_emails';

}