const express = require("express");
const router = require("./router");

const product = require('./controllers/productController');

const app = express()

const PORT = 8080;

app.use(express.urlencoded({ extended:false}));

app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});