import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  IndianRupee, 
  Users, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  TrendingUp, 
  Lightbulb, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronDown,
  Package
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockVendors } from '../data/vendors';
import { recommendVendors } from '../services/recommendationService';
import { VendorCard } from '../components/vendor/VendorCard';
import { CategoryType } from '../types';
import { formatINR } from '../components/common/PriceDisplay';

export const RecommendationsPage: React.FC = () => {
  const { activeEvent } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');

  // Compute AI recommendations based on activeEvent
  const rankedVendors = useMemo(() => {
    const allRanked = recommendVendors(mockVendors, activeEvent);
    if (selectedCategory === 'All') return allRanked;
    return allRanked.filter(v => v.category === selectedCategory);
  }, [activeEvent, selectedCategory]);

  const categories: (CategoryType | 'All')[] = [
    'All',
    'Photography',
    'Catering',
    'Decoration',
    'Venue',
    'Makeup',
    'DJ',
    'Videography',
    'Event Planning',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-50 text-ai-700 border border-ai-200 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-ai-500" />
          <span>VENDORA Smart Match Algorithm</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-charcoal-900">
          Your personalized vendor recommendations
        </h1>
        <p className="text-sm text-charcoal-500 max-w-2xl">
          Based on your event requirements, budget caps, city location, guest count, and aesthetic preferences.
        </p>
      </div>

      {/* SECTION 16: ACTIVE EVENT SUMMARY CARD */}
      <div className="bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white rounded-3xl p-6 sm:p-8 border border-charcoal-800 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Active Optimization Target
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {activeEvent.name}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs text-charcoal-300">
            <span className="flex items-center gap-1.5 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-charcoal-700">
              <Calendar className="w-3.5 h-3.5 text-coral-400" />
              {activeEvent.date}
            </span>
            <span className="flex items-center gap-1.5 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-charcoal-700">
              <MapPin className="w-3.5 h-3.5 text-coral-400" />
              {activeEvent.location}
            </span>
            <span className="flex items-center gap-1.5 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-charcoal-700">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              {activeEvent.guestCount} Guests
            </span>
            <span className="flex items-center gap-1.5 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-charcoal-700">
              <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
              ₹{formatINR(activeEvent.totalBudget)} Budget
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-charcoal-400">Target Aesthetic:</span>
            {activeEvent.preferences.map((p, i) => (
              <span key={i} className="text-xs bg-charcoal-800 text-coral-300 px-2.5 py-0.5 rounded-full font-medium border border-charcoal-700">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
          <Link
            to="/events/new"
            className="px-5 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white text-xs font-bold text-center border border-charcoal-700 transition-colors"
          >
            Adjust Event Parameters
          </Link>
          <Link
            to="/compare"
            className="px-5 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold text-center shadow-card transition-colors"
          >
            Open Comparison Matrix
          </Link>
        </div>
      </div>

      {/* SECTION 56: AI PLANNING INSIGHT BANNER */}
      <div className="bg-gradient-to-r from-ai-50 via-surface to-ivory-100 rounded-3xl p-6 border border-ai-200 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-ai-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-ai-600">✦ VENDORA AI Planning Insight</span>
            </div>
            <h3 className="text-base font-bold text-charcoal-900">
              Bundle Opportunity: Photography + Decoration Combo
            </h3>
            <p className="text-xs text-charcoal-600 max-w-2xl leading-relaxed">
              Based on your ₹2,50,000 budget and Pune location, pairing <span className="font-semibold text-charcoal-900">Lens & Light Studio</span> with <span className="font-semibold text-charcoal-900">Utsav Mandap Decor</span> can save you approximately <span className="font-bold text-emeraldGreen">₹18,000</span> compared to individual peak bookings.
            </p>
          </div>
        </div>

        <Link
          to="/compare"
          className="shrink-0 px-4 py-2.5 rounded-xl bg-ai-900 hover:bg-ai-800 text-white font-bold text-xs shadow-subtle transition-all"
        >
          Compare Alternatives
        </Link>
      </div>

      {/* SECTION 55: SMART EVENT PACKAGES */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Bundled Savings</span>
          <h2 className="text-2xl font-bold font-serif text-charcoal-900 mt-0.5">Smart Event Packages</h2>
          <p className="text-xs text-charcoal-500">Pre-negotiated multi-vendor tiers designed for your event scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Package 1 */}
          <div className="bg-surface rounded-2xl p-6 border border-borderBase shadow-card space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-coral-600 bg-coral-50 px-2 py-0.5 rounded-full">
                    Recommended Budget Tier
                  </span>
                  <h3 className="text-lg font-bold font-serif text-charcoal-900 mt-1">The Classic Elegance Bundle</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-charcoal-900">₹2,20,000</div>
                  <span className="text-[10px] text-emeraldGreen font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Save ₹24,000 bundled
                  </span>
                </div>
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed">
                Covers your core 4 vendor pillars with verified vendors in Pune:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-700 pt-2 border-t border-borderBase">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> 1-Day Lawn/Banquet</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> Candid Photo & Video</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> Royal Floral Mandap</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> Gourmet Veg Buffet (300pax)</div>
              </div>
            </div>

            <Link
              to="/vendors"
              className="mt-4 w-full py-2.5 rounded-xl bg-ivory-200 hover:bg-charcoal-900 hover:text-white text-charcoal-900 text-xs font-bold text-center transition-colors"
            >
              Explore Bundle Vendors
            </Link>
          </div>

          {/* Package 2 */}
          <div className="bg-surface rounded-2xl p-6 border-2 border-gold-400 shadow-elevated space-y-4 flex flex-col justify-between relative">
            <span className="absolute -top-3 right-6 bg-gold-500 text-charcoal-950 font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Luxury Upgrade
            </span>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded-full">
                    Turnkey Sovereign
                  </span>
                  <h3 className="text-lg font-bold font-serif text-charcoal-900 mt-1">The Grand Sovereign Experience</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-charcoal-900">₹3,50,000</div>
                  <span className="text-[10px] text-emeraldGreen font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Save ₹35,000 bundled
                  </span>
                </div>
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed">
                Complete 2-day extravaganza with drone, bridal beauty, and Bollywood DJ:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-700 pt-2 border-t border-borderBase">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> Resort Lawn + 4 Rooms</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> 4K Cinema Drone Shoot</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> Fairy Light Canopy Decor</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen" /> Live Dhol & Bollywood DJ</div>
              </div>
            </div>

            <Link
              to="/vendors"
              className="mt-4 w-full py-2.5 rounded-xl bg-charcoal-900 hover:bg-gold-500 hover:text-charcoal-950 text-white text-xs font-bold text-center transition-colors"
            >
              Explore Grand Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS FOR RANKED RECOMMENDATIONS */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-4">
          <div>
            <h2 className="text-2xl font-bold font-serif text-charcoal-900">
              Ranked Vendor Matches
            </h2>
            <p className="text-xs text-charcoal-500 mt-0.5">
              Showing top {rankedVendors.length} recommendations sorted by overall algorithmic match score.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === c
                    ? 'bg-charcoal-900 text-white'
                    : 'bg-surface text-charcoal-600 border border-borderBase hover:bg-ivory-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankedVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} showMatchScore={true} />
          ))}
        </div>
      </section>
    </div>
  );
};
