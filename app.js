const express = require("express");
//const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const indexroute = require("./versions/routes/index");
const bodyparser = require("body-parser");
app.use(bodyparser.json());

mongoose
    .connect("mongodb://localhost:27017/Silaarra", {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Mongodb Connected Successfully");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/user", indexroute);

module.exports = app;