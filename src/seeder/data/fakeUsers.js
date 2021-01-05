const bcrypt = require('bcryptjs')

const passwords = bcrypt.hashSync('123456', 10)

const fakeUsers = [
  {
    email: 'echcharqui.dev@gmail.com',
    password: passwords,
    firstName: 'hamza',
    lastName: 'Echcharqui',
    isAdmin: true
  },
  {
    email: 'echcharqui@gmail.com',
    password: passwords,
    firstName: 'bob',
    lastName: 'Kreator'
  },
  {
    email: 'stephany@gmail.com',
    password: passwords,
    firstName: 'stephany',
    lastName: 'fatrouni'
  }
]

module.exports = { fakeUsers }
