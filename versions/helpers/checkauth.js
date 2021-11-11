const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "Hello World is Silarra");
        req.userData = decoded;
    } catch (err) {
        return res.status(405).send("Auth Failed");
    }
    next();
};