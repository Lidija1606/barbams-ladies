<?php

namespace App\Exceptions;

use App\Mail\DashboardErrors;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Debug\Exception\FlattenException;
use Symfony\Component\Debug\ExceptionHandler as SymfonyExceptionHandler;
use App\Mail\ExceptionOccured;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
//        'RunTimeException'
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception $exception
     * @return void
     */
    public function report(\Exception $exception)
    {
        if ($this->shouldReport($exception)) {
            self::sendEmail($exception);
        }

        return parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Exception $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, \Exception $exception)
    {
        return parent::render($request, $exception);
    }

    /**
     * @param \Exception $exception
     */
    public static function sendEmail(\Exception $exception): void
    {
        try {
            $e = FlattenException::create($exception);

            $handler = new SymfonyExceptionHandler();
            $html = $handler->getHtml($e);
           // Mail::to('jevtovicnatasha@gmail.com')->send(new ExceptionOccured($html));
        } catch (\Exception $ex) {
            dd($ex);
        }
    }

    /**
     * @param \Exception $exception
     */
    public static function sendClientRequest(Request $request): void
    {
        try {
           $data['params'] = $request->all();
           $data['method'] = $request->method();
           $data['url'] = $request->fullUrl();
           $data['clientIp'] = $request->ip();
           $data['userAgent'] = $request->userAgent();
          //  Mail::to('jevtovicnatasha@gmail.com')->send(new DashboardErrors(json_encode($data)));

        } catch (\Exception $ex) {
            dd($ex);
        }
    }
}
