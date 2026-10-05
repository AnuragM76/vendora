import React, { useState } from 'react';
import { Settings, Bell, Shield, Moon, Globe, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SettingsPage: React.FC = () => {
  const { user } = useApp();
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [budgetAlerts, setBudgetAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 text-left">
      <div className="border-b border-borderBase pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-coral-600">Preferences</span>
        <h1 className="text-3xl font-serif font-bold text-charcoal-900 mt-1">Platform Settings</h1>
        <p className="text-xs text-charcoal-500">Manage notifications, account security, and prototype demo mode.</p>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-emeraldGreen" />
          Settings saved successfully!
        </div>
      )}

      <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-borderBase shadow-card space-y-6">
        <h2 className="text-base font-bold font-serif text-charcoal-900">Notification Alerts</h2>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-xs font-bold text-charcoal-900 block">AI Smart Match Notifications</span>
              <span className="text-[11px] text-charcoal-500">Receive alerts when new top-tier vendors match your event budget and style.</span>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-4 h-4 text-coral-500 accent-coral-500"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer border-t border-borderBase/60 pt-4">
            <div>
              <span className="text-xs font-bold text-charcoal-900 block">Budget Threshold Warnings</span>
              <span className="text-[11px] text-charcoal-500">Alert me when vendor packages exceed target category allocations by 15%.</span>
            </div>
            <input
              type="checkbox"
              checked={budgetAlerts}
              onChange={(e) => setBudgetAlerts(e.target.checked)}
              className="w-4 h-4 text-coral-500 accent-coral-500"
            />
          </label>
        </div>

        <div className="pt-4 border-t border-borderBase flex justify-end">
          <button
            onClick={handleSave}
            className="px-5 py-2.5 bg-charcoal-900 hover:bg-coral-500 text-white font-bold text-xs rounded-xl transition-colors"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};
