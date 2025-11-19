// error.middleware.js

const errorResponder = (err, req, res, next) => {
  res.header("Content-Type", "application/json");
  const statusCode = err.statusCode || 500;

  res.status(statusCode).send({
    message: err.message,
  });
};

module.exports = { errorResponder };
