# ykmhblty

> A modern digital experience engineered with **TypeScript**, **Next.js 14**, **Framer Motion**, and **Exclusive Google Fonts**, pre-configured for instant **Vercel Edge Deployment**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ankurmoran-aero/ykmhblty)

---

## 🌟 Highlights

- **Smooth Transitions & Physics**: Powered by `framer-motion` GPU-accelerated spring dynamics, continuous 3D tilt tracking, and reactive layout animations.
- **Exclusive Typography System**:
  - **Syne** (`font-heading`): High-impact, artistic display geometry for headlines and branding.
  - **Plus Jakarta Sans** (`font-body`): Ultra-crisp geometric sans engineered for high readability.
  - **JetBrains Mono** (`font-mono`): Technical precision for badges, metrics, and code snippets.
  - *Loaded with zero cumulative layout shift (CLS) via `next/font/google`.*
- **Formatted Layout & Glassmorphism**: Calibrated backdrop filters, subtle multi-stop mesh gradients, glowing highlights, and responsive Bento grids.
- **Vercel Deployment Optimized**:
  - Pre-configured `vercel.json` with security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
  - Immutable static asset caching (`Cache-Control: public, max-age=31536000, immutable`).
  - Edge network ready.
- **Strict TypeScript Architecture**: 100% type-checked, clean modular code structure.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/ankurmoran-aero/ykmhblty.git
cd ykmhblty
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel

### Option 1: 1-Click Deploy
Click the button above or visit:
[https://vercel.com/new/clone?repository-url=https://github.com/ankurmoran-aero/ykmhblty](https://vercel.com/new/clone?repository-url=https://github.com/ankurmoran-aero/ykmhblty)

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy directly to production
vercel --prod
```

---

## 📁 Project Structure

```
ykmhblty/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind styling, custom scrollbars & glassmorphism
│   │   ├── layout.tsx      # Font definitions (Syne, Plus Jakarta Sans, JetBrains Mono) & metadata
│   │   └── page.tsx        # Unified page assembling sections
│   ├── components/
│   │   ├── Navbar.tsx      # Dynamic glassmorphic floating header
│   │   ├── Hero.tsx        # Animated headline, dynamic badges & confetti celebration
│   │   ├── BentoGrid.tsx   # Formatted bento layout & interactive font previewer
│   │   ├── InteractivePlayground.tsx # Real-time spring physics & 3D tilt lab
│   │   ├── VercelShowcase.tsx # Vercel deployment architecture & CLI terminal
│   │   └── Footer.tsx      # Clean branded footer
│   └── lib/
│       └── utils.ts        # Tailwind class merge helper (cn)
├── .gitignore
├── next.config.mjs         # Next.js compiler settings
├── package.json            # Scripts & dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Custom fonts, colors, animations & gradients
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel Edge caching & security headers
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **TypeScript** | Strict type safety and maintainable developer experience |
| **Next.js 14 (App Router)** | Zero-config edge deployment, server & client components |
| **Framer Motion 11** | Spring physics, tactile transitions, 3D tilt |
| **Tailwind CSS** | Utility-first responsive styling and custom color tokens |
| **next/font/google** | Google Fonts optimization with zero cumulative layout shift |
| **Lucide React** | Crisp modern SVG icons |
| **Canvas Confetti** | Micro-interaction celebrations |

---

## 📄 License

MIT © [Ankur Moran](https://github.com/ankurmoran-aero)
