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
  Camera,
  Utensils,
  Flower2,
  Building2,
  Palette,
  Music,
  Video,
  Award,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  HeartHandshake
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

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const faqs = [
    {
      q: 'How does VENDORA verify vendors?',
      a: 'Every vendor on VENDORA undergoes a multi-point vetting process including government business registration verification, review of verified client portfolios, and quality assessments before receiving the verified badge.',
    },
    {
      q: 'How does the AI match score work?',
      a: 'Our recommendation algorithm analyzes 7 key dimensions: your total event budget cap, per-category allocation thresholds, geographical radius, date availability, and aesthetic style compatibility (such as Candid, Royal, Traditional, or Minimalist).',
    },
    {
      q: 'Can I compare multiple vendors side-by-side?',
      a: 'Yes! You can add up to 4 vendors into our Interactive Comparison Matrix to compare starting prices, package deliverables, client ratings, experience, and cancellation policies on a single screen.',
    },
    {
      q: 'Is VENDORA free for couples and event hosts?',
      a: 'Yes. Searching, filtering, matching, generating event budget plans, and sending booking inquiries to vendors is 100% free for clients with zero hidden service fees.',
    },
    {
      q: 'Can I book multiple vendors as a coordinated team?',
      a: 'Absolutely. VENDORA provides an AI-Optimized Multi-Vendor Combination feature that bundles top-compatible photographers, caterers, decorators, and venues within your specified event budget.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-28 bg-gradient-to-b from-ivory-100/90 via-background to-background">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-coral-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-borderBase shadow-subtle text-xs font-semibold text-charcoal-800">
                <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
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
                Discover, compare, and choose trusted event vendors based on your budget, preferences, location, and aesthetic style — backed by smart matchmaking.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/events/new"
                  className="px-7 py-3.5 rounded-xl bg-charcoal-900 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-card hover:shadow-elevated transition-all duration-200 flex items-center gap-2"
                >
                  <span>Plan My Event</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/vendors"
                  className="px-7 py-3.5 rounded-xl bg-surface hover:bg-ivory-100 text-charcoal-900 font-bold text-xs sm:text-sm border border-borderBase shadow-subtle transition-all duration-200"
                >
                  Explore Marketplace
                </Link>
              </div>

              {/* Verified Trust Metrics */}
              <div className="pt-8 border-t border-borderBase/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-serif text-charcoal-900">1,200+</div>
                  <div className="text-xs text-charcoal-500 font-medium mt-0.5">Verified Vendors</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-serif text-charcoal-900">98%</div>
                  <div className="text-xs text-charcoal-500 font-medium mt-0.5">Budget Match Rate</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-serif text-charcoal-900">4.9 ★</div>
                  <div className="text-xs text-charcoal-500 font-medium mt-0.5">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Main Hero Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-floating border border-white/60 aspect-[4/5] bg-charcoal-100">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Celebration couple"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/20 to-transparent" />
                  
                  {/* Floating AI Match Tag */}
                  <div className="absolute top-4 right-4 bg-surface/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-elevated border border-borderBase text-left">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-ai-700">
                      <Sparkles className="w-3.5 h-3.5 text-ai-500" />
                      <span>96% AI Match</span>
                    </div>
                    <div className="text-[11px] text-charcoal-500 font-medium">Within Pune Budget</div>
                  </div>

                  {/* Bottom Hero Caption */}
                  <div className="absolute bottom-5 inset-x-5 text-white text-left">
                    <div className="text-[11px] uppercase font-bold tracking-wider text-gold-300">Featured Vendor Showcase</div>
                    <h3 className="text-lg font-serif font-bold leading-tight mt-0.5">Lens & Light Wedding Chronicles</h3>
                    <p className="text-xs text-charcoal-300 mt-1">Candid photography in Koregaon Park, Pune</p>
                  </div>
                </div>

                {/* Overlapping Floating Guarantee Card */}
                <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl p-4 shadow-elevated border border-borderBase max-w-xs flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-coral-50 border border-coral-200 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-coral-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal-900">Verified Pricing Guarantee</div>
                    <div className="text-[11px] text-charcoal-500 leading-tight mt-0.5">Transparent package quotes and direct vendor correspondence.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1B: CONCIERGE SEARCH BAR */}
          <div className="mt-14 max-w-5xl mx-auto">
            <form 
              onSubmit={handleHeroSearch}
              className="bg-surface rounded-3xl p-3.5 sm:p-5 shadow-floating border border-borderBase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end"
            >
              {/* Event Type */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-coral-500" />
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30"
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
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-coral-500" />
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30"
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
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-coral-500" />
                  Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30"
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
                <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-coral-500" />
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-ivory-100 border border-borderBase rounded-xl px-3 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500/30"
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
                  className="w-full py-2.5 px-4 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-subtle hover:shadow-card transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Vendors</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURATED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Curated Categories</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Everything you need for your celebration
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Explore verified professionals vetted for craftsmanship, punctuality, and transparent packages.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoriesList.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/vendors?category=${encodeURIComponent(cat.name)}`}
                className="group relative rounded-2xl overflow-hidden border border-borderBase aspect-[4/3] bg-charcoal-900 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-75 group-hover:opacity-65"
                  loading="lazy"
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

      {/* SECTION 3: AI INTELLIGENT MATCHING HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white p-8 sm:p-12 lg:p-16 border border-charcoal-800 relative overflow-hidden shadow-floating">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ai-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-500/20 border border-ai-400/30 text-ai-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-ai-400" />
                <span>Smart Compatibility Intelligence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
                Your event parameters, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-300 via-coral-400 to-gold-400">
                  algorithmically matched
                </span>
              </h2>

              <p className="text-sm text-charcoal-300 leading-relaxed">
                Rather than scrolling through hundreds of unfiltered listings, VENDORA evaluates budget thresholds, dates, aesthetic style matches, and distance to rank the highest-compatibility vendors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="bg-charcoal-800/70 border border-charcoal-700/60 p-3.5 rounded-xl">
                  <div className="text-xs font-bold text-coral-400">Budget Precision</div>
                  <p className="text-[11px] text-charcoal-400 mt-1">Prevents overspending by calculating per-category allocations.</p>
                </div>
                <div className="bg-charcoal-800/70 border border-charcoal-700/60 p-3.5 rounded-xl">
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

            {/* AI Interface Preview Card */}
            <div className="lg:col-span-6">
              <div className="bg-charcoal-900 border border-charcoal-700/80 rounded-2xl p-6 shadow-floating space-y-5 text-left">
                {/* Event Profile Mini Header */}
                <div className="flex items-center justify-between border-b border-charcoal-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-400">Target Event Profile</span>
                    <h4 className="text-sm font-bold text-white">Wedding Celebration • Pune • 300 Guests</h4>
                    <p className="text-xs text-charcoal-400 mt-0.5">₹2,50,000 Budget • Traditional + Modern Style</p>
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
                      <div className="text-2xl font-extrabold text-ai-400">96%</div>
                      <span className="text-[10px] font-semibold text-charcoal-400">Match Score</span>
                    </div>
                  </div>

                  {/* Criteria Meters */}
                  <div className="grid grid-cols-2 gap-3 text-[11px] pt-1 border-t border-charcoal-700/80">
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
                  <span>Simulated Recommendation Engine</span>
                  <Link to="/recommendations" className="text-coral-400 font-semibold hover:underline">
                    View Complete Shortlist →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARE BEFORE YOU DECIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Decision Clarity</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Compare before you decide
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Line up starting costs, review histories, verified credentials, and exact deliverables side-by-side.
          </p>
        </div>

        {/* 3 Vendor Comparison Cards */}
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
                  <span className="font-bold text-ai-600">96%</span>
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

      {/* SECTION 5: TRUSTED VENDORS & TRANSPARENT DECISIONS */}
      <section className="bg-ivory-100/70 py-16 border-y border-borderBase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
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
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Simple Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            How VENDORA Works
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Four seamless steps from initial dream to booked celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {[
            {
              step: '01',
              title: 'Define your vision',
              desc: 'Select event type, city, date, guest count, and your target budget allocation in our wizard.',
            },
            {
              step: '02',
              title: 'Get smart matches',
              desc: 'Our engine identifies vendors that match your exact style, date availability, and cost caps.',
            },
            {
              step: '03',
              title: 'Compare your shortlist',
              desc: 'Stack up to 4 vendors side-by-side to review deliverables, starting packages, and photo galleries.',
            },
            {
              step: '04',
              title: 'Book with confidence',
              desc: 'Lock in dates, manage inquiries, track progress, and review your vendors on your event dashboard.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface p-6 rounded-2xl border border-borderBase shadow-card hover:shadow-elevated transition-all relative group"
            >
              <span className="font-serif text-3xl font-extrabold text-coral-500/25 group-hover:text-coral-500 transition-colors block mb-2">
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Handpicked Quality</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 mt-1">
              Featured Verified Vendors
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
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

      {/* SECTION 8: CLIENT STORIES */}
      <section className="bg-ivory-100/60 py-16 border-y border-borderBase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Client Stories</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Loved by couples & event hosts
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500">
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
                    loading="lazy"
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

      {/* SECTION 9: ACCORDION FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2.5 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Frequently Asked Questions</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            Everything you need to know
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Answers to common questions about finding, comparing, and booking event vendors.
          </p>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-surface rounded-2xl border border-borderBase overflow-hidden shadow-subtle transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 hover:bg-ivory-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-charcoal-900 font-serif">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-lg bg-ivory-100 text-charcoal-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-charcoal-600 leading-relaxed border-t border-borderBase/50 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 10: FINAL LUXURY CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-charcoal-950 text-white p-8 sm:p-14 text-center relative overflow-hidden border border-charcoal-800 shadow-floating">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-400">Ready to Celebrate?</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
              Your dream celebration starts with the right choice.
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-300 max-w-lg mx-auto leading-relaxed">
              Join thousands of happy couples and event hosts who plan seamlessly with VENDORA’s intelligent vendor discovery.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/events/new"
                className="px-8 py-3.5 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-elevated transition-all flex items-center gap-2"
              >
                <span>Start Planning Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/vendors"
                className="px-8 py-3.5 bg-charcoal-900 hover:bg-charcoal-800 text-white rounded-xl text-xs sm:text-sm font-bold border border-charcoal-700 transition-all"
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
