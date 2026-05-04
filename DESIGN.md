# DESIGN.md — Yean Ter Portfolio

> *所有奇迹的始发点 · Where All Miracles Begin*

Single source of truth for the UI system. Update this file whenever a token or behaviour changes.

---

## 1. Design philosophy

Clean, calm, personal. The site has three jobs in order:

1. **Greet warmly.** A full-bleed cinematic hero sets the mood before anything else.
2. **Show the work.** A scannable list of projects below the fold — no clutter.
3. **Stay ambient.** A floating music player follows you down the page.

No sidebar. No status pills, category badges, or tags anywhere in the UI. No images inside project cards. Three accent colors only — all sourced from anime characters.

---

## 2. Color palette

### Anime accent tokens

| Token | Tailwind class | Hex | Inspiration | Role |
|---|---|---|---|---|
| `miku` | `bg-miku` / `text-miku` | `#39c5bb` | Hatsune Miku | Primary — CTAs, active states, links, accent bars |
| `miku-dark` | `bg-miku-dark` | `#2ba8a0` | — | Primary hover |
| `yuru` | `bg-yuru` / `text-yuru` | `#F07535` | Yuru Camp (campfire orange) | Secondary — anime card rings, "Next" roadmap, warmth |
| `yuru-dark` | `bg-yuru-dark` | `#D4612A` | — | Secondary hover |
| `kato` | `bg-kato` / `text-kato` | `#F5B3C8` | Megumi Kato (sakura pink) | Tertiary — hero badge, Journal accent, shimmer |
| `kato-dark` | `bg-kato-dark` | `#E0899F` | — | Tertiary hover |

All three are registered in `tailwind.config.mjs`. Full Tailwind modifier syntax works: `bg-kato/10`, `border-yuru/30`, `text-miku`, etc.

Do not introduce any additional accent hues.

### Neutral surfaces

| Usage | Value |
|---|---|
| Page background | `#f1f5f9` (slate-100) |
| Card / surface | `#ffffff` |
| Card border | `#f1f5f9` (slate-100) |
| Body text | `#0f172a` (slate-900) |
| Muted text | `#94a3b8` (slate-400) |
| Mono / metadata | `#cbd5e1` (slate-300) |

### Category accent map (RecentPosts / ProjectCollections)

| Category | Accent bar |
|---|---|
| Anime | yuru `#F07535` |
| Design | miku `#39c5bb` |
| Dev | slate `#475569` |
| Journal | kato `#F5B3C8` |

---

## 3. Typography

| Role | Font | Size | Weight |
|---|---|---|---|
| All UI / body | Plus Jakarta Sans | varies | 400–900 |
| Code / mono | JetBrains Mono | varies | 500 |

Both fonts load once from `BaseLayout.astro` via Google Fonts.

Casing rules:
- **UPPERCASE + wide tracking** — section labels only (`PROJECTS`, `SITE STATS`).
- Headings — sentence case.
- Buttons — Title Case (`Browse Work`, `View all`).

---

## 4. Spacing, radius, shadow

**Max content width:** `1100px`. Every inner container respects it. Full-bleed sections (hero, stats, footer) have their inner content pulled back with `max-w-[1100px] mx-auto px-6`.

**Horizontal padding:** `px-6` (24px) at every breakpoint.

### Border radius

| Surface | Radius |
|---|---|
| CTA pill | `rounded-full` |
| Card (post, project, stat) | `rounded-2xl` (16px) |
| Larger card / featured | `rounded-3xl` (24px) |
| Small badge | `rounded-lg` (8px) |

### Shadow levels

| Level | Value | Used on |
|---|---|---|
| Card idle | `0 4px 20px rgba(15,23,42,0.04)` | Default white cards |
| Card hover | `0 6px 24px rgba(15,23,42,0.06)` | Cards on hover |
| Miku hover | `0 6px 24px rgba(57,197,187,0.08)` | Miku-tinted card hover |
| CTA | `0 4px 24px rgba(57,197,187,0.45)` | Primary teal button |
| CTA hover | `0 6px 28px rgba(57,197,187,0.6)` | Primary teal button hover |

---

## 5. Page structure

### Home (`/`)

```
Hero (100vh, full-bleed)
  └── Navigation (overlay → sticky on scroll)
  └── LIVE badge, title, tagline, two CTAs, slide nav

Main (bg-[#f1f5f9], max-w-1100)
  └── ProjectCollections — stacked cards, full width

SiteStats (full-bleed)
  └── 4 number cards: Posts · Words · Tags · Days Online

SiteFooter (full-bleed, white)
  └── Brand | Pages
  └── Bottom bar: © Yean Ter · 所有奇迹的始发点

MusicPlayer (fixed bottom-left, z-40)
```

### Projects (`/projects`)

Page header → Featured project card (no image) → Build log timeline → Written along the way (2-col writeup cards) → Roadmap (Now / Next / Later) → Bottom CTA.

### Anime (`/anime`)

Flip-card grid. Front: poster + title. Back: quote. Premium cards get an animated yuru→miku→yuru gradient ring.

### About (`/about`)

MDX content page. Navigation + footer only.

---

## 6. Component reference

### Navigation
Sticky frosted-glass bar (64px tall, max-w-1100). In `heroOverlay` mode starts transparent and transitions on scroll past 60px. Links: Home · Projects · Anime · About. Right: Contact pill.

### HeroSection
Full-viewport wallpaper slideshow (6s auto-advance). Centered title + tagline + two CTAs. Primary CTA is miku solid; secondary is dark glass with a kato-colored "New" badge.

### ProjectCollections
Stacked card list. Each card: 4px left accent bar (cycles miku → yuru → kato → slate), date, title, excerpt. No images, no badges. "View all" link leads to `/projects`.

### RecentPosts
Same card style. Left accent bar color is category-driven (see §2 category map). Used by demo data; not rendered on any live page currently.

### SiteStats
Full-bleed strip. Section label flanked by miku-fading hairlines. Four white cards: Posts · Words · Tags · Days Online. Empty values show `—`.

### SiteFooter
Two columns: Brand + Pages. No tag cloud. Bottom bar has copyright and Chinese tagline.

### MusicPlayer
Fixed `bottom-6 left-6`, `z-40`. Three states: collapsed disc → expanded pill → playlist drawer. Appears after scrolling 200px (never covers hero CTAs). Uses miku green throughout.

### Anime cards
220×308px flip cards. Front: poster image + title text. Back: dark slate with quote. Premium ring: yuru→miku animated gradient. Standard ring: miku/yuru soft gradient. Shimmer on hover: kato/miku gradient.

---

## 7. Rules (enforce these)

- No sidebar, no LocalTime widget.
- No images inside project or post cards.
- No status pills, category badges, or tag labels anywhere in the UI.
- No "coming soon" copy.
- Three accent colors only: miku, yuru, kato. No new accent hues.
- Shadows always soft and low-opacity — never harsh.
- All card corners: `rounded-2xl` or `rounded-3xl`. No sharp edges on cards.
- Pages: Home · Projects · Anime · About. No resume page.

---

## 8. File map

```
src/
├── pages/
│   ├── index.astro          # Home: Hero + ProjectCollections + Stats + Footer
│   ├── projects.astro       # Full project detail page
│   ├── anime.astro          # Flip-card anime collection grid
│   └── about.astro          # MDX content page
├── layouts/
│   └── BaseLayout.astro     # HTML shell, fonts, global animations
└── components/
    ├── Navigation.astro
    ├── HeroSection.astro
    ├── ProjectCollections.astro   # Used on home page
    ├── RecentPosts.astro          # Not rendered on any live page currently
    ├── SiteStats.astro
    ├── SiteFooter.astro
    ├── MusicPlayer.astro
    ├── SidebarProfile.astro       # Unused (sidebar removed)
    ├── LocalTime.astro            # Unused (sidebar removed)
    ├── HeroBanner.astro           # Unused (older hero style)
    └── HeroTicker.astro           # Unused (removed from home)

tailwind.config.mjs    # miku / yuru / kato color tokens defined here
```

---

*Last updated: 2026-05-05.*
