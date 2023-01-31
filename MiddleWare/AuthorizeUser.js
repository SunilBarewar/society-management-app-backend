const jwt = require('jsonwebtoken')

const verifyJWTtoken = async (req, res, next) => {
    const token = req.headers['authorization']

    if (token) {
        await jwt.verify(token, process.env.JWT_KEY, (err, valid) => {
            if (err) {
                res.status(401).json({ message: "please provide valid token" })
            } else {
                next();
            }
        });
    }
    else {
        res.status(401).json({message: "please add token with header"})
    }
}

module.exports = verifyJWTtoken