import { User } from '../types';
import { authApi } from './api';

const AUTH_USER_KEY = 'vendora_auth_user';

export const authService = {
  getCurrentUser: (): User | null => {
    try {
      const stored = localStorage.getItem(AUTH_USER_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return null;
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
    // If backend session expired or invalid, remove stale local cache
    try {
      localStorage.removeItem(AUTH_USER_KEY);
    } catch {}
    return null;
  },

  login: async (email: string, password?: string): Promise<{ success: boolean; user?: User; message?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      return { success: false, message: 'Email address is required.' };
    }
    if (!password) {
      return { 
        success: false, 
        message: 'Password is required. User accounts can only be accessed with valid email and password.' 
      };
    }
    
    // Authenticate with backend database using credentials
    try {
      const res = await authApi.login(cleanEmail, password);
      if (res.user) {
        try {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.user));
        } catch {}
        return { success: true, user: res.user };
      }
    } catch (err: any) {
      return { 
        success: false, 
        message: err.message || 'Invalid email or password. Please verify your credentials and try again.' 
      };
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

  logout: async (): Promise<void> => {
    try {
      localStorage.removeItem(AUTH_USER_KEY);
    } catch {}
    try {
      await authApi.logout();
    } catch {}
  },
};
