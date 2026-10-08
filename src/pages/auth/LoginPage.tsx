import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useApp();

  const [email, setEmail] = useState('demo@vendora.app');
  const [password, setPassword] = useState('Demo@12345');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        const clean = email.toLowerCase();
        if (clean.includes('vendor')) {
          navigate('/vendor/dashboard');
        } else if (clean.includes('admin')) {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError('Invalid email or password. Please check your credentials and try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Unable to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickFill = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setError('');
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
            Welcome back
          </h2>
          <p className="text-xs text-charcoal-500">
            Sign in to manage your event bookings and smart vendor shortlists.
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
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
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
              placeholder="••••••••"
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
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Mode Quick Accounts */}
        <div className="pt-4 border-t border-borderBase space-y-2">
          <span className="text-[11px] uppercase font-bold tracking-wider text-charcoal-400 block text-center">
            Demo Credentials (1-Click Fill)
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickFill('demo@vendora.app', 'Demo@12345')}
              className="p-2 rounded-xl border border-borderBase hover:border-coral-500 bg-ivory-50 text-center transition-colors"
            >
              <span className="text-xs font-bold text-charcoal-900 block">Customer</span>
              <span className="text-[10px] text-charcoal-400">demo@</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('vendor@vendora.app', 'Vendor@12345')}
              className="p-2 rounded-xl border border-borderBase hover:border-coral-500 bg-ivory-50 text-center transition-colors"
            >
              <span className="text-xs font-bold text-charcoal-900 block">Vendor</span>
              <span className="text-[10px] text-charcoal-400">vendor@</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('admin@vendora.app', 'Admin@12345')}
              className="p-2 rounded-xl border border-borderBase hover:border-coral-500 bg-ivory-50 text-center transition-colors"
            >
              <span className="text-xs font-bold text-charcoal-900 block">Admin</span>
              <span className="text-[10px] text-charcoal-400">admin@</span>
            </button>
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
