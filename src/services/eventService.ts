import { defaultEvent, sampleEventsList } from '../data/events';
import { EventPlan } from '../types';

const STORAGE_KEY = 'vendora_active_event';
const ALL_EVENTS_KEY = 'vendora_all_events';

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
    return defaultEvent;
  },

  saveCurrentEvent: (event: EventPlan): void => {
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
    return sampleEventsList;
  }
};
