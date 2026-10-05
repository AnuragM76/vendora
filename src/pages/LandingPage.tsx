import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Layers, 
  Scale, 
  Users, 
  HeartHandshake, 
  Compass,
  Camera,
  Utensils,
  Flower2,
  Building2,
  Palette,
  Music,
  Video,
  Award
} from 'lucide-react';
import { vendorService } from '../services/vendorService';
import { VendorCard } from '../components/vendor/VendorCard';
import { formatINR } from '../components/common/PriceDisplay';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const featuredVendors = vendorService.getFeaturedVendors().slice(0, 6);

  // Search planning widget state
  const [eventType, setEventType] = useState('Wedding');
  const [location, setLocation] = useState('Pune');
  const [budget, setBudget] = useState('250000');
  const [category, setCategory] = useState('Photography');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/vendors?category=${encodeURIComponent(category)}&location=${encodeURIComponent(location)}&maxPrice=${budget}`);
  };

  const categoriesList = [
    { name: 'Photography', icon: Camera, count: '140+ Photographers', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80' },
    { name: 'Catering', icon: Utensils, count: '95+ Caterers', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80' },
    { name: 'Decoration', icon: Flower2, count: '110+ Decorators', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80' },
    { name: 'Venue', icon: Building2, count: '75+ Lawns & Halls', image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=600&q=80' },
    { name: 'Makeup', icon: Palette, count: '85+ Bridal Artists', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80' },
    { name: 'DJ', icon: Music, count: '50+ DJs & Bands', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80' },
    { name: 'Videography', icon: Video, count: '60+ Filmmakers', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80' },
    { name: 'Event Planning', icon: Award, count: '45+ Turnkey Planners', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-ivory-100/80 via-background to-background">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-ai-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-borderBase shadow-subtle text-xs font-semibold text-charcoal-800">
                <span className="flex h-2 w-2 rounded-full bg-coral-500 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-ai-500" />
                <span>Next-Gen Event Planning Intelligence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-charcoal-900 tracking-tight leading-[1.12]">
                Your event. <br />
                Your vision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-600 via-coral-500 to-gold-600">
                  The right vendors.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-charcoal-600 max-w-xl leading-relaxed">
                Discover, compare, and choose trusted event vendors based on your budget, preferences, location, and event style — backed by smart matchmaking.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/events/new"
                  className="px-7 py-3.5 rounded-xl bg-charcoal-900 hover:bg-coral-600 text-white font-bold text-sm shadow-card hover:shadow-elevated transition-all flex items-center gap-2"
                >
                  <span>Plan My Event</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/vendors"
                  className="px-7 py-3.5 rounded-xl bg-surface hover:bg-ivory-200 text-charcoal-900 font-bold text-sm border border-borderBase shadow-subtle transition-all"
                >
                  Explore Vendors
                </Link>
              </div>

              {/* Social proof counters */}
              <div className="pt-6 border-t border-borderBase/80 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="text-2xl font-bold font-serif text-charcoal-900">1,200+</div>
                  <div className="text-xs text-charcoal-500 font-medium mt-0.5">Verified Vendors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif text-charcoal-900">98%</div>
                  <div className="text-xs text-charcoal-500 font-medium mt-0.5">Budget Match Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-serif text-charcoal-900">4.9 ★</div>
                  <div className="text-xs text-charcoal-500 font-medium mt-0.5">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Main Hero Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-white/50 aspect-[4/5] bg-charcoal-100">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Indian Wedding Couple"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-black/20" />
                  
                  {/* Floating AI Match Tag */}
                  <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-elevated border border-white/60 text-left">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-ai-700">
                      <Sparkles className="w-3.5 h-3.5 text-ai-500" />
                      <span>96% AI Match</span>
                    </div>
                    <div className="text-[11px] text-charcoal-500 font-medium">Within Pune Budget</div>
                  </div>

                  {/* Bottom Hero Caption */}
                  <div className="absolute bottom-5 inset-x-5 text-white">
                    <div className="text-xs uppercase font-bold tracking-wider text-gold-300">Featured Showcase</div>
                    <h3 className="text-lg font-serif font-bold leading-tight">Lens & Light Wedding Chronicles</h3>
                    <p className="text-xs text-charcoal-200 mt-1">Candid photography in Koregaon Park, Pune</p>
                  </div>
                </div>

                {/* Overlapping Floating Vendor Badge */}
                <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl p-4 shadow-floating border border-borderBase max-w-xs flex items-center gap-3 animate-bounce-subtle">
                  <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-coral-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-900">Verified Pricing</div>
                    <div className="text-[11px] text-charcoal-500 leading-tight">Zero hidden fees, transparent quotes & direct vendor contact.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 11: HERO SEARCH PLANNING EXPERIENCE */}
          <div className="mt-14 max-w-5xl mx-auto">
            <form 
              onSubmit={handleHeroSearch}
              className="bg-surface rounded-3xl p-4 sm:p-6 shadow-floating border border-borderBase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
            >
              {/* Event Type */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-coral-500" />
                  Planning What?
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Party">Party</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-coral-500" />
                  Where?
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  <option value="Pune">Pune, MH</option>
                  <option value="Mumbai">Mumbai, MH</option>
                  <option value="Bengaluru">Bengaluru, KA</option>
                  <option value="Nashik">Nashik, MH</option>
                  <option value="Hyderabad">Hyderabad, TS</option>
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-coral-500" />
                  Max Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  <option value="50000">Up to ₹50,000</option>
                  <option value="100000">Up to ₹1,00,000</option>
                  <option value="250000">Up to ₹2,50,000</option>
                  <option value="500000">Up to ₹5,00,000</option>
                  <option value="1000000">₹10,00,000+</option>
                </select>
              </div>

              {/* Category */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-coral-500" />
                  Need What?
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  <option value="Photography">Photography</option>
                  <option value="Catering">Catering</option>
                  <option value="Decoration">Decoration</option>
                  <option value="Venue">Venue</option>
                  <option value="Makeup">Bridal Makeup</option>
                  <option value="DJ">DJ & Music</option>
                  <option value="Videography">Videography</option>
                  <option value="Event Planning">Event Planners</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-card hover:shadow-elevated transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>Find My Vendors</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: EVERYTHING YOU NEED TO PLAN YOUR EVENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Curated Categories</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Everything you need to plan your event
          </h2>
          <p className="text-sm text-charcoal-500">
            Explore verified professionals vetted for punctuality, artistry, and budget integrity.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoriesList.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/vendors?category=${encodeURIComponent(cat.name)}`}
                className="group relative rounded-2xl overflow-hidden border border-borderBase aspect-[4/3] bg-charcoal-900 shadow-card hover:shadow-elevated transition-all"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-left">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2 group-hover:bg-coral-500 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-serif">{cat.name}</h3>
                  <p className="text-[11px] text-charcoal-300 font-medium">{cat.count}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: YOUR EVENT, INTELLIGENTLY MATCHED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white p-8 sm:p-12 lg:p-16 border border-charcoal-800 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-ai-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-500/20 border border-ai-400/30 text-ai-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-ai-400" />
                <span>The VENDORA AI Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
                Your event, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-300 via-coral-400 to-gold-400">
                  intelligently matched
                </span>
              </h2>

              <p className="text-sm text-charcoal-300 leading-relaxed">
                Rather than browsing hundreds of unfiltered listings, VENDORA evaluates budget thresholds, dates, aesthetic style matches, and distance to rank the highest-compatibility vendors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-charcoal-800/60 border border-charcoal-700/60 p-3.5 rounded-xl">
                  <div className="text-xs font-bold text-coral-400">Budget Precision</div>
                  <p className="text-[11px] text-charcoal-400 mt-1">Prevents overspending by calculating per-category allocations.</p>
                </div>
                <div className="bg-charcoal-800/60 border border-charcoal-700/60 p-3.5 rounded-xl">
                  <div className="text-xs font-bold text-gold-400">Style Affinity</div>
                  <p className="text-[11px] text-charcoal-400 mt-1">Matches Candid, Traditional, Minimalist, or Royal aesthetics.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/recommendations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ai-500 hover:bg-ai-600 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Explore Recommendation Engine</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Simulated AI Interface Card */}
            <div className="lg:col-span-6">
              <div className="bg-charcoal-900 border border-charcoal-700 rounded-2xl p-6 shadow-floating space-y-5 text-left">
                {/* Event Profile Mini Header */}
                <div className="flex items-center justify-between border-b border-charcoal-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400">Target Event Profile</span>
                    <h4 className="text-sm font-bold text-white">Wedding • Pune • 300 Guests</h4>
                    <p className="text-xs text-charcoal-400">₹2,50,000 Budget • Traditional + Modern Style</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    24 Matching Vendors
                  </span>
                </div>

                {/* Top Match Spotlight */}
                <div className="p-4 rounded-xl bg-charcoal-800/90 border border-ai-400/40 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ai-400">Top Recommended Match</span>
                      <h4 className="text-base font-bold text-white font-serif">Lens & Light Studio</h4>
                      <p className="text-xs text-charcoal-300">Wedding Photography • Koregaon Park, Pune</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold text-ai-400">94%</div>
                      <span className="text-[10px] font-semibold text-charcoal-400">AI Compatibility</span>
                    </div>
                  </div>

                  {/* Criteria Meters */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-charcoal-700/80">
                    <div>
                      <div className="flex justify-between text-charcoal-300">
                        <span>Budget Fit</span>
                        <span className="text-emerald-400 font-bold">96%</span>
                      </div>
                      <div className="w-full bg-charcoal-700 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-emerald-400 h-full w-[96%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-charcoal-300">
                        <span>Location Fit</span>
                        <span className="text-coral-400 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-charcoal-700 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-coral-400 h-full w-[98%]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-charcoal-300 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Available on requested date • Rated 4.9★ (142 reviews)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-charcoal-400 pt-1">
                  <span>Simulated Recommendation Algorithm</span>
                  <Link to="/recommendations" className="text-coral-400 font-semibold hover:underline">
                    View All 24 Matches →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARE BEFORE YOU DECIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Decision Clarity</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Compare before you decide
          </h2>
          <p className="text-sm text-charcoal-500">
            Line up starting costs, review histories, verified statuses, and exact package offerings side-by-side.
          </p>
        </div>

        {/* 3 Vendor Comparison Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vendor 1 */}
          <div className="bg-surface rounded-2xl p-6 border-2 border-ai-300 shadow-elevated relative flex flex-col justify-between text-left">
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-ai-500 text-white text-[10px] font-bold uppercase tracking-wider">
              Top AI Pick
            </span>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-coral-600">Photography</span>
                <h4 className="text-lg font-bold font-serif text-charcoal-900">Lens & Light Studio</h4>
                <p className="text-xs text-charcoal-400">Pune • 8 yrs exp</p>
              </div>

              <div className="py-3 border-y border-borderBase space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Match Score</span>
                  <span className="font-bold text-ai-600">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Starting Price</span>
                  <span className="font-bold text-charcoal-900">₹45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Rating</span>
                  <span className="font-bold text-gold-600">4.9 ★ (142 reviews)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Availability</span>
                  <span className="font-bold text-emeraldGreen">Available</span>
                </div>
              </div>
            </div>

            <Link
              to="/compare"
              className="mt-6 w-full py-2.5 rounded-xl bg-charcoal-900 text-white text-xs font-bold text-center hover:bg-coral-500 transition-colors"
            >
              Compare in Matrix
            </Link>
          </div>

          {/* Vendor 2 */}
          <div className="bg-surface rounded-2xl p-6 border border-borderBase shadow-card flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-coral-600">Photography</span>
                <h4 className="text-lg font-bold font-serif text-charcoal-900">Pixel & Petals Storytellers</h4>
                <p className="text-xs text-charcoal-400">Mumbai • 7 yrs exp</p>
              </div>

              <div className="py-3 border-y border-borderBase space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Match Score</span>
                  <span className="font-bold text-ai-600">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Starting Price</span>
                  <span className="font-bold text-charcoal-900">₹55,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Rating</span>
                  <span className="font-bold text-gold-600">4.8 ★ (96 reviews)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Availability</span>
                  <span className="font-bold text-emeraldGreen">Available</span>
                </div>
              </div>
            </div>

            <Link
              to="/compare"
              className="mt-6 w-full py-2.5 rounded-xl bg-ivory-200 text-charcoal-900 text-xs font-bold text-center hover:bg-charcoal-900 hover:text-white transition-colors"
            >
              Compare in Matrix
            </Link>
          </div>

          {/* Vendor 3 */}
          <div className="bg-surface rounded-2xl p-6 border border-borderBase shadow-card flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-coral-600">Photography</span>
                <h4 className="text-lg font-bold font-serif text-charcoal-900">Vineyard Stories Photography</h4>
                <p className="text-xs text-charcoal-400">Nashik • 6 yrs exp</p>
              </div>

              <div className="py-3 border-y border-borderBase space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Match Score</span>
                  <span className="font-bold text-ai-600">84%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Starting Price</span>
                  <span className="font-bold text-charcoal-900">₹38,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Rating</span>
                  <span className="font-bold text-gold-600">4.8 ★ (65 reviews)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Availability</span>
                  <span className="font-bold text-emeraldGreen">Available</span>
                </div>
              </div>
            </div>

            <Link
              to="/compare"
              className="mt-6 w-full py-2.5 rounded-xl bg-ivory-200 text-charcoal-900 text-xs font-bold text-center hover:bg-charcoal-900 hover:text-white transition-colors"
            >
              Compare in Matrix
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/compare"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 hover:bg-coral-500 text-white font-bold text-xs transition-colors"
          >
            <Scale className="w-4 h-4" />
            <span>Open Interactive Comparison Tool</span>
          </Link>
        </div>
      </section>

      {/* SECTION 5: TRUSTED VENDORS. TRANSPARENT DECISIONS. */}
      <section className="bg-ivory-100/70 py-16 border-y border-borderBase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emeraldGreen flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-charcoal-900">Verified Vendors</h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Every business undergoes identity verification, past client portfolio review, and business license validation.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center">
                <IndianRupee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-charcoal-900">Transparent Pricing</h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Clear package breakdowns showing exactly what equipment, staffing, and deliverables are provided.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-charcoal-900">Genuine Reviews</h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Reviews submitted only by confirmed couples and event hosts who engaged the vendor through the platform.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-ai-50 text-ai-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-charcoal-900">AI-Assisted Decisions</h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">
                Eliminate analysis paralysis. Receive tailored compatibility scores factoring your budget, aesthetics, and date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Simple Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            How VENDORA Works
          </h2>
          <p className="text-sm text-charcoal-500">
            Four seamless steps from initial dream to booked celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {[
            {
              step: '01',
              title: 'Tell us about your event',
              desc: 'Select celebration type, city, date, guest count, and your target budget allocation in our wizard.',
            },
            {
              step: '02',
              title: 'Get smart recommendations',
              desc: 'Our engine identifies vendors that match your exact style, date availability, and cost caps.',
            },
            {
              step: '03',
              title: 'Compare your favorites',
              desc: 'Stack up to 4 vendors side-by-side to review deliverables, starting packages, and photo galleries.',
            },
            {
              step: '04',
              title: 'Book with confidence',
              desc: 'Lock in dates, manage contracts, track progress, and review your vendors on your event dashboard.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-2xl border border-borderBase shadow-card hover:shadow-elevated transition-all relative group"
            >
              <span className="font-serif text-3xl font-extrabold text-coral-500/30 group-hover:text-coral-500 transition-colors block mb-2">
                {item.step}
              </span>
              <h3 className="text-base font-bold font-serif text-charcoal-900 mb-2">{item.title}</h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: FEATURED VENDORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Handpicked Quality</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 mt-1">
              Featured Verified Vendors
            </h2>
            <p className="text-sm text-charcoal-500 mt-1">
              Top-rated wedding photographers, luxury banquets, caterers & decorators.
            </p>
          </div>
          <Link
            to="/vendors"
            className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1 shrink-0"
          >
            <span>View All Vendors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="bg-ivory-100/60 py-16 border-y border-borderBase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Client Stories</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Loved by couples & event hosts
            </h2>
            <p className="text-sm text-charcoal-500">
              Real couples who planned their milestone events using VENDORA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                quote: "VENDORA saved us over 40 hours of calling photographers! The AI recommendation suggested Lens & Light Studio which fit our ₹2.5L budget perfectly.",
                name: "Tanvi & Rahul Kulkarni",
                event: "Wedding in Pune (300 guests)",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                rating: 5,
              },
              {
                quote: "The comparison tool was a gamechanger. Being able to see package differences between Mumbai caterers side-by-side gave us total confidence.",
                name: "Aanya & Siddharth Mehta",
                event: "Reception in Mumbai (450 guests)",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                rating: 5,
              },
              {
                quote: "As someone planning a wedding while working full-time in tech, having the budget breakdown and verified reviews in one spot was pure peace of mind.",
                name: "Dr. Deepa & Omkar Joshi",
                event: "Engagement & Sangeet in Pune",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-surface p-6 rounded-2xl border border-borderBase shadow-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-borderBase/60 mt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-borderBase"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-900">{t.name}</h4>
                    <p className="text-[11px] text-charcoal-400">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-charcoal-950 text-white p-8 sm:p-14 text-center relative overflow-hidden border border-charcoal-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-400">Ready to Celebrate?</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
              Your event starts with the right choice.
            </h2>
            <p className="text-sm text-charcoal-300 max-w-lg mx-auto">
              Join thousands of happy couples and event hosts who plan seamlessly with VENDORA’s intelligent vendor discovery.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/events/new"
                className="px-8 py-3.5 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-sm font-bold shadow-elevated transition-all flex items-center gap-2"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/vendors"
                className="px-8 py-3.5 bg-charcoal-800 hover:bg-charcoal-700 text-white rounded-xl text-sm font-bold border border-charcoal-700 transition-all"
              >
                Browse Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
