var express = require("express");
var router = express.Router();
var Employee = require("./employee.model");

router.post("/newemployee", (req, res) => {
    var Employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        fathername: req.body.fathername,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        maritalstatus: req.body.maritalstatus,
        gender: req.body.gender,
        pfmemberid: req.body.pfmemberid,
        uan: req.body.uan,
        currentaddress: req.body.currentaddress,
        permanentaddress: req.body.permanentaddress,
        adhar: req.body.adhar,
        pan: req.body.pan,
        healthcardino: req.body.healthcardino,
        cardvalidity: req.body.cardvalidity,
        selectbank: req.body.selectbank,
        accounttype: req.body.accounttype,
        accountholder: req.body.accountholder,
        accountnumber: req.body.accountnumber,
        ifcs: req.body.ifcs,
        employeeid: req.body.employeeid,
        joiningdate: req.body.joiningdate,
        title: req.body.title,
        role: req.body.role,
        employeetype: req.body.employeetype,
        previouscompany: req.body.previouscompany,
        pre_exp_startdate: req.body.pre_exp_startdate,
        pre_exp_enddate: req.body.pre_exp_enddate,
        silarra_exp_startdate: req.body.silarra_exp_startdate,
        silarra_exp_enddate: req.body.silarra_exp_enddate,
        joiningctc: req.body.joiningctc,
        prejoiningctc: req.body.prejoiningctc,
        universityname: req.body.universityname,
        collegename: req.body.collegename,
        typeofdegree: req.body.typeofdegree,
        graduateyear: req.body.graduateyear,
        collegeyearfrom: req.body.collegeyearfrom,
        collegeyeartill: req.body.collegeyeartill,
        graduate: req.body.graduate,
    });

    Employee.save()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(402).send(err);
        });
});

router.get("/", (req, res) => {
    Employee.find({})
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(405).send(err);
        });
});