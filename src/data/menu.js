/**
 * Nawab Dhaba — Menu Data
 * Structured for easy expansion. No prices per PRP.
 */

export const MENU_CATEGORIES = [
  { id: 'popular', name: 'Popular', subtitle: 'What Everyone\'s Craving', icon: '🔥' },
  { id: 'tandoor', name: 'Tandoor', subtitle: 'From the Fire', icon: '🔥' },
  { id: 'chicken', name: 'Chicken & Nawabi Specials', subtitle: 'Bold. Rich. Unforgettable.', icon: '🍗' },
  { id: 'seafood', name: 'Seafood', subtitle: 'Fresh Catch', icon: '🐟' },
  { id: 'rice-mains', name: 'Rice & Mains', subtitle: 'The Heart of the Feast', icon: '🍚' },
  { id: 'starters', name: 'Starters & Sides', subtitle: 'The Opening Act', icon: '🥗' },
  { id: 'desserts', name: 'Desserts', subtitle: 'The Sweet Ending', icon: '🍨' },
]

export const DISHES = [
  // Popular
  { id: 'pomfret-tandoori', name: 'Pomfret Tandoori', category: 'popular', description: 'Whole pomfret marinated in aromatic spices, charred to perfection in the tandoor.', tags: ['signature', 'non-veg', 'tandoor'], image: '/images/dishes/pomfret-tandoori.jpg' },
  { id: 'sizzler-rice', name: 'Sizzler Rice', category: 'popular', description: 'Steaming rice served on a sizzling hot plate with rich gravies and sides.', tags: ['signature', 'non-veg'], image: '/images/dishes/sizzler-rice.jpg' },
  { id: 'caesar-salad', name: 'Caesar Salad', category: 'popular', description: 'Crisp romaine, shaved parmesan, crunchy croutons, and house-made dressing.', tags: ['veg', 'fresh'], image: '/images/dishes/caesar-salad.jpg' },
  { id: 'bomil-fish-fry', name: 'Bomil Fish Fry', category: 'popular', description: 'Bombay duck coated in spiced semolina, deep-fried until golden and crispy.', tags: ['signature', 'non-veg', 'seafood'], image: '/images/dishes/bomil-fish-fry.jpg' },
  { id: 'chicken-kadhai', name: 'Chicken Kadhai', category: 'popular', description: 'Tender chicken tossed in a thick, spiced tomato gravy with bell peppers.', tags: ['non-veg', 'spicy'], image: '/images/dishes/chicken-kadhai.jpg' },
  { id: 'tandoor-special', name: 'Tandoor Special', category: 'popular', description: 'A curated platter of our finest tandoor-grilled meats and breads.', tags: ['signature', 'non-veg', 'tandoor'], image: '/images/dishes/tandoor-special.jpg' },

  // Tandoor
  { id: 'raan-tandoori', name: 'Raan Tandoori', category: 'tandoor', description: 'Whole leg of lamb, slow-marinated for 24 hours, roasted in the tandoor until fork-tender.', tags: ['signature', 'non-veg', 'premium'], image: '/images/dishes/raan-tandoori.jpg' },
  { id: 'maratha-kabab', name: 'Maratha Kabab', category: 'tandoor', description: 'Spiced minced meat kebabs with a Maharashtrian twist, chargrilled on skewers.', tags: ['signature', 'non-veg'], image: '/images/dishes/maratha-kabab.jpg' },

  // Chicken & Nawabi Specials
  { id: 'nawab-special-chicken', name: 'Nawab Special Chicken', category: 'chicken', description: 'Our signature chicken preparation — a house secret recipe you won\'t find anywhere else.', tags: ['signature', 'non-veg', 'house-special'], image: '/images/dishes/nawab-special-chicken.jpg' },
  { id: 'chicken-banjara', name: 'Chicken Banjara', category: 'chicken', description: 'Rustic, smoky chicken cooked in a robust gravy with earthy spices.', tags: ['non-veg', 'spicy'], image: '/images/dishes/chicken-banjara.jpg' },
  { id: 'chicken-garlic', name: 'Chicken Garlic', category: 'chicken', description: 'Succulent chicken pieces in a bold garlic-infused sauce.', tags: ['non-veg'], image: '/images/dishes/chicken-garlic.jpg' },
  { id: 'double-ikka', name: 'Double Ikka', category: 'chicken', description: 'Double the spice, double the flavor — a fiery chicken preparation for the bold.', tags: ['non-veg', 'spicy'], image: '/images/dishes/double-ikka.jpg' },

  // Seafood
  { id: 'chana-koliwada', name: 'Chana Koliwada', category: 'seafood', description: 'Crispy fried prawns tossed with chickpeas in a fiery Koliwada-style masala.', tags: ['non-veg', 'spicy', 'seafood'], image: '/images/dishes/chana-koliwada.jpg' },

  // Rice & Mains
  { id: 'mutton-special-rice', name: 'Mutton Special Rice', category: 'rice-mains', description: 'Fragrant rice layered with slow-cooked spiced mutton — rich and aromatic.', tags: ['signature', 'non-veg'], image: '/images/dishes/mutton-special-rice.jpg' },

  // Starters & Sides
  { id: 'masala-papad', name: 'Masala Papad', category: 'starters', description: 'Crispy papad topped with onions, tomatoes, coriander, and tangy masala.', tags: ['veg', 'starter'], image: '/images/dishes/masala-papad.jpg' },
  { id: 'chana-garlic-fry', name: 'Chana Garlic Fry', category: 'starters', description: 'Crispy fried chickpeas tossed with garlic, green chillies, and fresh curry leaves.', tags: ['veg', 'starter'], image: '/images/dishes/chana-garlic-fry.jpg' },
  { id: 'chana-lassan-papad', name: 'Chana Lassan & Roasted Papad', category: 'starters', description: 'Garlic-spiced chana served alongside perfectly roasted papad.', tags: ['veg', 'starter'], image: '/images/dishes/chana-lassan-papad.jpg' },

  // Desserts
  { id: 'gadbad-special-sweet', name: 'Gadbad Special Sweet', category: 'desserts', description: 'A colorful layered dessert with ice cream, jelly, nuts, and fruit — pure chaos in a glass.', tags: ['signature', 'veg', 'sweet'], image: '/images/dishes/gadbad-special-sweet.jpg' },
  { id: 'special-gadbad-icecream', name: 'Special Gadbad Ice Cream', category: 'desserts', description: 'Our signature take on the classic Gadbad — towering, indulgent, unforgettable.', tags: ['signature', 'veg', 'sweet'], image: '/images/dishes/special-gadbad-icecream.jpg' },
  { id: 'sitafal-cream', name: 'Sitafal Cream', category: 'desserts', description: 'Fresh custard apple blended into a luscious, creamy seasonal dessert.', tags: ['veg', 'sweet', 'seasonal'], image: '/images/dishes/sitafal-cream.jpg' },
]

export const SIGNATURE_DISHES = DISHES.filter(d => d.tags.includes('signature'))

export function getDishesByCategory(categoryId) {
  return DISHES.filter(d => d.category === categoryId)
}
