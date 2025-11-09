# Nexora Intelligence Engine - Marketing Site

A clean, modern, white/light Next.js marketing site built with Tailwind CSS and Framer Motion.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link/intro
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

## Structure

### Components
- `components/Nav.tsx` - Navigation with anchor links and Calendly CTA
- `components/Hero.tsx` - Hero section with dashboard preview
- `components/ProductStrip.tsx` - Three product tiles
- `components/BriefShowcase.tsx` - Action briefs showcase
- `components/LiveSignals.tsx` - Live signals ticker
- `components/Capabilities.tsx` - Capabilities grid
- `components/HowItWorks.tsx` - 3-step process
- `components/Workflow.tsx` - Workflow visualization
- `components/CTA.tsx` - Primary call-to-action
- `components/Footer.tsx` - Minimal footer
- `components/Motion.tsx` - Framer Motion helpers
- `components/Ui.tsx` - Shared UI components (Button, Card, Badge)

### Data
- `lib/briefs.ts` - Sample brief data
- `app/api/preview-briefs/route.ts` - API route for briefs

### Styling
- Light theme with white background
- Custom color palette (accent: #0ea5e9, accent-2: #7c3aed)
- Glass card effects with subtle shadows
- Smooth animations with Framer Motion

## Features

- ✅ Light, clean design
- ✅ Calendly integration via environment variable
- ✅ Smooth scroll navigation
- ✅ Responsive design
- ✅ Accessibility-friendly
- ✅ Performance-optimized
- ✅ No external social links
- ✅ YC-ready, investor-focused

## Calendly Integration

All "Get started" buttons use `NEXT_PUBLIC_CALENDLY_URL` environment variable. If not set, buttons will be disabled with a tooltip.

## Sections

1. **Hero** - Main headline with CTA and dashboard preview
2. **Product Strip** - Three product tiles (Flash Signals, Action Briefs, Trends)
3. **Brief Showcase** - Three example action briefs
4. **Live Signals** - Rotating signal ticker
5. **Capabilities** - 6 capability cards
6. **How It Works** - 3-step process diagram
7. **Workflow** - Mini workflow visualization
8. **CTA** - Primary call-to-action section

## Customization

- Update colors in `tailwind.config.ts` and `app/globals.css`
- Modify brief data in `lib/briefs.ts`
- Update copy in component files
- Replace brand mark SVG in `public/brand-mark.svg`

