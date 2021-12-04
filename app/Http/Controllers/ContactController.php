<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ContactRequest $request)
    {
        $datas = $request->all();

        if(Mail::to(env('APP_EMAIL_ADRESS'))->queue(new ContactMail($datas))) {
            return response()->json(['message' => 'Mail sending failed'] , 500);
        }

        return response()->json(['message' => 'Mail sent']);
    }
}
