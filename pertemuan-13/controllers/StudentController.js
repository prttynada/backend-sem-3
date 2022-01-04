// import data students
// const students = require("../data/students");

//import model Student
const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        const students = await Student.all();

        if (students) {
            //tampilkan data
            const data = {
                messege : "Menampilkan data student",
                data: students,
            };
        
            res.status(200).json(data);
        }
        else {
            //kirim data tidak ada
            const data = {
                messege : `Data tidak ada`,
            };
            
            res.status(404).json(data);
        }
    }

    async store(req, res) {
        const datas = req.body;
        const students = await Student.create(datas);

        const data = {
            messege : `Menambahkan data student baru`,
            data: students,
        };
        
        res.status(201).json(data);
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
            
            res.status(200).json(data);
        } 
        else {
            //kirim data tidak ada
            const data = {
                messege : `Data tidak ada`,
            };
            
            res.status(404).json(data);
        }
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
            
            res.status(200).json(data);
        } 
        else {
            //data tidak ada
            const data = {
                messege : `Data tidak ada`,
            };
            
            res.status(404).json(data);
        }
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
            
            res.status(200).json(data);
        }
        else {
            const data = {
                messege : `Data tidak ada`,
            };
            
            res.status(404).json(data);
        }
    }
}

// buat object Student Controller
const object = new StudentController();

//export object
module.exports = object;