import { EventPlan } from '../types';

export const defaultEvent: EventPlan = {
  id: 'ev-demo-1',
  name: 'Anurag & Shravani Wedding Celebration',
  eventType: 'Wedding',
  date: '2026-12-24',
  location: 'Pune',
  guestCount: 300,
  totalBudget: 250000,
  budgetAllocations: {
    venue: 75000,
    photography: 45000,
    catering: 70000,
    decoration: 35000,
    other: 25000,
  },
  neededCategories: ['Photography', 'Catering', 'Decoration', 'Venue', 'Makeup', 'DJ'],
  preferences: ['Traditional', 'Modern', 'Candid', 'Vegetarian'],
  notes: 'Sunset pheras followed by evening reception. Looking for experienced vendors with strong ratings.',
  createdAt: '2026-10-01',
};

export const sampleEventsList: EventPlan[] = [
  defaultEvent,
  {
    id: 'ev-demo-2',
    name: '25th Silver Anniversary Gala',
    eventType: 'Anniversary',
    date: '2027-02-15',
    location: 'Mumbai',
    guestCount: 150,
    totalBudget: 180000,
    budgetAllocations: {
      venue: 60000,
      photography: 30000,
      catering: 55000,
      decoration: 25000,
      other: 10000,
    },
    neededCategories: ['Venue', 'Catering', 'Photography', 'DJ'],
    preferences: ['Luxury', 'Modern'],
    createdAt: '2026-09-15',
  }
];
