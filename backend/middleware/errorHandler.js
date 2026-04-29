/**
 * Global Error Handler Middleware
 * Catches all errors thrown in the app and sends structured error responses.
 * Differentiates between development and production error details.
 */

/**
 * Custom error class with status code support
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Handle Mongoose CastError (invalid ObjectId)
 */
const handleCastError = (err) => {
  const message = `Invalid value '${err.value}' for field '${err.path}'`;
  return new AppError(message, 400);
};

/**
 * Handle Mongoose Duplicate Key Error (code 11000)
 */
const handleDuplicateKeyError = (err) => {
  const field = Object.keys(err.keyValue)[0];
  const value = err.keyValue[field];
  const message = `An account with ${field} '${value}' already exists. Please use a different ${field}.`;
  return new AppError(message, 409);
};

/**
 * Handle Mongoose Validation Errors
 */
const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input: ${errors.join('. ')}`;
  return new AppError(message, 400);
};

/**
 * Handle JWT invalid token error
 */
const handleJWTError = () => {
  return new AppError('Invalid token. Please log in again.', 401);
};

/**
 * Handle JWT expired token error
 */
const handleJWTExpiredError = () => {
  return new AppError('Your session has expired. Please log in again.', 401);
};

/**
 * Send detailed error response in development
 */
const sendErrorDev = (err, res) => {
  res.status(err.statusCode || 500).json({
    success: false,
    status: err.status || 'error',
    message: err.message,
    error: err,
    stack: err.stack
  });
};

/**
 * Send limited error response in production
 */
const sendErrorProd = (err, res) => {
  // Operational errors: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message
    });
  } else {
    // Programming/unknown errors: don't leak details
    console.error('💥 UNEXPECTED ERROR:', err);
    res.status(500).json({
      success: false,
      status: 'error',
      message: 'Something went wrong. Please try again later.'
    });
  }
};

/**
 * Main error handling middleware
 * Express identifies this as an error handler due to the 4 parameters.
 */
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'production') {
    let error = { ...err, message: err.message };

    // Transform known error types into operational AppErrors
    if (err.name === 'CastError') error = handleCastError(err);
    if (err.code === 11000) error = handleDuplicateKeyError(err);
    if (err.name === 'ValidationError') error = handleValidationError(err);
    if (err.name === 'JsonWebTokenError') error = handleJWTError();
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, res);
  } else {
    sendErrorDev(err, res);
  }
};

/**
 * Async handler wrapper to eliminate try-catch blocks in route handlers.
 * Wraps an async function and forwards any errors to the error handler.
 * 
 * @param {Function} fn - Async route handler function
 * @returns {Function} Express middleware with error forwarding
 * 
 * Usage: router.get('/route', asyncHandler(async (req, res) => { ... }));
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = { AppError, errorHandler, asyncHandler };
