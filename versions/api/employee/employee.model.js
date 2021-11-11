const mongoose = require("mongoose");

const employeedataSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    fathername: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    phone: {
        type: Number,
        required: true,
    },
    maritalstatus: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },

    pfmemberid: {
        type: String,
        required: true,
    },
    uan: {
        type: String,
        required: true,
    },
    currentaddress: {
        type: String,
        required: true,
    },
    permanentaddress: {
        type: String,
        required: true,
    },
    adhar: {
        type: String,
        required: true,
    },
    pan: {
        type: String,
        required: true,
    },
    healthcardno: {
        type: String,
        required: true,
    },
    cardvalidity: {
        type: String,
        required: true,
    },
    selectbank: {
        type: String,
        required: true,
    },
    accounttype: {
        type: String,
        required: true,
    },
    accountholder: {
        type: String,
        required: true,
    },
    accountnumber: {
        type: Number,
        required: true,
    },
    ifcs: {
        type: String,
        required: true,
    },
    employeeid: {
        type: String,
        required: true,
    },
    joiningdate: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    employeetype: {
        type: String,
        required: true,
    },
    previouscompany: {
        type: String,
        required: true,
    },
    pre_exp_startdate: {
        type: String,
        required: true,
    },
    pre_exp_enddate: {
        type: String,
        required: true,
    },
    silarra_exp_startdate: {
        type: String,
        required: true,
    },
    silarra_exp_enddate: {
        type: String,
        required: true,
    },
    joiningctc: {
        type: String,
        required: true,
    },
    prejoiningctc: {
        type: String,
        required: true,
    },
    universityname: {
        type: String,
        required: true,
    },
    collegename: {
        type: String,
        required: true,
    },
    typeofdegree: {
        type: String,
        required: true,
    },
    graduatedyear: {
        type: String,
        required: true,
    },
    collegeyearfrom: {
        type: String,
        required: true,
    },
    collegeyeartill: {
        type: String,
        required: true,
    },
    graduated: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeedataSchema);