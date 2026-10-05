import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  IndianRupee, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Scale, 
  Plus,
  AlertCircle,
  TrendingDown,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { vendorService } from '../services/vendorService';
import { VendorCard } from '../components/vendor/VendorCard';
import { formatINR } from '../components/common/PriceDisplay';
import { Vendor } from '../types';

export const CustomerDashboardPage: React.FC = () => {
  const { user, activeEvent, savedVendorIds, bookings } = useApp();

  const savedVendors = savedVendorIds
    .map(id => vendorService.getVendorById(id))
    .filter((v): v is Vendor => Boolean(v))
    .slice(0, 3);

  const recommendedVendors = vendorService.getFeaturedVendors().slice(0, 3);

  // Budget calculations
  const totalBudget = activeEvent.totalBudget || 250000;
  const allocatedBudget = 165000;
  const remainingBudget = totalBudget - allocatedBudget;
  const usedPercentage = Math.round((allocatedBudget / totalBudget) * 100);

  // Planning Milestones
  const progressMilestones = [
    { label: 'Event Setup & Vision', progress: 100, done: true },
    { label: 'Venue Booking', progress: 100, done: true },
    { label: 'Photography & Cinema', progress: 80, done: false },
    { label: 'Gourmet Catering', progress: 40, done: false },
    { label: 'Mandap & Floral Decor', progress: 20, done: false },
  ];

  return (
    <div className="space-y-8 text-left">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">
            Personal Event Command Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-0.5">
            Good evening, {user.name.split(' ')[0]} 👋
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Let's make your upcoming celebration unforgettable.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/events/new"
            className="px-4 py-2.5 rounded-xl bg-ivory-200 hover:bg-ivory-300 text-charcoal-900 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Switch / New Event</span>
          </Link>

          <Link
            to="/recommendations"
            className="px-4 py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-subtle transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Match Engine</span>
          </Link>
        </div>
      </div>

      {/* EVENT OVERVIEW CARD */}
      <div className="bg-gradient-to-r from-ivory-200 via-surface to-ivory-100 rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-coral-100 text-coral-700">
              {activeEvent.eventType}
            </span>
            <span className="text-xs text-charcoal-500 font-medium">Primary Event</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
            {activeEvent.name}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs text-charcoal-600 font-medium">
            <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-xl border border-borderBase">
              <Calendar className="w-3.5 h-3.5 text-coral-500" />
              {activeEvent.date}
            </span>
            <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-xl border border-borderBase">
              <MapPin className="w-3.5 h-3.5 text-coral-500" />
              {activeEvent.location}
            </span>
            <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-xl border border-borderBase">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              {activeEvent.guestCount} Guests
            </span>
          </div>
        </div>

        {/* Budget Meter in Header Card */}
        <div className="lg:col-span-4 bg-surface p-5 rounded-2xl border border-borderBase shadow-subtle space-y-3">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-charcoal-500 font-medium">Budget Utilization</span>
            <span className="text-xs font-bold text-coral-600">{usedPercentage}% Used</span>
          </div>

          <div className="w-full bg-charcoal-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-coral-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${usedPercentage}%` }}
            />
          </div>

          <div className="flex justify-between text-xs pt-1">
            <div>
              <span className="text-[10px] text-charcoal-400 block uppercase">Allocated</span>
              <span className="font-bold text-charcoal-900">₹{formatINR(allocatedBudget)}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-charcoal-400 block uppercase">Total Budget</span>
              <span className="font-bold text-charcoal-900">₹{formatINR(totalBudget)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2-COLUMN GRID: PROGRESS & BUDGET VISUALIZATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 6 cols: Planning Progress */}
        <div className="lg:col-span-6 bg-surface rounded-3xl p-6 sm:p-7 border border-borderBase shadow-card space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-serif text-charcoal-900">
              Planning Progress
            </h3>
            <span className="text-xs font-semibold text-coral-600">3 of 5 Pillars Active</span>
          </div>

          <div className="space-y-4">
            {progressMilestones.map((item, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-charcoal-800 flex items-center gap-2">
                    {item.done ? (
                      <CheckCircle2 className="w-4 h-4 text-emeraldGreen" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-coral-400" />
                    )}
                    {item.label}
                  </span>
                  <span className="font-bold text-charcoal-600">{item.progress}%</span>
                </div>
                <div className="w-full bg-charcoal-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.done ? 'bg-emeraldGreen' : 'bg-coral-500'}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/vendors"
              className="text-xs font-bold text-coral-600 hover:underline flex items-center gap-1"
            >
              <span>Browse remaining vendor pillars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right 6 cols: Budget Overview Visualization */}
        <div className="lg:col-span-6 bg-surface rounded-3xl p-6 sm:p-7 border border-borderBase shadow-card space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-serif text-charcoal-900">
              Budget Allocation Breakdown
            </h3>
            <span className="text-xs font-bold text-emeraldGreen">
              ₹{formatINR(remainingBudget)} Remaining
            </span>
          </div>

          {/* Category Allocation Bars */}
          <div className="space-y-3">
            {[
              { cat: 'Venue', allocated: 75000, pct: 30, color: 'bg-charcoal-800' },
              { cat: 'Catering', allocated: 70000, pct: 28, color: 'bg-coral-500' },
              { cat: 'Photography', allocated: 45000, pct: 18, color: 'bg-gold-500' },
              { cat: 'Decoration', allocated: 35000, pct: 14, color: 'bg-ai-500' },
              { cat: 'Other & Contingency', allocated: 25000, pct: 10, color: 'bg-charcoal-400' },
            ].map((b, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-charcoal-600 font-medium">{b.cat}</span>
                  <span className="font-bold text-charcoal-900">₹{formatINR(b.allocated)} ({b.pct}%)</span>
                </div>
                <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.pct * 3.3}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 p-3 bg-ivory-100 rounded-xl border border-borderBase flex items-center justify-between text-xs text-charcoal-700">
            <span>Total Target Cap: <strong className="text-charcoal-900">₹{formatINR(totalBudget)}</strong></span>
            <span>Allocated: <strong className="text-coral-600">₹{formatINR(allocatedBudget)}</strong></span>
          </div>
        </div>
      </div>

      {/* AI INSIGHT CARD */}
      <div className="bg-gradient-to-r from-ai-50 via-surface to-ivory-100 p-6 rounded-3xl border border-ai-200 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-ai-500 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-ai-700 uppercase tracking-wider">✦ VENDORA AI Optimization</div>
            <p className="text-xs sm:text-sm text-charcoal-700 mt-0.5">
              You can save approximately <strong className="text-emeraldGreen">₹18,000</strong> by choosing the recommended photography + decoration combination in Pune.
            </p>
          </div>
        </div>

        <Link
          to="/recommendations"
          className="shrink-0 px-4 py-2 bg-ai-900 hover:bg-ai-800 text-white text-xs font-bold rounded-xl transition-colors text-center"
        >
          View Recommendations
        </Link>
      </div>

      {/* RECENT BOOKINGS & SHORTLISTED VENDORS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bookings Preview */}
        <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-7 border border-borderBase shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-serif text-charcoal-900">
              Upcoming Bookings
            </h3>
            <Link to="/bookings" className="text-xs font-bold text-coral-600 hover:underline">
              View All ({bookings.length}) →
            </Link>
          </div>

          <div className="divide-y divide-borderBase">
            {bookings.slice(0, 3).map((bkg) => (
              <div key={bkg.id} className="py-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={bkg.vendorImage}
                    alt={bkg.vendorName}
                    className="w-11 h-11 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-charcoal-900 truncate">{bkg.vendorName}</h4>
                    <p className="text-[11px] text-charcoal-500 truncate">{bkg.packageName} • {bkg.eventDate}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-charcoal-900">₹{formatINR(bkg.amount)}</div>
                  <span className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    bkg.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emeraldGreen'
                      : bkg.status === 'Pending'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-charcoal-100 text-charcoal-600'
                  }`}>
                    {bkg.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Shortlist Preview */}
        <div className="lg:col-span-5 bg-surface rounded-3xl p-6 sm:p-7 border border-borderBase shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-serif text-charcoal-900">
              Saved Shortlist
            </h3>
            <Link to="/saved" className="text-xs font-bold text-coral-600 hover:underline">
              View All ({savedVendorIds.length}) →
            </Link>
          </div>

          <div className="space-y-3">
            {savedVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="p-3 rounded-2xl bg-ivory-50 border border-borderBase flex items-center justify-between gap-3 hover:bg-ivory-100 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={vendor.featuredImage}
                    alt={vendor.name}
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-charcoal-900 truncate">{vendor.name}</h4>
                    <span className="text-[11px] text-coral-600 font-medium">{vendor.category} • {vendor.location}</span>
                  </div>
                </div>

                <Link
                  to={`/vendors/${vendor.id}`}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-borderBase text-xs font-bold hover:bg-charcoal-900 hover:text-white transition-colors"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOP RECOMMENDED VENDORS SECTION */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold font-serif text-charcoal-900">
              Top Recommended Matches for {activeEvent.name}
            </h3>
            <p className="text-xs text-charcoal-500 mt-0.5">
              Verified local vendors matching your {activeEvent.preferences.join(' + ')} vision.
            </p>
          </div>
          <Link to="/recommendations" className="text-xs font-bold text-coral-600 hover:underline">
            View All Recommendations →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </div>
  );
};
