// middleware.js

// Логирование запросов
function logRequest(req, res, next) {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
}

// Блокировка бренда Brand C
function blockSpecialBrand(req, res, next) {
  if (req.params.brand === "Brand C") {
    return res.status(403).send("Unavailable Brand");
  }
  next();
}

module.exports = { logRequest, blockSpecialBrand };
