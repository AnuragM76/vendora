import React, { useState, useEffect } from 'react';
import { adminApi, vendorApi } from '../../services/api';
import { 
  ShieldCheck, 
  Users, 
  Store, 
  TicketCheck, 
  IndianRupee, 
  Check, 
  X, 
  Eye, 
  Search, 
  Filter, 
  Clock, 
  AlertTriangle,
  Building,
  BarChart3
} from 'lucide-react';
import { formatINR } from '../../components/common/PriceDisplay';

interface AdminVendorRecord {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  status: 'Verified' | 'Pending' | 'Rejected';
  joinedDate: string;
  documentsVerified: boolean;
}

export const AdminDashboardPage: React.FC = () => {
  const [vendorList, setVendorList] = useState<AdminVendorRecord[]>([
    {
      id: 'adm-v-1',
      name: 'Lens & Light Studio',
      category: 'Photography',
      location: 'Pune',
      rating: 4.9,
      status: 'Verified',
      joinedDate: '12 Jan 2025',
      documentsVerified: true,
    },
    {
      id: 'adm-v-2',
      name: 'Royal Heritage Banquets',
      category: 'Venue',
      location: 'Hyderabad',
      rating: 4.8,
      status: 'Pending',
      joinedDate: '01 Oct 2026',
      documentsVerified: true,
    },
    {
      id: 'adm-v-3',
      name: 'Sahyadri Mandap Art',
      category: 'Decoration',
      location: 'Nashik',
      rating: 4.6,
      status: 'Pending',
      joinedDate: '03 Oct 2026',
      documentsVerified: false,
    },
    {
      id: 'adm-v-4',
      name: 'Rasoi Royal Gourmet Caterers',
      category: 'Catering',
      location: 'Pune',
      rating: 4.9,
      status: 'Verified',
      joinedDate: '15 Mar 2025',
      documentsVerified: true,
    },
    {
      id: 'adm-v-5',
      name: 'Illusion Dhol & DJ Crew',
      category: 'DJ',
      location: 'Mumbai',
      rating: 4.7,
      status: 'Verified',
      joinedDate: '20 May 2025',
      documentsVerified: true,
    },
    {
      id: 'adm-v-6',
      name: 'Golden Touch Bridal Glam',
      category: 'Makeup',
      location: 'Bengaluru',
      rating: 4.2,
      status: 'Rejected',
      joinedDate: '10 Sep 2026',
      documentsVerified: false,
    },
  ]);

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Verified' | 'Pending' | 'Rejected'>('All');

  useEffect(() => {
    adminApi.getAdminVendors().then((vendors) => {
      if (vendors && vendors.length > 0) {
        setVendorList(
          vendors.map((v) => ({
            id: v.id,
            name: v.businessName || v.name,
            category: v.category?.name || 'Photography',
            location: v.location,
            rating: v.rating,
            status: v.verified ? 'Verified' : 'Pending',
            joinedDate: v.createdAt ? new Date(v.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recently',
            documentsVerified: Boolean(v.verified),
          }))
        );
      }
    }).catch(() => {});
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: 'Verified' | 'Rejected') => {
    setVendorList(prev => prev.map(v => v.id === id ? { ...v, status: newStatus } : v));
    try {
      await vendorApi.verifyVendor(id, newStatus === 'Verified');
    } catch {}
  };

  const filtered = vendorList.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase()) ||
                          v.category.toLowerCase().includes(search.toLowerCase()) ||
                          v.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const verifiedCount = vendorList.filter(v => v.status === 'Verified').length;
  const pendingCount = vendorList.filter(v => v.status === 'Pending').length;

  return (
    <div className="space-y-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">
            Platform Administration
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mt-1">
            VENDORA Control Center
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Monitor platform metrics, user engagement, and vendor verification compliance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {pendingCount} Verifications Pending
          </span>
        </div>
      </div>

      {/* ADMIN STATS CARDS (Section 27) */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <span>Total Users</span>
            <Users className="w-3.5 h-3.5 text-charcoal-400" />
          </div>
          <div className="text-2xl font-bold font-serif text-charcoal-900 mt-2">3,420</div>
          <span className="text-[10px] text-emeraldGreen font-semibold">+12% this week</span>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <span>Total Vendors</span>
            <Store className="w-3.5 h-3.5 text-charcoal-400" />
          </div>
          <div className="text-2xl font-bold font-serif text-charcoal-900 mt-2">148</div>
          <span className="text-[10px] text-charcoal-400">Across 5 cities</span>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <span>Verified</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emeraldGreen" />
          </div>
          <div className="text-2xl font-bold font-serif text-emeraldGreen mt-2">{verifiedCount}</div>
          <span className="text-[10px] text-emeraldGreen font-semibold">91% Compliance</span>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card">
          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <span>Total Bookings</span>
            <TicketCheck className="w-3.5 h-3.5 text-charcoal-400" />
          </div>
          <div className="text-2xl font-bold font-serif text-charcoal-900 mt-2">540</div>
          <span className="text-[10px] text-coral-600 font-semibold">Active season</span>
        </div>

        <div className="bg-surface p-5 rounded-2xl border border-borderBase shadow-card col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between text-xs text-charcoal-500">
            <span>Platform Gross Volume</span>
            <IndianRupee className="w-3.5 h-3.5 text-gold-500" />
          </div>
          <div className="text-2xl font-bold font-serif text-charcoal-900 mt-2">₹4.82 Crores</div>
          <span className="text-[10px] text-charcoal-400">Total contracts facilitated</span>
        </div>
      </div>

      {/* SECTION 28: VENDOR VERIFICATION TABLE */}
      <div className="bg-surface rounded-3xl border border-borderBase shadow-card overflow-hidden space-y-4 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold font-serif text-charcoal-900">
              Vendor Quality & Verification Pipeline
            </h2>
            <p className="text-xs text-charcoal-500 mt-0.5">
              Review government registrations, past portfolios, and verified pricing badges.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter */}
            <div className="flex items-center gap-1 bg-ivory-100 p-1 rounded-xl border border-borderBase text-xs font-semibold">
              {(['All', 'Pending', 'Verified', 'Rejected'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    statusFilter === tab ? 'bg-surface text-charcoal-900 shadow-sm font-bold' : 'text-charcoal-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vendor..."
                className="w-full bg-ivory-50 border border-borderBase rounded-xl pl-8 pr-3 py-1.5 text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-coral-500"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-borderBase text-[11px] font-bold uppercase tracking-wider text-charcoal-400">
                <th className="pb-3">Vendor Business</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Rating</th>
                <th className="pb-3">Joined Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borderBase">
              {filtered.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-ivory-50/50 transition-colors">
                  <td className="py-4 font-bold text-charcoal-900">
                    <div className="flex items-center gap-2">
                      <span>{vendor.name}</span>
                      {vendor.documentsVerified && (
                        <span title="Documents Attached" className="text-[10px] text-emeraldGreen font-semibold">
                          (Docs ✓)
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 text-charcoal-600 font-medium">{vendor.category}</td>
                  <td className="py-4 text-charcoal-600">{vendor.location}</td>
                  <td className="py-4 font-semibold text-charcoal-800">{vendor.rating} ★</td>
                  <td className="py-4 text-charcoal-500">{vendor.joinedDate}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      vendor.status === 'Verified'
                        ? 'bg-emerald-50 text-emeraldGreen'
                        : vendor.status === 'Rejected'
                        ? 'bg-rose-50 text-rose-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {vendor.status !== 'Verified' && (
                        <button
                          onClick={() => handleUpdateStatus(vendor.id, 'Verified')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emeraldGreen hover:bg-emerald-100 font-bold text-[11px] transition-colors"
                        >
                          Verify
                        </button>
                      )}
                      {vendor.status !== 'Rejected' && (
                        <button
                          onClick={() => handleUpdateStatus(vendor.id, 'Rejected')}
                          className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-[11px] transition-colors"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
