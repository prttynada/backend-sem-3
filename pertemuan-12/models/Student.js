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

        //return promise
        return new Promise(function(resolve, reject) {
            // query by id
            const sql = "SELECT * FROM students WHERE id = ? ";
            db.query(sql, id, function(err, result) {
                resolve(result);
            });
        });
    }
}

// export class
module.exports = Student;