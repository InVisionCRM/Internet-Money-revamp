# Internet Money — Landing Page Revamp

A Rabby-inspired landing page for the Internet Money Wallet. Built with **Next.js 15 (Pages Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens

Pulled directly from the Color/Size schema:

| Token              | Light     | Dark      |
| ------------------ | --------- | --------- |
| Background         | `#f5f5f5` | `#121314` |
| Surface (card)     | `#ffffff` | `#232426` |
| Border             | `#CDCDCD` | `#2C2D2F` |
| Text — primary     | `#1A1A1A` | `#E6E6E6` |
| Text — secondary   | `#6b6b6b` | `#b3b3b3` |
| Accent             | `#3861f6` | `#00B4FF` |
| Success            | `#3FA028` | `#5FD639` |
| Danger             | `#D93333` | `#FF4A4A` |

Border radii: `12px` (buttons, inputs) and `16px` (cards, pills).
Font: Inter via `next/font/google`.

Both modes are wired up. Toggle via the sun/moon button in the header.

## Structure

```
pages/
  _app.tsx           — theme + font wrapper
  _document.tsx
  index.tsx          — composes all sections

components/
  site-header.tsx    — sticky nav, scroll-blurred bg, theme toggle
  site-footer.tsx
  ui/
    button.tsx       — shadcn Button (with `accent` variant added)
    card.tsx         — shadcn Card
  sections/
    hero.tsx         — headline + floating wallet mockups
    chain-bar.tsx    — supported-chain ticker
    features.tsx     — 3×3 grid + 1 centered card (10 features total)
    security.tsx     — split-layout editorial section
    cta.tsx          — dark inverted block with download buttons
  wallet-mockup/
    wallet-card.tsx  — main balance/asset list mockup
    swap-card.tsx    — tilted cross-chain swap mockup

styles/globals.css   — Tailwind base + theme CSS variables
lib/utils.ts         — `cn()` helper
tailwind.config.ts   — design tokens
```

## Adding more shadcn components

```bash
npx shadcn@latest add tabs sheet navigation-menu badge separator
```

Components install under `components/ui/`. Already wired for: `@/components/ui/button`, `@/components/ui/card`.

## Notes for next pass

- Replace the placeholder accent square (header logo) with the real Internet Money logo SVG in `public/`.
- The wallet/swap mockups currently use hardcoded values. Swap in real screenshots when ready by replacing `wallet-card.tsx` and `swap-card.tsx` with `<Image>` components.
- The `dark` mode accent (`#00B4FF`) is from your dark schema. The page defaults to light per your spec.
- No TIME / FUTURE / IM token content appears on the landing page. A dedicated `/tokens` page can be added later.
