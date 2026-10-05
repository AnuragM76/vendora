import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { MainLayout } from './layouts/MainLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Public Pages
import { LandingPage } from './pages/LandingPage';
import { VendorDiscoveryPage } from './pages/VendorDiscoveryPage';
import { VendorDetailPage } from './pages/VendorDetailPage';
import { ComparePage } from './pages/ComparePage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

// Customer Pages
import { CustomerDashboardPage } from './pages/CustomerDashboardPage';
import { EventsListPage } from './pages/EventsListPage';
import { NewEventPage } from './pages/NewEventPage';
import { SavedVendorsPage } from './pages/SavedVendorsPage';
import { BookingsPage } from './pages/BookingsPage';
import { CustomerProfilePage } from './pages/CustomerProfilePage';
import { SettingsPage } from './pages/SettingsPage';

// Vendor & Admin Pages
import { VendorDashboardPage } from './pages/vendor/VendorDashboardPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes with Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vendors" element={<VendorDiscoveryPage />} />
            <Route path="/vendors/:id" element={<VendorDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/events/new" element={<NewEventPage />} />
          </Route>

          {/* Customer Dashboard Routes */}
          <Route element={<DashboardLayout role="customer" />}>
            <Route path="/dashboard" element={<CustomerDashboardPage />} />
            <Route path="/events" element={<EventsListPage />} />
            <Route path="/saved" element={<SavedVendorsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/profile" element={<CustomerProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          {/* Vendor Portal Routes */}
          <Route element={<DashboardLayout role="vendor" />}>
            <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
            <Route path="/vendor/profile" element={<VendorDashboardPage />} />
            <Route path="/vendor/portfolio" element={<VendorDashboardPage />} />
            <Route path="/vendor/services" element={<VendorDashboardPage />} />
            <Route path="/vendor/bookings" element={<VendorDashboardPage />} />
            <Route path="/vendor/availability" element={<VendorDashboardPage />} />
          </Route>

          {/* Admin Portal Routes */}
          <Route element={<DashboardLayout role="admin" />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/vendors" element={<AdminDashboardPage />} />
            <Route path="/admin/users" element={<AdminDashboardPage />} />
            <Route path="/admin/categories" element={<AdminDashboardPage />} />
            <Route path="/admin/reports" element={<AdminDashboardPage />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
