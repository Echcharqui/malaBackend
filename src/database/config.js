require('colors')
require('dotenv').config()
const mongoose = require('mongoose')

const DBConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log(`\t-Successful connection to ${connect.connection.db.databaseName} database.`.green.underline.bold)
  } catch (error) {
    console.error(`Error: ${error.message}`.red)
    process.exit(1)
  }
}

module.exports = { DBConnection }
