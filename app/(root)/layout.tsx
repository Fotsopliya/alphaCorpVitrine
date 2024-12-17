'use client';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Loader from '@components/Loader';
import '@styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const MINIMUM_LOADING_TIME = 500; // 500ms minimum

  useEffect(() => {
    const handleInitialLoad = () => {
      setTimeout(() => setLoading(false), MINIMUM_LOADING_TIME); // Ensure loader is visible for at least 500ms
    };

    // Simulate initial page load by waiting for a moment (or you could check if children are rendered)
    handleInitialLoad();

    // Optional: Cleanup function in case of dependencies (here, no event listeners are used)
    return () => {};
  }, []); // Empty dependency array means this runs only once on mount (page load)

  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Navbar />
        {loading ? <Loader /> : children}
        <Footer />
        <Toaster position="top-center" />
      </main>
    </>
  );
}
