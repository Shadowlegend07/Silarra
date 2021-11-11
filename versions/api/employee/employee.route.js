var express = require("express");
var router = express.Router();

const employeeRoute = require("./employee.controller");

router.use("/", employeeRoute);

module.exports = router;