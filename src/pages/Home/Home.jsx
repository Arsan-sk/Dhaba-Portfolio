import React from 'react';
import HeroSection from '../../components/HeroSection';
import StorySection from '../../components/StorySection';
import SignatureCravings from '../../components/SignatureCravings';
import FeastCTA from '../../components/FeastCTA';
import MenuSection from '../../components/MenuSection';
import GoodFoodSection from '../../components/GoodFoodSection';
import AmbienceSection from '../../components/AmbienceSection';
import TableBookingSection from '../../components/TableBookingSection';
import GallerySection from '../../components/GallerySection';
import VisitSection from '../../components/VisitSection';

export default function Home() {
  return (
    <div>
      {/* 1. Full-viewport Hero */}
      <HeroSection />

      {/* 2. Editorial Story — "A table is never just a table." */}
      <StorySection />

      {/* 3. Signature Dish Carousel — "Meet the main event." */}
      <SignatureCravings />

      {/* 4. Ember CTA — "Start with one. End with a feast." */}
      <FeastCTA />

      {/* 5. Full Menu Explorer — "The full spread." */}
      <MenuSection />

      {/* 6. "Good food multiplies." */}
      <GoodFoodSection />

      {/* 7. Ambience Zones — "Three ways to sit down." */}
      <AmbienceSection />

      {/* 8. Interactive Table Booking — "Grab a seat." */}
      <TableBookingSection />

      {/* 9. Gallery — "Moments at the table." */}
      <GallerySection />

      {/* 10. Visit — "Find us hungry." */}
      <VisitSection />
    </div>
  );
}
