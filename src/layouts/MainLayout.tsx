import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CompareTray } from '../components/common/CompareTray';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-charcoal-900">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CompareTray />
      <Footer />
    </div>
  );
};
