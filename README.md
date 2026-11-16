# ForgeFit — Personal Training in Mumbai

**Forge Your Best Self.** Personal training designed around you — your goals, your pace, your results.

Static site built with **Svelte 5.57.3, SvelteKit 3.2.0, Vite 8.3.8, TypeScript 6, Tailwind CSS 4.3.5** and `@sveltejs/adapter-static` (fully prerendered). Deploys automatically to Cloudflare Pages on every push to `main`.

Live: https://forgefits.pages.dev

## Pages

Home, Programs (4 + detail pages), Results, Pricing, Blog (3 articles), About, Book a free session (day + time-slot picker), Contact, Privacy, Terms — plus `sitemap.xml` and `robots.txt`.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run check    # svelte-check (0 errors, 0 warnings)
npm run build    # prerendered output in build/
npm run preview  # serve the production build locally
```

## Notes

- All coach details, prices, testimonials and contact info are **mock data for the demo** — replace `src/lib/data.ts` before launch.
- Booking/contact forms are demo-only: no data leaves the browser yet.
- Fonts (Anton + Inter) are self-hosted via `@fontsource`, no CDN.
- Stack is pinned exactly — see `~/workspace/svelte-stack-lock.md` in the author's workspace.
