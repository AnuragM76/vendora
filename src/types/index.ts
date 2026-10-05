export type CategoryType = 
  | 'Photography' 
  | 'Catering' 
  | 'Decoration' 
  | 'Venue' 
  | 'Makeup' 
  | 'DJ' 
  | 'Videography' 
  | 'Event Planning';

export type EventType =
  | 'Wedding'
  | 'Birthday'
  | 'Engagement'
  | 'Corporate'
  | 'Anniversary'
  | 'Party'
  | 'College Event'
  | 'Other';

export interface VendorPackage {
  id: string;
  name: string; // e.g. 'Essential', 'Premium', 'Luxury'
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  eventType: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: CategoryType;
  location: string; // e.g. 'Pune', 'Mumbai', 'Bengaluru', 'Nashik', 'Hyderabad'
  rating: number;
  reviewCount: number;
  experience: number; // in years
  startingPrice: number;
  verified: boolean;
  availability: boolean;
  availableDates?: string[];
  description: string;
  shortDescription: string;
  images: string[];
  featuredImage: string;
  services: string[];
  packages: VendorPackage[];
  styles: string[];
  matchScore?: number; // baseline or dynamic
  contact: {
    phone: string;
    email: string;
    instagram?: string;
    address: string;
  };
  languages: string[];
  serviceAreas: string[];
  eventTypes: string[];
  reviews: Review[];
  featured?: boolean;
  aiHighlights?: string[];
}

export interface MatchBreakdown {
  overall: number;
  budgetScore: number;
  locationScore: number;
  ratingScore: number;
  styleScore: number;
  availabilityScore: number;
  reasons: string[];
}

export interface EventPlan {
  id: string;
  name: string;
  eventType: EventType;
  date: string;
  location: string;
  guestCount: number;
  totalBudget: number;
  budgetAllocations: {
    venue: number;
    photography: number;
    catering: number;
    decoration: number;
    other: number;
  };
  neededCategories: CategoryType[];
  preferences: string[]; // e.g. 'Traditional', 'Modern', 'Luxury', 'Candid', 'Vegetarian'
  notes?: string;
  createdAt: string;
}

export interface Booking {
  id: string;
  vendorId: string;
  vendorName: string;
  vendorCategory: CategoryType;
  vendorImage: string;
  vendorLocation: string;
  eventName: string;
  eventDate: string;
  packageName: string;
  amount: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'vendor' | 'admin';
  avatar?: string;
  phone?: string;
  city?: string;
}
