const { Brand } = require('../../database/models')

const brandActions = {
  createBrand: async (args) => {
    try {
      const brandExist = await Brand.findOne({ brandName: args.brandInput.brandName })

      if (brandExist) {
        throw new Error('Brand alrady in Exist !')
      } else {
        const newBrand = new Brand({
          brandName: args.brandInput.brandName,
          logo: args.brandInput.logo || ''
        })

        return await newBrand.save()
          .then(brand => {
            return { ...brand._doc, _id: brand.id }
          })
          .catch(err => {
            throw new Error(`Something went wrong while creating this Brand ${err}`)
          })
      }
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  updateBrand: async (args) => {
    try {
      return await Brand.findByIdAndUpdate(
        args.brandInput._id,
        { brandName: args.brandInput.brandName, logo: args.brandInput.logo || '' },
        { new: true })
        .then(brand => {
          return { ...brand._doc, _id: brand.id }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this Brand ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  deleteBrand: async (args) => {
    try {
      return await Brand.findByIdAndDelete(args.brandInput._id)
        .then(brand => {
          return { ...brand._doc, _id: brand.id }
        })
        .catch(err => {
          throw new Error(`Something went wrong while creating this Brand ${err}`)
        })
    } catch (error) {
      throw new Error(`${error}`)
    }
  },
  getBrands: async () => {
    try {
      return await Brand.find()
        .then(brands => {
          return brands.map(brand => {
            return {
              ...brand._doc,
              _id: brand.id
            }
          })
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this Brand ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this Brand ${error}`)
    }
  },
  getBrand: async (args) => {
    try {
      return await Brand.findById(args._id)
        .then(brand => {
          return {
            ...brand._doc,
            _id: brand.id
          }
        })
        .catch(err => {
          throw new Error(`Something went wrong while fetching this Brand ${err}`)
        })
    } catch (error) {
      throw new Error(`Something went wrong while fetching this Brand ${error}`)
    }
  }
}

module.exports = { brandActions }
