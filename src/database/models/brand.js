const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
  brandName: {
    type: String,
    required: true
  },
  logo: {
    type: String
  }
}, {
  timestamps: true
})

const Brand = mongoose.model('Brand', brandSchema)

module.exports = { Brand }
