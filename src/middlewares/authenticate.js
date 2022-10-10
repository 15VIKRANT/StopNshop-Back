const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        var decoded = jwt.verify(token, "ketan", function (error, decoded) {
            if (error) return reject(error);
            return resolve(decoded)
        });
    })
}

const authenticate = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(400).send({ message: "Authorization token nor found or incorrect" })
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
        return res.status(400).send({ message: "Authorization token nor found or incorrect" })
    }

    const token = req.headers.authorization.trim().split(" ")[1]
    let decoded;
    try {
        decoded = await verifyToken(token);
    } 
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Authorization token not found or incorrect" })
    }
    console.log("decoded", [decoded, token]);

    req.user = token;
    
    return next();
}

module.exports = authenticate;