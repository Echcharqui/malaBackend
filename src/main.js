require('dotenv').config()
require('colors')
const express = require('express')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const { DBConnection } = require('./database/config')
const { Schema } = require('./graphQL/schemas')
const { authActions } = require('./resolvers/auth/authRoute')
const { brandActions } = require('./resolvers/product/brandRoute')
const { genreActions } = require('./resolvers/product/genreRoute')
const { CategoryAction } = require('./resolvers/product/categoryRoute')
const { SubCategoryAction } = require('./resolvers/product/subCategoryRoute')

const port = process.env.API_PORT

// database connection
DBConnection()

const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.redirect('/graphQL')
})
app.use('/graphQL', graphqlHTTP({
  schema: buildSchema(Schema),
  rootValue: {
    // Users: authActions.getUsers,
    createUser: authActions.createUser,
    /// ///////////////////////////////
    Brands: brandActions.getBrands,
    Brand: brandActions.getBrand,
    createBrand: brandActions.createBrand,
    updateBrand: brandActions.updateBrand,
    deleteBrand: brandActions.deleteBrand,
    /// ///////////////////////////////
    Genres: genreActions.getGenres,
    Genre: genreActions.getGenre,
    createGenre: genreActions.createGenre,
    updateGenre: genreActions.updateGenre,
    deleteGenre: genreActions.deleteGenre,
    /// ///////////////////////////////
    Categorys: CategoryAction.getCategorys,
    Category: CategoryAction.getCategory,
    createCategory: CategoryAction.createCategory,
    updateCategory: CategoryAction.updateCategory,
    deleteCategory: CategoryAction.deleteCategory,
    /// //////////////////////////////
    SubCategorys: SubCategoryAction.getSubCategorys,
    SubCategory: SubCategoryAction.getSubCategory,
    createSubCategory: SubCategoryAction.createSubCategory,
    updateSubCategory: SubCategoryAction.updateSubCategory,
    deleteSubCategory: SubCategoryAction.deleteSubCategory
    /// //////////////////////////////
  },
  graphiql: true
}))

app.listen(port, '0.0.0.0', () => {
  console.log(`\t-API start and runing on port ${port} ...`.cyan.bold)
})
