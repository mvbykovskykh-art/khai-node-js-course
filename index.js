// index.js

const express = require("express");
const productRoutes = require("./product.routes");
const { logRequest } = require("./middleware");
const { errorResponder } = require("./error.middleware");

const app = express();
const PORT = 3000;

app.use(logRequest);       // Middleware логирования
app.use(productRoutes);    // Основные маршруты
app.use(errorResponder);   // Обработчик ошибок (в самом конце)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
