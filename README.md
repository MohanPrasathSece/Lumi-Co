# Lumi & Co. Boutique

An elegant single-page experience for a boutique jewelry brand, built with Vite, React, and Tailwind CSS.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

The development server defaults to http://localhost:8080.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS & shadcn/ui components
- Radix UI primitives

## Project structure

- `src/pages` – top-level routed pages
- `src/components` – reusable UI components
- `src/assets` – static imagery
- `src/index.css` – design tokens and base styles

## Deployment

Any modern static hosting service that supports the output of `npm run build` will work (e.g., Netlify, Vercel, Cloudflare Pages). Deploy the contents of the generated `dist` directory.

## Contributing

1. Fork the repository and create a feature branch.
2. Make your changes and ensure `npm run build` succeeds.
3. Open a pull request describing the updates.
