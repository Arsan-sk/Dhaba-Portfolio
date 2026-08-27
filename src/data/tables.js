/**
 * Nawab Dhaba — Seating / Table Configuration
 * Mock data for the interactive booking map.
 * Positions are percentages (0-100) for responsive SVG layout.
 */

export const SEATING_ZONES = [
  { 
    id: 'family', 
    name: 'Family Section', 
    description: 'Spacious seating for families — comfort, privacy, and room for everyone.',
    icon: '👨‍👩‍👧‍👦',
    color: '#C8942A',
  },
  { 
    id: 'friends', 
    name: 'Friends & Groups', 
    description: 'Lively corner for friends and groups — the energy of a great meal together.',
    icon: '🤝',
    color: '#D4572A',
  },
  { 
    id: 'general', 
    name: 'General Dining', 
    description: 'Open dining for couples, solo visitors, and quick meals.',
    icon: '🍽️',
    color: '#4A7C59',
  },
]

export const TABLES = [
  // Family Section (left area)
  { id: 'F1', zone: 'family', capacity: 6, shape: 'rect', x: 12, y: 25, width: 12, height: 8, available: true },
  { id: 'F2', zone: 'family', capacity: 4, shape: 'rect', x: 12, y: 42, width: 10, height: 7, available: true },
  { id: 'F3', zone: 'family', capacity: 8, shape: 'rect', x: 12, y: 58, width: 14, height: 9, available: false },
  { id: 'F4', zone: 'family', capacity: 6, shape: 'rect', x: 12, y: 75, width: 12, height: 8, available: true },

  // Friends & Groups (center area)
  { id: 'G1', zone: 'friends', capacity: 6, shape: 'circle', x: 42, y: 28, radius: 5, available: true },
  { id: 'G2', zone: 'friends', capacity: 8, shape: 'circle', x: 56, y: 28, radius: 6, available: false },
  { id: 'G3', zone: 'friends', capacity: 4, shape: 'circle', x: 42, y: 50, radius: 4.5, available: true },
  { id: 'G4', zone: 'friends', capacity: 6, shape: 'circle', x: 56, y: 50, radius: 5, available: true },
  { id: 'G5', zone: 'friends', capacity: 10, shape: 'rect', x: 44, y: 70, width: 16, height: 9, available: true },

  // General Dining (right area)
  { id: 'D1', zone: 'general', capacity: 2, shape: 'rect', x: 78, y: 22, width: 8, height: 6, available: true },
  { id: 'D2', zone: 'general', capacity: 2, shape: 'rect', x: 78, y: 36, width: 8, height: 6, available: true },
  { id: 'D3', zone: 'general', capacity: 4, shape: 'rect', x: 78, y: 50, width: 10, height: 7, available: false },
  { id: 'D4', zone: 'general', capacity: 2, shape: 'rect', x: 78, y: 64, width: 8, height: 6, available: true },
  { id: 'D5', zone: 'general', capacity: 4, shape: 'rect', x: 78, y: 78, width: 10, height: 7, available: true },
]

export function getTablesByZone(zoneId) {
  return TABLES.filter(t => t.zone === zoneId)
}

export function getZoneById(zoneId) {
  return SEATING_ZONES.find(z => z.id === zoneId)
}
