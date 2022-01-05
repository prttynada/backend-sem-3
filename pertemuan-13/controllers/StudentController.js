// import data students
// const students = require("../data/students");

//import model Student
const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        const students = await Student.all();

        if (students.length > 0) {
            //tampilkan data
            const data = {
                messege : "Menampilkan data student",
                data: students,
            };
        
            return res.status(200).json(data);
        }
        // else
        //kirim data kosong
        const data = {
            messege : `Data kosong`,
        };
        
        return res.status(200).json(data);
    }

    async store(req, res) {
        // validasi sederhana, handle jika salah satu data tidak ada

        //destructing object req.body
        const { nama, nim, email, jurusan } = req.body;

        // jika data undefined maka kirim response error
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                messege : "Semua data harus dikirim",
            };

            return res.status(422).json(data);
        }
        //else
        const students = await Student.create(req.body);

        const data = {
            messege : `Menambahkan data student baru`,
            data: students,
        };
        
        return res.status(201).json(data);
    }

    async update(req, res) {
        // cek apaka id student ada
        // jika ada, lakukan update
        // jika tidak, kirim data tidak ada

        const {id} = req.params;

        const student = await Student.find(id);

        if (student) {
            //update data
            const studentupdated = await Student.update(id, req.body);
            const data = {
                messege : `Mengedit data student`,
                data: studentupdated,
            };
            
            return res.status(200).json(data);
        } //else
        //kirim data tidak ada
        const data = {
            messege : `Data tidak ada`,
        };
        
        return res.status(404).json(data);
    }

    async destroy(req, res) {
        const { id } = req.params;

        //cari id
        //jika ada, hapus data
        //jika tidak, kirim data tidak ada

        const student = await Student.find(id);

        if (student) {
            //hapus data
            await Student.delete(id);

            const data = {
                messege : `Menghapus data student`,
            };
            
            return res.status(200).json(data);
        } 
        // else
        //data tidak ada
        const data = {
            messege : `Data tidak ada`,
        };
        
        return res.status(404).json(data);
    }

    async show(req, res) {
        //cari data
        //jika ada, tampilkan
        //jika tidak, kirim data tidak ada
        const {id} = req.params;

        const student = await Student.find(id);
        if (student) {
            //tampilkan data
            const data = {
                messege : `Menampilkan data student`,
                data: student,
            };
            
            return res.status(200).json(data);
        }
        // else
        const data = {
            messege : `Data tidak ada`,
        };
        
        res.status(404).json(data);
    }
}

// buat object Student Controller
const object = new StudentController();

//export object
module.exports = object;