import { mockBookings } from '../data/bookings';
import { Booking } from '../types';
import { bookingApi } from './api';

const STORAGE_KEY = 'vendora_bookings';

let bookingsCache: Booking[] = [...mockBookings];

// Initial sync from database
(async () => {
  try {
    const list = await bookingApi.getBookings();
    if (list && list.length > 0) {
      bookingsCache = list;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch {}
    }
  } catch {
    // offline/unauthenticated fallback
  }
})();

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
    return bookingsCache;
  },

  fetchBookingsAsync: async (): Promise<Booking[]> => {
    try {
      const list = await bookingApi.getBookings();
      if (list && list.length > 0) {
        bookingsCache = list;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        } catch {}
        return list;
      }
    } catch {
      // ignore
    }
    return bookingsCache;
  },

  createBooking: (booking: Omit<Booking, 'id' | 'createdAt'>): Booking => {
    const current = bookingService.getBookings();
    const tempId = `bkg-${Date.now()}`;
    const newBooking: Booking = {
      ...booking,
      id: tempId,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newBooking, ...current];
    bookingsCache = updated;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    // Send to database asynchronously and update ID
    bookingApi
      .createBooking({
        vendorId: booking.vendorId,
        packageName: booking.packageName,
        eventName: booking.eventName,
        bookingDate: booking.eventDate,
        amount: booking.amount,
      })
      .then((saved) => {
        bookingsCache = bookingsCache.map((b) => (b.id === tempId ? saved : b));
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingsCache));
        } catch {}
      })
      .catch(() => {});

    return newBooking;
  },

  createBookingAsync: async (booking: Omit<Booking, 'id' | 'createdAt'>): Promise<Booking> => {
    try {
      const saved = await bookingApi.createBooking({
        vendorId: booking.vendorId,
        packageName: booking.packageName,
        eventName: booking.eventName,
        bookingDate: booking.eventDate,
        amount: booking.amount,
      });
      bookingsCache = [saved, ...bookingsCache.filter((b) => b.id !== saved.id)];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingsCache));
      } catch {}
      return saved;
    } catch {
      return bookingService.createBooking(booking);
    }
  },

  updateStatus: (id: string, status: Booking['status']): Booking[] => {
    const current = bookingService.getBookings();
    const updated = current.map((b) => (b.id === id ? { ...b, status } : b));
    bookingsCache = updated;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    // Update in database
    bookingApi.updateBookingStatus(id, status).catch(() => {});

    return updated;
  },
};
