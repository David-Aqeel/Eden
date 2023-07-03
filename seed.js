require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Shrubs', sortOrder: 10},
    {name: 'Trees', sortOrder: 20},
    {name: 'Fruit-Trees', sortOrder: 30},
    {name: 'Herbs', sortOrder: 40},
    {name: 'Flowers', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Boxwood', emoji: '🌳', category: categories[0], price: 49.99},
    {name: 'Euonymus', emoji: '🏡', category: categories[0], price: 79.99},
    {name: 'Palm Tree', emoji: '🌴', category: categories[1], price: 375.99},
    {name: 'Pine Tree', emoji: '🌲', category: categories[1], price: 475.99},
    {name: 'Apple Tree', emoji: '🍎', category: categories[2], price: 49.99},
    {name: 'Peach Tree', emoji: '🍑', category: categories[2], price: 99.99},
    {name: 'Rosemary', emoji: '🌿', category: categories[3], price: 14.99},
    {name: 'Basil', emoji: '🪴', category: categories[3], price: 7.99},
    {name: 'Mint', emoji: '🍵', category: categories[3], price: 3.99},
    {name: 'Rose', emoji: '🌹', category: categories[4], price: 12.99},
    {name: 'Tulip', emoji: '🌷', category: categories[4], price: 7.99},
    {name: 'Sunflower', emoji: '🌻', category: categories[4], price: 6.99},
    {name: 'Lotus', emoji: '🪷', category: categories[4], price: 14.99},
  ]);

  console.log(items)

  process.exit();
})();