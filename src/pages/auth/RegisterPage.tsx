import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, UserCheck, Store, Loader2, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState<'customer' | 'vendor'>('customer');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await register({
        name: name.trim(),
        email: email.trim(),
        password,
        role: accountType,
      });

      if (res.success) {
        if (accountType === 'vendor') {
          navigate('/vendor/dashboard');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError(res.message || 'Could not complete registration. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-surface rounded-3xl p-8 sm:p-10 border border-borderBase shadow-card text-left">
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
            Create your account
          </h2>
          <p className="text-xs text-charcoal-500">
            Join India's premier intelligent event planning and vendor network.
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Account Type Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">
              I want to:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAccountType('customer')}
                className={`p-3 rounded-2xl border-2 text-left transition-all ${
                  accountType === 'customer'
                    ? 'border-coral-500 bg-coral-50/40'
                    : 'border-borderBase hover:border-charcoal-300'
                }`}
              >
                <UserCheck className={`w-5 h-5 mb-1 ${accountType === 'customer' ? 'text-coral-600' : 'text-charcoal-400'}`} />
                <span className="text-xs font-bold text-charcoal-900 block">Plan My Event</span>
                <span className="text-[10px] text-charcoal-500">Host or couple</span>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('vendor')}
                className={`p-3 rounded-2xl border-2 text-left transition-all ${
                  accountType === 'vendor'
                    ? 'border-coral-500 bg-coral-50/40'
                    : 'border-borderBase hover:border-charcoal-300'
                }`}
              >
                <Store className={`w-5 h-5 mb-1 ${accountType === 'vendor' ? 'text-coral-600' : 'text-charcoal-400'}`} />
                <span className="text-xs font-bold text-charcoal-900 block">List My Business</span>
                <span className="text-[10px] text-charcoal-500">Event vendor</span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="E.g., Anurag Sharma"
              className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Email Address</label>
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
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Password (min 8 characters)</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password"
                className="w-full bg-ivory-50 border border-borderBase rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 p-1"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-charcoal-900 hover:bg-coral-500 text-white rounded-xl text-xs font-bold shadow-subtle transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center text-xs text-charcoal-500">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-coral-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
