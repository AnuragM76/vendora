import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Scale, 
  MapPin, 
  Briefcase, 
  Check, 
  Clock, 
  Sparkles, 
  Star, 
  Phone, 
  Mail, 
  Instagram, 
  Globe, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Share2, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { vendorService } from '../services/vendorService';
import { useApp } from '../context/AppContext';
import { VerifiedBadge } from '../components/common/VerifiedBadge';
import { RatingDisplay } from '../components/common/RatingDisplay';
import { PriceDisplay, formatINR } from '../components/common/PriceDisplay';
import { MatchScoreBadge } from '../components/common/MatchScoreBadge';
import { AiMatchBreakdownModal } from '../components/common/AiMatchBreakdownModal';
import { VendorCard } from '../components/vendor/VendorCard';
import { VendorPackage } from '../types';

export const VendorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSaved, toggleSaveVendor, comparedVendorIds, toggleCompareVendor, activeEvent, addBooking } = useApp();

  const vendor = vendorService.getVendorById(id || '');

  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<VendorPackage | null>(null);
  const [showAiModal, setShowAiModal] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingNote, setBookingNote] = useState('');
  const [bookingDate, setBookingDate] = useState(activeEvent.date);

  // Review modal state
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!vendor) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-charcoal-900">Vendor Not Found</h2>
        <p className="text-sm text-charcoal-500">The vendor profile you are looking for does not exist or has been removed.</p>
        <Link to="/vendors" className="inline-block px-5 py-2.5 bg-charcoal-900 text-white rounded-xl text-xs font-bold">
          Back to Marketplace
        </Link>
      </div>
    );
  }

  const saved = isSaved(vendor.id);
  const isCompared = comparedVendorIds.includes(vendor.id);

  // Mock similar vendors in same category
  const similarVendors = vendorService
    .getVendors({ category: vendor.category })
    .filter(v => v.id !== vendor.id)
    .slice(0, 3);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = selectedPackage || vendor.packages[0];
    addBooking({
      vendorId: vendor.id,
      vendorName: vendor.name,
      vendorCategory: vendor.category,
      vendorImage: vendor.featuredImage,
      vendorLocation: vendor.location,
      eventName: activeEvent.name,
      eventDate: bookingDate,
      packageName: pkg.name,
      amount: pkg.price,
      status: 'Pending',
    });
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSuccess(false);
    }, 2000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewModalOpen(false);
      setReviewSubmitted(false);
      setReviewComment('');
    }, 1800);
  };

  // Mock calendar days
  const calendarDays = [
    { day: 20, status: 'booked' },
    { day: 21, status: 'available' },
    { day: 22, status: 'booked' },
    { day: 23, status: 'available' },
    { day: 24, status: 'available', target: true },
    { day: 25, status: 'booked' },
    { day: 26, status: 'available' },
    { day: 27, status: 'available' },
    { day: 28, status: 'booked' },
    { day: 29, status: 'available' },
    { day: 30, status: 'available' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between text-xs text-charcoal-500">
        <div className="flex items-center gap-2">
          <Link to="/vendors" className="hover:text-charcoal-900 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Vendors
          </Link>
          <span>/</span>
          <span>{vendor.category}</span>
          <span>/</span>
          <span className="font-semibold text-charcoal-900 truncate">{vendor.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: vendor.name, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            className="p-2 rounded-lg border border-borderBase hover:bg-ivory-100 text-charcoal-700 transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SECTION: LARGE IMAGE GALLERY */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden max-h-[500px]">
        <div className="md:col-span-2 relative group overflow-hidden bg-charcoal-100 h-80 md:h-[480px]">
          <img
            src={activeImage || vendor.featuredImage}
            alt={vendor.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {vendor.verified && <VerifiedBadge size="md" />}
            <button
              onClick={() => setShowAiModal(true)}
              className="bg-white/95 backdrop-blur-md rounded-full px-1 shadow-md hover:scale-105 transition-transform"
            >
              <MatchScoreBadge score={vendor.matchScore || 94} size="md" />
            </button>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-3 h-80 md:h-[480px]">
          {vendor.images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative overflow-hidden cursor-pointer group bg-charcoal-100 rounded-xl ${
                (activeImage || vendor.featuredImage) === img ? 'ring-2 ring-coral-500' : ''
              }`}
            >
              <img
                src={img}
                alt={`${vendor.name} gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* VENDOR HEADER & ACTIONS */}
      <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-coral-600 bg-coral-50 px-2.5 py-1 rounded-full">
              {vendor.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-charcoal-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-coral-500" />
              {vendor.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-charcoal-600 font-medium">
              <Briefcase className="w-3.5 h-3.5 text-charcoal-400" />
              {vendor.experience}+ Years Industry Experience
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-charcoal-900">
            {vendor.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <RatingDisplay rating={vendor.rating} reviewCount={vendor.reviewCount} size="lg" />
            <span className="text-charcoal-300">•</span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-medium">
              <span className="w-2 h-2 rounded-full bg-emeraldGreen animate-pulse" />
              Confirmed Available for your date
            </div>
          </div>
        </div>

        {/* Pricing summary & Booking CTA Box */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:border-l lg:border-borderBase lg:pl-8">
          <div className="text-left sm:text-right pr-2">
            <span className="text-xs text-charcoal-400 block font-medium">Starting Package</span>
            <PriceDisplay amount={vendor.startingPrice} category={vendor.category} size="xl" showPrefix={false} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveVendor(vendor.id)}
              className={`p-3 rounded-xl border transition-all ${
                saved
                  ? 'bg-coral-500 text-white border-coral-500'
                  : 'bg-surface text-charcoal-700 border-borderBase hover:bg-ivory-100'
              }`}
              title={saved ? 'Remove from Shortlist' : 'Add to Shortlist'}
            >
              <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => toggleCompareVendor(vendor.id)}
              className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isCompared
                  ? 'bg-charcoal-900 text-white border-charcoal-900'
                  : 'bg-surface text-charcoal-700 border-borderBase hover:bg-ivory-100'
              }`}
              title="Add to comparison"
            >
              <Scale className="w-5 h-5" />
              <span className="hidden sm:inline">{isCompared ? 'In Compare' : 'Compare'}</span>
            </button>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs shadow-card hover:shadow-elevated transition-all flex items-center justify-center gap-2"
            >
              <span>Check Availability & Book</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN DETAILS CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left 8 cols: Overview, Pricing Packages, Portfolio, Reviews */}
        <div className="lg:col-span-8 space-y-12">
          {/* 1. About & Highlights */}
          <section className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card space-y-6">
            <h2 className="text-xl font-bold font-serif text-charcoal-900">About the Business</h2>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              {vendor.description}
            </p>

            {/* Highlights */}
            {vendor.aiHighlights && vendor.aiHighlights.length > 0 && (
              <div className="bg-ai-50/50 rounded-2xl p-4 border border-ai-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-ai-900">
                  <Sparkles className="w-4 h-4 text-ai-500" />
                  <span>VENDORA Quality Highlights</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vendor.aiHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-borderBase">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">Service Areas</span>
                <p className="text-xs font-semibold text-charcoal-800 mt-0.5">{vendor.serviceAreas.join(', ')}</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">Languages</span>
                <p className="text-xs font-semibold text-charcoal-800 mt-0.5">{vendor.languages.join(', ')}</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400">Styles</span>
                <p className="text-xs font-semibold text-charcoal-800 mt-0.5">{vendor.styles.join(', ')}</p>
              </div>
            </div>
          </section>

          {/* 2. PRICING PACKAGES */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Transparent Offerings</span>
              <h2 className="text-2xl font-bold font-serif text-charcoal-900 mt-1">Available Packages</h2>
              <p className="text-xs text-charcoal-500">Select any tier to pre-fill your event booking request.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vendor.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-surface rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    pkg.popular
                      ? 'border-2 border-coral-500 shadow-elevated relative'
                      : 'border-borderBase shadow-card hover:border-charcoal-300'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold font-serif text-charcoal-900">{pkg.name}</h3>
                      <p className="text-xs text-charcoal-500 mt-1 leading-snug">{pkg.description}</p>
                    </div>

                    <div className="py-2">
                      <span className="text-2xl font-extrabold text-charcoal-900">
                        ₹{formatINR(pkg.price)}
                      </span>
                      {vendor.category === 'Catering' && <span className="text-xs text-charcoal-500 font-normal"> /plate</span>}
                    </div>

                    <ul className="space-y-2 border-t border-borderBase pt-4">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <Check className="w-3.5 h-3.5 text-emeraldGreen shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setBookingModalOpen(true);
                    }}
                    className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                      pkg.popular
                        ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-subtle'
                        : 'bg-ivory-200 hover:bg-charcoal-900 hover:text-white text-charcoal-900'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 3. REVIEWS & COMMUNITY FEEDBACK */}
          <section className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-charcoal-900">Verified Client Reviews</h2>
                <p className="text-xs text-charcoal-500 mt-0.5">Based on {vendor.reviewCount} confirmed bookings</p>
              </div>

              <button
                onClick={() => setReviewModalOpen(true)}
                className="px-4 py-2 bg-ivory-200 hover:bg-charcoal-900 hover:text-white text-charcoal-900 text-xs font-bold rounded-xl transition-colors shrink-0"
              >
                Write a Review
              </button>
            </div>

            {/* Rating Breakdown Banner */}
            <div className="bg-ivory-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-8">
              <div className="text-center sm:border-r sm:border-borderBase sm:pr-8">
                <span className="text-4xl font-extrabold text-charcoal-900">{vendor.rating.toFixed(1)}</span>
                <div className="flex items-center justify-center gap-1 text-gold-500 my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-charcoal-400 font-medium">{vendor.reviewCount} total reviews</span>
              </div>

              <div className="flex-1 space-y-2 w-full">
                {[
                  { stars: 5, pct: 92 },
                  { stars: 4, pct: 7 },
                  { stars: 3, pct: 1 },
                  { stars: 2, pct: 0 },
                  { stars: 1, pct: 0 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs text-charcoal-600">
                    <span className="w-12 font-medium">{row.stars} stars</span>
                    <div className="flex-1 bg-charcoal-200/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-gold-500 h-full rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="w-8 text-right font-medium">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4 pt-2">
              {vendor.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl border border-borderBase space-y-2 bg-ivory-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-coral-100 text-coral-800 font-bold flex items-center justify-center text-xs">
                        {rev.userName[0]}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-charcoal-900 block">{rev.userName}</span>
                        <span className="text-[10px] text-charcoal-400">{rev.eventType} • {rev.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gold-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{rev.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-700 leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 4 cols: Sticky Contact Card + Mock Availability Calendar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Availability Calendar Card */}
          <div className="bg-surface rounded-3xl p-6 border border-borderBase shadow-card space-y-4 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-charcoal-900 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-coral-600" />
                Live Availability
              </h3>
              <span className="text-[11px] font-semibold text-emeraldGreen bg-emerald-50 px-2 py-0.5 rounded-full">
                Dec 2026
              </span>
            </div>

            <p className="text-xs text-charcoal-500">
              Your active event date is <span className="font-bold text-charcoal-800">{activeEvent.date}</span>.
            </p>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-xs pt-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <span key={i} className="text-[11px] font-bold text-charcoal-400 py-1">
                  {d}
                </span>
              ))}

              {/* Blank offset days */}
              <div /><div /><div />

              {calendarDays.map((cd, i) => (
                <div
                  key={i}
                  className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                    cd.target
                      ? 'bg-coral-500 text-white ring-2 ring-coral-300 font-bold'
                      : cd.status === 'booked'
                      ? 'bg-charcoal-100 text-charcoal-300 line-through'
                      : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  }`}
                  title={cd.status === 'booked' ? 'Date Booked' : 'Available for Booking'}
                >
                  {cd.day}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-charcoal-500 pt-2 border-t border-borderBase">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emeraldGreen" /> Available
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal-300" /> Booked
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-coral-500" /> Your Event
              </span>
            </div>
          </div>

          {/* Direct Vendor Contact Card */}
          <div className="bg-surface rounded-3xl p-6 border border-borderBase shadow-card space-y-4 text-left">
            <h3 className="text-sm font-bold text-charcoal-900">Direct Contact Details</h3>
            <div className="space-y-3 text-xs text-charcoal-700">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
                <span className="font-semibold">{vendor.contact.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
                <span className="truncate">{vendor.contact.email}</span>
              </div>
              {vendor.contact.instagram && (
                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
                  <span className="text-coral-600 font-semibold">{vendor.contact.instagram}</span>
                </div>
              )}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-coral-500 shrink-0 mt-0.5" />
                <span className="text-charcoal-500 leading-tight">{vendor.contact.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-charcoal-900 text-white font-bold text-xs hover:bg-coral-500 transition-colors"
              >
                Inquire Directly
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SIMILAR VENDORS SECTION */}
      {similarVendors.length > 0 && (
        <section className="pt-12 border-t border-borderBase space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Explore Alternatives</span>
              <h2 className="text-2xl font-bold font-serif text-charcoal-900 mt-0.5">
                Similar {vendor.category} Vendors
              </h2>
            </div>
            <Link to={`/vendors?category=${encodeURIComponent(vendor.category)}`} className="text-xs font-bold text-coral-600 hover:underline">
              View all {vendor.category} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarVendors.map((simVendor) => (
              <VendorCard key={simVendor.id} vendor={simVendor} />
            ))}
          </div>
        </section>
      )}

      {/* AI BREAKDOWN MODAL */}
      <AiMatchBreakdownModal
        vendor={vendor}
        event={activeEvent}
        isOpen={showAiModal}
        onClose={() => setShowAiModal(false)}
      />

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface rounded-3xl border border-borderBase shadow-floating max-w-lg w-full p-6 sm:p-8 space-y-5">
            {bookingSuccess ? (
              <div className="py-8 text-center space-y-3 animate-scaleUp">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emeraldGreen flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-charcoal-900">Booking Request Sent!</h3>
                <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
                  Your request has been added to your dashboard bookings and the vendor has been notified.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-start justify-between border-b border-borderBase pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-coral-600">
                      Reserve / Inquire
                    </span>
                    <h3 className="text-xl font-bold font-serif text-charcoal-900">{vendor.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(false)}
                    className="text-charcoal-400 hover:text-charcoal-800"
                  >
                    ✕
                  </button>
                </div>

                <div className="bg-ivory-100 p-3.5 rounded-xl border border-borderBase text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Event:</span>
                    <span className="font-bold text-charcoal-900">{activeEvent.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Selected Package:</span>
                    <span className="font-bold text-charcoal-900">
                      {(selectedPackage || vendor.packages[0]).name} (₹{formatINR((selectedPackage || vendor.packages[0]).price)})
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal-700 block">Event Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                    className="w-full bg-ivory-50 border border-borderBase rounded-xl px-3 py-2 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal-700 block">Special Requirements / Notes</label>
                  <textarea
                    rows={3}
                    value={bookingNote}
                    onChange={(e) => setBookingNote(e.target.value)}
                    placeholder="E.g., 300 guests, outdoor sunset stage, specific ceremony timings..."
                    className="w-full bg-ivory-50 border border-borderBase rounded-xl p-3 text-xs text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-coral-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-borderBase text-xs font-semibold text-charcoal-600 hover:bg-ivory-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs shadow-subtle transition-all"
                  >
                    Confirm Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* WRITE A REVIEW MODAL */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface rounded-3xl border border-borderBase shadow-floating max-w-md w-full p-6 space-y-4">
            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emeraldGreen mx-auto" />
                <h3 className="text-lg font-bold font-serif text-charcoal-900">Thank You!</h3>
                <p className="text-xs text-charcoal-500">Your review has been submitted for verification.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-borderBase pb-3">
                  <h3 className="text-base font-bold font-serif text-charcoal-900">Review {vendor.name}</h3>
                  <button type="button" onClick={() => setReviewModalOpen(false)} className="text-charcoal-400">✕</button>
                </div>

                <div className="space-y-1.5 text-center">
                  <label className="text-xs font-bold text-charcoal-700 block">Rating</label>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setReviewRating(s)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-7 h-7 ${s <= reviewRating ? 'fill-gold-500 text-gold-500' : 'text-charcoal-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal-700 block">Your Experience</label>
                  <textarea
                    rows={4}
                    required
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="How was their punctuality, quality, and coordination on your event day?"
                    className="w-full bg-ivory-50 border border-borderBase rounded-xl p-3 text-xs text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-coral-500"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setReviewModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-charcoal-900 text-white font-bold text-xs"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
