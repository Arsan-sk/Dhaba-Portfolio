/**
 * Jalsa Dhaba — Centralized Business Configuration
 * All business data in one place. Easy to update.
 */

export const BUSINESS = {
  name: 'Jalsa Dhaba',
  legalName: 'JALSA DHABA',
  tagline: 'Come Hungry. Highway Jalsa Awaits.',
  
  // Contact
  phone: '077220 20666',
  phoneClean: '917722020666', // for WhatsApp/tel links
  whatsappNumber: '917722020666',
  
  // Location
  address: {
    line1: 'Mumbai - Nashik Expy, Chavindra',
    line2: 'Bhiwandi, Bhinar, Maharashtra 421302',
    full: 'Mumbai - Nashik Expy, Chavindra, Bhiwandi, Bhinar, Maharashtra 421302',
    short: 'Mumbai - Nashik Expy, Bhiwandi',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jalsa+Dhaba+Mumbai+Nashik+Expy+Chavindra+Bhiwandi+Bhinar+Maharashtra+421302',
  reviewUrl: 'https://www.google.com/search?q=Jalsa+dhaba+bhiwandi+review#lrd=0x3be7bd777c57dbb7:0xc0dd9205566c7f99,3,,,',
  coordinates: { lat: 19.308, lng: 73.064 },
  
  // Hours
  hours: {
    weekdays: 'Open · Closes 3 AM',
    weekends: 'Open · Closes 3 AM',
    display: 'Open · Closes 3 AM',
  },
  
  // Service options from Google Profile
  serviceOptions: [
    { label: 'Outdoor seating', icon: '🌿' },
    { label: 'Private dining room', icon: '🚪' },
    { label: 'Good for watching sport', icon: '🏏' }
  ],
  
  // Social
  social: {
    instagram: 'https://www.instagram.com/jalsa_dhaba',
    instagramHandle: '@jalsa_dhaba',
    facebook: 'https://www.facebook.com/jalsadhaba',
  },
}

/**
 * Generate a WhatsApp booking URL with pre-filled message
 */
export function buildWhatsAppBookingURL({ table, section, guests, date, time, name, phone, offer }) {
  let message = `Hello Jalsa Dhaba! 👋\n\n`;
  if (offer) {
    message += `🎉 I want to book the *Friday Grand Buffet @ ₹499*!\n\n`;
    message += `👥 Guests: ${guests}\n`;
    message += `📍 Preferred Zone: ${section || 'Family / Friends'}\n`;
    message += `📅 Date: ${date || 'Upcoming Friday'}\n`;
    message += `🕐 Time: ${time || '8:00 PM - 1:00 AM'}\n`;
    message += `👤 Name: ${name}\n`;
    message += `📞 Phone: ${phone}\n\n`;
    message += `Please confirm my Friday Buffet reservation. Thank you!`;
  } else {
    message += `I'd like to request a table reservation.\n\n`;
    message += `🪑 Table: ${table || 'Standard'}\n`;
    message += `📍 Section: ${section || 'Main'}\n`;
    message += `👥 Guests: ${guests}\n`;
    message += `📅 Date: ${date}\n`;
    message += `🕐 Time: ${time}\n`;
    message += `👤 Name: ${name}\n`;
    message += `📞 Phone: ${phone}\n\n`;
    message += `Please let me know if this table and time are available. Thank you!`;
  }

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

export function getReviewURL() {
  return BUSINESS.reviewUrl
}

