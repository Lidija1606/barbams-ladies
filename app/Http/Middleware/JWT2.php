<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Support\Facades\Log;
use JWTAuth;

class JWT2
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
//            return response()->json(['error' => 'Token is Expired'], 401);
//            $user = \Tymon\JWTAuth\Facades\JWTAuth::toUser($request->header('Authorization'));
//            Log::error('JWT MIDDLEWARE ' . json_encode($user));
            $user = \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->authenticate();
            $payload = \Tymon\JWTAuth\Facades\JWTAuth::parseToken()->getPayload();

            Log::error('========== handle ========== ' . $payload);

        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                Log::error('JWT MIDDLEWARE 1 ' . $e->getMessage());
//                return $next($request);
                return response()->json(['error' => 'Token is Invalid'], 401);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {

                try {
                    $refreshed = \Tymon\JWTAuth\Facades\JWTAuth::refresh(\Tymon\JWTAuth\Facades\JWTAuth::getToken());
                    $user = \Tymon\JWTAuth\Facades\JWTAuth::setToken($refreshed)->toUser();
                    header('Authorization: bearer ' . $refreshed);
                } catch (\Exception $e) {
                    return response()->json(['error' => $e->getMessage()], 401);
                }

//                return $next($request);
//                $token = \Tymon\JWTAuth\Facades\JWTAuth::getToken();
//                $new_token = \Tymon\JWTAuth\Facades\JWTAuth::refresh($token);
                return response()->json(['error' => 'Token is Expired'], 401);
            } else {
                Log::error('JWT MIDDLEWARE 3 ' . $e->getMessage());
//                return $next($request);
                return response()->json(['error' => 'Something is wrong'], 401);
            }
        }
        return $next($request);
    }
}