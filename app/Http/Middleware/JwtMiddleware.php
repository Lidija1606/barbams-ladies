<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Support\Facades\Log;
use JWTAuth;
use App\Exceptions\Handler as ExceptionHandler;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = \Tymon\JWTAuth\Facades\JWTAuth::toUser($request->header('Authorization'));
            if( !$user ) throw new Exception('User Not Found');
        } catch (Exception $e) {
            ExceptionHandler::sendEmail($e);
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                Log::error('JWT MIDDLEWARE 1 ' . $e->getMessage());
                return response()->json(['error' => 'Token is Invalid'], 401);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                try {
                    $refreshed = \Tymon\JWTAuth\Facades\JWTAuth::refresh(\Tymon\JWTAuth\Facades\JWTAuth::getToken());
                    $user = \Tymon\JWTAuth\Facades\JWTAuth::setToken($refreshed)->toUser();
                    $user->auth_token = $refreshed;
                    $user->save();
                    header('Authorization:' . $refreshed);
                } catch (Exception $e) {
                    return response()->json(['error' => $e->getMessage()], 401);
                }
                return $next($request);
            } else {
                return response()->json(['error' => 'Something is wrong'], 401);
            }
        }
        return $next($request);
    }
}