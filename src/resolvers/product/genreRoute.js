const { Genre } = require('../../database/models')

const genreActions = {
  getGenres: async () => {
    try {
      return await Genre.find()
        .then(Genres => {
          return Genres.map(Genre => {
            return {
              ...Genre._doc,
              _id: Genre.id
            }
          })
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this Genre ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this Genre ${error}`)
    }
  },
  getGenre: async (args) => {
    try {
      return await Genre.findById(args._id)
        .then(Genre => {
          return {
            ...Genre._doc,
            _id: Genre.id
          }
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this Genre ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this Genre ${error}`)
    }
  },
  createGenre: async (args) => {
    try {
      const GenreExist = await Genre.findOne({ genreName: args.genreInput.genreName })

      if (GenreExist) {
        throw new Error('Genre alrady in Exist !')
      } else {
        const newGenre = new Genre({
          genreName: args.genreInput.genreName
        })

        return await newGenre.save()
          .then(Genre => {
            return { ...Genre._doc, _id: Genre.id }
          })
          .catch(err => {
            throw new Error(`Something went wrong while creating this Genre ${err}`)
          })
      }
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  updateGenre: async (args) => {
    try {
      return await Genre.findByIdAndUpdate(
        args.genreInput._id,
        { genreName: args.genreInput.genreName },
        { new: true })
        .then(Genre => {
          return { ...Genre._doc, _id: Genre.id }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this Genre ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  deleteGenre: async (args) => {
    try {
      return await Genre.findByIdAndDelete(args.genreInput._id)
        .then(Genre => {
          return { ...Genre._doc, _id: Genre.id }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this Genre ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}

module.exports = { genreActions }
