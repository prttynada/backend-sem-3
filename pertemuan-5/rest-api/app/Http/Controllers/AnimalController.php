<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    # property animals (array)
    public $animals = ['Kucing', 'Ayam', 'Ikan'];

    public function index() 
    {
        echo "menampilkan data animals: <br/>";

        # gunakan foreach untuk menampilkan data animals (array)
        foreach ($this->animals as $animal) {
        echo $animal.'<br/>';
        }
    }

    public function store(Request $request) 
    {
        echo "menambahkan hewan baru - $request->nama <br/>";

        # gunakan method array_push untuk menambahkan data baru
        echo "<br/>";
        array_push($this->animals, $request->nama);
        return $this->index();
    }

    public function update(Request $request ,$id) 
    {
        echo "mengupdate data hewan pada id $id - $request->nama <br/>";
        echo "<br/>";
        $this->animals[$id] = $request->nama;
        return $this->index();
    }

    public function destroy($id) 
    {
        echo "menghapus data hewan pada id $id <br/>";

        # gunakan method unset atau array_splice untuk menghapus data array
        echo "<br/>";
        unset($this->animals[$id]);
        return $this->index();
    }
}
