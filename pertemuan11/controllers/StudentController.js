// import data students
const students = require("../data/students");


class StudentController {
    index(req, res) {
        //console.log(students);
        const data = {
            messege : `Menampilkan data student`,
            data: students,
        };
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;

        students.push(nama);
        const data = {
            messege : `Menambahkan data student ${nama}`,
            data: students,
        };
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        students[id] = nama;
        const data = {
            messege : `Mengedit data student id ${id}, nama ${nama}`,
            data:students,
        };
        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        students.splice(id,1);
        const data = {
            messege : `Menghapus data student ${id}`,
            data: students,
        };
        res.json(data);
    }
}

// buat object Student Controller
const object = new StudentController();

//export object
module.exports = object;