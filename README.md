# 👑 Nawab Dhaba — Royal Highway Dining

> **Where the road ends, the feast begins.**  
> A luxury highway dining web application for **Nawab Dhaba**, Nashik Road, Bhiwandi. Built with an editorial magazine-inspired aesthetic featuring rich charcoal embers, gold highlights, authentic charcoal tandoori feasts, real-time table booking via WhatsApp, and an interactive menu.

---

## 📸 Preview & Aesthetic

- **Design Tone**: Editorial luxury highway dhaba & authentic royal Mughal hospitality.
- **Color Palette**:
  - **Ink (`#12100e`)**: Deep rich dark foundation
  - **Cream (`#f5eee2`)**: High-contrast primary serif typography
  - **Paper (`#e9dfd0`)**: Soft neutral accents
  - **Ember (`#e25822`)**: Fiery charcoal call-to-actions and accents
  - **Gold (`#ffb800`)**: Royal highlights, badges, and marquee banner
- **Typography**: `Playfair Display` (high-contrast display serif) + `DM Sans` (clean sans-serif body).

---

## ✨ Features & Architecture

### 1. 🌟 Hero Section
- Full-viewport high-contrast visual display with crossfading ambient photography.
- Directional vignette gradient ensuring high contrast and readability.
- Stylized **ND** monogram badge cluster with live slide-synced indicator bars.
- Smart navbar that hides on downward scroll and seamlessly reveals on upward scroll.

### 2. 📢 Live Gold Marquee Ticker
- Continuous looping highway highlights banner (`Charcoal Tandoor 🔥`, `Open Daily 11 AM – 1 AM`, `Pomfret Tandoori`, etc.).

### 3. 📖 Editorial Story & Royal Specialties
- *"A table is never just a table."* — storytelling layout with key milestone statistics.
- *"Meet the main event."* — interactive dish showcase with detailed spices, prep times, and descriptions.
- *"Start with one. End with a feast."* — high-energy ember CTA section.

### 4. 🍽️ Dedicated Menu Experience (`/menu`)
- *"Follow your appetite."* image-first menu explorer.
- Filter by category (*Tandoor & Kebabs, Chicken Specials, Mutton & Meat, Seafood, Biryani & Rice, Desserts & Shakes*).
- Dietary filters (*Pure Veg / Non-Veg*) and live real-time instant search.
- Interactive modal popover with portion sizing, spice scale, and direct order integration.

### 5. 🪑 Seating Ambience ("Three ways to sit down")
- Interactive zone switcher showcasing:
  - **Zone 01 — Family Enclosures**: Private, cozy wooden cabins with child-friendly seating.
  - **Zone 02 — Charpai & Chai Garden**: Outdoor woven cot seating with hot cutting chai under fairy lights.
  - **Zone 03 — Royal AC Dining Hall**: Opulent Mughal-style banquet hall with velvet booth seating.

### 6. 📅 Interactive Table Booking (`/book`)
- Visual floor map with selectable table numbers across all zones.
- Instant pre-filled reservation builder connected directly to **WhatsApp Host Dispatch**.

### 7. 🖼️ Visual Gallery (`/gallery`)
- Filterable highway dhaba photography and moments with a full-screen interactive lightbox.

### 8. 📍 Location & Contact ("Find us hungry")
- High-visibility gold section with integrated live Google Maps embed, direct call triggers, and driving directions.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: Pure Vanilla CSS Design System with custom CSS variables (Zero Tailwind bloat)
- **Icons**: Lucide React
- **Integration**: WhatsApp API Direct Dispatch

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <YOUR_REPO_URL>
   cd Dhabba
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The compiled bundle will be output to the `dist/` directory.

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── ambience/       # Seating zone images (family cabin, chai charpai, AC hall)
│       ├── dishes/         # Dish & food photography
│       ├── gallery/        # Lightbox gallery photography
│       └── hero/           # Full-screen hero photography
├── src/
│   ├── components/
│   │   ├── AmbienceSection.jsx
│   │   ├── FeastCTA.jsx
│   │   ├── FloatingActionBar.jsx
│   │   ├── Footer.jsx
│   │   ├── GallerySection.jsx
│   │   ├── GoodFoodSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MarqueeTicker.jsx
│   │   ├── MenuSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── SignatureCravings.jsx
│   │   ├── StorySection.jsx
│   │   ├── TableBookingSection.jsx
│   │   └── VisitSection.jsx
│   ├── data/
│   │   ├── business.js     # Centralized contact, WhatsApp & address configuration
│   │   ├── gallery.js      # Gallery category & image items
│   │   ├── menu.js         # Dishes, categories, spice levels, dietary tags
│   │   └── tables.js       # Floor map, zones & table layout
│   ├── pages/
│   │   ├── BookTable/
│   │   ├── Gallery/
│   │   ├── Home/
│   │   └── Menu/
│   ├── styles/
│   │   └── index.css       # Core editorial design system & tokens
│   ├── App.jsx             # Main Router layout
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 📜 License

Licensed under the MIT License. Copyright © 2026 NAWAB DHABA LLP. All rights reserved.
