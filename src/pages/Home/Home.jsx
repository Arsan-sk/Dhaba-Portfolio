import React from 'react';
import HeroSection from '../../components/HeroSection';
import MarqueeTicker from '../../components/MarqueeTicker';
import StorySection from '../../components/StorySection';
import SignatureCravings from '../../components/SignatureCravings';
import FeastCTA from '../../components/FeastCTA';
import GoodFoodSection from '../../components/GoodFoodSection';
import AmbienceSection from '../../components/AmbienceSection';
import VisitSection from '../../components/VisitSection';

export default function Home() {
  return (
    <div>
      {/* 1. Full-viewport Hero */}
      <HeroSection />

      {/* 2. Gold Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Editorial Story — "A table is never just a table." */}
      <StorySection />

      {/* 4. Signature Dish Carousel — "Meet the main event." */}
      <SignatureCravings />

      {/* 5. Ember CTA — "Start with one. End with a feast." */}
      <FeastCTA />

      {/* 6. "Good food multiplies." */}
      <GoodFoodSection />

      {/* 7. Ambience Zones — "Three ways to sit down." */}
      <AmbienceSection />

      {/* 8. Visit — "Find us hungry." */}
      <VisitSection />
    </div>
  );
}
