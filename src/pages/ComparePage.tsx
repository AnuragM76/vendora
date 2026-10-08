import React, { useState, useEffect } from 'react';
import { vendorApi } from '../services/api';
import { Vendor } from '../types';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Sparkles, 
  Trash2, 
  Plus, 
  Check, 
  X, 
  Star, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { vendorService } from '../services/vendorService';
import { mockVendors } from '../data/vendors';
import { formatINR } from '../components/common/PriceDisplay';
import { calculateVendorMatch } from '../services/recommendationService';

export const ComparePage: React.FC = () => {
  const { comparedVendorIds, removeFromCompare, toggleCompareVendor, clearCompare, activeEvent } = useApp();
  const [addVendorModalOpen, setAddVendorModalOpen] = useState(false);

  const [apiVendors, setApiVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    if (comparedVendorIds.length > 0) {
      vendorApi.compareVendors(comparedVendorIds).then((res) => {
        if (res && res.length > 0) {
          setApiVendors(res);
        }
      }).catch(() => {});
    } else {
      setApiVendors([]);
    }
  }, [comparedVendorIds]);

  const vendors = apiVendors.length > 0 ? apiVendors : (
    comparedVendorIds
      .map(id => vendorService.getVendorById(id))
      .filter(Boolean) as typeof mockVendors
  );

  // Calculate dynamic matches
  const vendorsWithMatch = vendors.map(v => ({
    ...v,
    match: calculateVendorMatch(v, activeEvent),
  }));

  // Identify standout metrics
  const minPrice = vendors.length > 0 ? Math.min(...vendors.map(v => v.startingPrice)) : 0;
  const maxRating = vendors.length > 0 ? Math.max(...vendors.map(v => v.rating)) : 0;
  const maxExp = vendors.length > 0 ? Math.max(...vendors.map(v => v.experience)) : 0;
  const maxMatch = vendorsWithMatch.length > 0 ? Math.max(...vendorsWithMatch.map(v => v.match.overall)) : 0;

  const bestOverall = vendorsWithMatch.find(v => v.match.overall === maxMatch);
  const bestValue = vendors.find(v => v.startingPrice === minPrice);
  const bestRated = vendors.find(v => v.rating === maxRating);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-coral-600 mb-1">
            <Scale className="w-3.5 h-3.5" />
            <span>Side-by-Side Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Vendor Comparison Matrix
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Compare up to 4 vendors on cost, rating, experience, and AI compatibility.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {vendors.length < 4 && (
            <button
              onClick={() => setAddVendorModalOpen(true)}
              className="px-4 py-2.5 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-subtle transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Vendor ({vendors.length}/4)</span>
            </button>
          )}

          {vendors.length > 0 && (
            <button
              onClick={clearCompare}
              className="px-3.5 py-2.5 bg-surface border border-borderBase hover:bg-ivory-100 text-charcoal-600 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {vendors.length === 0 ? (
        /* Empty State */
        <div className="bg-surface rounded-3xl border border-borderBase p-12 text-center space-y-5 shadow-card max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-coral-50 text-coral-600 flex items-center justify-center mx-auto shadow-inner">
            <Scale className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-serif text-charcoal-900">
            Compare vendors side-by-side to make the right choice
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed max-w-md mx-auto">
            You haven't selected any vendors to compare yet. Browse the marketplace or explore AI recommendations and click "Compare".
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/vendors"
              className="px-6 py-3 bg-charcoal-900 hover:bg-coral-600 text-white text-xs font-bold rounded-xl shadow-subtle transition-all"
            >
              Explore Vendors
            </Link>
            <Link
              to="/recommendations"
              className="px-6 py-3 bg-ai-50 text-ai-900 border border-ai-200 hover:bg-ai-100 text-xs font-bold rounded-xl transition-all"
            >
              View AI Matches
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* COMPARISON TABLE */}
          <div className="bg-surface rounded-3xl border border-borderBase shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-borderBase bg-ivory-50/80">
                    <th className="p-4 sm:p-6 w-48 text-xs font-bold uppercase tracking-wider text-charcoal-400">
                      Criteria
                    </th>
                    {vendorsWithMatch.map((v) => (
                      <th key={v.id} className="p-4 sm:p-6 min-w-[220px] max-w-[280px] align-top">
                        <div className="space-y-3">
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-charcoal-100 border border-borderBase">
                            <img src={v.featuredImage} alt={v.name} className="w-full h-full object-cover" />
                            <button
                              onClick={() => removeFromCompare(v.id)}
                              className="absolute top-2 right-2 p-1 rounded-full bg-charcoal-950/70 text-white hover:bg-coral-500 transition-colors"
                              title="Remove vendor"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600">
                              {v.category}
                            </span>
                            <Link to={`/vendors/${v.id}`}>
                              <h3 className="text-base font-bold font-serif text-charcoal-900 hover:text-coral-600 transition-colors line-clamp-1">
                                {v.name}
                              </h3>
                            </Link>
                            <span className="flex items-center gap-1 text-xs text-charcoal-500 mt-0.5">
                              <MapPin className="w-3 h-3" /> {v.location}
                            </span>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-borderBase text-xs">
                  {/* Row: AI Match Score */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      AI Match Score
                    </td>
                    {vendorsWithMatch.map((v) => {
                      const isTop = v.match.overall === maxMatch;
                      return (
                        <td key={v.id} className="p-4 sm:p-6">
                          <div className="flex items-center gap-2">
                            <span className={`text-xl font-extrabold ${isTop ? 'text-ai-700' : 'text-charcoal-900'}`}>
                              {v.match.overall}%
                            </span>
                            {isTop && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-ai-100 text-ai-700 border border-ai-200">
                                Highest Match
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-charcoal-400 mt-1">
                            Budget: {v.match.budgetScore}% • Loc: {v.match.locationScore}%
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Starting Price */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      Starting Price
                    </td>
                    {vendors.map((v) => {
                      const isBest = v.startingPrice === minPrice;
                      return (
                        <td key={v.id} className="p-4 sm:p-6">
                          <div className="text-base font-extrabold text-charcoal-900">
                            ₹{formatINR(v.startingPrice)}
                            {v.category === 'Catering' && <span className="text-xs font-normal text-charcoal-500"> /plate</span>}
                          </div>
                          {isBest && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              Best Value
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Rating */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      Rating & Reviews
                    </td>
                    {vendors.map((v) => {
                      const isTop = v.rating === maxRating;
                      return (
                        <td key={v.id} className="p-4 sm:p-6">
                          <div className="flex items-center gap-1 font-bold text-charcoal-900">
                            <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                            <span>{v.rating.toFixed(1)}</span>
                            <span className="text-charcoal-400 font-normal">({v.reviewCount})</span>
                          </div>
                          {isTop && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold-100 text-gold-800">
                              Top Rated
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Experience */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      Experience
                    </td>
                    {vendors.map((v) => (
                      <td key={v.id} className="p-4 sm:p-6 font-semibold text-charcoal-700">
                        {v.experience} Years
                        {v.experience === maxExp && (
                          <span className="ml-2 text-[10px] font-normal text-charcoal-400">(Most Experienced)</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Availability */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      Event Date Availability
                    </td>
                    {vendors.map((v) => (
                      <td key={v.id} className="p-4 sm:p-6">
                        {v.availability ? (
                          <span className="inline-flex items-center gap-1 text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded-md">
                            <Check className="w-3.5 h-3.5 text-emeraldGreen" /> Available ({activeEvent.date})
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-800 font-bold bg-rose-50 px-2 py-1 rounded-md">
                            <X className="w-3.5 h-3.5 text-rose-500" /> Limited Dates
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Verification */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      VENDORA Verification
                    </td>
                    {vendors.map((v) => (
                      <td key={v.id} className="p-4 sm:p-6">
                        {v.verified ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emeraldGreen">
                            <ShieldCheck className="w-4 h-4" /> 100% Verified
                          </span>
                        ) : (
                          <span className="text-charcoal-400">Standard</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Aesthetic Styles */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      Aesthetic Styles
                    </td>
                    {vendors.map((v) => (
                      <td key={v.id} className="p-4 sm:p-6">
                        <div className="flex flex-wrap gap-1">
                          {v.styles.map((s, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-ivory-100 text-charcoal-700 rounded text-[11px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Primary Package */}
                  <tr className="hover:bg-ivory-50/50">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800 bg-ivory-50/30">
                      Standard Package
                    </td>
                    {vendors.map((v) => (
                      <td key={v.id} className="p-4 sm:p-6 text-charcoal-600">
                        <div className="font-bold text-charcoal-900">{v.packages[0]?.name}</div>
                        <p className="text-[11px] text-charcoal-500 mt-1 leading-snug">
                          {v.packages[0]?.description}
                        </p>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Actions */}
                  <tr className="bg-ivory-50/80">
                    <td className="p-4 sm:p-6 font-bold text-charcoal-800">
                      Next Step
                    </td>
                    {vendors.map((v) => (
                      <td key={v.id} className="p-4 sm:p-6">
                        <Link
                          to={`/vendors/${v.id}`}
                          className="w-full inline-block py-2 px-3 rounded-xl bg-charcoal-900 hover:bg-coral-500 text-white font-bold text-xs text-center transition-colors shadow-subtle"
                        >
                          View Full Profile
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 57: AI DECISION SUPPORT PANEL */}
          {bestOverall && (
            <div className="bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white rounded-3xl p-6 sm:p-8 border border-charcoal-800 shadow-elevated space-y-6">
              <div className="flex items-center gap-2 text-ai-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>✦ AI Decision Support</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-charcoal-800/80 border border-charcoal-700/80 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-ai-300 block">Best Overall Fit</span>
                  <div className="text-base font-bold font-serif text-white mt-1">{bestOverall.name}</div>
                  <p className="text-xs text-charcoal-400 mt-1">Match Score: {bestOverall.match.overall}%</p>
                </div>

                {bestValue && (
                  <div className="bg-charcoal-800/80 border border-charcoal-700/80 p-4 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block">Best Value for Budget</span>
                    <div className="text-base font-bold font-serif text-white mt-1">{bestValue.name}</div>
                    <p className="text-xs text-charcoal-400 mt-1">Starting from ₹{formatINR(bestValue.startingPrice)}</p>
                  </div>
                )}

                {bestRated && (
                  <div className="bg-charcoal-800/80 border border-charcoal-700/80 p-4 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-gold-400 block">Highest Client Acclaim</span>
                    <div className="text-base font-bold font-serif text-white mt-1">{bestRated.name}</div>
                    <p className="text-xs text-charcoal-400 mt-1">{bestRated.rating}★ across {bestRated.reviewCount} reviews</p>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-charcoal-800/50 border border-charcoal-700/60 space-y-2">
                <div className="text-xs font-bold text-gold-300">
                  Recommendation Synthesis:
                </div>
                <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
                  Based on your <span className="font-semibold text-white">₹{formatINR(activeEvent.totalBudget)}</span> budget and <span className="font-semibold text-white">{activeEvent.location}</span> event date, <span className="font-bold text-white">{bestOverall.name}</span> offers the strongest balance between price, rating, verified experience, and guaranteed schedule availability.
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {/* ADD VENDOR MODAL */}
      {addVendorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface rounded-3xl border border-borderBase shadow-floating max-w-xl w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-borderBase pb-3">
              <h3 className="text-base font-bold font-serif text-charcoal-900">Add Vendor to Comparison</h3>
              <button onClick={() => setAddVendorModalOpen(false)} className="text-charcoal-400">✕</button>
            </div>

            <p className="text-xs text-charcoal-500">
              Select any vendor below to compare alongside your current shortlist:
            </p>

            <div className="max-h-80 overflow-y-auto divide-y divide-borderBase space-y-1">
              {mockVendors
                .filter(v => !comparedVendorIds.includes(v.id))
                .map((v) => (
                  <div key={v.id} className="py-2.5 flex items-center justify-between hover:bg-ivory-100 p-2 rounded-xl">
                    <div className="flex items-center gap-3">
                      <img src={v.featuredImage} alt={v.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <div className="text-xs font-bold text-charcoal-900">{v.name}</div>
                        <div className="text-[11px] text-charcoal-500">{v.category} • {v.location} • ₹{formatINR(v.startingPrice)}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        toggleCompareVendor(v.id);
                        setAddVendorModalOpen(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-charcoal-900 text-white text-xs font-semibold hover:bg-coral-500 transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
