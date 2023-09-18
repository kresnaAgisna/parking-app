const jwt = require('jsonwebtoken')
// This is not safe for production, use .env to store JWT_SECRET
const JWT_SECRET = 'Halo'


function signToken(obj) {
    return jwt.sign(obj, JWT_SECRET)
}

function verifyToken(accessToken) {
    return jwt.verify(accessToken, JWT_SECRET)
}

module.exports = { signToken, verifyToken}