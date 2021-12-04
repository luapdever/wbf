<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
    Routes API
*/


Route::middleware('api')->prefix('auth')->namespace('Auth')->group(function() {
    Route::post('/login', [AuthController::class, 'login']);
    //Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::get('/login', function() {
        return response()->json(['message' => 'Log in']);
    })->name('login');
});

Route::apiResource('articles', 'ArticleController');
Route::apiResource('articles.comments', 'CommentController');
Route::post('/contact', 'ContactController');