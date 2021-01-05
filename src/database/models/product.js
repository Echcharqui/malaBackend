const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  rating: {
    type: String,
    require: true,
    default: null
  },
  numReviews: {
    type: Number,
    require: true,
    default: 0
  },
  images: [{
    type: String,
    require: true
  }],
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  countInStock: {
    type: Number,
    require: true,
    default: 0
  },
  price: {
    type: Number,
    require: true,
    default: 0
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  vues: {
    type: Number,
    require: true,
    default: 0
  },
  likes: {
    type: Number,
    require: true,
    default: 0
  }

}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = { Product }
