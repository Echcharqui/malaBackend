const genres = [
  {
    genreName: 'hommes'
  },
  {
    genreName: 'femmes'
  },
  {
    genreName: 'enfants'
  }
]

const brands = [
  { brandName: 'Nike' },
  { brandName: 'Addidas' },
  { brandName: 'Hermes' },
  { brandName: 'Louis Vuitton' },
  { brandName: 'Cartier' },
  { brandName: 'Rolex' },
  { brandName: 'Uniqlo' },
  { brandName: 'H&M' },
  { brandName: 'Zara' },
  { brandName: 'Gucci' },
  { brandName: 'Adidas' },
  { brandName: 'Chanel' },
  { brandName: 'Swarovski' },
  { brandName: 'Burberry' },
  { brandName: 'Tom Ford' },
  { brandName: 'Lululemon' },
  { brandName: 'The North Face' },
  { brandName: 'Victoria’s Secret' },
  { brandName: 'Prada' },
  { brandName: 'New Balance' },
  { brandName: 'Michael Kors' },
  { brandName: 'Chow Tai Fook' },
  { brandName: 'Under Armour' },
  { brandName: 'TJ Maxx' },
  { brandName: 'Tiffany & Co.' },
  { brandName: 'Coach' },
  { brandName: 'Foot Locker Inc.' },
  { brandName: 'Levi’s' },
  { brandName: 'C&A' },
  { brandName: 'Next' },
  { brandName: 'Chopard' },
  { brandName: 'Dolce & Gabbana' },
  { brandName: 'Patek Philippe' },
  { brandName: 'Moncler' },
  { brandName: 'Christian Louboutin' },
  { brandName: 'Omega' },
  { brandName: 'Ray Ban' },
  { brandName: 'Salvatore Ferragamo' },
  { brandName: 'Vera Wang' },
  { brandName: 'Dior' },
  { brandName: 'Hugo Boss' },
  { brandName: 'Armani' },
  { brandName: 'Nine West' },
  { brandName: 'Fendi' },
  { brandName: 'Skechers' },
  { brandName: 'Old Navy' },
  { brandName: 'IWC Schaffhausen' },
  { brandName: 'Primark' },
  { brandName: 'Max Mara' },
  { brandName: 'Polo Ralph Lauren' },
  { brandName: 'Manolo Blahnik' },
  { brandName: 'Audemars Piguet' },
  { brandName: 'Diesel' },
  { brandName: 'Calvin Klein' },
  { brandName: 'Net-a-Porter' },
  { brandName: 'Furla' },
  { brandName: 'GAP' },
  { brandName: 'Longines' },
  { brandName: 'Forever 21' },
  { brandName: 'Steve Madden' },
  { brandName: 'Stuart Weitzman' },
  { brandName: 'Urban Outfitters' },
  { brandName: 'Longchamp' },
  { brandName: 'Puma' },
  { brandName: 'Sisley' },
  { brandName: 'Lao Feng Xiang' },
  { brandName: 'Tissot' },
  { brandName: 'Tommy Hilfiger' },
  { brandName: 'Zalando' },
  { brandName: 'Nordstrom' },
  { brandName: 'ASOS' },
  { brandName: 'Tory Burch' },
  { brandName: 'Lacoste' },
  { brandName: 'Topshop' },
  { brandName: 'G-star' },
  { brandName: 'Aldo' },
  { brandName: 'Oakley' },
  { brandName: 'Cole Haan' },
  { brandName: 'Jimmy Choo' },
  { brandName: 'Macy’s' },
  { brandName: 'Valentino' },
  { brandName: 'Elie Taharie' },
  { brandName: 'Jaeger-Le Coultre' },
  { brandName: 'Fossil' },
  { brandName: 'Vacheron Constantin' },
  { brandName: 'American Eagle Outfitters' },
  { brandName: 'Elie Saab' },
  { brandName: 'Patagonia' },
  { brandName: 'Ted Baker' },
  { brandName: 'Bogner' },
  { brandName: 'New Look' },
  { brandName: 'Asics' },
  { brandName: 'Breguet' },
  { brandName: 'ESCADA' },
  { brandName: 'Tag Heuer' },
  { brandName: 'Banana Republic' },
  { brandName: 'Desigual' },
  { brandName: 'Swatch' },
  { brandName: 'Cavalli' },
  { brandName: 'Brunello Cucinelli' },
  { brandName: 'TOD’s' }
]

const categorys = [
  {
    categoryName: 'LES HAUTS'
  },
  {
    categoryName: 'LES BAS'
  },
  {
    categoryName: 'LES VESTES ET LES COSTUMES'
  },
  {
    categoryName: "LES VÊTEMENTS D'EXTÉRIEUR"
  },
  {
    categoryName: 'LINGERIE ET NUIT'
  },
  {
    categoryName: 'LES CHAUSSURES'
  },
  {
    categoryName: 'LES ACCESSOIRES'
  }
]

const subCategorys = [
  [
    'TEE-SHIRTS',
    'CHEMISES',
    'POLOS',
    'SWEATSHIRTS',
    'MAILLES',
    'HOODIES',
    'Pulls',
    'Tuniques',
    'Gilets'
  ],

  [
    'JEANS',
    'PANTALONS ',
    'Jupes'
  ],

  [
    'VESTES',
    'COSTUMES'
  ],

  [
    'MANTEAUX',
    'BLOUSONS',
    'TRENCHS',
    'Robes',
    'Tabliers',
    'Maillots de bain'
  ],

  [
    'Soutien-gorges et Bustiers',
    'Culottes, Panty',
    'Culottes Gainantes et Maintien',
    'Chemises de jour',
    'Fonds de robes, Jupons',
    'Chemises de nuit',
    'Pyjamas',
    'Robe de chambre, Peignoir',
    'Bas, Collants, Chaussettes',
    'chaussettes femme'
  ],

  [
    'CHAUSSURES HABILLÉES',
    'CHAUSSURES DÉCONTRACTÉES',
    'SNEAKERS',
    'Ballerines',
    'Escarpins',
    'Derbies et Baskets mode',
    'Mocassins, Sans-gênes',
    'Chaussures confort',
    'Bottes, Bottines',
    'Chaussures de sport',
    'Mules, Sabots, Sandales',
    'Chaussons, Pantoufles',
    'bottes hiver femme',
    'bottes plates femme'
  ],

  [
    'CRAVATES',
    'NOEUDS PAPILLONS',
    'CEINTURES',
    'GANTS',
    'SACS',
    'PARFUMS',
    'MONTRES',
    "D'ÉCHARPES",
    'PETITE MAROQUINERIE',
    'LUNETTES',
    'Bijoux, Boites à bijoux',
    'Echarpes, Foulards, Gants, Bonnets et Chapeaux',
    'Sacs, Cabas, Paniers et Chariots de marché'
  ]

]

module.exports = { genres, brands, categorys, subCategorys }
