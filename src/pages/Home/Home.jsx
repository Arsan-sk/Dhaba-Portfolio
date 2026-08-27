import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import StorySection from '../../components/StorySection';
import SignatureCravings from '../../components/SignatureCravings';
import MenuSection from '../../components/MenuSection';
import AmbienceSection from '../../components/AmbienceSection';
import TableBookingSection from '../../components/TableBookingSection';
import GallerySection from '../../components/GallerySection';
import TestimonialsSection from '../../components/TestimonialsSection';
import VisitSection from '../../components/VisitSection';

export default function Home() {
  const [selectedDishModal, setSelectedDishModal] = useState(null);

  return (
    <div className="bg-dhaba-pattern">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Story & Heritage Section */}
      <StorySection />

      {/* 3. Chef's Signature Cravings Showcase */}
      <SignatureCravings onSelectDish={setSelectedDishModal} />

      {/* 4. Interactive Full Menu Explorer */}
      <MenuSection />

      {/* 5. Ambience & Seating Experience */}
      <AmbienceSection />

      {/* 6. Interactive Visual Table Reservation Engine */}
      <TableBookingSection />

      {/* 7. Photo & Moments Gallery */}
      <GallerySection />

      {/* 8. Verified Guest Testimonials */}
      <TestimonialsSection />

      {/* 9. Live Location & Highway Access Map */}
      <VisitSection />
    </div>
  );
}
