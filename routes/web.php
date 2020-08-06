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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes([
    'register' => false, // Registration Routes...
    'reset' => false, // Password Reset Routes...
    'verify' => false, // Email Verification Routes...
  ]);

Route::prefix('admin')->middleware('auth')->group(function(){
    Route::get('/', 'HomeController@index');
});

Route::get('/{any}', function () {
    return view('spa');
})->where('any', '.*');

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->middleware('verified');