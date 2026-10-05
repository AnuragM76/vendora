import React from 'react';
import { X, Sparkles, CheckCircle2, TrendingUp, MapPin, IndianRupee, Calendar, Star, Palette } from 'lucide-react';
import { Vendor, EventPlan } from '../../types';
import { calculateVendorMatch } from '../../services/recommendationService';

interface AiMatchBreakdownModalProps {
  vendor: Vendor | null;
  event: EventPlan;
  isOpen: boolean;
  onClose: () => void;
}

export const AiMatchBreakdownModal: React.FC<AiMatchBreakdownModalProps> = ({
  vendor,
  event,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !vendor) return null;

  const match = calculateVendorMatch(vendor, event);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-surface rounded-2xl border border-borderBase shadow-elevated max-w-lg w-full overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-ai-50 via-surface to-ivory-100 p-6 border-b border-borderBase flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-ai-500 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-ai-600">AI Compatibility Analysis</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-charcoal-900 leading-tight">
                {vendor.name}
              </h3>
              <p className="text-xs text-charcoal-400 mt-0.5">
                Matched against: <span className="font-medium text-charcoal-700">{event.name} ({event.location})</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Score Hero */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-ai-50 to-purple-50/30 border border-ai-100">
            <div>
              <div className="text-sm font-semibold text-charcoal-900">Overall Match Quality</div>
              <p className="text-xs text-charcoal-500 mt-0.5">Weighted composite algorithm</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-ai-700">{match.overall}%</span>
              <span className="text-xs text-ai-600 font-semibold uppercase tracking-wider">High Fit</span>
            </div>
          </div>

          {/* Metrics breakdown */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
              Factor Breakdown
            </h4>

            {/* Budget */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-charcoal-700">
                <span className="flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-emeraldGreen" />
                  Budget Compatibility
                </span>
                <span className="font-bold text-charcoal-900">{match.budgetScore}%</span>
              </div>
              <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emeraldGreen h-full rounded-full transition-all duration-500" 
                  style={{ width: `${match.budgetScore}%` }} 
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-charcoal-700">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-coral-500" />
                  Location Proximity
                </span>
                <span className="font-bold text-charcoal-900">{match.locationScore}%</span>
              </div>
              <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-coral-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${match.locationScore}%` }} 
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-charcoal-700">
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-gold-500" />
                  Vendor Quality & Ratings
                </span>
                <span className="font-bold text-charcoal-900">{match.ratingScore}%</span>
              </div>
              <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gold-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${match.ratingScore}%` }} 
                />
              </div>
            </div>

            {/* Style */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-charcoal-700">
                <span className="flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-ai-500" />
                  Aesthetic & Style Match
                </span>
                <span className="font-bold text-charcoal-900">{match.styleScore}%</span>
              </div>
              <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-ai-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${match.styleScore}%` }} 
                />
              </div>
            </div>

            {/* Availability */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-charcoal-700">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  Schedule Availability
                </span>
                <span className="font-bold text-charcoal-900">{match.availabilityScore}%</span>
              </div>
              <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${match.availabilityScore}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Why We Recommend This */}
          <div className="bg-ivory-100 rounded-xl p-4 border border-borderBase">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 flex items-center gap-1.5 mb-2.5">
              <TrendingUp className="w-4 h-4 text-ai-500" />
              Why this vendor matches your event
            </h4>
            <ul className="space-y-2">
              {match.reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-emeraldGreen shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-charcoal-50 border-t border-borderBase flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-charcoal-900 text-white rounded-lg text-xs font-semibold hover:bg-charcoal-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
