import React, { useState } from 'react';
import { 
  UserCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Calendar, 
  Heart, 
  Star, 
  Save, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CustomerProfilePage: React.FC = () => {
  const { user, activeEvent, savedVendorIds } = useApp();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || '+91 98221 00921');
  const [city, setCity] = useState(user.city || 'Pune');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 text-left">
      {/* Profile Header */}
      <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative">
          <img
            src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={user.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-coral-500 shadow-md"
          />
          <span className="absolute -bottom-1 -right-1 p-1 bg-emeraldGreen text-white rounded-full">
            <Check className="w-3 h-3" />
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-serif font-bold text-charcoal-900">{name}</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-coral-50 text-coral-700">
              Verified Host
            </span>
          </div>
          <p className="text-xs text-charcoal-500">{email} • Planning in {city}</p>
          <div className="flex items-center gap-4 text-xs text-charcoal-400 pt-1">
            <span>Active Event: <strong className="text-charcoal-800">{activeEvent.name}</strong></span>
            <span>•</span>
            <span>{savedVendorIds.length} Shortlisted Vendors</span>
          </div>
        </div>
      </div>

      {/* Main Settings Form */}
      <form onSubmit={handleSaveProfile} className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card space-y-6">
        <div className="border-b border-borderBase pb-3">
          <h2 className="text-base font-bold font-serif text-charcoal-900">Personal Information</h2>
          <p className="text-xs text-charcoal-500">Update your contact details for vendor correspondence.</p>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-emeraldGreen" />
            Profile details updated successfully!
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            >
              <option value="Pune">Pune, Maharashtra</option>
              <option value="Mumbai">Mumbai, Maharashtra</option>
              <option value="Bengaluru">Bengaluru, Karnataka</option>
              <option value="Nashik">Nashik, Maharashtra</option>
              <option value="Hyderabad">Hyderabad, Telangana</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-charcoal-900 hover:bg-coral-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-subtle transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>
      </form>

      {/* Event Preferences Box */}
      <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card space-y-4">
        <div className="border-b border-borderBase pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold font-serif text-charcoal-900">Event Aesthetic & Style Tags</h2>
            <p className="text-xs text-charcoal-500">Preferences used by VENDORA AI to match suitable portfolios.</p>
          </div>
          <span className="text-xs font-bold text-coral-600 bg-coral-50 px-3 py-1 rounded-full">
            Active Event: {activeEvent.eventType}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {activeEvent.preferences.map((p, i) => (
            <span key={i} className="px-3 py-1.5 bg-ivory-100 border border-borderBase rounded-xl text-xs font-semibold text-charcoal-800">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
