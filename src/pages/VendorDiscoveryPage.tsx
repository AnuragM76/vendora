import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  X, 
  Sparkles, 
  MapPin, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { vendorService, VendorFilterOptions } from '../services/vendorService';
import { VendorCard } from '../components/vendor/VendorCard';
import { FilterSidebar } from '../components/vendor/FilterSidebar';
import { CategoryType } from '../types';
import { useApp } from '../context/AppContext';

export const VendorDiscoveryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { activeEvent } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Initialize filters from query params if available
  const [filters, setFilters] = useState<VendorFilterOptions>(() => {
    const category = searchParams.get('category') as CategoryType | null;
    const location = searchParams.get('location') || undefined;
    const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;

    return {
      category: category || 'All',
      location: location || 'All',
      maxPrice,
      sortBy: 'recommended',
    };
  });

  // Keep query params synced
  useEffect(() => {
    const category = searchParams.get('category') as CategoryType | null;
    const location = searchParams.get('location') || undefined;
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
    if (location) {
      setFilters(prev => ({ ...prev, location }));
    }
  }, [searchParams]);

  const vendors = useMemo(() => {
    return vendorService.getVendors({
      ...filters,
      searchQuery,
    });
  }, [filters, searchQuery]);

  const handleResetFilters = () => {
    setFilters({
      category: 'All',
      location: 'All',
      sortBy: 'recommended',
    });
    setSearchQuery('');
    setSearchParams({});
  };

  const removeFilterTag = (key: keyof VendorFilterOptions) => {
    setFilters(prev => ({
      ...prev,
      [key]: key === 'category' || key === 'location' ? 'All' : undefined,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner & Title */}
      <div className="bg-gradient-to-r from-ivory-200 via-surface to-ivory-100 p-6 sm:p-8 rounded-3xl border border-borderBase shadow-card text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral-600 mb-1">
            <span>Marketplace</span>
            <span>•</span>
            <span className="text-charcoal-500">Matching against: {activeEvent.name}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            {filters.category && filters.category !== 'All' ? filters.category : 'Event'} Vendors
            {filters.location && filters.location !== 'All' ? ` in ${filters.location}` : ' Across India'}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            {vendors.length} verified vendors matching your criteria and target celebration style.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="w-full md:w-80 relative">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by vendor, style, cuisine..."
            className="w-full bg-surface border border-borderBase rounded-2xl pl-10 pr-4 py-2.5 text-xs font-medium text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-coral-500 shadow-subtle"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Filter Sidebar (Desktop) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-24">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onReset={handleResetFilters}
            totalCount={vendors.length}
          />
        </div>

        {/* Right Main Grid Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Controls Bar: Mobile filter button, Active filter tags, Sort dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-surface p-4 rounded-2xl border border-borderBase shadow-subtle">
            {/* Mobile filter toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-ivory-100 hover:bg-ivory-200 border border-borderBase text-xs font-bold text-charcoal-800 flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-4 h-4 text-coral-600" />
                <span>Filters ({[
                  filters.category !== 'All' ? 1 : 0,
                  filters.location !== 'All' ? 1 : 0,
                  filters.minRating ? 1 : 0,
                  filters.maxPrice ? 1 : 0,
                  filters.verifiedOnly ? 1 : 0,
                  filters.availableOnly ? 1 : 0
                ].reduce((a, b) => a + b, 0)})</span>
              </button>
            </div>

            {/* Active Filters chips */}
            <div className="flex flex-wrap items-center gap-2 flex-1">
              <span className="text-xs font-semibold text-charcoal-500 hidden sm:inline">Active:</span>

              {filters.category && filters.category !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-coral-50 text-coral-700 border border-coral-200">
                  {filters.category}
                  <button onClick={() => removeFilterTag('category')}>
                    <X className="w-3 h-3 hover:text-coral-900" />
                  </button>
                </span>
              )}

              {filters.location && filters.location !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-ivory-200 text-charcoal-800 border border-borderBase">
                  {filters.location}
                  <button onClick={() => removeFilterTag('location')}>
                    <X className="w-3 h-3 hover:text-charcoal-900" />
                  </button>
                </span>
              )}

              {filters.maxPrice && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-ivory-200 text-charcoal-800 border border-borderBase">
                  ≤ ₹{filters.maxPrice.toLocaleString('en-IN')}
                  <button onClick={() => removeFilterTag('maxPrice')}>
                    <X className="w-3 h-3 hover:text-charcoal-900" />
                  </button>
                </span>
              )}

              {filters.minRating && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gold-50 text-gold-800 border border-gold-200">
                  {filters.minRating}★+
                  <button onClick={() => removeFilterTag('minRating')}>
                    <X className="w-3 h-3 hover:text-gold-900" />
                  </button>
                </span>
              )}

              {filters.verifiedOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Only
                  <button onClick={() => removeFilterTag('verifiedOnly')}>
                    <X className="w-3 h-3 hover:text-emerald-900" />
                  </button>
                </span>
              )}
            </div>

            {/* Sort by Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-charcoal-400 font-medium hidden sm:inline">Sort:</span>
              <select
                value={filters.sortBy || 'recommended'}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="bg-ivory-100 border border-borderBase rounded-xl px-3 py-1.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500 cursor-pointer"
              >
                <option value="recommended">AI Recommended</option>
                <option value="rating">Highest Rated (★)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="experience">Most Experienced</option>
                <option value="reviews">Most Reviewed</option>
              </select>
            </div>
          </div>

          {/* Vendors Grid */}
          {vendors.length === 0 ? (
            /* Polished Empty State */
            <div className="bg-surface rounded-3xl border border-borderBase p-12 text-center space-y-4 shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-ivory-200 flex items-center justify-center mx-auto text-charcoal-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-charcoal-900">
                No vendors found matching your criteria
              </h3>
              <p className="text-xs text-charcoal-500 max-w-md mx-auto">
                Try loosening your filters, increasing the maximum budget cap, or selecting a broader location.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs shadow-subtle transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-charcoal-950/60 backdrop-blur-sm lg:hidden animate-fadeIn">
          <div className="w-full max-w-sm bg-surface h-full overflow-y-auto p-5 space-y-4 shadow-elevated animate-slideLeft">
            <div className="flex items-center justify-between pb-3 border-b border-borderBase">
              <h3 className="text-base font-bold text-charcoal-900 font-serif">Filter Vendors</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-lg text-charcoal-400 hover:text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <FilterSidebar
              filters={filters}
              onChange={(newFilters) => {
                setFilters(newFilters);
              }}
              onReset={() => {
                handleResetFilters();
                setMobileFilterOpen(false);
              }}
              totalCount={vendors.length}
            />

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3 bg-charcoal-900 text-white font-bold text-xs rounded-xl shadow-subtle"
            >
              Apply Filters ({vendors.length} Results)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
