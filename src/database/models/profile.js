const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  },
  avatar: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    default: null
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  facebookIsVerifyed: {
    type: Boolean,
    default: false
  },
  twitterIsVerifyed: {
    type: Boolean,
    default: false
  },
  phoneNumberIsVerifyed: {
    type: Boolean,
    default: false
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User'
    }
  ],
  followersNum: {
    type: Number,
    default: 0
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  productsNum: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = { Profile }
