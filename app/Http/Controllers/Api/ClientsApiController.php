<?php

namespace App\Http\Controllers\Api;

use App\BlackList;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ClientsApiController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_blacklistedEmails()
    {
        $blacklistedClients = DB::table('blackListed_emails')->get();
        return response()->json(['success' => true, 'data' => $blacklistedClients]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function put_blackListEmail(Request $request)
    {
       $blackListEmail = new BlackList();
       $blackListEmail->email = $request->email;
       $blackListEmail->status = true;
       $blackListEmail->save();
       return response()->json(['success' => true, 'data' => $blackListEmail]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete_blackListedEmail(Request $request)
    {
        $blackListEmail = BlackList::where('email', $request->email)->get()->first();
        if($blackListEmail){
            $destroy = BlackList::destroy($blackListEmail->id);
            return response()->json(['success' => true, 'data' => $destroy]);
        }else{
            return response()->json(['success' => false, 'data' => 'Email does not exist']);
        }

    }
}