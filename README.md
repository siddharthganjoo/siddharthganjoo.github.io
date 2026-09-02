# Siddharth Ganjoo — Personal Portfolio Website

[![GitHub Pages Deployment](https://github.com/siddharthganjoo/website/actions/workflows/static.yml/badge.svg)](https://github.com/siddharthganjoo/website/actions/workflows/static.yml)
[![Live Portfolio](https://img.shields.io/badge/Live-Portfolio-blue?style=flat-square)](https://siddharthganjoo.github.io/website/)

Modern, high-performance personal portfolio website for **Siddharth Ganjoo**, Machine Learning Engineer & Data Scientist.

- **Current Roles**: 
  - Machine Learning Engineer @ **TU/e Supercomputing Center** (*Spike AI*)
  - Junior Data Scientist @ **Vencomatic Group**
  - Co-Founder & CTO @ **Loopit.ai**
- **Education**: MSc in Computer Science & Engineering, Eindhoven University of Technology (TU/e)
- **Location**: Eindhoven, Netherlands

---

## Features

- **Apple / Linear-Inspired Aesthetics**: Clean typography, glassmorphism navigation, balanced spacing, and modern card styling.
- **Dark & Light Mode**: Seamless theme switching with automatic OS preference detection and `localStorage` persistence.
- **Career Timeline**: Interactive vertical experience timeline featuring authentic company & university emblems.
- **High-Impact Projects**: Showcase of real-world ML systems, research publications, and startup platforms with quantifiable metrics.
- **Media Lightbox**: Full-resolution image preview modal for awards, summits, and press features.
- **Copy Email Toast**: 1-click clipboard copy with animated visual confirmation.
- **Full SEO & Social Sharing**: Complete Open Graph, Twitter Cards, and canonical metadata.
- **Zero Heavy Frameworks**: Pure semantic HTML5, modern vanilla CSS, and lightweight vanilla JavaScript for instant sub-second load times.

---

## Project Structure

```bash
├── index.html                  # Main website markup with SEO metadata
├── css/
│   └── style.css               # Complete responsive design system & theme variables
├── js/
│   └── script.js               # Theme switcher, scroll-spy, lightbox & animations
├── assets/
│   ├── pp.JPG                  # Professional headshot
│   ├── CV_SiddharthGanjoo.pdf  # Downloadable resume
│   ├── favicon/                # Cross-platform favicons & webmanifest
│   ├── logos/                  # Company & university logos (TU/e, Vencomatic, WM, etc.)
│   ├── news/                   # Event photos, award ceremonies & press coverage
│   └── recommendations/        # Photos of academic & industry recommenders
└── .github/
    └── workflows/
        └── static.yml          # GitHub Actions deployment to GitHub Pages
```

---

## Domain Configuration (GitHub Pages)

### Option 1: Clean Root Domain (`https://siddharthganjoo.github.io/`)
By default, GitHub Pages serves repository pages at `https://<username>.github.io/<repo-name>/`.
To eliminate the `/website/` suffix and host your site directly at **`https://siddharthganjoo.github.io/`**:
1. Open this repository on GitHub.
2. Go to **Settings** > General > **Repository name**.
3. Rename the repository to: **`siddharthganjoo.github.io`** and click **Rename**.
4. GitHub Pages will automatically update your live site URL to the clean root domain!

### Option 2: Custom Domain (e.g., `siddharthganjoo.com`)
If you own a custom domain:
1. Add a file named `CNAME` in the repository root containing your domain (e.g. `siddharthganjoo.com`).
2. Configure your DNS provider with an `ALIAS` / `ANAME` or `A` records pointing to GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

---

## Local Development

To run this site locally, open `index.html` in any browser, or run a local static server:

```bash
# Python 3
python3 -m http.server 8000

# Or with Node.js
npx serve .
```

Then visit `http://localhost:8000`.

---

© 2026 Siddharth Ganjoo. All rights reserved.
