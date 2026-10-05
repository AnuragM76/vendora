import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, Scale, ArrowRight, Award, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 border border-coral-200 text-coral-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About VENDORA</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-charcoal-900 leading-tight">
          Transforming how India plans milestone celebrations
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          We eliminate the friction, uncertainty, and fragmented chaos of finding event vendors by blending smart matchmaking with verified transparency.
        </p>
      </div>

      {/* The Problem & Our Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-surface rounded-3xl p-8 border border-borderBase shadow-card space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Problem</span>
          <h2 className="text-2xl font-serif font-bold text-charcoal-900">
            Endless calling, opaque quotes & mismatched styles
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Organizing an Indian wedding or celebration traditionally requires calling dozens of vendors from fragmented listings, struggling to get transparent pricing, and risking budget overruns without knowing if their aesthetic matches your vision.
          </p>
        </div>

        <div className="bg-charcoal-950 text-white rounded-3xl p-8 border border-charcoal-800 shadow-elevated space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400">The VENDORA Solution</span>
          <h2 className="text-2xl font-serif font-bold text-white">
            Intelligent compatibility & transparent comparisons
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
            Our recommendation platform evaluates your specific budget caps, dates, aesthetic preference (e.g. Traditional vs Minimalist), and guest size to rank verified vendors and stack their deliverables side-by-side.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900">
          Our Core Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
            <ShieldCheck className="w-6 h-6 text-emeraldGreen" />
            <h3 className="text-base font-bold text-charcoal-900 font-serif">100% Verified Quality</h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Every vendor profile is verified for business identity, client references, and portfolio genuineness.
            </p>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
            <Scale className="w-6 h-6 text-coral-600" />
            <h3 className="text-base font-bold text-charcoal-900 font-serif">Objective Comparison</h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              No sponsored bias. Vendors are compared objectively on real metrics: pricing, ratings, experience, and availability.
            </p>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-borderBase shadow-subtle space-y-3">
            <HeartHandshake className="w-6 h-6 text-ai-500" />
            <h3 className="text-base font-bold text-charcoal-900 font-serif">Direct Host Connection</h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Zero middlemen markups. You interact and contract directly with vendors with complete confidence.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ivory-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-borderBase">
        <h3 className="text-2xl font-serif font-bold text-charcoal-900">
          Ready to experience modern event planning?
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
          Start with our 6-step event wizard to discover your top recommended vendor matches.
        </p>
        <div className="pt-2">
          <Link
            to="/events/new"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 hover:bg-coral-500 text-white font-bold text-xs shadow-card transition-all"
          >
            <span>Plan My Event</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
