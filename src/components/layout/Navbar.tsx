import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  Scale, 
  Menu, 
  X, 
  Calendar, 
  Compass, 
  UserCircle, 
  LayoutDashboard,
  Shield,
  Store,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NotificationDropdown } from './NotificationDropdown';

export const Navbar: React.FC = () => {
  const { user, switchRole, savedVendorIds, comparedVendorIds, activeEvent } = useApp();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-borderBase transition-all">
      {/* Top micro banner for Demo Mode switcher */}
      <div className="bg-charcoal-900 text-charcoal-300 text-[11px] py-1 px-4 sm:px-8 flex items-center justify-between border-b border-charcoal-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-charcoal-200">Demo Prototype:</span>
          <span className="hidden sm:inline text-charcoal-400">Current Event:</span>
          <span className="font-semibold text-white truncate max-w-xs">{activeEvent.name} ({activeEvent.location})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-charcoal-400">Switch View:</span>
          <div className="flex items-center bg-charcoal-800 rounded-lg p-0.5 border border-charcoal-700">
            <button
              onClick={() => switchRole('customer')}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                user.role === 'customer' ? 'bg-coral-500 text-white' : 'text-charcoal-400 hover:text-white'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => switchRole('vendor')}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                user.role === 'vendor' ? 'bg-coral-500 text-white' : 'text-charcoal-400 hover:text-white'
              }`}
            >
              Vendor
            </button>
            <button
              onClick={() => switchRole('admin')}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                user.role === 'admin' ? 'bg-coral-500 text-white' : 'text-charcoal-400 hover:text-white'
              }`}
            >
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-gold-400 flex items-center justify-center font-serif text-2xl font-bold shadow-md group-hover:scale-105 transition-transform">
              V
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-coral-600 transition-colors">
                  VENDORA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-coral-500 mb-2" />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-charcoal-400 font-semibold -mt-1 hidden sm:block">
                Intelligent Event Planning
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/vendors"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive('/vendors')
                  ? 'bg-ivory-200 text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-ivory-100'
              }`}
            >
              <Compass className="w-4 h-4 text-coral-500" />
              Explore Vendors
            </Link>

            <Link
              to="/recommendations"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive('/recommendations')
                  ? 'bg-ai-50 text-ai-900 border border-ai-200'
                  : 'text-charcoal-600 hover:text-ai-600 hover:bg-ai-50/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-ai-500" />
              AI Recommendations
            </Link>

            <Link
              to="/compare"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive('/compare')
                  ? 'bg-ivory-200 text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-ivory-100'
              }`}
            >
              <Scale className="w-4 h-4 text-charcoal-500" />
              Compare
              {comparedVendorIds.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-coral-500 text-white rounded-full text-[10px] font-bold">
                  {comparedVendorIds.length}
                </span>
              )}
            </Link>

            <Link
              to="/dashboard"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive('/dashboard')
                  ? 'bg-ivory-200 text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-ivory-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-gold-600" />
              Dashboard
            </Link>

            <Link
              to="/events/new"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive('/events/new')
                  ? 'bg-ivory-200 text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-ivory-100'
              }`}
            >
              <Calendar className="w-4 h-4 text-emeraldGreen" />
              Plan Event
            </Link>
          </nav>
        </div>

        {/* Right side icons & actions */}
        <div className="flex items-center gap-3">
          {/* Saved Vendors */}
          <Link
            to="/saved"
            className="relative p-2 rounded-full text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
            title="Saved Vendors"
          >
            <Heart className="w-5 h-5" />
            {savedVendorIds.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-coral-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {savedVendorIds.length}
              </span>
            )}
          </Link>

          {/* Notifications Dropdown */}
          <NotificationDropdown />

          {/* User Account / Role Badge */}
          <div className="relative">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center gap-2 p-1.5 pr-2.5 rounded-full hover:bg-ivory-100 border border-borderBase transition-all"
            >
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
                alt={user.name}
                className="w-7 h-7 rounded-full object-cover border border-borderBase"
              />
              <div className="text-left hidden sm:block">
                <span className="text-xs font-bold text-charcoal-900 block leading-tight truncate max-w-[100px]">
                  {user.name}
                </span>
                <span className="text-[10px] uppercase font-semibold text-coral-600 tracking-wider">
                  {user.role}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-charcoal-400" />
            </button>

            {roleDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-surface rounded-2xl border border-borderBase shadow-elevated py-2 z-50 animate-scaleUp"
                onClick={() => setRoleDropdownOpen(false)}
              >
                <div className="px-4 py-2 border-b border-borderBase">
                  <p className="text-xs font-bold text-charcoal-900">{user.name}</p>
                  <p className="text-[11px] text-charcoal-500 truncate">{user.email}</p>
                </div>

                <div className="py-1">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-ivory-100"
                  >
                    <LayoutDashboard className="w-4 h-4 text-charcoal-400" />
                    Customer Dashboard
                  </Link>

                  <Link
                    to="/vendor/dashboard"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-ivory-100"
                  >
                    <Store className="w-4 h-4 text-charcoal-400" />
                    Vendor Portal
                  </Link>

                  <Link
                    to="/admin"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-ivory-100"
                  >
                    <Shield className="w-4 h-4 text-charcoal-400" />
                    Admin Portal
                  </Link>

                  <Link
                    to="/profile"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-charcoal-700 hover:bg-ivory-100"
                  >
                    <UserCircle className="w-4 h-4 text-charcoal-400" />
                    Profile & Preferences
                  </Link>
                </div>

                <div className="border-t border-borderBase pt-1 mt-1">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-xs font-semibold text-coral-600 hover:bg-coral-50"
                  >
                    Switch Account / Login
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <Link
            to="/events/new"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-900 hover:bg-coral-500 text-white text-xs font-bold shadow-subtle transition-all duration-200"
          >
            <span>Plan My Event</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-charcoal-700 hover:bg-charcoal-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-borderBase p-4 space-y-3 animate-slideDown">
          <nav className="space-y-1">
            <Link
              to="/vendors"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100"
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-coral-500" />
                <span>Explore Vendors</span>
              </div>
            </Link>

            <Link
              to="/recommendations"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-ai-500" />
                <span>AI Recommendations</span>
              </div>
            </Link>

            <Link
              to="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100"
            >
              <div className="flex items-center gap-3">
                <Scale className="w-4 h-4 text-charcoal-500" />
                <span>Compare Vendors</span>
              </div>
              {comparedVendorIds.length > 0 && (
                <span className="px-2 py-0.5 bg-coral-500 text-white rounded-full text-xs font-bold">
                  {comparedVendorIds.length}
                </span>
              )}
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-4 h-4 text-gold-600" />
                <span>Customer Dashboard</span>
              </div>
            </Link>

            <Link
              to="/vendor/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100"
            >
              <div className="flex items-center gap-3">
                <Store className="w-4 h-4 text-charcoal-500" />
                <span>Vendor Dashboard</span>
              </div>
            </Link>

            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-charcoal-800 hover:bg-ivory-100"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-charcoal-500" />
                <span>Admin Dashboard</span>
              </div>
            </Link>

            <Link
              to="/events/new"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-bold bg-charcoal-900 text-white mt-2"
            >
              <span>+ Plan New Event</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
