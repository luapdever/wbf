<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}', 'welcome')
     ->where('path', '.*')
     ->name('react');

/*
    Route::apiResource('articles', 'ArticleController');
    Route::apiResource('articles.comments', 'CommentController');
    
    require __DIR__.'/auth.php';

*/
