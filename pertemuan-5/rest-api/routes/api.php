<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

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

#method get
route::get('/animals', [AnimalController::class, 'index']);

#method post
route::post('/animals', [AnimalController::class, 'store']);

#method put
route::put('/animals/{id}', [AnimalController::class, 'update']);

#method delete
route::delete('/animals/{id}', [AnimalController::class, 'destroy']);

#Route Students

route::get('/students', [StudentController::class, 'index']);
route::post('/students', [StudentController::class, 'store']);
route::get('/students/{id}', [StudentController::class, 'show']);
route::put('/students/{id}', [StudentController::class, 'update']);
route::delete('/students/{id}', [StudentController::class, 'destroy']);