import { createContext, useContext, useState, useCallback } from 'react';

/**
 * Notification Context
 * Provides a global notification/toast system for success, error, warning, and info messages.
 */
const NotificationContext = createContext(null);

/**
 * Custom hook to access notification methods
 * @returns {object} Notification context value
 */
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

// Auto-incrementing ID for notifications
let notificationId = 0;

/**
 * NotificationProvider Component
 * Manages a stack of toast notifications with auto-dismiss.
 */
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  /**
   * Remove a notification by ID
   */
  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  /**
   * Add a new notification
   * @param {string} message - Notification message
   * @param {string} type - 'success' | 'error' | 'warning' | 'info'
   * @param {number} duration - Auto-dismiss duration in ms (default: 4000)
   */
  const addNotification = useCallback((message, type = 'info', duration = 4000) => {
    const id = ++notificationId;

    const notification = {
      id,
      message,
      type,
      createdAt: Date.now()
    };

    setNotifications((prev) => [...prev, notification]);

    // Auto-dismiss after duration
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, [removeNotification]);

  // Convenience methods for each notification type
  const success = useCallback((message, duration) => addNotification(message, 'success', duration), [addNotification]);
  const error = useCallback((message, duration) => addNotification(message, 'error', duration || 6000), [addNotification]);
  const warning = useCallback((message, duration) => addNotification(message, 'warning', duration), [addNotification]);
  const info = useCallback((message, duration) => addNotification(message, 'info', duration), [addNotification]);

  /**
   * Clear all active notifications
   */
  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
    clearAll
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
