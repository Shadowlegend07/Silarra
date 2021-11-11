var express = require("express");
var router = express.Router();

const authRoute = require("../api/auth/auth.controller");
const employeeRoute = require("../api/employee/employee.route");

router.use("/admission", authRoute);
router.use("/employee", employeeRoute);

module.exports = router;