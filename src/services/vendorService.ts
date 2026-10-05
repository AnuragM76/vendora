import { mockVendors } from '../data/vendors';
import { Vendor, CategoryType } from '../types';

export interface VendorFilterOptions {
  category?: CategoryType | 'All';
  location?: string | 'All';
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  experience?: number;
  verifiedOnly?: boolean;
  availableOnly?: boolean;
  style?: string;
  searchQuery?: string;
  sortBy?: 'recommended' | 'rating' | 'price-low' | 'price-high' | 'experience' | 'reviews';
}

export const vendorService = {
  getVendors: (filters?: VendorFilterOptions): Vendor[] => {
    let result = [...mockVendors];

    if (!filters) return result;

    if (filters.searchQuery && filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(v =>
        v.name.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        v.location.toLowerCase().includes(q) ||
        v.styles.some(s => s.toLowerCase().includes(q)) ||
        v.services.some(s => s.toLowerCase().includes(q))
      );
    }

    if (filters.category && filters.category !== 'All') {
      result = result.filter(v => v.category === filters.category);
    }

    if (filters.location && filters.location !== 'All') {
      result = result.filter(v => 
        v.location.toLowerCase() === filters.location?.toLowerCase() ||
        v.serviceAreas.some(sa => sa.toLowerCase() === filters.location?.toLowerCase())
      );
    }

    if (filters.minPrice !== undefined) {
      result = result.filter(v => v.startingPrice >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      result = result.filter(v => v.startingPrice <= filters.maxPrice!);
    }

    if (filters.minRating) {
      result = result.filter(v => v.rating >= filters.minRating!);
    }

    if (filters.experience) {
      result = result.filter(v => v.experience >= filters.experience!);
    }

    if (filters.verifiedOnly) {
      result = result.filter(v => v.verified);
    }

    if (filters.availableOnly) {
      result = result.filter(v => v.availability);
    }

    if (filters.style && filters.style !== 'All') {
      result = result.filter(v => v.styles.includes(filters.style!));
    }

    // Sorting
    switch (filters.sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        result.sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      case 'price-high':
        result.sort((a, b) => b.startingPrice - a.startingPrice);
        break;
      case 'experience':
        result.sort((a, b) => b.experience - a.experience);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'recommended':
      default:
        // Default sort by rating * reviews
        result.sort((a, b) => (b.rating * Math.log(b.reviewCount)) - (a.rating * Math.log(a.reviewCount)));
        break;
    }

    return result;
  },

  getVendorById: (id: string): Vendor | undefined => {
    return mockVendors.find(v => v.id === id);
  },

  getFeaturedVendors: (): Vendor[] => {
    return mockVendors.filter(v => v.featured);
  },

  getCategories: (): CategoryType[] => {
    return [
      'Photography',
      'Catering',
      'Decoration',
      'Venue',
      'Makeup',
      'DJ',
      'Videography',
      'Event Planning'
    ];
  },

  getLocations: (): string[] => {
    return ['Pune', 'Mumbai', 'Bengaluru', 'Nashik', 'Hyderabad'];
  }
};
