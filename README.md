# Plenty by Sandra

**Traditional Rwandan Bridal Wear – Kigali**

A luxury fashion website for Plenty by Sandra, a Made in Rwanda brand specializing in Umushanana (traditional Rwandan bridal and ceremonial attire).

![Plenty by Sandra](https://images.unsplash.com/photo-1549488497-650a621eb54a?w=1200&q=80)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** and npm
- A modern web browser

### Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use nvm: `nvm install 18`

2. **Install dependencies**
   ```bash
   cd plenty-by-sandra
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
plenty-by-sandra/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── collections/
│   │   └── page.tsx              # Collections grid page
│   ├── about/
│   │   └── page.tsx              # Brand story page
│   ├── custom-orders/
│   │   └── page.tsx              # Custom order process + form
│   └── contact/
│       └── page.tsx              # Contact info + form + map
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx            # Primary button variants
│   │   ├── Section.tsx           # Full-screen section wrapper
│   │   └── LoadingScreen.tsx     # Brand loading animation
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Sticky navigation
│   │   ├── Footer.tsx            # Footer with newsletter
│   │   └── CustomCursor.tsx      # Gold dot cursor (desktop)
│   ├── home/                     # Home page sections
│   │   ├── Hero.tsx              # Full-screen hero
│   │   ├── BrandIntro.tsx        # Brand story intro
│   │   ├── CollectionStrip.tsx   # Featured categories
│   │   ├── SandraTouch.tsx       # Craftsmanship statement
│   │   ├── InstagramGrid.tsx     # Instagram feed teaser
│   │   └── Testimonials.tsx      # Client testimonials
│   ├── collections/              # Collections page components
│   │   ├── CollectionGrid.tsx    # Product grid
│   │   ├── FilterTabs.tsx        # Category filters
│   │   └── ProductCard.tsx       # Product card with hover
│   └── shared/                   # Shared components
│       ├── WhatsAppButton.tsx    # Floating WhatsApp CTA
│       └── ScrollReveal.tsx      # Scroll animation wrapper
├── public/
│   └── images/                   # Static images
├── lib/
│   └── utils.ts                  # Helper functions
├── package.json
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
└── next.config.mjs               # Next.js configuration
```

---

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Plum | `#1A0A12` | Primary dark background |
| Ivory | `#FAF5EE` | Light sections background |
| Gold | `#C9A84C` | Accents, CTAs, highlights |
| Rose | `#D4A5A5` | Secondary warm accent |

### Typography

- **Display/Headings:** Cormorant Garamond (Google Fonts)
- **Body:** DM Sans (Google Fonts)

### Key Design Features

- Apple-inspired scroll storytelling
- Full-screen cinematic sections
- Sticky scroll-triggered animations
- Dark/light section alternation
- Custom gold dot cursor (desktop only)
- Grain/noise texture overlay on dark sections

---

## 🖼️ Replacing Placeholder Images

The site currently uses Unsplash placeholder images. To add real photos:

### Option 1: Replace in Component Files

1. Add your images to `public/images/`
2. Update the `src` attributes in component files:

```tsx
// Before (placeholder)
<img src="https://images.unsplash.com/photo-..." alt="..." />

// After (local image)
<img src="/images/your-photo.jpg" alt="..." />
```

### Option 2: Using Next.js Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/your-photo.jpg"
  alt="Description"
  width={800}
  height={600}
  className="object-cover"
/>
```

### Recommended Image Locations

| Component | File | Current Image Source |
|-----------|------|---------------------|
| Hero background | `components/home/Hero.tsx` | Gradient (no image) |
| Collection Strip | `components/home/CollectionStrip.tsx` | Lines 12-27 |
| Sandra Touch | `components/home/SandraTouch.tsx` | Line 52 |
| Instagram Grid | `components/home/InstagramGrid.tsx` | Lines 8-14 |
| About Portrait | `app/about/page.tsx` | Line 56 |
| Collection Grid | `components/collections/CollectionGrid.tsx` | Lines 14-53 |

### Image Recommendations

- **Hero/Section backgrounds:** 1920x1080px minimum, compressed WebP
- **Product cards:** 800x1067px (3:4 aspect ratio)
- **About portrait:** 800x1000px (4:5 aspect ratio)
- **Instagram tiles:** 600x600px (1:1 aspect ratio)

---

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (no additional configuration needed)

### Environment Variables

No environment variables required for basic deployment. Add as needed for:
- Analytics
- Contact form backend
- Newsletter service

---

## 📱 Pages

1. **Home** (`/`) - Hero, brand intro, featured collections, testimonials
2. **Collections** (`/collections`) - Filterable product grid
3. **About** (`/about`) - Brand story, Umushanana cultural context
4. **Custom Orders** (`/custom-orders`) - Process steps, inquiry form
5. **Contact** (`/contact`) - Contact info, form, Google Maps embed

---

## ✨ Key Features

- ✅ Fully responsive (mobile-first)
- ✅ Apple-style scroll animations with Framer Motion
- ✅ Custom cursor (desktop)
- ✅ Loading screen with brand animation
- ✅ Sticky navigation with scroll state
- ✅ Floating WhatsApp "Book a Fitting" button
- ✅ Newsletter signup in footer
- ✅ SEO-ready with meta tags
- ✅ Google Fonts (Cormorant Garamond + DM Sans)
- ✅ Grain texture overlay on dark sections

---

## 📞 Contact

- **Instagram:** [@plentyby_sandra](https://instagram.com/plentyby_sandra)
- **Phone:** +250 784 477 503
- **Location:** Kigali, Rwanda

---

## 📄 License

This project is proprietary. All rights reserved to Plenty by Sandra.

---

Built with ❤️ in Kigali using Next.js 14, Tailwind CSS, and Framer Motion.
