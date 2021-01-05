const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isNewUser: {
    type: Boolean,
    default: true
  },
  emailVerified: {
    type: Boolean,
    required:true,
    default: false
  },

}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
