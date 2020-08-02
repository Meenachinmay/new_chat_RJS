const Joi = require('@hapi/joi');

// @METHOD to validate the incoming post request to add a new user to database
exports.validateUserForSignUp = (user) => {
    const validateUserSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return validateUserSchema.validate(user)
}

// @METHOD to validate the incoming post request to login a user
exports.validateUserForLogin = (user) => {
    const validateUserSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return validateUserSchema.validate(user)
}