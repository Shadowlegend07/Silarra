const express = require("express");
const router = express.Router();
const User = require("./auth.model");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.use(bodyparser.json());

router.get("/", (req, res, next) => {
    res.send("Hlledklmnak sa");
});

exports.signup = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length >= 1) {
                /*  console.log(user); */
                return res.status(409).send("User Already exists");
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(400).json({
                            error: err,
                        });
                    } else {
                        const newuser = new User({
                            email: req.body.email,
                            password: hash,
                        });
                        newuser
                            .save()
                            .then((result) => {
                                res.status(200).send(result);
                            })
                            .catch((e) => {
                                res.status(402).send(e);
                            });
                    } //end of else
                }); //end of hash
            } //end of else
        });
}; //end of route

exports.login = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).send("Auth Failed");
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).send(err);
                }
                if (result) {
                    const token = jwt.sign({
                            email: user[0].email,
                            userId: user[0]._id,
                        },
                        "Hello World is in Silarra", {
                            expiresIn: "1h",
                        }
                    );
                    return res.status(200).json({
                        message: "Auth Successfull",
                        token: token,
                    });
                }
                res.status(401).send("Auth Failed");
            }); //end of bcrypt
        }) //end of then
        .catch((e) => {
            return res.status(401).send(e);
        });
};

router.delete("/:userId", (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then(() => {
            res.status(200).send("User Deleted Successfully");
        })
        .catch((e) => {
            res.status(403).send(e);
        });
});

module.exports = router;