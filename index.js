const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Простая проверка — лог запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.send('Response for GET request');
});

// Список продуктов (пример данных)
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

// Маршрут с параметром (фильтрация по brand)
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params;
  const filtered = products.filter(p => p.brand === brand);
  res.json(filtered);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/`);
});
