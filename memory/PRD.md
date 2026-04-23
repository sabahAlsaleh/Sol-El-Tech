# Sol & El Tech — PRD

## Problem Statement (original)
Create a modern, professional, conversion-focused single-page website for "Sol & El Tech", a Stockholm-based electrical services company. All content in Swedish. Target audience: homeowners, housing associations (BRF), and small businesses. Sections: Hero, 12 services, About, 4-step Process, Why Choose Us, Contact form, Footer.

## User Choices
- Contact form: save submissions to MongoDB (no email provider)
- Contact info: placeholder values (08-123 45 67, info@solochel.se, Stockholm)
- Images: professional stock images (Unsplash/Pexels)
- Design: clean light minimalist Nordic Scandinavian
- Admin panel: not needed

## Architecture
- Backend: FastAPI + Motor (MongoDB async)
- Frontend: React 19 + Tailwind + shadcn/ui + lucide-react
- Typography: Outfit (headings) + Manrope (body) via Google Fonts
- Palette: #FAFAFA bg, #0F172A primary, #F59E0B amber accent
- Scroll-reveal via IntersectionObserver (`.reveal` → `.is-visible`)

## What's Implemented (2026-02-23)
- Sticky glassmorphic navbar with mobile hamburger
- Hero section with headline, subheadline, dual CTAs, floating badge card
- Services grid (12 cards with lucide icons)
- About section with stats cards and promise badge
- Dark Process section with 4 numbered steps
- Why Choose Us with 5 USPs
- Contact form with name/email/phone/service-select/message → POST /api/contact
- Footer with quicklinks, contact info, popular services
- Swedish copy throughout, SEO meta tags, lang="sv"
- Scroll-reveal animations, hover micro-interactions

## Backend API
- GET  /api/             — health
- POST /api/contact      — save submission (returns 201)
- GET  /api/contact      — list submissions (excl. _id)
- POST /api/status, GET /api/status — template endpoints

## MongoDB Collections
- contact_submissions (id, name, email, phone, service, message, created_at ISO)
- status_checks

## Test Results
- Backend: 9/9 pytest cases pass
- Frontend: all flows verified (form submit, validation, navbar, mobile menu)

## Backlog / Next Items
- P1: Replace placeholder phone/email/address with real company info
- P1: Optional email notifications (Resend/SendGrid) when a new form is submitted
- P2: Simple admin page (/admin) to view submissions with basic auth
- P2: Customer testimonials/reviews section + Google reviews embed
- P2: Blog or insights section for SEO (energy tips, bidrag guide)
- P2: Cookie consent banner + privacy policy page (GDPR)
- P3: Swedish structured data (LocalBusiness schema.org) for rich results
- P3: Online booking/calendar (Cal.com or custom)
