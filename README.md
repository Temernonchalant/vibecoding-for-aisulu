# VibeCoding for Aisulu — React / Next.js edition

Migrated from a single static `index.html` (now preserved in [`legacy/index.html`](legacy/index.html))
to a **Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn** structure.

## Requirements

- Node.js **18.17+**
- npm (or pnpm / yarn / bun)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the home page renders the
`BackgroundGradientAnimation` component.

## Project structure

```
app/
  layout.tsx     # Root layout + next-themes ThemeProvider
  page.tsx       # Demo page using the component
  globals.css    # Tailwind directives
components/
  theme-provider.tsx
  ui/
    background-gradient-animation.tsx   # the integrated component
lib/
  utils.ts       # cn() helper (clsx + tailwind-merge)
tailwind.config.ts   # includes the animate-first..fifth keyframes the component needs
components.json      # shadcn config (so `npx shadcn@latest add ...` works)
legacy/index.html    # the original static site
```

## Dependencies added

- `classnames` — used directly by the component
- `next-themes` — the component reads the active theme via `useTheme()`
  (wired through `components/theme-provider.tsx` in the root layout)
- `clsx` + `tailwind-merge` — shadcn `cn()` utility
- `lucide-react` — icon set for future shadcn components

## Adding more shadcn components

```bash
npx shadcn@latest add button
```

They land in `components/ui` per `components.json`.
