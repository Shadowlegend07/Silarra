const express = require("express");
//const router = express.Router();
const app = express();
const mongoose = require("mongoose");
const indexroute = require("./versions/routes/index");
const bodyparser = require("body-parser");
app.use(bodyparser.json());

const db =
    "mongodb+srv://root:root@cluster0.mh2bk.mongodb.net/Silarra?retryWrites=true&w=majority";

mongoose
    .connect(db, {
        useNewUrlParser: true,
        /*  useCreateIndex: true,
                        useUnifiedTopology: true,
                        useFindAndModify: false, */
    })
    .then(() => {
        console.log("Successfully Connected to Mongodb");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/user", indexroute);

module.exports = app;

///  var userid = req.payload.userID;