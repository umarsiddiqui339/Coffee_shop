import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

const RootLayout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;