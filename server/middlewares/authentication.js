const { User } = require('../models/index')
const { verifyToken } = require("../helpers/jwt")

const authentication = async(req, res, next) => {
    const { access_token } = req.headers 
    try {
        if(!access_token) {
            throw({name: 'InvalidToken', message: 'Invalid Token'})
        }

        const payload = verifyToken(access_token)

        const user = await User.findOne({where: {id: payload.id}})
        
        if(!user) {
            throw({name: 'InvalidToken', message: 'Invalid Token'})
        }

        req.user = payload
        
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication