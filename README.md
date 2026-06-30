# Boho Digital

Astro-based marketing site for `bohodigitalservices.com`, rebuilt on top of AstroWind as a clean reset from the earlier custom implementation.

## Brand

- `Boho Digital`
- `Bohemian Digital Marketing & SEO`
- `Organic growth, engineered beautifully.`

## Current routes

- `/`
- `/services/`
- `/services/provider-transfer/`
- `/ask-the-owl/`
- `/ask-the-owl/dictionary/`
- `/bad-seo-field-guide/`
- `/impact/`
- `/work/`
- `/about/`
- `/contact/`
- `/pricing/`
- `/privacy/`
- `/terms/`
- `/404/`

## Project structure

- `src/pages/` - route source of truth
- `src/data/boho.ts` - approved Boho content blocks, cards, and glossary data
- `src/components/` - AstroWind-based widgets, shared UI, and layout pieces used by the reset
- `src/assets/styles/tailwind.css` - theme tokens and shared utility styling
- `public/assets/` - Boho brand assets, patterns, and background imagery
- `public/CNAME` - custom domain binding for GitHub Pages
- `vendor/integration/` - AstroWind integration used by the site config
- `_legacy-boho/current/` - archive of the pre-reset implementation kept for reference only
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

## Commands

Use Node 22 or newer, then run:

```bash
npm ci
npm run build
npm run preview
```

Optional verification:

```bash
npm run check
```

## Deployment

GitHub Actions builds the site from `main` and deploys `dist/` to GitHub Pages. The custom domain is provided through `public/CNAME`.
