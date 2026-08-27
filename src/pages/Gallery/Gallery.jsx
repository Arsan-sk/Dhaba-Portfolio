import React from 'react';
import GallerySection from '../../components/GallerySection';
import AmbienceSection from '../../components/AmbienceSection';

export default function GalleryPage() {
  return (
    <div className="bg-dhaba-pattern" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
      <GallerySection />
      <AmbienceSection />
    </div>
  );
}
