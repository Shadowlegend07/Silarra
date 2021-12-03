const mongoose = require("mongoose");

const employeedataSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    fathername: {
        type: String,
    },
    dob: {
        type: String,
    },
    email: {
        type: String,

        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    phone: {
        type: Number,
    },
    maritalstatus: {
        type: String,
    },
    gender: {
        type: String,
    },

    pfmemberid: {
        type: String,
    },
    uan: {
        type: String,
    },
    currentaddress: {
        type: String,
    },
    permanentaddress: {
        type: String,
    },
    adhar: {
        type: String,
    },
    pan: {
        type: String,
    },
    healthcardno: {
        type: String,
    },
    cardvalidity: {
        type: String,
    },
    selectbank: {
        type: String,
    },
    accounttype: {
        type: String,
    },
    accountholder: {
        type: String,
    },
    accountnumber: {
        type: Number,
    },
    ifcs: {
        type: String,
    },
    employeeid: {
        type: String,
    },
    joiningdate: {
        type: String,
    },
    title: {
        type: String,
    },
    role: {
        type: String,
    },
    employeetype: {
        type: String,
    },
    previouscompany: {
        type: String,
    },
    pre_exp_startdate: {
        type: String,
    },
    pre_exp_enddate: {
        type: String,
    },
    silarra_exp_startdate: {
        type: String,
    },
    silarra_exp_enddate: {
        type: String,
    },
    joiningctc: {
        type: String,
    },
    prejoiningctc: {
        type: String,
    },
    universityname: {
        type: String,
    },
    collegename: {
        type: String,
    },
    typeofdegree: {
        type: String,
    },
    graduatedyear: {
        type: String,
    },
    collegeyearfrom: {
        type: String,
    },
    collegeyeartill: {
        type: String,
    },
    graduated: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeedataSchema);