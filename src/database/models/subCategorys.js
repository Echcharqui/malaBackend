const mongoose = require('mongoose')

const subCategorySchema = mongoose.Schema({
  belongTo: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  subCategoryName: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

module.exports = { SubCategory }
