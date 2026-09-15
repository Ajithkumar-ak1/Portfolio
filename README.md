# Ajith Kumar - Portfolio

A Next.js 14 (App Router) portfolio, styled in the vein of editorial dark portfolios - serif display type, a scrolling marquee, and scroll-reveal sections - built for backend/full-stack Java SDE roles.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals and micro-animations
- **Fontsource** (self-hosted Fraunces / Inter / JetBrains Mono - no external font requests)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

A few placeholders need your real details - search for these in the code:

- **`components/Contact.tsx`** and **`components/Nav.tsx`** - social links (GitHub/LinkedIn/LeetCode/Codeforces) are already filled in with your real profiles pulled from your existing portfolio. Double check they're current.
- **`components/Journey.tsx`** - the "bit more about me" story is a *draft* based on your resume facts (competitive programming → Telesoft → independent projects). Personalize it with your real voice and any details only you know.
- **`app/layout.tsx`** - update the metadata `title`/`description` if you want different SEO copy, and add a proper Open Graph image if you want link previews to show something.

## Deploy

The fastest path is [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or push this to a GitHub repo and import it at vercel.com/new - it auto-detects Next.js with zero config.

## Structure

```
app/
  layout.tsx      - fonts, metadata
  page.tsx        - assembles all sections
  globals.css     - design tokens, base styles
components/
  Nav.tsx         - sticky nav
  Hero.tsx        - headline, quote, orbiting-tag visual
  Marquee.tsx     - infinite scroll strip
  About.tsx       - intro + experience card
  Skills.tsx      - grouped tech tags
  Projects.tsx    - NextContest + KnowTheRound
  Journey.tsx     - personal story + stats
  Contact.tsx     - mailto-based contact form
  Footer.tsx
  Reveal.tsx      - shared scroll-reveal wrapper
```
