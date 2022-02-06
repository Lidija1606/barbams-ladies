<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class TestimonialsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $visitorData = Helper::getVisitorData();
        $countryCode = $visitorData['countryCode'];
        $data = [
            'countryCode' => $countryCode
        ];
        return View::make('pages/testimonials')->with($data);

    }
}
