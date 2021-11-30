var express = require("express");
var router = express.Router();
var Employee = require("./employee.model");
var Referral = require("./models/referral.model");
var Reimburse = require("./models/reimbursement.model");
var Suggestion = require("./models/suggestions.model");
var Leave = require("./models/leave.model");

//localhost:4000/user/employee/employeedetails/newemployee
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

//localhost:4000/user/employee/employeedetails/
router.get("/", (req, res) => {
    Employee.find({})
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(405).send(err);
        });
});

//post route to ask leave
//localhost:4000/user/employee/employeedetails/leave
router.post("/leave", (req, res, next) => {
    var employee_id = req.payload.userID;
    var leave = new Leave({
        employeeid: employee_id,
        leavetype: req.body.leavetype,
        leave_start_date: req.body.leave_start_date,
        leave_end_date: req.body.leave_end_date,
        reason_for_leave: req.body.reason_for_leave,
    });
    leave
        .save()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((e) => {
            res.status(405).send(e);
        });
});

//route for taking the data related to reimbursment

//localhost:4000/user/employee/employeedetails/reimburse
router.post("/reimburse", (req, res, next) => {
    var employee_id = req.payload.userID;
    var reimburse = new Reimmburse({
        employeeid: employee_id,
        purpose: req.body.purpose,
        amount: req.body.amount,
    });

    reimburse
        .save()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((e) => {
            res.status(405).send(e);
        });
});

//Route for referral
//localhost:4000/user/employee/employeedetails/referral
router.post("/referral", (req, res, next) => {
    //user id of the employee applying
    var employee_id = req.payload.userID;
    var referral = new Referral({
        employeeid = employee_id,
        referred_name: req.body.referred_name,
        role: req.body.role
    });

    referral
        .save()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((e) => {
            res.status(405).send(e);
        });
});

//Route for referral
//localhost:4000/user/employee/employeedetails/suggestion
router.post("/suggestion", (req, res, next) => {
    //user id of the employee applying
    //var userid = req.payload.userID;
    var suggest = new Suggestion({
        suggestion: req.body.suggestion,
    });

    suggest
        .save()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((e) => {
            res.status(405).send(e);
        });
});

router.post("/blog", (req, res, next) => {
    var employee_id = req.payload.userID;
    var blog = new Blog({
        employee_id: employee_id,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        //how to implement the comments part
    })
})

module.exports = router;