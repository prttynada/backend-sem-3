// import data students
// const students = require("../data/students");

//import model Student
const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        const students = await Student.all();

        const data = {
        messege : "Menampilkan data student",
        data: students,
        };

        res.json(data);
    }

    async store(req, res) {
        const datas = req.body;
        const students = await Student.create(datas);

        const data = {
            messege : `Menambahkan data student baru`,
            data: students,
        };
        
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            messege : `Mengedit data student id ${id}, nama ${nama}`,
            data: [],
        };
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            messege : `Menghapus data student ${id}`,
            data: [],
        };
        res.json(data);
    }
}

// buat object Student Controller
const object = new StudentController();

//export object
module.exports = object;