const errorHandler = async(error, req, res, next) => {
    let status = 500
    let message = 'Internal Server Error'
    let name = error.name
    switch(name) {
        case 'SequelizeUniqueConstraintError':
        case 'SequelizeValidationError':
            status = 400;
            message = error.errors[0].message;
            break;
        case 'InvalidEmailPassword':
            status = 400;
            message = error.message
        case 'InvalidToken':
            status = 401;
            message = error.message
        case 'JsonWebTokenError':
            status = 401;
            message = 'Invalid Token'
        case 'ContactNotFound':
            status = 404;
            message = error.message
        case 'Unauthorized':
            status = 403;
            message = error.message
    }

    res.status(status).json({message})
}

module.exports = errorHandler