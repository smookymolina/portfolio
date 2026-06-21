# Portfolio — Jair Molina Arce

**Embedded Systems & Advanced Technology Engineer**  
Mechanical Engineer (IPN) | IoT & Embedded Systems | Research & Development

Professional engineering portfolio built with Next.js 14 + Tailwind CSS. Showcases 14+ projects across embedded systems, firmware, IoT, aerospace, VR/AR, and AI — plus 3 research publications and 4 national TV media appearances.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 App Router (SSG + Edge) |
| Styling | Tailwind CSS v3 with CSS custom property tokens |
| Language | TypeScript |
| Fonts | next/font/google (Inter + JetBrains Mono) |
| i18n | Client-side React Context (EN/ES toggle, localStorage) |
| OG Image | Edge `ImageResponse` — dynamic 1200×630 |
| Deploy | Docker (standalone output) |

## Features

- **Bilingual (EN/ES)** — language toggle in navbar, persisted in localStorage
- **Dark / Light mode** — industrial dark default, full light mode support
- **Mobile-first** — responsive from 320px up, mobile nav with Escape key + body lock
- **Performance** — `next/font`, image optimization (AVIF/WebP), no canvas animations
- **Security headers** — X-Frame-Options, X-XSS-Protection, X-Content-Type-Options
- **Focus-visible accessibility** — all interactive elements keyboard-accessible

## Project Structure

```
app/
├── page.tsx              # Home — hero with profile photo, CV-based profile
├── about/                # Profile, bio, skills, timeline
├── highlights/           # 9 engineering highlights
├── projects/             # Project grid + [slug] detail pages
├── research/             # Publications, conferences, media, teaching
├── contact/              # Contact form + channels
└── opengraph-image.tsx   # Dynamic OG image (Edge runtime)

lib/
├── translations.ts       # EN/ES translation strings (all UI text)
├── lang.tsx              # LangProvider + useLang() hook
├── projects.ts           # 14 projects data
└── research.ts           # Publications, conferences (media + academic), teaching

components/
├── Navbar.tsx            # Desktop + mobile nav, EN/ES toggle, theme toggle
├── Footer.tsx            # Links, social, identifiers
├── ProjectCard.tsx       # Card used in projects grid
├── ProjectDetail.tsx     # Client component for [slug] detail (bypasses SSR boundary)
└── FallbackImage.tsx     # Graceful image error handling
```

## Running Locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
```

## Docker

```bash
# Build and run
docker compose up --build

# Or manually
docker build -t jair-portfolio .
docker run -p 3000:3000 jair-portfolio
```

The image uses Next.js standalone output for minimal size (~100MB runtime vs ~800MB full node_modules).

## Engineering Profile

- **MSc. in Advanced Technologies** — IPN (2024–present), control & instrumentation
- **B.Eng. Mechanical Engineering** — IPN (2017–2023)
- **IAC 2024** — Co-author & in-person speaker, Milan, Italy
- **3 Publications** — IAC conference, Springer book chapter, Revista Hacia el Espacio
- **4 National TV appearances** — TV Azteca, ADN40, Canal Once (×2)
- **CVU CONACYT**: 1340773 | **ORCID**: 0009-0009-6732-8100

## To Add Your Photo

Place your photo at:
```
public/images/profile/jair-molina.jpeg
```
The site automatically displays it on the home hero and about page. Currently shows a styled placeholder.
