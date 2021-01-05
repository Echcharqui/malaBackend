const joi = require('joi')


    const signUpValidation = joi.object({
        email: joi.string().email().required().messages({
            'email.required': 'the email field is required !',
            'string.email': ' the email is invalid !',
        }),
        password: joi.string().min(6).max(25).required(),
        passwordConfirmation: joi.ref('password'),
    })


module.exports = { signUpValidation }