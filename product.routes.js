// product.routes.js

const express = require("express");
const router = express.Router();

const products = require("./products");
const { blockSpecialBrand } = require("./middleware");

// Маршрут: вернуть все продукты
router.get("/products", (req, res) => {
  res.json(products);
});

// Маршрут: фильтр по бренду
router.get("/products/:brand", blockSpecialBrand, (req, res) => {
  const { brand } = req.params;
  const filtered = products.filter((p) => p.brand === brand);
  res.json(filtered);
});

// Маршрут: специальная ошибка
router.get("/productswitherror", (req, res) => {
  const err = new Error("processing error");
  err.statusCode = 400;
  throw err;
});

// Доп. задание: получить продукт по ID
router.get("/product/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    const err = new Error("Product not found");
    err.statusCode = 404;
    return next(err);
  }

  res.json(product);
});

module.exports = router;
