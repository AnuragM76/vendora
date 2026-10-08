import { defaultEvent, sampleEventsList } from '../data/events';
import { EventPlan } from '../types';
import { eventApi } from './api';

const STORAGE_KEY = 'vendora_active_event';
const ALL_EVENTS_KEY = 'vendora_all_events';

let activeEventCache: EventPlan = defaultEvent;
let allEventsCache: EventPlan[] = [...sampleEventsList];

// Sync from database on startup
(async () => {
  try {
    const events = await eventApi.getEvents();
    if (events.length > 0) {
      allEventsCache = events;
      activeEventCache = events[0];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events[0]));
        localStorage.setItem(ALL_EVENTS_KEY, JSON.stringify(events));
      } catch {}
    }
  } catch {
    // offline/unauthenticated fallback
  }
})();

export const eventService = {
  getCurrentEvent: (): EventPlan => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return activeEventCache;
  },

  saveCurrentEvent: (event: EventPlan): void => {
    activeEventCache = event;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(event));
      const all = eventService.getAllEvents();
      const existingIndex = all.findIndex(e => e.id === event.id);
      if (existingIndex >= 0) {
        all[existingIndex] = event;
      } else {
        all.unshift(event);
      }
      localStorage.setItem(ALL_EVENTS_KEY, JSON.stringify(all));
    } catch {
      // ignore
    }

    // Persist to database asynchronously
    eventApi.createEvent(event).catch(() => {
      eventApi.updateEvent(event.id, event).catch(() => {});
    });
  },

  getAllEvents: (): EventPlan[] => {
    try {
      const stored = localStorage.getItem(ALL_EVENTS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return allEventsCache;
  },

  fetchEventsAsync: async (): Promise<EventPlan[]> => {
    try {
      const events = await eventApi.getEvents();
      if (events.length > 0) {
        allEventsCache = events;
        activeEventCache = events[0];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(events[0]));
          localStorage.setItem(ALL_EVENTS_KEY, JSON.stringify(events));
        } catch {}
        return events;
      }
    } catch {
      // ignore
    }
    return allEventsCache;
  },
};
