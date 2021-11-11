var express = require("express");
var router = express.Router();

const userregisterRoute = require("../api/auth/auth.controller");
const employeeRoute = require("../api/employee/employee.route");

router.use("/admission", userregisterRoute);
router.use("/employee", employeeRoute);

module.exports = router;