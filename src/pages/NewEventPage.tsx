import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  IndianRupee, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  PartyPopper, 
  Cake, 
  Briefcase, 
  Music,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EventPlan, EventType, CategoryType } from '../types';
import { formatINR } from '../components/common/PriceDisplay';
import { eventApi } from '../services/api';

export const NewEventPage: React.FC = () => {
  const navigate = useNavigate();
  const { activeEvent, updateActiveEvent } = useApp();
  const [submitting, setSubmitting] = useState(false);

  const [step, setStep] = useState(1);

  // Form State
  const [eventType, setEventType] = useState<EventType>(activeEvent.eventType || 'Wedding');
  const [name, setName] = useState(activeEvent.name || 'My Celebration');
  const [date, setDate] = useState(activeEvent.date || '2026-12-24');
  const [location, setLocation] = useState(activeEvent.location || 'Pune');
  const [guestCount, setGuestCount] = useState(activeEvent.guestCount || 300);
  const [totalBudget, setTotalBudget] = useState(activeEvent.totalBudget || 250000);

  const [neededCategories, setNeededCategories] = useState<CategoryType[]>(
    activeEvent.neededCategories || ['Photography', 'Catering', 'Decoration', 'Venue']
  );

  const [preferences, setPreferences] = useState<string[]>(
    activeEvent.preferences || ['Traditional', 'Modern', 'Candid', 'Vegetarian']
  );

  // Calculate estimated allocation percentages
  const allocations = {
    venue: Math.round(totalBudget * 0.30),
    catering: Math.round(totalBudget * 0.28),
    photography: Math.round(totalBudget * 0.18),
    decoration: Math.round(totalBudget * 0.14),
    other: Math.round(totalBudget * 0.10),
  };

  const handleToggleCategory = (cat: CategoryType) => {
    setNeededCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleTogglePreference = (pref: string) => {
    setPreferences(prev =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    );
  };

  const handleFinalSubmit = async () => {
    setSubmitting(true);
    try {
      const created = await eventApi.createEvent({
        name,
        eventType,
        date,
        location,
        guestCount,
        totalBudget,
        budgetAllocations: allocations,
        neededCategories,
        preferences,
        notes: '',
      });
      updateActiveEvent(created);
      navigate('/recommendations');
    } catch {
      const newPlan: EventPlan = {
        id: `ev-${Date.now()}`,
        name,
        eventType,
        date,
        location,
        guestCount,
        totalBudget,
        budgetAllocations: allocations,
        neededCategories,
        preferences,
        createdAt: new Date().toISOString().split('T')[0],
      };

      updateActiveEvent(newPlan);
      navigate('/recommendations');
    } finally {
      setSubmitting(false);
    }
  };

  const eventTypeCards: { type: EventType; desc: string; icon: any }[] = [
    { type: 'Wedding', desc: 'Grand ceremonies, rituals & multi-day celebrations', icon: HeartHandshake },
    { type: 'Engagement', desc: 'Ring ceremony & intimate family gatherings', icon: Sparkles },
    { type: 'Birthday', desc: 'Milestone years, themed parties & banquets', icon: Cake },
    { type: 'Corporate', desc: 'Annual galas, conferences & leadership offsites', icon: Briefcase },
    { type: 'Anniversary', desc: 'Silver/Golden jubilee celebrations & romantic dinners', icon: PartyPopper },
    { type: 'Party', desc: 'Cocktail evenings, reunions & festive bashes', icon: Music },
  ];

  const allCategories: CategoryType[] = [
    'Photography',
    'Catering',
    'Decoration',
    'Venue',
    'Makeup',
    'DJ',
    'Videography',
    'Event Planning'
  ];

  const allPreferences = [
    'Traditional',
    'Modern',
    'Luxury',
    'Minimalist',
    'Royal',
    'Outdoor Lawn',
    'Indoor Banquet',
    'Candid Photography',
    'Vegetarian Catering',
    'Coastal Cuisine',
    'Live Dhol Entertainment',
    'Eco-friendly Floral'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-left">
      {/* Wizard Progress Stepper */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-charcoal-400">
          <span>Step {step} of 6</span>
          <span className="text-coral-600 font-serif">
            {step === 1 && 'Select Event Type'}
            {step === 2 && 'Event Logistics'}
            {step === 3 && 'Target Budget Allocation'}
            {step === 4 && 'Vendor Requirements'}
            {step === 5 && 'Aesthetic Preferences'}
            {step === 6 && 'Review & AI Matching'}
          </span>
        </div>

        <div className="w-full bg-charcoal-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-coral-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Step Container */}
      <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-borderBase shadow-card min-h-[460px] flex flex-col justify-between">
        {/* STEP 1: EVENT TYPE */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Step 1</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                What are you celebrating?
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                We adjust vendor recommendations and pricing estimates based on your celebration style.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {eventTypeCards.map((card) => {
                const Icon = card.icon;
                const isSelected = eventType === card.type;
                return (
                  <div
                    key={card.type}
                    onClick={() => {
                      setEventType(card.type);
                      if (name === 'My Celebration' || !name) {
                        setName(`${card.type} Celebration`);
                      }
                    }}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-coral-500 bg-coral-50/30 shadow-card'
                        : 'border-borderBase hover:border-charcoal-300 bg-surface'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-coral-500 text-white' : 'bg-ivory-100 text-charcoal-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-charcoal-900 font-serif">{card.type}</h3>
                        <p className="text-xs text-charcoal-500 mt-1">{card.desc}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-1 text-coral-600 text-xs font-bold pt-4">
                        <Check className="w-4 h-4" /> Selected
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: EVENT DETAILS */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Step 2</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                Event Logistics & Location
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Tell us where and when your event will take place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
                  Event Title
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="E.g., Anurag & Shravani Wedding Celebration"
                  className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
                  Event Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
                  City Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  <option value="Pune">Pune, Maharashtra</option>
                  <option value="Mumbai">Mumbai, Maharashtra</option>
                  <option value="Bengaluru">Bengaluru, Karnataka</option>
                  <option value="Nashik">Nashik, Maharashtra</option>
                  <option value="Hyderabad">Hyderabad, Telangana</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
                  Estimated Guest Count
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="20"
                    max="5000"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                  />
                  <span className="text-xs text-charcoal-400 font-medium shrink-0">Guests</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: BUDGET */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Step 3</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                Set Your Total Budget
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Slide to set your target budget. We automatically suggest balanced category allocations.
              </p>
            </div>

            <div className="bg-ivory-100 p-6 rounded-2xl border border-borderBase space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">Total Planned Budget</span>
                <span className="text-3xl font-extrabold text-charcoal-900 font-serif">
                  ₹{formatINR(totalBudget)}
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={totalBudget}
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="w-full accent-coral-500 cursor-pointer h-2"
              />

              <div className="flex justify-between text-[11px] text-charcoal-500">
                <span>₹50,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000</span>
                <span>₹10,00,000+</span>
              </div>
            </div>

            {/* Estimated Allocation Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                Recommended Category Allocations
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="bg-surface p-3.5 rounded-xl border border-borderBase">
                  <span className="text-[11px] text-charcoal-500 block">Venue (30%)</span>
                  <span className="text-sm font-bold text-charcoal-900">₹{formatINR(allocations.venue)}</span>
                </div>
                <div className="bg-surface p-3.5 rounded-xl border border-borderBase">
                  <span className="text-[11px] text-charcoal-500 block">Catering (28%)</span>
                  <span className="text-sm font-bold text-charcoal-900">₹{formatINR(allocations.catering)}</span>
                </div>
                <div className="bg-surface p-3.5 rounded-xl border border-borderBase">
                  <span className="text-[11px] text-charcoal-500 block">Photography (18%)</span>
                  <span className="text-sm font-bold text-charcoal-900">₹{formatINR(allocations.photography)}</span>
                </div>
                <div className="bg-surface p-3.5 rounded-xl border border-borderBase">
                  <span className="text-[11px] text-charcoal-500 block">Decoration (14%)</span>
                  <span className="text-sm font-bold text-charcoal-900">₹{formatINR(allocations.decoration)}</span>
                </div>
                <div className="bg-surface p-3.5 rounded-xl border border-borderBase">
                  <span className="text-[11px] text-charcoal-500 block">Other (10%)</span>
                  <span className="text-sm font-bold text-charcoal-900">₹{formatINR(allocations.other)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: VENDOR REQUIREMENTS */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Step 4</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                Which vendors do you need?
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Select the service pillars you wish VENDORA to discover and compare for you.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {allCategories.map((cat) => {
                const isChecked = neededCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleToggleCategory(cat)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between h-28 ${
                      isChecked
                        ? 'border-coral-500 bg-coral-50/40 text-charcoal-900 shadow-sm'
                        : 'border-borderBase hover:border-charcoal-300 text-charcoal-600'
                    }`}
                  >
                    <span className="text-xs font-bold block">{cat}</span>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] text-charcoal-400">Pillar</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-coral-500 border-coral-500 text-white' : 'border-charcoal-300'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: PREFERENCES */}
        {step === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Step 5</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                Aesthetic & Culinary Preferences
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Select key styles to help our AI score visual compatibility.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {allPreferences.map((pref) => {
                const isSelected = preferences.includes(pref);
                return (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => handleTogglePreference(pref)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
                      isSelected
                        ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                        : 'bg-surface text-charcoal-700 border-borderBase hover:bg-ivory-100'
                    }`}
                  >
                    <span>{pref}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-gold-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: SUMMARY */}
        {step === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Step 6</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
                Review Your Event Profile
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Everything is set. Ready to generate personalized vendor recommendations?
              </p>
            </div>

            <div className="bg-ivory-50 p-6 rounded-2xl border border-borderBase space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-charcoal-400 block">Celebration</span>
                  <span className="font-bold text-charcoal-900 text-sm">{eventType}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block">Date</span>
                  <span className="font-bold text-charcoal-900 text-sm">{date}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block">City</span>
                  <span className="font-bold text-charcoal-900 text-sm">{location}</span>
                </div>
                <div>
                  <span className="text-charcoal-400 block">Guests</span>
                  <span className="font-bold text-charcoal-900 text-sm">{guestCount}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-borderBase flex justify-between items-center text-xs">
                <div>
                  <span className="text-charcoal-400 block">Target Budget</span>
                  <span className="text-xl font-extrabold text-charcoal-900 font-serif">
                    ₹{formatINR(totalBudget)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-charcoal-400 block">Needed Categories</span>
                  <span className="font-bold text-charcoal-900">
                    {neededCategories.length} selected
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-borderBase">
                <span className="text-xs text-charcoal-400 block mb-2">Selected Aesthetic Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {preferences.map((p, i) => (
                    <span key={i} className="text-xs bg-surface border border-borderBase px-2.5 py-0.5 rounded-md text-charcoal-700">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Footer Navigation */}
        <div className="pt-8 border-t border-borderBase flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-5 py-2.5 rounded-xl border border-borderBase hover:bg-ivory-100 text-xs font-bold text-charcoal-700 flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 6 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl bg-charcoal-900 hover:bg-coral-500 text-white text-xs font-bold flex items-center gap-2 shadow-subtle transition-all"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="px-7 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold flex items-center gap-2 shadow-card hover:shadow-elevated transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Find My Matches</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
