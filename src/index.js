const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./user/user.router'); // Імпортуємо наш новий файл

const app = express();

app.use(bodyParser.json()); // Щоб розуміти JSON від Postman
app.use(userRouter);       // Підключаємо маршрути користувачів

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});