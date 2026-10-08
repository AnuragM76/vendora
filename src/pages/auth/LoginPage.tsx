import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError('Please provide both your email address (Login ID) and password.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const success = await login(email.trim(), password);
      if (success) {
        const clean = email.trim().toLowerCase();
        if (clean.includes('vendor')) {
          navigate('/vendor/dashboard');
        } else if (clean.includes('admin')) {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError('Invalid login credentials. Please verify your email and password.');
      }
    } catch (err: any) {
      setError(err.message || 'Unable to sign in. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface rounded-3xl p-8 sm:p-10 border border-borderBase shadow-card text-left">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-gold-400 flex items-center justify-center font-serif text-2xl font-bold">
              V
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-charcoal-900">
              VENDORA
            </span>
          </Link>
          <h2 className="text-2xl font-serif font-bold text-charcoal-900">
            Sign In to Your Account
          </h2>
          <p className="text-xs text-charcoal-500">
            Access your event planning command center, vendor listings, or administrative portal.
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
              Email Address (Login ID)
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. demo@vendora.app"
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                Password
              </label>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your account password"
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-charcoal-900 hover:bg-coral-500 text-white rounded-xl text-xs font-bold shadow-subtle transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Security & System Accounts Info */}
        <div className="pt-4 border-t border-borderBase space-y-3">
          <div className="bg-ivory-50 border border-borderBase rounded-2xl p-3.5 space-y-2">
            <div className="flex items-center gap-1.5 text-charcoal-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emeraldGreen" />
              <span>Authentication Credentials</span>
            </div>
            <p className="text-[11px] text-charcoal-500 leading-relaxed">
              To change or switch accounts, enter the respective registered email and password:
            </p>
            <div className="text-[11px] font-mono text-charcoal-700 space-y-1 bg-white p-2.5 rounded-xl border border-borderBase/60">
              <div className="flex justify-between">
                <span>Customer:</span>
                <span className="font-semibold text-charcoal-900">demo@vendora.app</span>
                <span className="text-charcoal-400">Demo@12345</span>
              </div>
              <div className="flex justify-between">
                <span>Vendor:</span>
                <span className="font-semibold text-charcoal-900">vendor@vendora.app</span>
                <span className="text-charcoal-400">Vendor@12345</span>
              </div>
              <div className="flex justify-between">
                <span>Admin:</span>
                <span className="font-semibold text-charcoal-900">admin@vendora.app</span>
                <span className="text-charcoal-400">Admin@12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-charcoal-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-coral-600 hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};
