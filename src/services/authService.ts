import { demoAccounts } from '../data/users';
import { User } from '../types';
import { authApi } from './api';

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

  checkSession: async (): Promise<User | null> => {
    try {
      const user = await authApi.getCurrentUser();
      if (user) {
        try {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
        } catch {}
        return user;
      }
    } catch {}
    return null;
  },

  login: async (email: string, password?: string): Promise<{ success: boolean; user?: User; message?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Attempt backend API login first with credentials
    try {
      const defaultPasswords: Record<string, string> = {
        'demo@vendora.app': 'Demo@12345',
        'vendor@vendora.app': 'Vendor@12345',
        'admin@vendora.app': 'Admin@12345',
      };
      const pwd = password || defaultPasswords[cleanEmail] || 'Demo@12345';
      const res = await authApi.login(cleanEmail, pwd);
      if (res.user) {
        try {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.user));
        } catch {}
        return { success: true, user: res.user };
      }
    } catch (err: any) {
      // If error was from actual credential failure, return error message
      if (err.message && (err.message.includes('Invalid') || err.message.includes('password'))) {
        return { success: false, message: err.message };
      }
    }

    // Fallback demo account logic if server is temporarily unreachable
    let user: User | undefined;
    if (cleanEmail === 'vendor@vendora.app') {
      user = demoAccounts.vendor;
    } else if (cleanEmail === 'admin@vendora.app') {
      user = demoAccounts.admin;
    } else if (cleanEmail === 'demo@vendora.app' || cleanEmail.includes('@')) {
      user = {
        ...demoAccounts.customer,
        email: cleanEmail,
        name: cleanEmail.split('@')[0].replace('.', ' ').replace(/^./, str => str.toUpperCase()) || 'Anurag Sharma',
      };
    }

    if (user) {
      try {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      } catch {}
      return { success: true, user };
    }

    return { success: false, message: 'Invalid credentials. Please verify your email and password.' };
  },

  register: async (data: {
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'vendor';
  }): Promise<{ success: boolean; user?: User; message?: string }> => {
    try {
      const backendRole = data.role.toUpperCase() as 'CUSTOMER' | 'VENDOR';
      const res = await authApi.register({
        name: data.name,
        email: data.email,
        password: data.password,
        role: backendRole,
      });
      if (res.user) {
        try {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.user));
        } catch {}
        return { success: true, user: res.user };
      }
    } catch (err: any) {
      return { success: false, message: err.message || 'Registration failed' };
    }

    return { success: false, message: 'Failed to create account.' };
  },

  switchRole: (role: 'customer' | 'vendor' | 'admin'): User => {
    const user = demoAccounts[role];
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    } catch {}
    
    // Also trigger backend demo session switch asynchronously
    const demoCreds: Record<string, string> = {
      customer: 'demo@vendora.app',
      vendor: 'vendor@vendora.app',
      admin: 'admin@vendora.app',
    };
    const passwords: Record<string, string> = {
      customer: 'Demo@12345',
      vendor: 'Vendor@12345',
      admin: 'Admin@12345',
    };
    authApi.login(demoCreds[role], passwords[role]).catch(() => {});

    return user;
  },

  logout: async (): Promise<void> => {
    try {
      localStorage.removeItem(AUTH_USER_KEY);
    } catch {}
    try {
      await authApi.logout();
    } catch {}
  },
};
