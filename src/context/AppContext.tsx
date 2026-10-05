import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, EventPlan, Booking } from '../types';
import { authService } from '../services/authService';
import { eventService } from '../services/eventService';
import { bookingService } from '../services/bookingService';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'booking' | 'match' | 'budget' | 'system';
}

interface AppContextType {
  user: User;
  switchRole: (role: 'customer' | 'vendor' | 'admin') => void;
  login: (email: string) => boolean;
  logout: () => void;
  
  // Saved Vendors
  savedVendorIds: string[];
  toggleSaveVendor: (id: string) => void;
  isSaved: (id: string) => boolean;

  // Comparison
  comparedVendorIds: string[];
  toggleCompareVendor: (id: string) => boolean; // returns false if max reached
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;

  // Active Event
  activeEvent: EventPlan;
  updateActiveEvent: (event: EventPlan) => void;

  // Bookings
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => Booking;
  updateBookingStatus: (id: string, status: Booking['status']) => void;

  // Notifications
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  unreadNotificationsCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const SAVED_VENDORS_KEY = 'vendora_saved_vendors';
const COMPARE_VENDORS_KEY = 'vendora_compare_vendors';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(() => authService.getCurrentUser());
  const [activeEvent, setActiveEvent] = useState<EventPlan>(() => eventService.getCurrentEvent());
  const [bookings, setBookings] = useState<Booking[]>(() => bookingService.getBookings());

  const [savedVendorIds, setSavedVendorIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(SAVED_VENDORS_KEY);
      return stored ? JSON.parse(stored) : ['v-photo-1', 'v-cat-1', 'v-dec-1'];
    } catch {
      return ['v-photo-1', 'v-cat-1'];
    }
  });

  const [comparedVendorIds, setComparedVendorIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(COMPARE_VENDORS_KEY);
      return stored ? JSON.parse(stored) : ['v-photo-1', 'v-photo-2'];
    } catch {
      return ['v-photo-1', 'v-photo-2'];
    }
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      title: 'Booking Confirmed!',
      message: 'Lens & Light Studio has confirmed your wedding photography session for Dec 24, 2026.',
      time: '10m ago',
      read: false,
      type: 'booking',
    },
    {
      id: 'notif-2',
      title: 'AI Smart Match Alert',
      message: 'We discovered 3 new decorators in Pune matching your "Traditional + Modern" aesthetic within budget.',
      time: '2h ago',
      read: false,
      type: 'match',
    },
    {
      id: 'notif-3',
      title: 'Budget Allocation Alert',
      message: 'Your current vendor shortlist is ₹18,500 above target. Click to see AI-recommended savings.',
      time: '1d ago',
      read: true,
      type: 'budget',
    }
  ]);

  // Persist saved vendors
  useEffect(() => {
    try {
      localStorage.setItem(SAVED_VENDORS_KEY, JSON.stringify(savedVendorIds));
    } catch {
      // ignore
    }
  }, [savedVendorIds]);

  // Persist compare vendors
  useEffect(() => {
    try {
      localStorage.setItem(COMPARE_VENDORS_KEY, JSON.stringify(comparedVendorIds));
    } catch {
      // ignore
    }
  }, [comparedVendorIds]);

  const toggleSaveVendor = (id: string) => {
    setSavedVendorIds(prev => 
      prev.includes(id) ? prev.filter(vId => vId !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedVendorIds.includes(id);

  const toggleCompareVendor = (id: string): boolean => {
    if (comparedVendorIds.includes(id)) {
      setComparedVendorIds(prev => prev.filter(vId => vId !== id));
      return true;
    } else {
      if (comparedVendorIds.length >= 4) {
        return false;
      }
      setComparedVendorIds(prev => [...prev, id]);
      return true;
    }
  };

  const removeFromCompare = (id: string) => {
    setComparedVendorIds(prev => prev.filter(vId => vId !== id));
  };

  const clearCompare = () => {
    setComparedVendorIds([]);
  };

  const updateActiveEvent = (event: EventPlan) => {
    setActiveEvent(event);
    eventService.saveCurrentEvent(event);
  };

  const switchRole = (role: 'customer' | 'vendor' | 'admin') => {
    const newUser = authService.switchRole(role);
    setUser(newUser);
  };

  const login = (email: string) => {
    const res = authService.login(email);
    if (res.success && res.user) {
      setUser(res.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    authService.logout();
    setUser(authService.getCurrentUser());
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt'>): Booking => {
    const newBkg = bookingService.createBooking(bookingData);
    setBookings(prev => [newBkg, ...prev]);
    // add notification
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        title: 'Booking Request Submitted',
        message: `Your booking request for ${bookingData.vendorName} (${bookingData.packageName}) was submitted successfully.`,
        time: 'Just now',
        read: false,
        type: 'booking',
      },
      ...prev,
    ]);
    return newBkg;
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    const updated = bookingService.updateStatus(id, status);
    setBookings(updated);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        user,
        switchRole,
        login,
        logout,
        savedVendorIds,
        toggleSaveVendor,
        isSaved,
        comparedVendorIds,
        toggleCompareVendor,
        removeFromCompare,
        clearCompare,
        activeEvent,
        updateActiveEvent,
        bookings,
        addBooking,
        updateBookingStatus,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        unreadNotificationsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
