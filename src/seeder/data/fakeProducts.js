const mongoose = require('mongoose')

const fakeProducts = [
  {
    owner: mongoose.Types.ObjectId('5fe9c9abd8d32325e2e73f0c'),
    name: 'Paksh Capitol',
    description: `About this item
        This beautiful glass 23.75oz Whiskey Container with glass stopper can store more than just wine, whiskey, brandy, and other libations; you can also use the glass carafe to sophisticatedly store fresh juices, water, mouthwash, and other thin liquids!
        Our exquisite wine decanter features thick and luminous Italian-crafted glass along with a glass geometric stopper. The sturdy glass on the whisky decanter preserves your beverage's crisp, rich texture for a fresh taste every time.
        Our bourbon decanter is designed with sloped sides for a controlled grip that makes holding it easy. The wine pourer also dawns a weighted base to keep it steady on tables and other flat surfaces.
        The included large stopper on the port decanter is easy to grasp and remove and protects the contents in the bottle from evaporating.The glass stopper on the wine carafe features a plastic tip at the contact point for an air-tight fit.
        Smooth sides make the water decanter ideal for adding an engraved monogram for personalization! Our glass bottle with stopper also makes a fantastic gift idea for festive occasions such as Christmas, holidays, bachelor parties, weddings, and housewarmings. Dimensions 10.5" x 5.5" x 3"`,
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/81ONc6cUcsL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/91gZaz-Wf%2BL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81wTMoeyU1L._AC_SL1500_.jpg'
    ],
    for: 'homme',
    brand: 'Paksh Novelty',
    category: 'drinks',
    countInStock: 10,
    price: 19.99
  },
  {
    owner: mongoose.Types.ObjectId('5fe9c9abd8d32325e2e73f0e'),
    name: 'Dopethrone',
    description: 'Includes FREE MP3 version of this album. Provided by Amazon Digital Services LLC. Terms and Conditions. Does not apply to gift orders. Complete your purchase to save the MP3 version to your music library',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/613xjc58ioL._SL1000_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71WpZnFDKXL._SL1093_.jpg'
    ],
    for: 'any',
    brand: 'Electric Wizard ',
    category: 'music',
    countInStock: 6,
    price: 13.99
  },
  {
    owner: mongoose.Types.ObjectId('5fe9c9abd8d32325e2e73f0d'),
    name: 'Come My Fanatics',
    description: 'The Auto-Rip however is a different story. It is horrendous. Even though Come My Fanatics... comes with Electric Wizard’s debut album as a bonus, I was worried I made a mistake buying this album when listening to the download. It sounds like it was recorded in a brown paper bag. It’s flat and very compressed. The vinyl sounds so much better that I can get away with keeping a five star rating.',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/81ONc6cUcsL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/91gZaz-Wf%2BL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81wTMoeyU1L._AC_SL1500_.jpg'
    ],
    for: 'any',
    brand: 'Electric Wizard ',
    category: 'music',
    countInStock: 1,
    price: 17.20
  },
  {
    owner: mongoose.Types.ObjectId('5fe9c9abd8d32325e2e73f0d'),
    name: 'Whiskey Decanter for Scotch Liquor Bourbon or Wine - 750ml',
    description: `Lefonte whiskey decanter dispenser is perfect for any home bar or office bar.
        Elegantly display and pour your whiskey scotch bourbon wine or water.
        Lead free. Capacity: 750ml`,
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/71EYzKiOvZL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71yZVaHQTnL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71gC6JcyZDL._AC_SL1500_.jpg'
    ],
    for: 'homme',
    brand: 'Lefonte',
    category: 'drinks',
    countInStock: 20,
    price: 14.89
  }
]

module.exports = { fakeProducts }
