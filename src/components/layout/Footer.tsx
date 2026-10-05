import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gold-500 text-charcoal-950 flex items-center justify-center font-serif text-xl font-bold">
                V
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                VENDORA
              </span>
            </Link>
            <p className="text-sm text-charcoal-400 max-w-sm leading-relaxed">
              India's intelligent event planning & vendor discovery platform. Intelligently match budgets, aesthetic preferences, and verified vendor availability for unforgettable celebrations.
            </p>
            <div className="flex items-center gap-4 text-xs text-charcoal-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Verified Vendors
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-ai-400" />
                AI Smart Matching
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Vendor Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/vendors?category=Photography" className="hover:text-white transition-colors">Wedding Photography</Link></li>
              <li><Link to="/vendors?category=Catering" className="hover:text-white transition-colors">Bespoke Catering</Link></li>
              <li><Link to="/vendors?category=Decoration" className="hover:text-white transition-colors">Mandap & Stage Decor</Link></li>
              <li><Link to="/vendors?category=Venue" className="hover:text-white transition-colors">Luxury Resorts & Lawns</Link></li>
              <li><Link to="/vendors?category=Makeup" className="hover:text-white transition-colors">Bridal HD Makeup</Link></li>
              <li><Link to="/vendors?category=DJ" className="hover:text-white transition-colors">DJ & Sangeet Entertainment</Link></li>
              <li><Link to="/vendors?category=Videography" className="hover:text-white transition-colors">4K Cinematic Films</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Key Locations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/vendors?location=Pune" className="hover:text-white transition-colors">Pune Weddings</Link></li>
              <li><Link to="/vendors?location=Mumbai" className="hover:text-white transition-colors">Mumbai Celebrations</Link></li>
              <li><Link to="/vendors?location=Bengaluru" className="hover:text-white transition-colors">Bengaluru Events</Link></li>
              <li><Link to="/vendors?location=Nashik" className="hover:text-white transition-colors">Nashik Vineyard Weddings</Link></li>
              <li><Link to="/vendors?location=Hyderabad" className="hover:text-white transition-colors">Hyderabad Royal Palaces</Link></li>
            </ul>
          </div>

          {/* Portals & Demo */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Portals & Demo
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Customer Dashboard</Link></li>
              <li><Link to="/vendor/dashboard" className="hover:text-white transition-colors">Vendor Partner Hub</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Verification Portal</Link></li>
              <li><Link to="/recommendations" className="hover:text-white transition-colors">AI Match Engine</Link></li>
              <li><Link to="/compare" className="hover:text-white transition-colors">Vendor Comparison Matrix</Link></li>
              <li><Link to="/events/new" className="hover:text-white transition-colors">Event Budget Wizard</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} VENDORA Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-charcoal-300">About Product</Link>
            <span className="hover:text-charcoal-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-charcoal-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-charcoal-300 cursor-pointer">Vendor Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
