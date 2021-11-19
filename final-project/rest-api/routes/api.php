<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\PatientController;

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

#membuat route untuk mendapatkan semua data pasien
route::get('/patients', [PatientController::class, 'index']);

#membuat route data untuk menambah data pasien baru
route::post('/patients', [PatientController::class, 'store']);

#membuat route untuk mendapatkan detail data pasien berdasarkan id
route::get('/patients/{id}', [PatientController::class, 'show']);

#membuat route untuk mengedit data pasien berdasarkan id
route::put('/patients/{id}', [PatientController::class, 'update']);

#membuat route untuk menghapus data pasien berdasarkan id
route::delete('/patients/{id}', [PatientController::class, 'destroy']);

#mendapatkan data pasien berdasarkan nama pasien
route::get('/patients/search/{name}', [PatientController::class, 'search']);

#mendapatkan data pasien berdasarkan status positive
route::get('/patients/status/positive', [PatientController::class, 'positive']);

#mendapatkan data pasien berdasarkan status recovered
route::get('/patients/status/recovered', [PatientController::class, 'recovered']);

#mendapatkan data pasien berdasarkan status dead
route::get('/patients/status/dead', [PatientController::class, 'dead']);