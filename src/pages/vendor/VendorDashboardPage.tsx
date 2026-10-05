import React, { useState } from 'react';
import { 
  Store, 
  Eye, 
  Calendar, 
  TrendingUp, 
  Star, 
  Check, 
  X, 
  Plus, 
  Image, 
  Briefcase, 
  Clock, 
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { formatINR } from '../../components/common/PriceDisplay';

interface BookingRequest {
  id: string;
  clientName: string;
  event: string;
  date: string;
  guestCount: number;
  packageRequested: string;
  amount: number;
  status: 'Pending' | 'Accepted' | 'Declined';
}

export const VendorDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'packages' | 'portfolio' | 'availability'>('overview');

  // Interactive booking requests
  const [requests, setRequests] = useState<BookingRequest[]>([
    {
      id: 'req-1',
      clientName: 'Anurag Sharma & Shravani',
      event: 'Wedding Celebration (Pune)',
      date: '24 Dec 2026',
      guestCount: 300,
      packageRequested: 'Signature 2-Day Wedding',
      amount: 75000,
      status: 'Pending',
    },
    {
      id: 'req-2',
      clientName: 'Vikram & Priya Singhania',
      event: 'Sangeet & Cocktail Night',
      date: '10 Jan 2027',
      guestCount: 220,
      packageRequested: 'Essential Day',
      amount: 45000,
      status: 'Pending',
    },
    {
      id: 'req-3',
      clientName: 'Pooja Chordia',
      event: 'Pre-Wedding Shoot at Lavasa',
      date: '05 Nov 2026',
      guestCount: 2,
      packageRequested: 'Pre-Wedding Editorial',
      amount: 30000,
      status: 'Accepted',
    },
    {
      id: 'req-4',
      clientName: 'Rajesh & Kavita Deshmukh',
      event: '25th Anniversary Banquet',
      date: '18 Dec 2026',
      guestCount: 150,
      packageRequested: 'Essential Day',
      amount: 45000,
      status: 'Accepted',
    }
  ]);

  const handleAction = (id: string, newStatus: 'Accepted' | 'Declined') => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="space-y-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">
              Vendor Partner Hub
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emeraldGreen bg-emerald-50 px-2.5 py-0.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Business
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
            Good morning, Lens & Light Studio
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Koregaon Park, Pune • Premium Candid Wedding Photography Partner
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-surface p-1 rounded-xl border border-borderBase overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'bookings', label: 'Requests (2)' },
            { id: 'packages', label: 'Packages' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'availability', label: 'Calendar' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                activeTab === t.id
                  ? 'bg-charcoal-900 text-white shadow-sm'
                  : 'text-charcoal-600 hover:bg-ivory-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* METRIC STATS CARDS (Section 25) */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
            <span>Profile Quality</span>
            <Sparkles className="w-3.5 h-3.5 text-ai-500" />
          </div>
          <div className="text-2xl font-extrabold text-charcoal-900 mt-2 font-serif">92%</div>
          <p className="text-[11px] text-emeraldGreen font-semibold mt-1">Ready for AI Matching</p>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
            <span>New Requests</span>
            <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
          </div>
          <div className="text-2xl font-extrabold text-coral-600 mt-2 font-serif">12</div>
          <p className="text-[11px] text-charcoal-400 mt-1">2 Pending Review</p>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
            <span>Upcoming Gigs</span>
            <Calendar className="w-3.5 h-3.5 text-coral-500" />
          </div>
          <div className="text-2xl font-extrabold text-charcoal-900 mt-2 font-serif">5</div>
          <p className="text-[11px] text-charcoal-400 mt-1">Peak Wedding Season</p>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
            <span>Profile Views</span>
            <Eye className="w-3.5 h-3.5 text-gold-500" />
          </div>
          <div className="text-2xl font-extrabold text-charcoal-900 mt-2 font-serif">1,284</div>
          <p className="text-[11px] text-emeraldGreen font-semibold mt-1">+18% this month</p>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-xs text-charcoal-500 font-medium">
            <span>Average Rating</span>
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          </div>
          <div className="text-2xl font-extrabold text-charcoal-900 mt-2 font-serif">4.9 ★</div>
          <p className="text-[11px] text-charcoal-400 mt-1">142 Verified Reviews</p>
        </div>
      </div>

      {/* TAB 1: OVERVIEW & RECENT BOOKINGS */}
      {(activeTab === 'overview' || activeTab === 'bookings') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-charcoal-900">
                Incoming Client Booking Inquiries
              </h2>
              <p className="text-xs text-charcoal-500 mt-0.5">
                Review dates, packages, and confirm availability directly.
              </p>
            </div>
            <span className="text-xs font-semibold text-charcoal-600">
              {requests.filter(r => r.status === 'Pending').length} Action required
            </span>
          </div>

          <div className="space-y-3">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-surface rounded-2xl p-5 border border-borderBase shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-charcoal-900">{req.clientName}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      req.status === 'Accepted'
                        ? 'bg-emerald-50 text-emeraldGreen'
                        : req.status === 'Declined'
                        ? 'bg-rose-50 text-rose-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-600">
                    {req.event} • <strong className="text-charcoal-900">{req.date}</strong> ({req.guestCount} guests)
                  </p>
                  <p className="text-[11px] text-charcoal-400">
                    Requested: <span className="font-semibold text-charcoal-700">{req.packageRequested}</span> (₹{formatINR(req.amount)})
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-borderBase">
                  {req.status === 'Pending' ? (
                    <>
                      <button
                        onClick={() => handleAction(req.id, 'Declined')}
                        className="px-3 py-1.5 rounded-xl border border-borderBase hover:bg-rose-50 text-rose-700 text-xs font-bold transition-colors"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => handleAction(req.id, 'Accepted')}
                        className="px-4 py-1.5 rounded-xl bg-charcoal-900 hover:bg-emeraldGreen text-white text-xs font-bold transition-colors"
                      >
                        Accept & Lock Date
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-charcoal-500 font-medium">
                      Status: <strong className="text-charcoal-900">{req.status}</strong>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: PACKAGES & SERVICES */}
      {activeTab === 'packages' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-charcoal-900">Your Published Packages</h2>
              <p className="text-xs text-charcoal-500">Clients can book these directly through the VENDORA marketplace.</p>
            </div>
            <button
              onClick={() => alert('Feature: Simulated New Package Creation')}
              className="px-4 py-2 bg-coral-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Package</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Essential Day', price: 45000, features: ['1 Candid + 1 Traditional', '10 hours coverage', '300 edited photos'] },
              { name: 'Signature 2-Day Wedding', price: 75000, features: ['2 Candid + 2 Traditional', 'Pre-wedding shoot', 'Luxury Album', 'Instagram sneak peek'] },
              { name: 'Royal Heritage Package', price: 120000, features: ['Senior lead + 4 crew', '4K Drone aerial shoot', '2 Master Albums + 2 Parent books'] },
            ].map((pkg, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 border border-borderBase shadow-card space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold font-serif text-charcoal-900">{pkg.name}</h3>
                  <span className="text-lg font-extrabold text-charcoal-900">₹{formatINR(pkg.price)}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-charcoal-600 border-t border-borderBase pt-3">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emeraldGreen" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <button
                    onClick={() => alert('Simulated Edit Package')}
                    className="w-full py-2 bg-ivory-100 hover:bg-ivory-200 text-charcoal-800 text-xs font-bold rounded-xl transition-colors"
                  >
                    Edit Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: PORTFOLIO GALLERY */}
      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-charcoal-900">Portfolio Image Gallery</h2>
              <p className="text-xs text-charcoal-500">Showcase your high-resolution event photography to clients.</p>
            </div>
            <button
              onClick={() => alert('Simulated Upload Photo')}
              className="px-4 py-2 bg-charcoal-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Upload Work</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-borderBase group relative">
                <img src={img} alt="Portfolio item" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="text-xs text-white font-bold">Featured Shot</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: AVAILABILITY CALENDAR */}
      {activeTab === 'availability' && (
        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card space-y-6">
          <div>
            <h2 className="text-xl font-bold font-serif text-charcoal-900">Manage Booking Availability</h2>
            <p className="text-xs text-charcoal-500">Tap dates to toggle available vs blocked days on client searches.</p>
          </div>

          <div className="grid grid-cols-7 gap-2 max-w-xl text-center text-xs">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <span key={d} className="font-bold text-charcoal-400 py-2">{d}</span>
            ))}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isBlocked = [10, 11, 18, 24, 25].includes(day);
              return (
                <div
                  key={day}
                  onClick={() => alert(`Toggled date Dec ${day}`)}
                  className={`py-3 rounded-xl font-bold cursor-pointer transition-colors ${
                    isBlocked
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-100 hover:bg-emerald-100'
                  }`}
                >
                  {day}
                  <span className="block text-[9px] font-normal">{isBlocked ? 'Booked' : 'Open'}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
