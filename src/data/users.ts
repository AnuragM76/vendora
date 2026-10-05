import { User } from '../types';

export const demoAccounts: Record<string, User> = {
  customer: {
    id: 'usr-customer-1',
    name: 'Anurag Sharma',
    email: 'demo@vendora.app',
    role: 'customer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    phone: '+91 98221 00921',
    city: 'Pune',
  },
  vendor: {
    id: 'usr-vendor-1',
    name: 'Lens & Light Studio',
    email: 'vendor@vendora.app',
    role: 'vendor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    phone: '+91 98220 44102',
    city: 'Pune',
  },
  admin: {
    id: 'usr-admin-1',
    name: 'Vendora Admin Team',
    email: 'admin@vendora.app',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    phone: '+91 99999 12345',
    city: 'Pune',
  }
};
