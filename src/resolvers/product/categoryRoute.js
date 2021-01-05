const { Category, SubCategory } = require('../../database/models')

const fetchSubCategorys = async (categoryID) => {
  try {
    const subCategorys = await SubCategory.find({ belongTo: categoryID })

    return subCategorys.map(SubCategory => {
      return {
        ...SubCategory._doc,
        _id: SubCategory.id,
        belongTo: SubCategory._doc.belongTo.toString()
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

const CategoryAction = {
  getCategorys: async () => {
    try {
      return await Category.find()
        .then(Categorys => {
          return Categorys.map(Category => {
            return {
              ...Category._doc,
              _id: Category.id,
              subCategorys: fetchSubCategorys.bind(this, Category.id)
            }
          })
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this Category ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this Category ${error}`)
    }
  },
  getCategory: async (args) => {
    try {
      return await Category.findById(args._id)
        .then(Category => {
          return {
            ...Category._doc,
            _id: Category.id,
            subCategorys: fetchSubCategorys.bind(this, Category.id)
          }
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this Category ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this Category ${error}`)
    }
  },
  createCategory: async (args) => {
    try {
      const CategoryExist = await Category.findOne({ categoryName: args.categoryInput.categoryName })

      if (CategoryExist) {
        throw new Error('Category alrady in Exist !')
      } else {
        const newCategory = new Category({
          categoryName: args.categoryInput.categoryName
        })

        return await newCategory.save()
          .then(Category => {
            return { ...Category._doc, _id: Category.id }
          })
          .catch(err => {
            throw new Error(`Something went wrong while creating this Category ${err}`)
          })
      }
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  updateCategory: async (args) => {
    try {
      return await Category.findByIdAndUpdate(
        args.categoryInput._id,
        { categoryName: args.categoryInput.categoryName },
        { new: true })
        .then(Category => {
          return { ...Category._doc, _id: Category.id }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this Category ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  deleteCategory: async (args) => {
    try {
      return await Category.findByIdAndDelete(args.categoryInput._id)
        .then(Category => {
          return { ...Category._doc, _id: Category.id }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this Category ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}

module.exports = { CategoryAction }
