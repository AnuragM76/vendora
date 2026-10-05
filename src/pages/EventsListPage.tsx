import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, IndianRupee, Plus, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { eventService } from '../services/eventService';
import { formatINR } from '../components/common/PriceDisplay';

export const EventsListPage: React.FC = () => {
  const { activeEvent, updateActiveEvent } = useApp();
  const allEvents = eventService.getAllEvents();

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderBase pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Events Management</span>
          <h1 className="text-3xl font-serif font-bold text-charcoal-900 mt-1">My Events</h1>
          <p className="text-xs text-charcoal-500">Manage multiple celebrations or create a new event profile.</p>
        </div>

        <Link
          to="/events/new"
          className="px-4 py-2.5 bg-coral-500 hover:bg-coral-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-subtle transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Plan New Event</span>
        </Link>
      </div>

      <div className="space-y-4">
        {allEvents.map((ev) => {
          const isActive = ev.id === activeEvent.id;
          return (
            <div
              key={ev.id}
              className={`bg-surface rounded-3xl p-6 sm:p-7 border transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                isActive ? 'border-2 border-coral-500 shadow-elevated' : 'border-borderBase shadow-card hover:border-charcoal-300'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-ivory-200 text-charcoal-800">
                    {ev.eventType}
                  </span>
                  {isActive && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-coral-50 text-coral-600 border border-coral-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Active Optimization
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-serif text-charcoal-900">{ev.name}</h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-coral-500" /> {ev.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-coral-500" /> {ev.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-gold-600" /> {ev.guestCount} Guests</span>
                  <span>•</span>
                  <span className="font-bold text-charcoal-800">Budget: ₹{formatINR(ev.totalBudget)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-borderBase">
                {!isActive ? (
                  <button
                    onClick={() => updateActiveEvent(ev)}
                    className="px-4 py-2 rounded-xl bg-ivory-200 hover:bg-charcoal-900 hover:text-white text-charcoal-900 text-xs font-bold transition-colors"
                  >
                    Set as Active
                  </button>
                ) : (
                  <Link
                    to="/recommendations"
                    className="px-4 py-2 rounded-xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Matches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
