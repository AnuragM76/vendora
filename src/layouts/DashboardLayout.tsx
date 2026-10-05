import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Sparkles, 
  Compass, 
  Scale, 
  Heart, 
  TicketCheck, 
  UserCircle, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Store,
  Briefcase,
  Image,
  Clock,
  Shield,
  Users,
  Building,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CompareTray } from '../components/common/CompareTray';
import { NotificationDropdown } from '../components/layout/NotificationDropdown';

interface DashboardLayoutProps {
  role?: 'customer' | 'vendor' | 'admin';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => {
  const { user, switchRole, logout, savedVendorIds, comparedVendorIds, activeEvent } = useApp();
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Active role can be forced by prop or derived from current user/path
  const currentRole = role || (
    location.pathname.startsWith('/vendor') ? 'vendor' :
    location.pathname.startsWith('/admin') ? 'admin' : 'customer'
  );

  const isActive = (path: string) => location.pathname === path;

  interface NavItem {
    name: string;
    path: string;
    icon: any;
    badge?: string;
    count?: number;
  }

  const customerNav: NavItem[] = [
    { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Events', path: '/events', icon: Calendar },
    { name: 'AI Recommendations', path: '/recommendations', icon: Sparkles, badge: 'Smart' },
    { name: 'Explore Vendors', path: '/vendors', icon: Compass },
    { name: 'Compare Matrix', path: '/compare', icon: Scale, count: comparedVendorIds.length },
    { name: 'Saved Shortlist', path: '/saved', icon: Heart, count: savedVendorIds.length },
    { name: 'My Bookings', path: '/bookings', icon: TicketCheck },
  ];

  const vendorNav: NavItem[] = [
    { name: 'Vendor Overview', path: '/vendor/dashboard', icon: LayoutDashboard },
    { name: 'Booking Requests', path: '/vendor/bookings', icon: TicketCheck, badge: '5 New' },
    { name: 'Packages & Services', path: '/vendor/services', icon: Briefcase },
    { name: 'Portfolio Gallery', path: '/vendor/portfolio', icon: Image },
    { name: 'Calendar & Availability', path: '/vendor/availability', icon: Clock },
    { name: 'Business Profile', path: '/vendor/profile', icon: UserCircle },
  ];

  const adminNav: NavItem[] = [
    { name: 'Admin Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Vendor Verification', path: '/admin/vendors', icon: Shield, badge: 'Pending' },
    { name: 'Registered Users', path: '/admin/users', icon: Users },
    { name: 'Service Categories', path: '/admin/categories', icon: Building },
    { name: 'Analytics & Reports', path: '/admin/reports', icon: BarChart3 },
  ];

  const currentNavItems = currentRole === 'vendor' ? vendorNav : currentRole === 'admin' ? adminNav : customerNav;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Mobile Bar */}
      <div className="lg:hidden bg-surface border-b border-borderBase px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-1.5 rounded-lg text-charcoal-700 hover:bg-charcoal-100"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link to="/" className="font-serif text-lg font-bold text-charcoal-900">
            VENDORA
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <NotificationDropdown />
          <img
            src={user.avatar}
            alt={user.name}
            className="w-7 h-7 rounded-full object-cover border border-borderBase"
          />
        </div>
      </div>

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-surface border-r border-borderBase flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div>
            {/* Logo / Header */}
            <div className="p-6 border-b border-borderBase flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-charcoal-900 text-gold-400 flex items-center justify-center font-serif text-lg font-bold">
                  V
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-tight text-charcoal-900">
                    VENDORA
                  </span>
                  <span className="block text-[10px] font-semibold text-coral-600 uppercase tracking-widest -mt-1">
                    {currentRole} Workspace
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="lg:hidden p-1 rounded-lg text-charcoal-400 hover:text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Context Card */}
            {currentRole === 'customer' && (
              <div className="m-4 p-3 rounded-xl bg-ivory-100 border border-borderBase text-xs">
                <div className="flex items-center justify-between text-charcoal-500 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">Active Event</span>
                  <Link to="/events/new" className="text-[10px] text-coral-600 font-bold hover:underline">Edit</Link>
                </div>
                <div className="font-bold text-charcoal-900 truncate">{activeEvent.name}</div>
                <div className="text-[11px] text-charcoal-600 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-charcoal-400" />
                  {activeEvent.date} • {activeEvent.location}
                </div>
              </div>
            )}

            {/* Nav Links */}
            <div className="px-3 py-4 space-y-1">
              {currentNavItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      active
                        ? 'bg-charcoal-900 text-white shadow-sm'
                        : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-ivory-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${active ? 'text-gold-400' : 'text-charcoal-400'}`} />
                      <span>{item.name}</span>
                    </div>

                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.badge === 'Smart' ? 'bg-ai-100 text-ai-700' : 'bg-coral-100 text-coral-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}

                    {item.count !== undefined && item.count > 0 && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        active ? 'bg-charcoal-700 text-gold-300' : 'bg-charcoal-100 text-charcoal-700'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom user card & role switcher */}
          <div className="p-4 border-t border-borderBase space-y-3">
            <div className="bg-ivory-50 p-2.5 rounded-xl border border-borderBase/80 flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border border-borderBase"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-charcoal-900 truncate">{user.name}</p>
                <p className="text-[10px] text-charcoal-400 truncate">{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 bg-charcoal-100 p-1 rounded-lg text-center">
              <button
                onClick={() => switchRole('customer')}
                className={`py-1 text-[10px] font-bold rounded ${
                  currentRole === 'customer' ? 'bg-white text-charcoal-900 shadow-sm' : 'text-charcoal-500 hover:text-charcoal-900'
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => switchRole('vendor')}
                className={`py-1 text-[10px] font-bold rounded ${
                  currentRole === 'vendor' ? 'bg-white text-charcoal-900 shadow-sm' : 'text-charcoal-500 hover:text-charcoal-900'
                }`}
              >
                Vendor
              </button>
              <button
                onClick={() => switchRole('admin')}
                className={`py-1 text-[10px] font-bold rounded ${
                  currentRole === 'admin' ? 'bg-white text-charcoal-900 shadow-sm' : 'text-charcoal-500 hover:text-charcoal-900'
                }`}
              >
                Admin
              </button>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <Link to="/settings" className="text-charcoal-500 hover:text-charcoal-900 flex items-center gap-1 font-medium">
                <Settings className="w-3.5 h-3.5" />
                Settings
              </Link>
              <Link to="/" className="text-coral-600 hover:text-coral-700 flex items-center gap-1 font-medium">
                <LogOut className="w-3.5 h-3.5" />
                Exit
              </Link>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-charcoal-950/40 z-30 lg:hidden backdrop-blur-xs"
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>

      <CompareTray />
    </div>
  );
};
