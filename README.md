# Siddharth Ganjoo — Portfolio

> Machine Learning Engineer & Data Scientist portfolio built with **[Astro.js](https://astro.build/)**, TypeScript, and modern CSS.

[![Astro](https://img.shields.io/badge/Astro-5.0+-BC52EE.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Deploy to GitHub Pages](https://github.com/siddharthganjoo/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/siddharthganjoo/website/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17.1` or higher (recommended: Node 20+)
- npm, pnpm, or bun

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open browser at http://localhost:4321
```

### Production Build

```bash
# Compile optimized static output to dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, PDFs, SVGs)
│   ├── assets/
│   │   ├── pp.JPG          # Profile photo
│   │   ├── CV_*.pdf        # Resume
│   │   ├── logos/          # Company and institution logos
│   │   ├── news/           # Event and conference photos
│   │   └── project/        # Custom project visual SVGs
│   └── robots.txt
├── src/
│   ├── components/         # Modular Astro UI components
│   │   ├── Nav.astro       # Sticky navigation, mobile menu & theme toggle
│   │   ├── Hero.astro      # Centered hero with live status & metrics
│   │   ├── About.astro     # Bio, education & tech skills
│   │   ├── Timeline.astro  # Unified chronological timeline with category filters
│   │   ├── Projects.astro  # Featured & selected project showcase
│   │   ├── Recommendations.astro # Testimonials from professors & collaborators
│   │   ├── Contact.astro   # Contact CTAs and copy-to-clipboard button
│   │   ├── Footer.astro    # Footer copyright
│   │   ├── Lightbox.astro  # Image modal for conference & event photos
│   │   └── Toast.astro     # Feedback toast for email copy
│   ├── data/               # Type-safe structured content files
│   │   ├── site.ts         # Global site metadata & navigation
│   │   ├── timeline.ts     # Unified career & news timeline items
│   │   ├── projects.ts     # Project details & preview graphics
│   │   └── recommendations.ts # Testimonials
│   ├── layouts/
│   │   └── Layout.astro    # Master HTML shell & SEO meta tags
│   ├── pages/
│   │   └── index.astro     # Main portfolio page
│   └── styles/
│       └── global.css      # Compact, neat CSS design system
├── astro.config.mjs        # Astro configuration
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🚢 Continuous Deployment (GitHub Pages)

Whenever you push commits to the `main` branch, the [GitHub Actions workflow](.github/workflows/deploy.yml) automatically compiles the site and publishes it to GitHub Pages.

To configure GitHub Pages repository settings:
1. Go to **Settings** > **Pages** in your GitHub repository.
2. Under **Build and deployment > Source**, choose **GitHub Actions**.

---

## 📄 License
MIT © 2026 Siddharth Ganjoo.
