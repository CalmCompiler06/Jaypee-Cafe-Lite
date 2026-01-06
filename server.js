const { Console } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const stock = {
  "Tea": true,
  "Coffee": true,
  "Cold Coffee": true,
  "Chole Bhature": true,
  "Pizza": true,
  "Fries": false,
  "Burger": true,
  "Red Sauce Pasta": true,
  "Paneer Patties": true,
  "Samosa": true,
  "Noodles": true,
  "Vada Pav": true,
  "Rajma Rice": true,
  "Aaloo Parantha": false,
  "Dosa": true,
  "Matar Kulcha": true,
  "Boiled Eggs": true,
  "Egg Roll": true,
  "Papdi Chaat": false,
  "Chips": true,
  "Bournvita": true,
  "Maggie": true,
  "Schezwan Maggie": true,
  "Coke": true,
  "Pepsi": true,
  "Limca": true,
  "Sprite": true,
  "7UP": true,
  "Bisleri": true,
  "Oreo Shake": true,
  "Strawberry Shake": true,
  "Vanilla Shake": true,
  "Cold Coffee with Ice Cream": true,
  "Pineapple Shake": true,
  "Banana Shake": true,
  "Lassi": true,
  "Chaas": true,
  "Ice Cream (Chocolate)": true,
  "Ice Cream (Vanilla)": true,
  "Ice Cream (Strawberry)": true
};

app.get('/api/stock', (req, res) => {
  res.json(stock);
});

const meals = [
  "Chole Bhature", "Rajma Rice", "Dosa", "Matar Kulcha",
  "Aaloo Parantha", "Egg Roll", "Boiled Eggs", "Red Sauce Pasta"
];

const snacks = [
  "Fries", "Samosa", "Paneer Patties", "Burger", "Vada Pav", "Papdi Chaat"
];

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

app.get('/api/featuredDishes', (req, res) => {
  // Filter meals and snacks to include only available items
  const availableMeals = meals.filter(item => stock[item]);
  const availableSnacks = snacks.filter(item => stock[item]);

  const featured = [
    ...getRandomItems(availableMeals, 2),
    ...getRandomItems(availableSnacks, 1)
  ];
  res.json({ dishes: featured });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});