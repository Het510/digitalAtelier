const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Authentication Middleware
 * Protects routes by verifying JWT tokens from the Authorization header.
 * Attaches the authenticated user object to req.user for downstream use.
 */
const protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header (Bearer scheme)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // If no token is found, deny access
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No authentication token provided. Please log in.'
    });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'digital-atelier-secret-key-2024');

    // Find the user associated with the token
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'The user associated with this token no longer exists.'
      });
    }

    // Check if user changed password after the token was issued
    if (user.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        success: false,
        message: 'Password was recently changed. Please log in again.'
      });
    }

    // Grant access — attach user to the request
    req.user = user;
    next();
  } catch (error) {
    // Handle specific JWT errors
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid authentication token. Please log in again.'
      });
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Your session has expired. Please log in again.'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Authentication error. Please try again.'
    });
  }
};

/**
 * Role-based Authorization Middleware
 * Restricts access to users with specific roles.
 * Must be used AFTER the protect middleware.
 * 
 * @param  {...string} roles - Allowed roles (e.g., 'admin', 'user')
 * @returns {Function} Express middleware function
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required before authorization check.'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Role '${req.user.role}' is not authorized for this action.`
      });
    }

    next();
  };
};

module.exports = { protect, authorize };
