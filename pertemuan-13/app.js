//Import express
const express = require("express");

//Buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

// defenisikan route
const router = require("./routes/api");
app.use(router);

//defenisikan port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});