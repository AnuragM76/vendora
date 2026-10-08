import { Vendor, EventPlan, Booking, User, CategoryType, Review, MatchBreakdown } from '../types';

const API_BASE = '/api';

async function fetchJson<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg = data.error || data.message || `Request failed with status ${response.status}`;
    throw new Error(errorMsg);
  }

  return data;
}

// Data Mappers to guarantee 100% compatibility with existing frontend types
export function mapDbVendorToUi(v: any): Vendor {
  const catName = (typeof v.category === 'object' && v.category?.name) ? v.category.name : (v.category || 'Photography');
  
  return {
    id: v.id,
    name: v.businessName || v.name || 'Vendor Partner',
    category: catName as CategoryType,
    location: v.location || 'Pune',
    rating: typeof v.rating === 'number' ? v.rating : 4.8,
    reviewCount: typeof v.reviewCount === 'number' ? v.reviewCount : 0,
    experience: typeof v.experienceYears === 'number' ? v.experienceYears : (v.experience || 3),
    startingPrice: typeof v.startingPrice === 'number' ? v.startingPrice : 35000,
    verified: Boolean(v.verified),
    availability: v.availability !== undefined ? Boolean(v.availability) : true,
    availableDates: v.availabilities?.filter((a: any) => a.available).map((a: any) => a.date.split('T')[0]) || [],
    description: v.description || '',
    shortDescription: v.shortDescription || '',
    images: Array.isArray(v.images) && v.images.length > 0 ? v.images : [
      v.featuredImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
    ],
    featuredImage: v.featuredImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    services: Array.isArray(v.services) ? v.services.map((s: any) => typeof s === 'string' ? s : s.name) : [],
    packages: Array.isArray(v.packages) ? v.packages.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      description: p.description || '',
      features: Array.isArray(p.features) ? p.features : [],
      popular: Boolean(p.popular),
    })) : [],
    styles: Array.isArray(v.styles) ? v.styles : ['Modern'],
    matchScore: v.score || v.matchScore,
    contact: {
      phone: v.contactPhone || v.contact?.phone || '+91 98220 00000',
      email: v.contactEmail || v.contact?.email || 'contact@vendora.app',
      instagram: v.contactInstagram || v.contact?.instagram || '@vendora_partner',
      address: v.contactAddress || v.contact?.address || `${v.location || 'Pune'}, Maharashtra`,
    },
    languages: Array.isArray(v.languages) ? v.languages : ['English', 'Hindi'],
    serviceAreas: Array.isArray(v.serviceAreas) ? v.serviceAreas : [v.location || 'Pune'],
    eventTypes: Array.isArray(v.eventTypes) ? v.eventTypes : ['Wedding', 'Party'],
    reviews: Array.isArray(v.reviews) ? v.reviews.map((r: any) => ({
      id: r.id,
      userName: r.userName || r.user?.name || 'Verified Host',
      userAvatar: r.user?.avatar,
      rating: r.rating,
      date: typeof r.createdAt === 'string' ? r.createdAt.split('T')[0] : 'Recently',
      comment: r.comment,
      eventType: r.eventType || 'Wedding',
    })) : [],
    featured: Boolean(v.featured),
    aiHighlights: v.aiHighlights || [
      `Top-rated in ${v.location || 'Pune'}`,
      'Verified quality credentials & response time',
    ],
  };
}

export function mapDbEventToUi(e: any): EventPlan {
  const dateStr = typeof e.date === 'string' ? e.date.split('T')[0] : new Date(e.date).toISOString().split('T')[0];
  const totalBudget = typeof e.budget === 'number' ? e.budget : (e.totalBudget || 250000);

  return {
    id: e.id,
    name: e.name,
    eventType: e.type || e.eventType || 'Wedding',
    date: dateStr,
    location: e.location,
    guestCount: e.guestCount || 200,
    totalBudget,
    budgetAllocations: e.budgetAllocations || {
      venue: Math.round(totalBudget * 0.30),
      catering: Math.round(totalBudget * 0.28),
      photography: Math.round(totalBudget * 0.18),
      decoration: Math.round(totalBudget * 0.14),
      other: Math.round(totalBudget * 0.10),
    },
    neededCategories: Array.isArray(e.requirements) ? e.requirements : (e.neededCategories || ['Photography', 'Catering', 'Decoration', 'Venue']),
    preferences: Array.isArray(e.style) ? e.style : (e.preferences || ['Modern', 'Traditional']),
    notes: e.notes || '',
    createdAt: typeof e.createdAt === 'string' ? e.createdAt.split('T')[0] : '2026-10-01',
  };
}

export function mapDbBookingToUi(b: any): Booking {
  const dateStr = typeof b.bookingDate === 'string' ? b.bookingDate.split('T')[0] : new Date(b.bookingDate).toISOString().split('T')[0];
  const catName = b.vendor?.category?.name || b.vendorCategory || 'Photography';
  
  // Normalize status to Title Case
  let status: Booking['status'] = 'Pending';
  const rawStatus = (b.status || 'PENDING').toUpperCase();
  if (rawStatus === 'CONFIRMED' || rawStatus === 'ACCEPTED') status = 'Confirmed';
  else if (rawStatus === 'COMPLETED') status = 'Completed';
  else if (rawStatus === 'CANCELLED' || rawStatus === 'REJECTED' || rawStatus === 'DECLINED') status = 'Cancelled';

  return {
    id: b.id,
    vendorId: b.vendorId,
    vendorName: b.vendor?.businessName || b.vendorName || 'Vendor Partner',
    vendorCategory: catName as CategoryType,
    vendorImage: b.vendor?.featuredImage || b.vendorImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    vendorLocation: b.vendor?.location || b.vendorLocation || 'Pune',
    eventName: b.eventName,
    eventDate: dateStr,
    packageName: b.packageName,
    amount: b.amount,
    status,
    createdAt: typeof b.createdAt === 'string' ? b.createdAt.split('T')[0] : new Date().toISOString().split('T')[0],
  };
}

// 1. AUTH API
export const authApi = {
  async register(data: { name: string; email: string; password: string; role?: 'CUSTOMER' | 'VENDOR' }): Promise<{ user: User }> {
    const res = await fetchJson<{ success: boolean; data: { user: any } }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return {
      user: {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        role: res.data.user.role.toLowerCase() as User['role'],
        avatar: res.data.user.avatar,
        phone: res.data.user.phone,
        city: res.data.user.city,
      },
    };
  },

  async login(email: string, password: string): Promise<{ user: User }> {
    const res = await fetchJson<{ success: boolean; data: { user: any } }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return {
      user: {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        role: res.data.user.role.toLowerCase() as User['role'],
        avatar: res.data.user.avatar,
        phone: res.data.user.phone,
        city: res.data.user.city,
      },
    };
  },

  async logout(): Promise<void> {
    await fetchJson('/auth/logout', { method: 'POST' });
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const res = await fetchJson<{ success: boolean; data: { user: any } }>('/auth/me');
      if (res.data?.user) {
        return {
          id: res.data.user.id,
          name: res.data.user.name,
          email: res.data.user.email,
          role: res.data.user.role.toLowerCase() as User['role'],
          avatar: res.data.user.avatar,
          phone: res.data.user.phone,
          city: res.data.user.city,
        };
      }
      return null;
    } catch {
      return null;
    }
  },
};

// 2. VENDOR API
export const vendorApi = {
  async getVendors(params: any = {}): Promise<{ vendors: Vendor[]; total: number; totalPages: number }> {
    const query = new URLSearchParams();
    if (params.category && params.category !== 'All') query.set('category', params.category);
    if (params.location && params.location !== 'All') query.set('location', params.location);
    if (params.minPrice) query.set('minPrice', String(params.minPrice));
    if (params.maxPrice) query.set('maxPrice', String(params.maxPrice));
    if (params.minRating) query.set('minRating', String(params.minRating));
    if (params.experience) query.set('experience', String(params.experience));
    if (params.verifiedOnly) query.set('verified', 'true');
    if (params.availableOnly) query.set('availability', 'true');
    if (params.searchQuery) query.set('search', params.searchQuery);
    if (params.sortBy) query.set('sort', params.sortBy);
    if (params.page) query.set('page', String(params.page));
    if (params.limit) query.set('limit', String(params.limit || 50));

    const res = await fetchJson<{ success: boolean; data: { vendors: any[]; pagination: any } }>(
      `/vendors?${query.toString()}`
    );

    return {
      vendors: res.data.vendors.map(mapDbVendorToUi),
      total: res.data.pagination?.total || res.data.vendors.length,
      totalPages: res.data.pagination?.totalPages || 1,
    };
  },

  async getVendorById(id: string): Promise<Vendor> {
    const res = await fetchJson<{ success: boolean; data: { vendor: any } }>(`/vendors/${id}`);
    return mapDbVendorToUi(res.data.vendor);
  },

  async compareVendors(ids: string[]): Promise<Vendor[]> {
    if (ids.length === 0) return [];
    const res = await fetchJson<{ success: boolean; data: { vendors: any[] } }>(
      `/vendors/compare?ids=${ids.join(',')}`
    );
    return res.data.vendors.map(mapDbVendorToUi);
  },

  async getCategories(): Promise<CategoryType[]> {
    const res = await fetchJson<{ success: boolean; data: { categories: any[] } }>('/categories');
    return res.data.categories.map((c) => c.name as CategoryType);
  },

  async verifyVendor(id: string, verified: boolean): Promise<void> {
    await fetchJson(`/vendors/${id}/verify`, {
      method: 'POST',
      body: JSON.stringify({ verified }),
    });
  },

  async updateVendorProfile(id: string, data: any): Promise<void> {
    await fetchJson(`/vendors/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

// 3. EVENT API
export const eventApi = {
  async getEvents(): Promise<EventPlan[]> {
    const res = await fetchJson<{ success: boolean; data: { events: any[] } }>('/events');
    return res.data.events.map(mapDbEventToUi);
  },

  async getEventById(id: string): Promise<EventPlan> {
    const res = await fetchJson<{ success: boolean; data: { event: any } }>(`/events/${id}`);
    return mapDbEventToUi(res.data.event);
  },

  async createEvent(event: Omit<EventPlan, 'id' | 'createdAt'>): Promise<EventPlan> {
    const res = await fetchJson<{ success: boolean; data: { event: any } }>('/events', {
      method: 'POST',
      body: JSON.stringify({
        name: event.name,
        type: event.eventType,
        date: event.date,
        location: event.location,
        guestCount: event.guestCount,
        budget: event.totalBudget,
        style: event.preferences,
        requirements: event.neededCategories,
        budgetAllocations: event.budgetAllocations,
        notes: event.notes,
      }),
    });
    return mapDbEventToUi(res.data.event);
  },

  async updateEvent(id: string, event: Partial<EventPlan>): Promise<EventPlan> {
    const payload: any = {};
    if (event.name) payload.name = event.name;
    if (event.eventType) payload.type = event.eventType;
    if (event.date) payload.date = event.date;
    if (event.location) payload.location = event.location;
    if (event.guestCount) payload.guestCount = event.guestCount;
    if (event.totalBudget) payload.budget = event.totalBudget;
    if (event.preferences) payload.style = event.preferences;
    if (event.neededCategories) payload.requirements = event.neededCategories;
    if (event.budgetAllocations) payload.budgetAllocations = event.budgetAllocations;
    if (event.notes !== undefined) payload.notes = event.notes;

    const res = await fetchJson<{ success: boolean; data: { event: any } }>(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
    return mapDbEventToUi(res.data.event);
  },

  async deleteEvent(id: string): Promise<void> {
    await fetchJson(`/events/${id}`, { method: 'DELETE' });
  },
};

// 4. RECOMMENDATION API
export const recommendationApi = {
  async getRecommendations(eventId?: string): Promise<{
    event: EventPlan;
    recommendations: Array<Vendor & { match: MatchBreakdown }>;
    combination: any;
  }> {
    const url = eventId ? `/recommendations?eventId=${eventId}` : '/recommendations';
    const res = await fetchJson<{
      success: boolean;
      data: {
        event: any;
        recommendations: any[];
        combination: any;
      };
    }>(url);

    const event = mapDbEventToUi(res.data.event);
    const recommendations = res.data.recommendations.map((r: any) => {
      const vendor = mapDbVendorToUi(r.vendor);
      const match: MatchBreakdown = {
        overall: r.score,
        budgetScore: r.breakdown.budget,
        locationScore: r.breakdown.location,
        ratingScore: r.breakdown.rating,
        styleScore: r.breakdown.style,
        availabilityScore: r.breakdown.availability,
        reasons: r.reason ? [r.reason] : ['High overall algorithmic match'],
      };
      return {
        ...vendor,
        matchScore: r.score,
        match,
      };
    });

    return {
      event,
      recommendations,
      combination: res.data.combination,
    };
  },
};

// 5. SAVED VENDOR API
export const savedVendorApi = {
  async getSavedVendors(): Promise<{ vendorIds: string[]; vendors: Vendor[] }> {
    const res = await fetchJson<{ success: boolean; data: { vendorIds: string[]; vendors: any[] } }>(
      '/saved-vendors'
    );
    return {
      vendorIds: res.data.vendorIds,
      vendors: res.data.vendors.map(mapDbVendorToUi),
    };
  },

  async saveVendor(vendorId: string): Promise<void> {
    await fetchJson('/saved-vendors', {
      method: 'POST',
      body: JSON.stringify({ vendorId }),
    });
  },

  async removeSavedVendor(vendorId: string): Promise<void> {
    await fetchJson(`/saved-vendors/${vendorId}`, {
      method: 'DELETE',
    });
  },
};

// 6. BOOKING API
export const bookingApi = {
  async getBookings(): Promise<Booking[]> {
    const res = await fetchJson<{ success: boolean; data: { bookings: any[] } }>('/bookings');
    return res.data.bookings.map(mapDbBookingToUi);
  },

  async createBooking(booking: {
    vendorId: string;
    packageName: string;
    eventName: string;
    bookingDate: string;
    amount: number;
    guestCount?: number;
    notes?: string;
    eventId?: string;
  }): Promise<Booking> {
    const res = await fetchJson<{ success: boolean; data: { booking: any } }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(booking),
    });
    return mapDbBookingToUi(res.data.booking);
  },

  async updateBookingStatus(id: string, status: string): Promise<Booking> {
    const res = await fetchJson<{ success: boolean; data: { booking: any } }>(`/bookings/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
    return mapDbBookingToUi(res.data.booking);
  },
};

// 7. REVIEW API
export const reviewApi = {
  async getReviews(vendorId: string): Promise<Review[]> {
    const res = await fetchJson<{ success: boolean; data: { reviews: any[] } }>(`/reviews?vendorId=${vendorId}`);
    return res.data.reviews.map((r) => ({
      id: r.id,
      userName: r.userName || r.user?.name || 'Verified Host',
      userAvatar: r.user?.avatar,
      rating: r.rating,
      date: typeof r.createdAt === 'string' ? r.createdAt.split('T')[0] : 'Recently',
      comment: r.comment,
      eventType: r.eventType || 'Celebration',
    }));
  },

  async submitReview(data: {
    vendorId: string;
    rating: number;
    comment: string;
    bookingId?: string;
    eventType?: string;
  }): Promise<void> {
    await fetchJson('/reviews', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// 8. ADMIN API
export const adminApi = {
  async getStats(): Promise<{
    totalUsers: number;
    totalVendors: number;
    verifiedVendors: number;
    pendingVendors: number;
    totalBookings: number;
    totalReviews: number;
    totalBookingVolume: number;
  }> {
    const res = await fetchJson<{ success: boolean; data: any }>('/admin/stats');
    return res.data;
  },

  async getAdminVendors(): Promise<any[]> {
    const res = await fetchJson<{ success: boolean; data: { vendors: any[] } }>('/admin/vendors');
    return res.data.vendors;
  },

  async getAdminUsers(): Promise<any[]> {
    const res = await fetchJson<{ success: boolean; data: { users: any[] } }>('/users');
    return res.data.users;
  },
};
