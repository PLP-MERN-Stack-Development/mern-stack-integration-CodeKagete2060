// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack || err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

module.exports = errorHandler;
