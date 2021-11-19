<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    public function index() 
    {
        #mendapatkan seluruh data pasien
        #jika data pasien ada, maka tampilkan data pasien
        #jika data pasien kosong, maka tampilkan pesan data kosong

        $patients = Patient::all();
        
        if ($patients->isNotEmpty()) 
        {
            $data = [
                'message' => 'Get All Resource',
                'data' => $patients
            ];
    
            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Data is Empty'
            ];
    
            return response()->json($data, 200);
        }
    }

    public function store(Request $request) 
    {
        #melakukan validasi data menggunakan validation
        #jika data yang diinput tervalidasi, maka tampilkan data
        #jika data tidak tervalidasi, maka laravel secara otomatis akan menampilkan response gagal

        $validateData = $request->validate([
            'name' => "required",
            'phone' => "required",
            'address' => "required",
            'status' => "required",
            'in_date_at' => "required",
            'out_date_at' => "required"
        ]);

        $patient = Patient::create($validateData);

        $data = [
            'message' => 'Resource is added successfully',
            'data' => $patient
        ];

        return response()->json($data, 201);
    }

    public function show($id) 
    {
        #mendapatkan data pasien berdasarkan id yang diinput
        #jika data pasien tersebut ada, maka tampilkan data pasien
        #jika data tidak ada, maka tampilkan pesan data tidak ditemukan

        $patient = Patient::find($id);

        if ($patient) 
        {
            $data = [
                'message' => 'Get Detail Resource',
                'data' => $patient
            ];
    
            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function update(Request $request, $id) 
    {
        #mendapatkan data pasien berdasarkan id yang diinput
        #jika data pasien tersebut ada, maka update data berdasarkan inputan data baru dan tampilkan pesan berhasil
        #jika data pasien tidak ada, maka tampilkan pesan data tidak ditemukan

        $patient = Patient::find($id);

        if ($patient) 
        {
            $input = [
                'name' => $request->name ?? $patient->name,
                'phone' => $request->phone ?? $patient->phone,
                'address' => $request->address ?? $patient->address,
                'status' => $request->status ?? $patient->status,
                'in_date_at' => $request->in_date_at ?? $patient->in_date_at,
                'out_date_at' => $request->out_date_at ?? $patient->out_date_at
            ];

            $patient->update($input);

            $data = [
                'message' => 'Resource is update successfully',
                'data' => $patient
            ];

            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function destroy($id) 
    {
        #dapatkan data berdasarkan id
        #jika data pasien tersebut ada, maka hapus data dan tampilkan pesan berhasil
        #jika data pasien tidak ada, maka tampilkan pesan tidak ditemukan

        $patient = Patient::find($id);

        if ($patient) 
        {
            $patient->delete();

            $data = [
                'message' => 'Resource is delete successfully'
            ];

            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function search($name) 
    {
        #dapatkan data pasien dengan nama sesuai inputan
        #jika data pasien dengan nama tersebut ada, maka tampilkan data pasien tersebut dan tampilkan pesan berhasil
        #jika data pasien tidak ditemukan, tampilkan pesan data tidak ditemukan

        $patient = Patient::where('name', 'like', "%$name%")->get();;

        if ($patient->isNotEmpty()) 
        {
            $data = [
                'message' => 'Get searched resource',
                'data' => $patient
            ];

            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function positive() 
    {
        #dapatkan data pasien dengan status positive
        #jika data pasien dengan status positive ada, maka tampilkan total pasien positive dan tampilkan data pasien positive serta pesan berhasil
        #jika data tidak ditemukan, maka tampilkan pesan data tidak ditemukan

        $patient = Patient::where('status', 'positive')->get();;

        if ($patient->isNotEmpty()) 
        {

            $data = [
                'message' => 'Get positive resource',
                'total' => $patient->count(),
                'data' => $patient
            ];

            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function recovered() 
    {
        #dapatkan data pasien dengan status recovered
        #jika data pasien dengan status recovered ada, maka tampilkan total pasien dengan status recovered dan tampilkan data pasien serta pesan berhasil
        #jika data tidak ada, maka tampilkan pesan data tidak ditemukan

        $patient = Patient::where('status', 'recovered')->get();;

        if ($patient->isNotEmpty()) 
        {

            $data = [
                'message' => 'Get recovered resource',
                'total' => $patient->count(),
                'data' => $patient
            ];

            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function dead() 
    {
        #dapatkan data pasien dengan status dead
        #jika data pasien dengan status dead ada, maka tampilkan total data pasien dan tampilkan data pasien serta pesan berhasil
        #jika data tidak ada, maka tampilkan pesan data tidak ditemukan

        $patient = Patient::where('status', 'dead')->get();;

        if ($patient->isNotEmpty()) 
        {

            $data = [
                'message' => 'Get dead resource',
                'total' => $patient->count(),
                'data' => $patient
            ];

            return response()->json($data, 200);
        }
        else 
        {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }
}

