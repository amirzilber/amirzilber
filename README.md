# Envox MVP Frontend

Envox is a SaaS + marketplace platform for AI-generated virtual production environments, optimized for LED volumes and live broadcast workflows.

## What this MVP includes
- Public marketing site (`/`, `/features`, `/pricing`, `/marketplace`, `/docs`, `/blog`, `/about`, `/contact`, `/login`, `/signup`)
- Authenticated app experience (`/app/dashboard`, `/app/generator`, `/app/marketplace`, `/app/my-environments`, `/app/broadcast`, `/app/settings`, `/app/admin`)
- Reusable TypeScript components and seeded mock content
- Framer Motion hero/nav animation and polished dark UI
- Vercel-ready Next.js 15 App Router structure

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Architecture overview
```text
app/
  layout.tsx                 # Root layout + dark theme
  page.tsx                   # Landing page
  features|pricing|...       # Public routes
  app/                       # Authenticated route group
    layout.tsx               # App shell
    dashboard|generator|...  # Product pages
components/
  layout/                    # Navbar, Footer, App shell
  public/                    # Marketing sections
  ui/                        # Button/Card/Badge primitives
lib/
  data/mock.ts               # Mock datasets (pricing, environments, docs, blog)
  types/index.ts             # Shared TypeScript types
  utils.ts                   # Shared class utility
```

## Mocked today vs. future integration
### Mocked in MVP
- Authentication flow (login/signup navigation only)
- AI generation behavior and status progression
- Marketplace inventory, pricing, and favorites
- Billing usage and admin metrics

### Ready for future integration
- **Supabase/PostgreSQL**: `lib/types` and `lib/data` separate contracts from storage implementation.
- **Stripe**: pricing and billing surfaces isolated in `/pricing` and `/app/settings` billing card.
- **AI generation API**: generator form and status panel are prepared for server actions/API routes.

## Notes
- Styling uses Tailwind CSS with reusable primitives.
- Motion is intentionally subtle (hero and navigation reveal).
