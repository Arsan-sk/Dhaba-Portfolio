import React from 'react';
import TableBookingSection from '../../components/TableBookingSection';
import AmbienceSection from '../../components/AmbienceSection';
import VisitSection from '../../components/VisitSection';

export default function BookTablePage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <TableBookingSection />
      <AmbienceSection />
      <VisitSection />
    </div>
  );
}
