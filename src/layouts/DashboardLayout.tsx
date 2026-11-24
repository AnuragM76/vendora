import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
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
  const { user, logout, savedVendorIds, comparedVendorIds, activeEvent } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const currentRole = role || (
    location.pathname.startsWith('/vendor') ? 'vendor' :
    location.pathname.startsWith('/admin') ? 'admin' : 'customer'
  );

  // Role authorization enforcement (section 41)
  if (currentRole === 'admin' && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }
  if (currentRole === 'vendor' && user.role !== 'vendor' && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

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

  const themeConfig = {
    customer: {
      bg: 'bg-background',
      sidebarBg: 'bg-surface border-borderBase',
      headerTag: 'Host Planning Suite',
      badgeClass: 'bg-coral-50 text-coral-700 border-coral-200',
      activeNavClass: 'bg-charcoal-900 text-white shadow-sm',
      activeIconClass: 'text-gold-400',
      brandAccent: 'text-coral-600',
      bannerBg: 'bg-surface/80 border-borderBase',
      avatarRing: 'border-coral-400',
    },
    vendor: {
      bg: 'bg-amber-50/30',
      sidebarBg: 'bg-[#181512] text-amber-50 border-amber-900/40',
      headerTag: 'Vendor Business Portal',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      activeNavClass: 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md font-bold',
      activeIconClass: 'text-amber-200',
      brandAccent: 'text-amber-400',
      bannerBg: 'bg-[#1e1a16] border-amber-900/50 text-amber-100',
      avatarRing: 'border-amber-500',
    },
    admin: {
      bg: 'bg-slate-900/[0.03]',
      sidebarBg: 'bg-[#0f172a] text-slate-100 border-slate-800',
      headerTag: 'Root Platform Admin',
      badgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      activeNavClass: 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md font-bold',
      activeIconClass: 'text-indigo-200',
      brandAccent: 'text-indigo-400',
      bannerBg: 'bg-[#1e293b] border-slate-700 text-slate-100',
      avatarRing: 'border-indigo-500',
    },
  }[currentRole];

  return (
    <div className={`min-h-screen ${themeConfig.bg} flex flex-col`}>
      {/* Top Banner indicating distinct portal */}
      <div className={`px-4 sm:px-8 py-2 text-xs flex items-center justify-between border-b ${themeConfig.bannerBg}`}>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${currentRole === 'vendor' ? 'bg-amber-400 animate-pulse' : currentRole === 'admin' ? 'bg-indigo-400 animate-pulse' : 'bg-emerald-400 animate-pulse'}`} />
          <span className="font-bold tracking-wide uppercase text-[11px]">{themeConfig.headerTag}</span>
          <span className="hidden sm:inline opacity-60">•</span>
          <span className="hidden sm:inline opacity-80">
            {currentRole === 'vendor' ? 'Business Management & Bookings Command' : currentRole === 'admin' ? 'System Oversight & Security Verification' : 'Client Event Orchestration Hub'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${themeConfig.badgeClass}`}>
            {currentRole} Mode
          </span>
          <Link to="/" className="hover:underline text-[11px] opacity-80 hover:opacity-100">
            Back to Public Site →
          </Link>
        </div>
      </div>

      {/* Top Mobile Bar */}
      <div className={`lg:hidden ${currentRole === 'customer' ? 'bg-surface border-borderBase' : currentRole === 'vendor' ? 'bg-[#181512] text-amber-50 border-amber-900/50' : 'bg-[#0f172a] text-slate-100 border-slate-800'} border-b px-4 py-3 flex items-center justify-between sticky top-0 z-30`}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-1.5 rounded-lg opacity-80 hover:opacity-100"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link to="/" className="font-serif text-lg font-bold">
            VENDORA
          </Link>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${themeConfig.brandAccent}`}>
            [{currentRole}]
          </span>
        </div>

        <div className="flex items-center gap-2">
          <NotificationDropdown />
          <img
            src={user.avatar}
            alt={user.name}
            className={`w-7 h-7 rounded-full object-cover border-2 ${themeConfig.avatarRing}`}
          />
        </div>
      </div>

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 ${themeConfig.sidebarBg} border-r flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div>
            {/* Logo / Header */}
            <div className={`p-6 border-b ${currentRole === 'customer' ? 'border-borderBase' : currentRole === 'vendor' ? 'border-amber-900/40' : 'border-slate-800'} flex items-center justify-between`}>
              <Link to="/" className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg ${currentRole === 'customer' ? 'bg-charcoal-900 text-gold-400' : currentRole === 'vendor' ? 'bg-amber-500 text-charcoal-950 font-black' : 'bg-indigo-600 text-white font-black'} flex items-center justify-center font-serif text-lg font-bold shadow`}>
                  {currentRole === 'admin' ? 'A' : currentRole === 'vendor' ? 'V' : 'V'}
                </div>
                <div>
                  <span className={`font-serif text-xl font-bold tracking-tight ${currentRole === 'customer' ? 'text-charcoal-900' : 'text-white'}`}>
                    VENDORA
                  </span>
                  <span className={`block text-[10px] font-extrabold uppercase tracking-widest -mt-1 ${themeConfig.brandAccent}`}>
                    {currentRole} Panel
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="lg:hidden p-1 rounded-lg opacity-60 hover:opacity-100"
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

            {currentRole === 'vendor' && (
              <div className="m-4 p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-xs text-amber-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Merchant Hub</span>
                  <span className="text-[9px] bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded font-mono font-bold">LIVE</span>
                </div>
                <div className="font-bold text-white truncate">{user.name}</div>
                <div className="text-[11px] text-amber-300/80 flex items-center gap-1 mt-0.5">
                  <Store className="w-3 h-3 text-amber-400" />
                  Verified Business Partner
                </div>
              </div>
            )}

            {currentRole === 'admin' && (
              <div className="m-4 p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-xs text-indigo-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">Root Governance</span>
                  <span className="text-[9px] bg-indigo-500/30 text-indigo-200 px-1.5 py-0.5 rounded font-mono font-bold">SECURE</span>
                </div>
                <div className="font-bold text-white truncate">Platform Administration</div>
                <div className="text-[11px] text-indigo-300/80 flex items-center gap-1 mt-0.5">
                  <Shield className="w-3 h-3 text-indigo-400" />
                  Full System Permissions
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
                        ? themeConfig.activeNavClass
                        : currentRole === 'customer'
                        ? 'text-charcoal-600 hover:text-charcoal-900 hover:bg-ivory-100'
                        : currentRole === 'vendor'
                        ? 'text-amber-200/70 hover:text-white hover:bg-amber-950/50'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${active ? themeConfig.activeIconClass : currentRole === 'customer' ? 'text-charcoal-400' : currentRole === 'vendor' ? 'text-amber-400/60' : 'text-slate-500'}`} />
                      <span>{item.name}</span>
                    </div>

                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.badge === 'Smart' 
                          ? 'bg-ai-100 text-ai-700' 
                          : currentRole === 'vendor'
                          ? 'bg-amber-500/30 text-amber-300'
                          : currentRole === 'admin'
                          ? 'bg-indigo-500/30 text-indigo-300'
                          : 'bg-coral-100 text-coral-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}

                    {item.count !== undefined && item.count > 0 && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        active 
                          ? currentRole === 'customer' ? 'bg-charcoal-700 text-gold-300' : 'bg-black/30 text-white' 
                          : currentRole === 'customer' ? 'bg-charcoal-100 text-charcoal-700' : 'bg-white/10 text-white'
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
          <div className={`p-4 border-t ${currentRole === 'customer' ? 'border-borderBase' : currentRole === 'vendor' ? 'border-amber-900/40' : 'border-slate-800'} space-y-3`}>
            <div className={`p-2.5 rounded-xl border flex items-center gap-3 ${
              currentRole === 'customer' 
                ? 'bg-ivory-50 border-borderBase/80' 
                : currentRole === 'vendor'
                ? 'bg-amber-950/40 border-amber-800/40'
                : 'bg-slate-800/50 border-slate-700'
            }`}>
              <img
                src={user.avatar}
                alt={user.name}
                className={`w-8 h-8 rounded-full object-cover border-2 ${themeConfig.avatarRing}`}
              />
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-bold truncate ${currentRole === 'customer' ? 'text-charcoal-900' : 'text-white'}`}>{user.name}</p>
                <p className={`text-[10px] truncate ${currentRole === 'customer' ? 'text-charcoal-400' : 'opacity-60'}`}>{user.email}</p>
              </div>
            </div>

            <div className={`p-2.5 rounded-xl flex items-center justify-between text-xs ${
              currentRole === 'customer'
                ? 'bg-charcoal-100/70'
                : currentRole === 'vendor'
                ? 'bg-amber-950/60 border border-amber-800/50'
                : 'bg-slate-800 border border-slate-700'
            }`}>
              <span className={`text-[11px] font-semibold ${currentRole === 'customer' ? 'text-charcoal-500' : 'opacity-70'}`}>Active Workspace:</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border shadow-sm ${themeConfig.badgeClass}`}>
                {user.role}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <Link to="/profile" className={`flex items-center gap-1 font-medium ${currentRole === 'customer' ? 'text-charcoal-500 hover:text-charcoal-900' : 'opacity-70 hover:opacity-100 text-white'}`}>
                <Settings className="w-3.5 h-3.5" />
                Profile
              </Link>
              <button
                type="button"
                onClick={async () => {
                  await logout();
                  navigate('/login');
                }}
                className={`flex items-center gap-1 font-medium cursor-pointer ${currentRole === 'customer' ? 'text-coral-600 hover:text-coral-700' : currentRole === 'vendor' ? 'text-amber-400 hover:text-amber-300' : 'text-indigo-400 hover:text-indigo-300'}`}
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
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
