import { demoAccounts } from '../data/users';
import { User } from '../types';

const AUTH_USER_KEY = 'vendora_auth_user';

export const authService = {
  getCurrentUser: (): User => {
    try {
      const stored = localStorage.getItem(AUTH_USER_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    // Default to customer demo account
    return demoAccounts.customer;
  },

  login: (email: string, _password?: string): { success: boolean; user?: User; message?: string } => {
    const cleanEmail = email.trim().toLowerCase();
    let user: User | undefined;

    if (cleanEmail === 'vendor@vendora.app') {
      user = demoAccounts.vendor;
    } else if (cleanEmail === 'admin@vendora.app') {
      user = demoAccounts.admin;
    } else if (cleanEmail === 'demo@vendora.app' || cleanEmail.includes('@')) {
      user = {
        ...demoAccounts.customer,
        email: cleanEmail,
        name: cleanEmail.split('@')[0].replace('.', ' ').replace(/^./, str => str.toUpperCase()) || 'Anurag Sharma'
      };
    }

    if (user) {
      try {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      } catch {
        // ignore
      }
      return { success: true, user };
    }

    return { success: false, message: 'Invalid credentials. Use demo@vendora.app, vendor@vendora.app, or admin@vendora.app' };
  },

  switchRole: (role: 'customer' | 'vendor' | 'admin'): User => {
    const user = demoAccounts[role];
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    } catch {
      // ignore
    }
    return user;
  },

  logout: (): void => {
    try {
      localStorage.removeItem(AUTH_USER_KEY);
    } catch {
      // ignore
    }
  }
};
