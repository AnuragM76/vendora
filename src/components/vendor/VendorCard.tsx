import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, MapPin, Briefcase, Check, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { Vendor } from '../../types';
import { useApp } from '../../context/AppContext';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { RatingDisplay } from '../common/RatingDisplay';
import { PriceDisplay } from '../common/PriceDisplay';
import { MatchScoreBadge } from '../common/MatchScoreBadge';
import { AiMatchBreakdownModal } from '../common/AiMatchBreakdownModal';
import { calculateVendorMatch } from '../../services/recommendationService';

interface VendorCardProps {
  vendor: Vendor;
  showMatchScore?: boolean;
}

export const VendorCard: React.FC<VendorCardProps> = ({
  vendor,
  showMatchScore = true,
}) => {
  const { isSaved, toggleSaveVendor, comparedVendorIds, toggleCompareVendor, activeEvent } = useApp();
  const [showAiModal, setShowAiModal] = useState(false);
  const [compareWarning, setCompareWarning] = useState(false);

  const saved = isSaved(vendor.id);
  const isCompared = comparedVendorIds.includes(vendor.id);
  const match = calculateVendorMatch(vendor, activeEvent);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const success = toggleCompareVendor(vendor.id);
    if (!success) {
      setCompareWarning(true);
      setTimeout(() => setCompareWarning(false), 2800);
    }
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSaveVendor(vendor.id);
  };

  return (
    <>
      <div className="group bg-surface rounded-2xl border border-borderBase hover:border-charcoal-400/60 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden relative">
        {/* Compare Limit Toast Notice */}
        {compareWarning && (
          <div className="absolute top-2 inset-x-2 z-30 bg-charcoal-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-elevated flex items-center justify-between animate-fadeIn">
            <span className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              Max 4 vendors in comparison
            </span>
            <Link to="/compare" className="text-coral-400 underline font-bold text-[10px]">
              View Matrix
            </Link>
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-100">
          <img
            src={vendor.featuredImage}
            alt={vendor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Top Badges & Actions */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 pointer-events-auto">
              {vendor.verified && <VerifiedBadge size="sm" />}
              {showMatchScore && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowAiModal(true);
                  }}
                  className="bg-white/95 backdrop-blur-md shadow-sm rounded-full transition-transform active:scale-95 hover:scale-105 cursor-pointer"
                  title="Click to view match explanation"
                >
                  <MatchScoreBadge score={match.overall} size="sm" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 pointer-events-auto">
              <button
                type="button"
                onClick={handleSaveClick}
                className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-all duration-200 active:scale-90 ${
                  saved
                    ? 'bg-coral-500 text-white shadow-coral-500/25 ring-2 ring-white/80'
                    : 'bg-white/90 text-charcoal-700 hover:text-coral-500 hover:bg-white'
                }`}
                title={saved ? 'Remove from Shortlist' : 'Save to Shortlist'}
              >
                <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Availability pill bottom left */}
          <div className="absolute bottom-3 left-3 pointer-events-none">
            {vendor.availability ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/95 text-emerald-800 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emeraldGreen animate-pulse" />
                Available for dates
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-charcoal-900/85 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm">
                <Clock className="w-3 h-3 text-amber-400" />
                Limited dates
              </span>
            )}
          </div>
        </div>

        {/* Details Body */}
        <div className="p-5 flex-1 flex flex-col justify-between text-left">
          <div>
            {/* Category & Location */}
            <div className="flex items-center justify-between text-xs text-charcoal-500 mb-1.5">
              <span className="font-bold text-coral-600 uppercase tracking-wider text-[11px]">
                {vendor.category}
              </span>
              <span className="flex items-center gap-1 text-charcoal-500 font-medium text-[11px]">
                <MapPin className="w-3 h-3 text-charcoal-400" />
                {vendor.location}
              </span>
            </div>

            {/* Vendor Name */}
            <Link to={`/vendors/${vendor.id}`}>
              <h3 className="text-base font-bold font-serif text-charcoal-900 group-hover:text-coral-600 transition-colors line-clamp-1">
                {vendor.name}
              </h3>
            </Link>

            {/* Rating & Experience */}
            <div className="flex items-center gap-3 mt-2">
              <RatingDisplay rating={vendor.rating} reviewCount={vendor.reviewCount} size="sm" />
              <span className="text-charcoal-300">•</span>
              <span className="flex items-center gap-1 text-xs text-charcoal-500 font-medium">
                <Briefcase className="w-3 h-3 text-charcoal-400" />
                {vendor.experience}+ yrs exp
              </span>
            </div>

            {/* Short Tagline / styles */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {vendor.styles.slice(0, 3).map((st, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-charcoal-50 text-charcoal-600 px-2.5 py-0.5 rounded-md font-medium border border-borderBase/60"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & Actions */}
          <div className="mt-5 pt-3.5 border-t border-borderBase flex items-center justify-between">
            <div>
              <PriceDisplay amount={vendor.startingPrice} category={vendor.category} size="md" />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCompareClick}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
                  isCompared
                    ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                    : 'bg-surface text-charcoal-700 border-borderBase hover:border-charcoal-400 hover:bg-charcoal-50'
                }`}
                title={isCompared ? 'Remove from comparison' : 'Compare vendor'}
              >
                {isCompared ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="hidden sm:inline">Added</span>
                  </>
                ) : (
                  <>
                    <Scale className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Compare</span>
                  </>
                )}
              </button>

              <Link
                to={`/vendors/${vendor.id}`}
                className="px-3.5 py-1.5 bg-ivory-200 hover:bg-charcoal-900 hover:text-white text-charcoal-900 font-bold text-xs rounded-xl transition-colors text-center"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AiMatchBreakdownModal
        vendor={vendor}
        event={activeEvent}
        isOpen={showAiModal}
        onClose={() => setShowAiModal(false)}
      />
    </>
  );
};
