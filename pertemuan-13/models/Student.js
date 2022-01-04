// import db
const db = require("../config/database");

// class Model Student
class Student {
    // method utk query semua data
    static all() {
        return new Promise(function (resolve, reject) {
            // query ke db
            const sql = "SELECT * from students";
            db.query(sql, function(err, results) {
                resolve(results);
            });
        });
    }

    static async create(datas) {
        // simpan id
        const id = await new Promise(function (resolve, reject) {
            // insert data ke db
            const sql = "INSERT INTO students SET ? ";
            db.query(sql, datas, function(err, results) {
                // mengembalikan id
                resolve(results.insertId);
            });
        });

        //return promise: return data baru
        const student = await this.find(id);
        return student;
    }

    static find(id) {
        //lakukan promise, select by id
        return new Promise ((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        //update data
        await new Promise((resolve, reject) => {
            //query update data
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        //select data by id
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        //query delete
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
}

// export class
module.exports = Student;