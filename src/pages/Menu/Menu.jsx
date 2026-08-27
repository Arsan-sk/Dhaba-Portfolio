import React from 'react';
import MenuSection from '../../components/MenuSection';
import SignatureCravings from '../../components/SignatureCravings';

export default function MenuPage() {
  return (
    <div className="bg-dhaba-pattern" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
      <MenuSection />
      <SignatureCravings />
    </div>
  );
}
