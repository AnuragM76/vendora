import { mockBookings } from '../data/bookings';
import { Booking } from '../types';

const STORAGE_KEY = 'vendora_bookings';

export const bookingService = {
  getBookings: (): Booking[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return mockBookings;
  },

  createBooking: (booking: Omit<Booking, 'id' | 'createdAt'>): Booking => {
    const current = bookingService.getBookings();
    const newBooking: Booking = {
      ...booking,
      id: `bkg-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newBooking, ...current];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    return newBooking;
  },

  updateStatus: (id: string, status: Booking['status']): Booking[] => {
    const current = bookingService.getBookings();
    const updated = current.map(b => b.id === id ? { ...b, status } : b);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    return updated;
  }
};
