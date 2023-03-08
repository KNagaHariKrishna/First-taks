const jwt = require('jsonwebtoken');
const secret ="hari"

function verifyToken(req, res, next) {
    console.log(req.headers);
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                return res.status(403).json({
                    status: "Failed",
                    message: "Token is not valid",
                });
            }
            req.user = decoded.data;
            next();
        });
    } else {
        res.status(403).json({
            status: "Failed",
            message: "User is not authenticated",
        });
    }
}

module.exports = verifyToken;
