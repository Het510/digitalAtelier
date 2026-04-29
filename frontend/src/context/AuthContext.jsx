import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import API from '../services/api';

/**
 * Authentication Context
 * Manages user authentication state, login/register/logout operations,
 * and token persistence using localStorage.
 */
const AuthContext = createContext(null);

/**
 * Custom hook to access auth context
 * @returns {object} Auth context value
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * AuthProvider Component
 * Wraps the application and provides authentication state and methods.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('da_token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Persist token to localStorage and update axios default headers
   */
  const saveToken = useCallback((newToken) => {
    if (newToken) {
      localStorage.setItem('da_token', newToken);
      API.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    } else {
      localStorage.removeItem('da_token');
      delete API.defaults.headers.common['Authorization'];
    }
    setToken(newToken);
  }, []);

  /**
   * Verify existing token on app mount
   * Restores user session if token is still valid
   */
  useEffect(() => {
    const verifyExistingToken = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Set the authorization header for the verification request
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        const response = await API.get('/auth/me');
        
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          // Token is invalid, clear it
          saveToken(null);
          setUser(null);
        }
      } catch (err) {
        console.warn('Token verification failed:', err.message);
        saveToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyExistingToken();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Register a new user account
   * @param {object} userData - { firstName, lastName, email, password, shopName }
   * @returns {object} { success, user, error }
   */
  const register = async (userData) => {
    setError(null);
    setLoading(true);

    try {
      const response = await API.post('/auth/register', userData);
      
      if (response.data.success) {
        saveToken(response.data.token);
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Log in with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {object} { success, user, error }
   */
  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      const response = await API.post('/auth/login', { email, password });

      if (response.data.success) {
        saveToken(response.data.token);
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Log out the current user
   * Clears token and user state
   */
  const logout = () => {
    saveToken(null);
    setUser(null);
    setError(null);
  };

  /**
   * Update user profile information
   * @param {object} updateData - Fields to update
   * @returns {object} { success, user, error }
   */
  const updateProfile = async (updateData) => {
    setError(null);

    try {
      const response = await API.put('/auth/me', updateData);

      if (response.data.success) {
        setUser(response.data.user);
        return { success: true, user: response.data.user };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Profile update failed.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  /**
   * Change user's password
   * @param {string} currentPassword - Current password
   * @param {string} newPassword - New password
   * @returns {object} { success, error }
   */
  const changePassword = async (currentPassword, newPassword) => {
    setError(null);

    try {
      const response = await API.put('/auth/change-password', {
        currentPassword,
        newPassword
      });

      if (response.data.success) {
        // Update token since password change invalidates old tokens
        saveToken(response.data.token);
        setUser(response.data.user);
        return { success: true };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Password change failed.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  /**
   * Delete user account permanently
   * @returns {object} { success, error }
   */
  const deleteAccount = async () => {
    setError(null);

    try {
      const response = await API.delete('/auth/me');

      if (response.data.success) {
        saveToken(null);
        setUser(null);
        return { success: true };
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Account deletion failed.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Context value — all auth state and methods
  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!user && !!token,
    register,
    login,
    logout,
    updateProfile,
    changePassword,
    deleteAccount,
    clearError: () => setError(null)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
