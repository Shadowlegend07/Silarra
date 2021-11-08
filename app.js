const express = require("express");
//const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const userroute = require("./api/routes/user");
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

app.use("/user", userroute);

module.exports = app;