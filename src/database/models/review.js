const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({

  by: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  },
  rating: {
    type: Number,
    default: 0
  },
  comment: {
    type: String,
    require: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]

}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = { Review }
