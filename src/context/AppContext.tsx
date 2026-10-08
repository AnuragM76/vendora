import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, EventPlan, Booking } from '../types';
import { authService } from '../services/authService';
import { eventService } from '../services/eventService';
import { bookingService } from '../services/bookingService';
import { savedVendorApi, eventApi, bookingApi } from '../services/api';
import { vendorService } from '../services/vendorService';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'booking' | 'match' | 'budget' | 'system';
}

interface AppContextType {
  user: User | null;
  login: (email: string, password?: string) => Promise<boolean>;
  register: (data: { name: string; email: string; password: string; role: 'customer' | 'vendor' }) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  
  // Saved Vendors
  savedVendorIds: string[];
  toggleSaveVendor: (id: string) => Promise<void>;
  isSaved: (id: string) => boolean;

  // Comparison
  comparedVendorIds: string[];
  toggleCompareVendor: (id: string) => boolean;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;

  // Active Event
  activeEvent: EventPlan;
  updateActiveEvent: (event: EventPlan) => void;
  refreshEvents: () => Promise<void>;

  // Bookings
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => Booking;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  refreshBookings: () => Promise<void>;

  // Notifications
  notifications: NotificationItem[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  unreadNotificationsCount: number;

  // Global Refresh
  refreshAllData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const SAVED_VENDORS_KEY = 'vendora_saved_vendors';
const COMPARE_VENDORS_KEY = 'vendora_compare_vendors';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => authService.getCurrentUser());
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
    },
  ]);

  // Load and refresh live data from database
  const refreshAllData = useCallback(async () => {
    try {
      // 1. Session check
      const currentUser = await authService.checkSession();
      if (currentUser) {
        setUser(currentUser);
      }

      // 2. Saved vendors from DB
      try {
        const savedRes = await savedVendorApi.getSavedVendors();
        if (savedRes.vendorIds) {
          setSavedVendorIds(savedRes.vendorIds);
          localStorage.setItem(SAVED_VENDORS_KEY, JSON.stringify(savedRes.vendorIds));
        }
      } catch {}

      // 3. Events from DB
      try {
        const events = await eventApi.getEvents();
        if (events && events.length > 0) {
          setActiveEvent(events[0]);
        }
      } catch {}

      // 4. Bookings from DB
      try {
        const b = await bookingApi.getBookings();
        if (b && b.length > 0) {
          setBookings(b);
        }
      } catch {}

      // 5. Vendor cache refresh
      vendorService.syncFromApi().catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    refreshAllData();
  }, [refreshAllData]);

  // Persist comparison tray
  useEffect(() => {
    try {
      localStorage.setItem(COMPARE_VENDORS_KEY, JSON.stringify(comparedVendorIds));
    } catch {}
  }, [comparedVendorIds]);

  const toggleSaveVendor = async (id: string) => {
    const isCurrentlySaved = savedVendorIds.includes(id);
    const updated = isCurrentlySaved
      ? savedVendorIds.filter((vId) => vId !== id)
      : [...savedVendorIds, id];

    setSavedVendorIds(updated);
    try {
      localStorage.setItem(SAVED_VENDORS_KEY, JSON.stringify(updated));
    } catch {}

    // Persist to PostgreSQL backend
    try {
      if (isCurrentlySaved) {
        await savedVendorApi.removeSavedVendor(id);
      } else {
        await savedVendorApi.saveVendor(id);
      }
    } catch {
      // revert if failed
    }
  };

  const isSaved = (id: string) => savedVendorIds.includes(id);

  const toggleCompareVendor = (id: string): boolean => {
    if (comparedVendorIds.includes(id)) {
      setComparedVendorIds((prev) => prev.filter((vId) => vId !== id));
      return true;
    } else {
      if (comparedVendorIds.length >= 4) {
        return false;
      }
      setComparedVendorIds((prev) => [...prev, id]);
      return true;
    }
  };

  const removeFromCompare = (id: string) => {
    setComparedVendorIds((prev) => prev.filter((vId) => vId !== id));
  };

  const clearCompare = () => {
    setComparedVendorIds([]);
  };

  const updateActiveEvent = (event: EventPlan) => {
    setActiveEvent(event);
    eventService.saveCurrentEvent(event);
  };

  const refreshEvents = async () => {
    const events = await eventApi.getEvents().catch(() => []);
    if (events.length > 0) {
      setActiveEvent(events[0]);
    }
  };

  const refreshBookings = async () => {
    const b = await bookingApi.getBookings().catch(() => []);
    if (b.length > 0) {
      setBookings(b);
    }
  };

  const login = async (email: string, password?: string): Promise<boolean> => {
    const res = await authService.login(email, password);
    if (res.success && res.user) {
      setUser(res.user);
      await refreshAllData();
      return true;
    }
    return false;
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'vendor';
  }): Promise<{ success: boolean; message?: string }> => {
    const res = await authService.register(data);
    if (res.success && res.user) {
      setUser(res.user);
      await refreshAllData();
      return { success: true };
    }
    return { success: false, message: res.message || 'Registration failed' };
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setSavedVendorIds([]);
    try {
      localStorage.removeItem(SAVED_VENDORS_KEY);
    } catch {}
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt'>): Booking => {
    const newBkg = bookingService.createBooking(bookingData);
    setBookings((prev) => [newBkg, ...prev]);

    // Push local notification
    setNotifications((prev) => [
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
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        register,
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
        refreshEvents,
        bookings,
        addBooking,
        updateBookingStatus,
        refreshBookings,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        unreadNotificationsCount,
        refreshAllData,
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
