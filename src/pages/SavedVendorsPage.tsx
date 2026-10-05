import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Trash2, 
  Scale, 
  Grid, 
  List, 
  ArrowRight, 
  MapPin, 
  Star, 
  Briefcase, 
  ExternalLink 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { vendorService } from '../services/vendorService';
import { VendorCard } from '../components/vendor/VendorCard';
import { formatINR } from '../components/common/PriceDisplay';
import { MatchScoreBadge } from '../components/common/MatchScoreBadge';

export const SavedVendorsPage: React.FC = () => {
  const { savedVendorIds, toggleSaveVendor, comparedVendorIds, toggleCompareVendor, activeEvent } = useApp();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const savedVendors = savedVendorIds
    .map(id => vendorService.getVendorById(id))
    .filter(Boolean) as ReturnType<typeof vendorService.getVendors>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-coral-600 mb-1">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Shortlist ({savedVendors.length})</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Saved Vendors
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Keep your top vendor candidates organized in one place for easy comparison and booking.
          </p>
        </div>

        {savedVendors.length > 0 && (
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="bg-ivory-100 p-1 rounded-xl border border-borderBase flex items-center">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'grid' ? 'bg-surface text-charcoal-900 shadow-sm' : 'text-charcoal-400'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'list' ? 'bg-surface text-charcoal-900 shadow-sm' : 'text-charcoal-400'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <Link
              to="/compare"
              className="px-4 py-2.5 bg-charcoal-900 hover:bg-coral-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Scale className="w-4 h-4" />
              <span>Compare Shortlist</span>
            </Link>
          </div>
        )}
      </div>

      {savedVendors.length === 0 ? (
        /* Empty State */
        <div className="bg-surface rounded-3xl border border-borderBase p-12 text-center space-y-4 shadow-card max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-coral-50 text-coral-600 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-serif text-charcoal-900">
            Your shortlist is waiting
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed max-w-sm mx-auto">
            Explore verified event vendors and click the heart icon on any card to save your favorites here.
          </p>
          <div className="pt-2">
            <Link
              to="/vendors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs shadow-subtle transition-all"
            >
              <span>Explore Vendors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-surface rounded-3xl border border-borderBase shadow-card divide-y divide-borderBase overflow-hidden">
          {savedVendors.map((vendor) => {
            const isCompared = comparedVendorIds.includes(vendor.id);
            return (
              <div key={vendor.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-ivory-50/50 transition-colors">
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={vendor.featuredImage}
                    alt={vendor.name}
                    className="w-16 h-16 rounded-2xl object-cover shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600">
                        {vendor.category}
                      </span>
                      <MatchScoreBadge score={vendor.matchScore || 94} size="sm" />
                    </div>
                    <Link to={`/vendors/${vendor.id}`}>
                      <h3 className="text-base font-bold font-serif text-charcoal-900 hover:text-coral-600 transition-colors">
                        {vendor.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-3 text-xs text-charcoal-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-charcoal-400" />
                        {vendor.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-charcoal-900">
                        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                        {vendor.rating.toFixed(1)} ({vendor.reviewCount})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-borderBase">
                  <div className="text-left sm:text-right pr-2">
                    <span className="text-[10px] text-charcoal-400 block">Starting from</span>
                    <span className="text-base font-extrabold text-charcoal-900">
                      ₹{formatINR(vendor.startingPrice)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCompareVendor(vendor.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        isCompared
                          ? 'bg-charcoal-900 text-white border-charcoal-900'
                          : 'bg-surface text-charcoal-700 border-borderBase hover:bg-ivory-100'
                      }`}
                    >
                      {isCompared ? 'Compared' : 'Compare'}
                    </button>

                    <Link
                      to={`/vendors/${vendor.id}`}
                      className="px-3.5 py-2 rounded-xl bg-ivory-200 hover:bg-coral-500 hover:text-white text-charcoal-900 text-xs font-bold transition-colors"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => toggleSaveVendor(vendor.id)}
                      className="p-2 rounded-xl text-charcoal-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Remove from shortlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
