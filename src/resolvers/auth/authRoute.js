require('dotenv').config()
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const { User } = require('../../database/models')
const { signUpValidation } = require('../../validation/auth-validation')

const authActions = {
  createUser: async (args) => {


    try {

      await signUpValidation.validateAsync(args.userInputSignUp,{abortEarly:false})

      const userExistence = await User.findOne({email:args.userInputSignUp.email})

      if (userExistence) {
        throw new Error("this email is already in use !")
      } 

      const newUser = new User({
        email: args.userInputSignUp.email,
        password: await bcrypt.hashSync(args.userInputSignUp.password, 12),
      })

      return await newUser.save()
        .then(async user => {
          // generate token
          const token = await JWT.sign({
            _id: user.id,
            email: user._doc.email,
            isAdmin: user._doc.isAdmin,
            isNewUser: user._doc.isNewUser
          }, process.env.JWT_SECRET, { expiresIn: '1h' })

          return {
            ...user._doc,
            _id: user.id,
            token
          }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this User ${err}`)
        })



    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}

module.exports = { authActions }
