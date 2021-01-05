const { SubCategory, Category } = require('../../database/models')

const fetchCategory = async (categoryID) => {
  try {
    const categorys = await Category.findById(categoryID)

    return {
      ...categorys._doc,
      _id: categorys.id
    }
  } catch (error) {
    throw new Error(error)
  }
}

const SubCategoryAction = {
  getSubCategorys: async () => {
    try {
      return await SubCategory.find()
        .then(SubCategorys => {
          return SubCategorys.map(SubCategory => {
            return {
              ...SubCategory._doc,
              _id: SubCategory.id,
              belongTo: fetchCategory.bind(this, SubCategory.belongTo.toString())
            }
          })
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this SubCategorys ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this SubCategorys ${error}`)
    }
  },
  getSubCategory: async (args) => {
    try {
      return await SubCategory.findById(args._id)
        .then(SubCategory => {
          return {
            ...SubCategory._doc,
            _id: SubCategory.id,
            belongTo: fetchCategory.bind(this, SubCategory.belongTo.toString())
          }
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this SubCategoryAction ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this SubCategoryAction ${error}`)
    }
  },
  createSubCategory: async (args) => {
    try {
      const SubCategoryExist = await SubCategory.findOne({ subCategoryName: args.subCategoryInput.subCategoryName })

      if (SubCategoryExist) {
        throw new Error('SubCategory alrady in Exist !')
      } else {
        const newSubCategory = new SubCategory({
          belongTo: args.subCategoryInput.belongTo,
          subCategoryName: args.subCategoryInput.subCategoryName
        })

        return await newSubCategory.save()
          .then(SubCategory => {
            return { ...SubCategory._doc, _id: SubCategory.id, belongTo: SubCategory._doc.belongTo.toString() }
          })
          .catch(err => {
            throw new Error(`Something went wrong while creating this SubCategory ${err}`)
          })
      }
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  updateSubCategory: async (args) => {
    try {
      return await SubCategory.findByIdAndUpdate(
        args.subCategoryInput._id,
        { subCategoryName: args.subCategoryInput.subCategoryName },
        { new: true })
        .then(SubCategory => {
          return { ...SubCategory._doc, _id: SubCategory.id, belongTo: SubCategory._doc.belongTo.toString() }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this SubCategory ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  deleteSubCategory: async (args) => {
    try {
      return await SubCategory.findByIdAndDelete(args.subCategoryInput._id)
        .then(SubCategory => {
          return { ...SubCategory._doc, _id: SubCategory.id, belongTo: SubCategory._doc.belongTo.toString() }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this SubCategory ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}

module.exports = { SubCategoryAction }
