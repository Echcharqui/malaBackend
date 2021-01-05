require('colors')
const { DBConnection } = require('../database/config')
const { User, Product, Genre, Category, Brand, SubCategory } = require('../database/models')

const { fakeUsers, fakeProducts, brands, genres, categorys, subCategorys } = require('./data')

DBConnection().then(() => {
  const importFakeUser = async () => {
    try {
      await User.insertMany(fakeUsers)
      console.log('\t-A fake users has been created.'.bgGreen.black)
      process.exit()
    } catch (error) {
      console.error(`\t-Something went wrong while creating fake users \n\t ${error}`.red)
    }
  }

  const importFakeProduct = async () => {
    try {
      await Product.insertMany(fakeProducts)
      console.log('\t-A fake products has been created.'.bgGreen.black)

      process.exit()
    } catch (error) {
      console.error(`\t-Something went wrong while creating fake users \n\t ${error}`.red)
    }
  }

  const importBasic = async () => {
    const generateSubCategory = (category) => {
      const subCategorysArray = []

      for (let j = 0; j < 7; j++) {
        for (let e = 0; e < subCategorys[j].length; e++) {
          subCategorysArray.push({
            belongTo: category[j]._id,
            subCategoryName: subCategorys[j][e]
          })
        }
      }

      return subCategorysArray
    }

    try {
      await Genre.insertMany(genres)
      console.log('\t-A Genres has been created.'.bgGreen.black)

      await Brand.insertMany(brands)
      console.log('\t-A brands has been created.'.bgGreen.black)

      await Category.insertMany(categorys)
        .then(async res => {
          console.log('\t-A categorys has been created.'.bgGreen.black)

          const subCategorysArray = await generateSubCategory(res)

          await SubCategory.insertMany(subCategorysArray)
          console.log('\t-A SubCategory has been created.'.bgGreen.black)
        })

      process.exit()
    } catch (error) {
      console.error(`\t-Something went wrong while creating fake users \n\t ${error}`.red)
    }
  }

  const destroyFakeData = async () => {
    try {
      await User.deleteMany()
      await Product.deleteMany()
      await Genre.deleteMany()
      await Category.deleteMany()
      await SubCategory.deleteMany()
      await Brand.deleteMany()
      console.log('\t-All fake data has been destroyed.'.bgRed.black)
      process.exit()
    } catch (error) {
      console.error(`\t-Something went wrong while destroying the fake users \n\t ${error}`.red)
      process.exit(1)
    }
  }

  if (process.argv[2] === '-iu') {
    importFakeUser()
  } else if (process.argv[2] === '-ip') {
    importFakeProduct()
  } else if (process.argv[2] === '-b') {
    importBasic()
  } else if (process.argv[2] === '-d') {
    destroyFakeData()
  }
})
