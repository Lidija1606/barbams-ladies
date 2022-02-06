<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\DashboardErrors;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Mail;





class AuthController extends Controller
{
    public function setLocale($locale)
    {
        App::setLocale($locale);
    }

    public function addUser()
    {
        $user = new User();
        $user->name = 'Srbija';
        $user->email = "srbija@barbams.com";
        $user->password = Hash::make('marko123');
        $user->save();
    }


    public function login(Request $request)
    {
        $user = User::with('productPrices')->where('email', $request->email)->get()->first();


        if ($user && Hash::check($request->password, $user->password))
        {
            $token = $this->getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();

            if($user->name === 'Admin'){
                $priceIds[] = 0;
            }else{
                foreach ($user->productPrices as $price) {
                    $priceIds[] = $price->id;
                }
            }

            $response = ['success' => true, 'data' => ['id' => $user->id, 'auth_token' => $user->auth_token, 'name' => $user->name, 'email' => $user->email, 'product_price_ids' => $priceIds]];
            return response()->json($response, 200);
        } else {
            $response = ['success' => false, 'data' => 'Invalid email or password'];
            return response()->json($response, 401);
        }


    }

    private function getToken($email, $password)
    {
        $token = null;
        try {
            if (!$token = JWTAuth::attempt(['email' => $email, 'password' => $password], ['exp' => Carbon::now()->addDays(7)->timestamp])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token' => $token
                ]);
            }
        } catch (JWTException $exception) {
            ExceptionHandler::sendEmail($exception);
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }

}
