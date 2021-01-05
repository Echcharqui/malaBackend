const Schema = `
    type User{
        _id:ID!
        email:String! 
        isAdmin:Boolean
        isNewUser:Boolean
        emailVerified:Boolean
        token:String
        createdAt:String
    }

    input UserInputSignUp {
        email:String!
        password:String!
        passwordConfirmation:String!
    }

    input UserInputSignIn {
        email:String!
        password:String!
    }
    

    type Brand{
        _id:ID!
        brandName:String!
        logo:String
    }

    input BrandInput {
        _id:ID
        brandName:String!
        logo:String
    }

    type Genre{
        _id:ID!
        genreName:String!
    }

    input GenreInput {
        _id:ID
        genreName:String!
    }

    type Category{
        _id:ID!
        categoryName:String!
        subCategorys:[SubCategory!]!
    }

    input CategoryInput {
        _id:ID
        categoryName:String!
    }

    type SubCategory{
        _id:ID!
        belongTo:Category!
        subCategoryName:String!
    }

    input SubCategoryInput {
        _id:ID
        belongTo:ID!
        subCategoryName:String!
    }

    type RootQuery{
        User:User!

        Brands: [Brand!]!
        Brand(_id:ID):Brand!

        Genres:[Genre!]!
        Genre(_id:ID):Genre!

        Categorys:[Category!]!
        Category(_id:ID):Category!

        SubCategorys:[SubCategory!]!
        SubCategory(_id:ID):SubCategory!
    }

    type RootMutation{
        createUser(userInputSignUp:UserInputSignUp):User

        createBrand(brandInput:BrandInput):Brand
        updateBrand(brandInput:BrandInput):Brand
        deleteBrand(brandInput:BrandInput):Brand

        createGenre(genreInput:GenreInput):Genre
        updateGenre(genreInput:GenreInput):Genre
        deleteGenre(genreInput:GenreInput):Genre

        createCategory(categoryInput:CategoryInput):Category
        updateCategory(categoryInput:CategoryInput):Category
        deleteCategory(categoryInput:CategoryInput):Category

        createSubCategory(subCategoryInput:SubCategoryInput):SubCategory
        updateSubCategory(subCategoryInput:SubCategoryInput):SubCategory
        deleteSubCategory(subCategoryInput:SubCategoryInput):SubCategory
    }

    schema {
        query:RootQuery
        mutation:RootMutation
    }
`

module.exports = { Schema }
