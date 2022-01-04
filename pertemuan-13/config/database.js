// import mysql
const mysql = require("mysql");

// import dotenv

require("dotenv").config();

// buat koneksi: createConnection
const db = mysql.createConnection({
    // host, user, password, database
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// konek ke db
db.connect(function(err) {
    if (err) {
        console.log("Koneks error" + err);
        return;
    } else {
        console.log("Koneksi behasil");
        return;
    }
});

// export db
module.exports = db;
