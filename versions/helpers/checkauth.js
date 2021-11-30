const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        if (!req.headers["authorization"])
            return res.status(405).send("Token Missing");

        const token = req.headers.authorization.split(" ")[1];
        //const decoded = jwt.verify(token, "Hello World is Silarra");
        //req.userData = decoded;

        jwt.verify(token, "Hello World is Silarra", (err, payload) => {
            if (err) {
                const message =
                    err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
                return next(createError.Unauthorized(message));
            }
            req.payload = payload;
            console.log(req.payload);
            next();
        });
    } catch (err) {
        return res.status(405).send("Auth Failed");
    }
};