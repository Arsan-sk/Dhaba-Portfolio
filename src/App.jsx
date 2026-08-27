import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import Home from './pages/Home/Home';
import MenuPage from './pages/Menu/Menu';
import GalleryPage from './pages/Gallery/Gallery';
import BookTablePage from './pages/BookTable/BookTable';

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0C0A09' }}>
      {/* Fixed Luxury Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/book" element={<BookTablePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Mobile Floating Quick Action Bar */}
      <FloatingActionBar />

      {/* Global Royal Brand Footer */}
      <Footer />
    </div>
  );
}
