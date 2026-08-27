import React from 'react';
import TableBookingSection from '../../components/TableBookingSection';
import AmbienceSection from '../../components/AmbienceSection';
import VisitSection from '../../components/VisitSection';

export default function BookTablePage() {
  return (
    <div className="bg-dhaba-pattern" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
      <TableBookingSection />
      <AmbienceSection />
      <VisitSection />
    </div>
  );
}
