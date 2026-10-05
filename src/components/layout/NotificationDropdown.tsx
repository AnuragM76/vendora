import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCheck, Sparkles, Calendar, DollarSign, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NotificationDropdown: React.FC = () => {
  const { notifications, unreadNotificationsCount, markNotificationAsRead, markAllNotificationsAsRead } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return <Calendar className="w-4 h-4 text-emeraldGreen" />;
      case 'match':
        return <Sparkles className="w-4 h-4 text-ai-500" />;
      case 'budget':
        return <DollarSign className="w-4 h-4 text-coral-500" />;
      default:
        return <Info className="w-4 h-4 text-charcoal-500" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
        title="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadNotificationsCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-coral-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
            {unreadNotificationsCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-surface rounded-2xl border border-borderBase shadow-elevated z-50 overflow-hidden animate-scaleUp">
          <div className="p-4 border-b border-borderBase flex items-center justify-between bg-ivory-50">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-charcoal-900">Notifications</h4>
              {unreadNotificationsCount > 0 && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-coral-100 text-coral-700">
                  {unreadNotificationsCount} new
                </span>
              )}
            </div>
            {unreadNotificationsCount > 0 && (
              <button
                onClick={markAllNotificationsAsRead}
                className="text-xs text-charcoal-500 hover:text-charcoal-900 flex items-center gap-1 font-medium"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto divide-y divide-borderBase/60">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-xs text-charcoal-400">
                No notifications right now.
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => markNotificationAsRead(item.id)}
                  className={`p-3.5 hover:bg-ivory-100 transition-colors cursor-pointer flex gap-3 ${
                    !item.read ? 'bg-coral-50/40' : ''
                  }`}
                >
                  <div className="mt-0.5 p-2 rounded-xl bg-surface border border-borderBase shrink-0 shadow-subtle">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-charcoal-900">{item.title}</p>
                      <span className="text-[10px] text-charcoal-400">{item.time}</span>
                    </div>
                    <p className="text-xs text-charcoal-600 mt-0.5 leading-relaxed">{item.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-2.5 bg-charcoal-50 border-t border-borderBase text-center">
            <span className="text-[11px] text-charcoal-500 font-medium">
              VENDORA Realtime AI Event Alerts
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
