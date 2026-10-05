import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Scale, ArrowRight, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { vendorService } from '../../services/vendorService';

export const CompareTray: React.FC = () => {
  const { comparedVendorIds, removeFromCompare, clearCompare } = useApp();
  const navigate = useNavigate();

  if (comparedVendorIds.length === 0) return null;

  const comparedVendors = comparedVendorIds
    .map(id => vendorService.getVendorById(id))
    .filter(Boolean);

  return (
    <div className="fixed bottom-6 inset-x-4 md:inset-x-auto md:right-8 z-40 max-w-xl w-full animate-slideUp">
      <div className="bg-charcoal-950/95 backdrop-blur-md text-white rounded-2xl border border-charcoal-700/60 shadow-floating p-4">
        <div className="flex items-center justify-between mb-3 border-b border-charcoal-800 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-coral-500 flex items-center justify-center text-white">
              <Scale className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-300">
              Vendor Comparison
            </span>
            <span className="text-xs bg-charcoal-800 text-coral-400 font-bold px-2 py-0.5 rounded-full">
              {comparedVendors.length} / 4
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearCompare}
              className="text-[11px] text-charcoal-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Clear all"
            >
              <Trash2 className="w-3 h-3" />
              Clear
            </button>
          </div>
        </div>

        {/* Vendors Thumbnails */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {comparedVendors.map(vendor => vendor && (
              <div
                key={vendor.id}
                className="relative group shrink-0 flex items-center gap-2 bg-charcoal-900 border border-charcoal-800 rounded-xl p-1.5 pr-3"
              >
                <img
                  src={vendor.featuredImage}
                  alt={vendor.name}
                  className="w-9 h-9 rounded-lg object-cover"
                />
                <div className="text-left max-w-[100px] truncate">
                  <div className="text-xs font-semibold text-white truncate">{vendor.name}</div>
                  <div className="text-[10px] text-coral-400 truncate">{vendor.category}</div>
                </div>
                <button
                  onClick={() => removeFromCompare(vendor.id)}
                  className="p-1 rounded-full text-charcoal-400 hover:text-white hover:bg-charcoal-800"
                  title="Remove"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}

            {Array.from({ length: 4 - comparedVendors.length }).map((_, i) => (
              <div
                key={i}
                className="hidden sm:flex shrink-0 w-24 h-12 rounded-xl border border-dashed border-charcoal-800 items-center justify-center text-[10px] text-charcoal-500 font-medium"
              >
                + Add vendor
              </div>
            ))}
          </div>

          <Link
            to="/compare"
            className="shrink-0 px-4 py-2.5 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-coral-500/20 transition-all hover:scale-105"
          >
            Compare Now
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
