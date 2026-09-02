/**
 * Dilli Darbar Dhaba LLP — Centralized Business Configuration
 * All business data in one place. Easy to update.
 */

export const BUSINESS = {
  name: 'Dilli Darbar Dhaba',
  legalName: 'DILLI DARBAR DHABA LLP',
  tagline: 'Come Hungry.',
  
  // Contact
  phone: '077579 91800',
  phoneClean: '917757991800', // for WhatsApp/tel links
  whatsappNumber: '917757991800',
  
  // Location
  address: {
    line1: 'Sawandhe',
    line2: 'Maharashtra 421302',
    full: 'Sawandhe, Maharashtra 421302',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dilli+Darbar+Dhaba+Sawandhe+Maharashtra+421302',
  coordinates: { lat: 19.3, lng: 73.05 }, // approximate
  
  // Hours
  hours: {
    weekdays: 'Open · Closes 3 AM',
    weekends: 'Open · Closes 3 AM',
    display: 'Open · Closes 3 AM',
  },
  
  // Social
  social: {
    instagram: 'https://www.instagram.com/dilli_darbar_dhaba?igsh=cGd3bTVtbmdnOHN3',
    facebook: '#',
  },
}

/**
 * Generate a WhatsApp booking URL with pre-filled message
 */
export function buildWhatsAppBookingURL({ table, section, guests, date, time, name, phone }) {
  const message = `Hello Dilli Darbar Dhaba! 👋

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
