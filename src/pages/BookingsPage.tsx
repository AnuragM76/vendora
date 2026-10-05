import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TicketCheck, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  ArrowRight, 
  Download, 
  Phone, 
  FileText 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Booking } from '../types';
import { formatINR } from '../components/common/PriceDisplay';

export const BookingsPage: React.FC = () => {
  const { bookings, updateBookingStatus } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filteredBookings = bookings.filter(b => {
    if (filterStatus === 'All') return true;
    return b.status.toLowerCase() === filterStatus.toLowerCase();
  });

  const getStatusBadge = (status: Booking['status']) => {
    switch (status) {
      case 'Confirmed':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emeraldGreen bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Confirmed
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            Pending Review
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-charcoal-700 bg-charcoal-100 border border-charcoal-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            <XCircle className="w-3.5 h-3.5" />
            Cancelled
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-coral-600 mb-1">
            <TicketCheck className="w-3.5 h-3.5" />
            <span>Event Contracts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
            My Bookings & Inquiries
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
            Track confirmed dates, contracts, and vendor reservations.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 bg-surface p-1 rounded-xl border border-borderBase overflow-x-auto">
          {['All', 'Confirmed', 'Pending', 'Completed'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterStatus === st
                  ? 'bg-charcoal-900 text-white'
                  : 'text-charcoal-600 hover:bg-ivory-100'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {filteredBookings.length === 0 ? (
        /* Empty State */
        <div className="bg-surface rounded-3xl border border-borderBase p-12 text-center space-y-4 shadow-card max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emeraldGreen flex items-center justify-center mx-auto">
            <TicketCheck className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-serif text-charcoal-900">
            Your event journey starts here
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-500 leading-relaxed max-w-sm mx-auto">
            You don't have any bookings matching this status. Explore our top recommended vendors to lock in your date.
          </p>
          <div className="pt-2">
            <Link
              to="/recommendations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs shadow-subtle transition-all"
            >
              <span>Explore Recommendations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((bkg) => (
            <div
              key={bkg.id}
              className="bg-surface rounded-3xl p-6 sm:p-7 border border-borderBase shadow-card hover:shadow-elevated transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Vendor & Event details */}
              <div className="flex items-start sm:items-center gap-4 min-w-0">
                <img
                  src={bkg.vendorImage}
                  alt={bkg.vendorName}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shrink-0 border border-borderBase"
                />
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600 bg-coral-50 px-2.5 py-0.5 rounded-full">
                      {bkg.vendorCategory}
                    </span>
                    {getStatusBadge(bkg.status)}
                  </div>

                  <Link to={`/vendors/${bkg.vendorId}`}>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-charcoal-900 hover:text-coral-600 transition-colors">
                      {bkg.vendorName}
                    </h3>
                  </Link>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-coral-500" />
                      {bkg.eventDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-coral-500" />
                      {bkg.vendorLocation}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-charcoal-700">
                      Target: {bkg.eventName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Package & Financial summary */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-borderBase gap-4">
                <div className="text-left sm:text-right">
                  <span className="text-xs text-charcoal-400 block font-medium">Selected Package</span>
                  <div className="text-sm font-bold text-charcoal-900">{bkg.packageName}</div>
                  <div className="text-xl font-extrabold text-charcoal-900 font-serif mt-0.5">
                    ₹{formatINR(bkg.amount)}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => alert(`Simulated Invoice Download for Booking ${bkg.id}`)}
                    className="px-3.5 py-2 rounded-xl bg-ivory-100 hover:bg-ivory-200 text-charcoal-800 text-xs font-bold flex items-center gap-1.5 transition-colors border border-borderBase"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Contract</span>
                  </button>

                  <Link
                    to={`/vendors/${bkg.vendorId}`}
                    className="px-4 py-2 rounded-xl bg-charcoal-900 hover:bg-coral-500 text-white text-xs font-bold transition-colors"
                  >
                    View Vendor
                  </Link>

                  {bkg.status === 'Pending' && (
                    <button
                      onClick={() => updateBookingStatus(bkg.id, 'Cancelled')}
                      className="px-3 py-2 rounded-xl text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
