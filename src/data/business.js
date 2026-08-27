/**
 * Nawab Dhaba LLP — Centralized Business Configuration
 * All business data in one place. Easy to update.
 */

export const BUSINESS = {
  name: 'Nawab Dhaba',
  legalName: 'NAWAB DHABA LLP',
  tagline: 'Come Hungry.',
  
  // Contact
  phone: '077688 85646',
  phoneClean: '917768885646', // for WhatsApp/tel links
  whatsappNumber: '917768885646',
  
  // Location
  address: {
    line1: 'Nashik Road Village, Bhinar',
    line2: 'Bhiwandi, Maharashtra 421302',
    full: 'Nashik Road Village, Bhinar, Bhiwandi, Maharashtra 421302',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Nawab+Dhaba+Nashik+Road+Bhiwandi',
  coordinates: { lat: 19.3, lng: 73.05 }, // approximate
  
  // Hours (configurable placeholder)
  hours: {
    weekdays: '11:00 AM – 11:00 PM',
    weekends: '11:00 AM – 11:30 PM',
    display: 'Open Daily · 11 AM – 11 PM',
  },
  
  // Social (placeholder)
  social: {
    instagram: '#',
    facebook: '#',
  },
}

/**
 * Generate a WhatsApp booking URL with pre-filled message
 */
export function buildWhatsAppBookingURL({ table, section, guests, date, time, name, phone }) {
  const message = `Hello Nawab Dhaba! 👋

I'd like to request a table reservation.

🪑 Table: ${table}
📍 Section: ${section}
👥 Guests: ${guests}
📅 Date: ${date}
🕐 Time: ${time}
👤 Name: ${name}
📞 Phone: ${phone}

Please let me know if this table and time are available. Thank you!`

  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Generate a simple WhatsApp call URL
 */
export function getWhatsAppURL() {
  return `https://wa.me/${BUSINESS.whatsappNumber}`
}

export function getPhoneURL() {
  return `tel:+${BUSINESS.phoneClean}`
}

export function getDirectionsURL() {
  return BUSINESS.googleMapsUrl
}
