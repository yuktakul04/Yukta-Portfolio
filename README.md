# Yukta Kulkarni — Portfolio

Production-ready portfolio built with **Next.js 14 App Router**, **TypeScript**, **TailwindCSS**, and **Framer Motion**.

## Quick Start

```bash
cd yukta-portfolio
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts — it auto-detects Next.js
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new).

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── projects/
│   │   ├── page.tsx            # Projects listing (with filters)
│   │   └── [slug]/page.tsx     # Themed project case study
│   ├── experience/
│   │   ├── page.tsx            # Experience listing
│   │   └── [slug]/page.tsx     # Themed experience page
│   ├── research/page.tsx       # Research & publications
│   ├── about/page.tsx          # About page
│   └── contact/page.tsx        # Contact page
├── components/
│   ├── nav/Navbar.tsx          # Sticky animated navbar
│   ├── home/                   # Homepage section components
│   ├── themed/                 # Reusable themed components
│   └── shared/                 # Footer, CTA, etc.
└── content/
    ├── theme.ts                # Theme token definitions
    ├── projects.ts             # All project data
    ├── experience.ts           # All experience data
    └── research.ts             # Publications & research
```

---

## Adding a New Project

Edit **`src/content/projects.ts`** — add one object to the `projects` array:

```typescript
{
  slug: 'my-new-project',           // URL: /projects/my-new-project
  title: 'My Project',
  subtitle: 'Short description',
  hook: 'One-line value proposition',
  timeframe: '2025',
  role: 'Full Stack Engineer',
  category: ['ai', 'fullstack'],    // 'ai' | 'fullstack' | 'research' | 'edge' | 'security'
  stack: ['Python', 'React'],
  metrics: [
    { label: 'Users', value: '1K+', numericValue: 1000, suffix: '+', icon: '👥' },
  ],
  problem: 'The problem this solves...',
  solution: 'How it solves it...',
  highlights: ['Highlight 1', 'Highlight 2'],
  architecture: {
    nodes: [
      { id: 'user', label: 'User', x: 50, y: 140, type: 'client' },
      // add more nodes...
    ],
    edges: [
      { from: 'user', to: 'backend', label: 'request' },
    ],
    description: 'Architecture overview text',
  },
  lessons: ['Lesson 1', 'Lesson 2'],
  links: [{ label: 'GitHub', url: 'https://github.com/...', type: 'github' }],
  theme: themes.market,             // Pick from theme.ts: financial, security, market, social, edge, research
  featured: false,
  order: 5,
  related: ['stonklytics'],         // slugs of related projects
  colorClass: 'emerald',
}
```

That's it. The project automatically appears in:
- `/projects` listing (with category filter)
- `/projects/my-new-project` full case study page
- Related cards on other pages if listed

---

## Adding a New Experience

Edit **`src/content/experience.ts`** — same pattern as projects.

---

## Theme Customization

Edit **`src/content/theme.ts`** to create a new theme or modify existing ones:

```typescript
export const themes = {
  myTheme: {
    accentGradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    accentColor: '#ff6b6b',
    accentColorSecondary: '#ee5a24',
    icon: '🔥',
    tagStyle: 'bg-red-500/10 text-red-300 border border-red-500/20',
    // ... other tokens
  }
}
```

Then assign `theme: themes.myTheme` to any project or experience.

---

## Performance Notes

- All heavy components (FeaturedProjects, ExperiencePreview) use `'use client'` only where needed
- Framer Motion animations use `whileInView` with `once: true` for scroll-triggered performance
- Architecture diagrams use SVG (no canvas/WebGL)
- Fonts load via `next/font/google` with `display: 'swap'`
- Images: use `next/image` for any photos you add

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Animation | Framer Motion |
| UI Primitives | Radix UI |
| Icons | Lucide React |
| Fonts | Inter + Fira Code (next/font) |
| Deploy | Vercel |

## Customization

1. **Update your resume**: Replace `public/resume.pdf` with your latest resume PDF
2. **Add OG image**: Add a `public/og-image.png` (1200×630px) for social sharing
3. **Update domain**: Replace `yuktakulkarni.dev` in `layout.tsx`, `sitemap.ts`, and `robots.ts`
4. **Add favicon**: Replace `public/favicon.ico`
