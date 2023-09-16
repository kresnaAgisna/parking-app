const { User } = require("../models/index")
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static async registerUser(req, res, next) {
        const { email, password, phone, fullName, role } = req.body
        try {
           const newUser = await User.create({email, password, phone, fullName, role})
    
            res.status(201).json({id: newUser.id, email})
        } catch (error) {
            next(error)
        }
    }

    static async loginUser(req, res, next) {
        const { email, password } = req.body
        console.log(email, password)
        try {
            if(!email || !password) {
                throw({name: 'InvalidEmailPassword', message: 'Invalid Email/Password'})
            }
            const user = await User.findOne({where: {email}})

            if(!user || !comparePassword(password, user.password)) {
                throw({name: 'InvalidEmailPassword', message: 'Invalid Email/Password'})
            }
            const access_token = signToken({id: user.id, role: user.role})

            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController