import React from 'react';
import { Filter, RotateCcw, ShieldCheck, Check, Star } from 'lucide-react';
import { CategoryType } from '../../types';
import { vendorService, VendorFilterOptions } from '../../services/vendorService';

interface FilterSidebarProps {
  filters: VendorFilterOptions;
  onChange: (filters: VendorFilterOptions) => void;
  onReset: () => void;
  totalCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onChange,
  onReset,
  totalCount,
}) => {
  const categories: (CategoryType | 'All')[] = ['All', ...vendorService.getCategories()];
  const locations = ['All', ...vendorService.getLocations()];
  const styles = ['All', 'Traditional', 'Candid', 'Modern', 'Royal', 'Luxury', 'Minimalist', 'Editorial'];

  return (
    <div className="bg-surface rounded-2xl border border-borderBase p-5 shadow-card space-y-6 text-left">
      <div className="flex items-center justify-between border-b border-borderBase pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-coral-600" />
          <h3 className="text-sm font-bold text-charcoal-900">Filters</h3>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-charcoal-400 hover:text-coral-600 flex items-center gap-1 font-medium transition-colors"
          title="Reset all filters"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
          Category
        </label>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange({ ...filters, category: cat })}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                (filters.category || 'All') === cat
                  ? 'bg-charcoal-900 text-white font-bold'
                  : 'text-charcoal-600 hover:bg-ivory-100 hover:text-charcoal-900'
              }`}
            >
              <span>{cat}</span>
              {(filters.category || 'All') === cat && <Check className="w-3.5 h-3.5 text-coral-400" />}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2 pt-4 border-t border-borderBase/60">
        <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
          City Location
        </label>
        <select
          value={filters.location || 'All'}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc === 'All' ? 'All Cities' : `${loc}`}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-2 pt-4 border-t border-borderBase/60">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
            Max Starting Price
          </label>
          <span className="text-xs font-bold text-coral-600">
            {filters.maxPrice ? `₹${(filters.maxPrice).toLocaleString('en-IN')}` : 'No limit'}
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="250000"
          step="5000"
          value={filters.maxPrice || 250000}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-coral-500 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-charcoal-400">
          <span>₹1,000</span>
          <span>₹1,00,000</span>
          <span>₹2,50,000+</span>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2 pt-4 border-t border-borderBase/60">
        <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
          Minimum Rating
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {[4.0, 4.5, 4.8, 4.9].map((r) => (
            <button
              key={r}
              onClick={() => onChange({ ...filters, minRating: filters.minRating === r ? undefined : r })}
              className={`py-1.5 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1 transition-all ${
                filters.minRating === r
                  ? 'bg-gold-500 text-charcoal-950 border-gold-600 font-bold'
                  : 'bg-surface text-charcoal-700 border-borderBase hover:bg-ivory-100'
              }`}
            >
              <span>{r}</span>
              <Star className="w-3 h-3 fill-current" />
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-2 pt-4 border-t border-borderBase/60">
        <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
          Years of Experience
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {[5, 8, 10].map((exp) => (
            <button
              key={exp}
              onClick={() => onChange({ ...filters, experience: filters.experience === exp ? undefined : exp })}
              className={`py-1.5 rounded-lg text-xs font-medium border text-center transition-all ${
                filters.experience === exp
                  ? 'bg-charcoal-900 text-white border-charcoal-900 font-bold'
                  : 'bg-surface text-charcoal-700 border-borderBase hover:bg-ivory-100'
              }`}
            >
              {exp}+ yrs
            </button>
          ))}
        </div>
      </div>

      {/* Style Preference */}
      <div className="space-y-2 pt-4 border-t border-borderBase/60">
        <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
          Aesthetic Style
        </label>
        <div className="flex flex-wrap gap-1.5">
          {styles.map((st) => (
            <button
              key={st}
              onClick={() => onChange({ ...filters, style: st === 'All' ? undefined : st })}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                (filters.style || 'All') === st
                  ? 'bg-coral-500 text-white border-coral-500'
                  : 'bg-surface text-charcoal-600 border-borderBase hover:bg-ivory-100'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles (Verified & Available) */}
      <div className="space-y-3 pt-4 border-t border-borderBase/60">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={!!filters.verifiedOnly}
            onChange={(e) => onChange({ ...filters, verifiedOnly: e.target.checked })}
            className="w-4 h-4 rounded text-emeraldGreen focus:ring-emeraldGreen accent-emeraldGreen"
          />
          <span className="text-xs font-semibold text-charcoal-800 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emeraldGreen" />
            Verified Vendors Only
          </span>
        </label>

        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={!!filters.availableOnly}
            onChange={(e) => onChange({ ...filters, availableOnly: e.target.checked })}
            className="w-4 h-4 rounded text-coral-500 focus:ring-coral-500 accent-coral-500"
          />
          <span className="text-xs font-semibold text-charcoal-800">
            Available on My Date Only
          </span>
        </label>
      </div>

      <div className="pt-2 text-[11px] text-charcoal-400 text-center">
        Showing {totalCount} verified vendors
      </div>
    </div>
  );
};
