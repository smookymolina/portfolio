# Portfolio — Jair Molina Arce

**Embedded Systems & Advanced Technology Engineer**

Next.js 14 + Tailwind CSS + TypeScript  
Dark industrial design — Anduril / SpaceX aesthetic

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Adding Your Photos & Videos

Place your media files in the following paths under `/public/`:

### Profile
```
public/images/profile/jair-molina.jpg       ← Your professional photo
```

### Projects
```
public/images/projects/banco-pruebas/
  hero.jpg          ← Main cover image
  01.jpg            ← Gallery photos
  02.jpg
  03.jpg

public/images/projects/telemetria-mqtt/
  hero.jpg
  01.jpg
  dashboard.png     ← Dashboard screenshot

public/images/projects/pid-stm32/
  hero.jpg
  response-curve.png
  hardware.jpg

public/images/projects/pcb-mill/
  hero.jpg          ← The modified machine
  machine.jpg
  pcb-result.jpg
  milling-video-thumb.jpg

public/images/projects/smartcity-iot/
  hero.jpg
  dashboard.png
  nodes.jpg

public/images/projects/jobhunter/
  hero.jpg
  dashboard.png
  pipeline.png

public/images/projects/iot-platform/
  hero.jpg
  dashboard.png
  api-docs.png

public/images/projects/data-pipeline/
  hero.jpg

public/images/projects/thermal-simulator/
  hero.jpg

public/images/projects/dynamic-modeling/
  hero.jpg

public/images/projects/vr-training/
  hero.jpg
  tv-azteca.jpg     ← Screenshot of TV Azteca broadcast
  simulation.jpg

public/images/projects/stm32-firmware/
  hero.jpg
```

### Research
```
public/images/research/
  iac-milan.jpg         ← Photo from IAC 2024 Milan presentation
  ml-cyberdefense.jpg   ← Book cover or concept image
  revista-espacio.jpg   ← Publication screenshot

public/images/og/
  og-image.jpg          ← Open Graph image (1200×630)
```

### CV
```
public/cv/
  CV_Jair_Molina_2026.pdf   ← Your PDF resume
```

---

## Deployment (Vercel — Free)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Add custom domain
# vercel.com → project settings → Domains
# → add jairmolina.engineering or jairmolina.dev
```

---

## Site Structure

```
/               → Hero landing page
/about          → Full profile, skills, timeline
/highlights     → Engineering Highlights (8 key differentiators)
/projects       → All projects, filterable by category
/projects/[id]  → Individual project case study
/research       → Publications, conferences, teaching
/contact        → Contact info, availability, CV download
```

---

## Customization

- **Colors:** `tailwind.config.ts` → theme.extend.colors
- **Project data:** `lib/projects.ts`
- **Research data:** `lib/research.ts`
- **CV file:** replace `public/cv/CV_Jair_Molina_2026.pdf`

---

Built June 2026 · CO.DE Aerospace
