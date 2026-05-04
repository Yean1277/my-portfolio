# DESIGN.md — Yean Ter Portfolio

> *所有奇迹的始发点 · Where All Miracles Begin*

Single source of truth for the UI system. Update this file whenever a token or behaviour changes.

---

## 1. Design philosophy

Clean, calm, personal. The site has three jobs in order:

1. **Greet warmly.** A full-bleed cinematic hero sets the mood before anything else.
2. **Show the work.** A scannable list of projects below the fold — no clutter.
3. **Stay ambient.** A floating music player follows you down the page.

Hover states whisper. Motion arrives, never bounces. The page steps out of the way of the work.

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

### Neutral surfaces (warm scale)

| Usage | Value | Notes |
|---|---|---|
| Page background | `#f7f6f2` | Warm off-white. Replaces slate-100. |
| Card / surface | `#ffffff` | Pure white still works against warm bg. |
| Card border | `#ece9e0` | Soft warm grey, replaces slate-100. |
| Heading text | `#24231f` | Warm near-black. Use only for h1–h4. |
| Body text | `#3a3833` | Warm dark grey. Replaces slate-900 for body. |
| Muted text | `#787670` | Warm grey. Replaces slate-400. |
| Mono / metadata | `#a8a69f` | Warm light grey. Replaces slate-300. |

The neutrals are warm, not cool. Slate (`#0f172a`, `#94a3b8`, etc.) is banned from any text or surface — it pulls the page toward "tech dashboard" and away from "personal site." Accent colors are unchanged; they're already saturated enough to pop against warm neutrals.

### Category accent map (RecentPosts / ProjectCollections)

| Category | Accent bar |
|---|---|
| Anime | yuru `#F07535` |
| Design | miku `#39c5bb` |
| Dev | warm grey `#5c5a55` |
| Journal | kato `#F5B3C8` |

---

## 3. Typography

| Role | Font | Source | Weight |
|---|---|---|---|
| All UI / body | Inter | Google Fonts | 400–600 |
| Headings | Inter | Google Fonts | **500 only** |
| Code / mono | JetBrains Mono | Google Fonts | 500 |

Both fonts load once from `BaseLayout.astro`. Plus Jakarta Sans is removed.

### Why Inter

Inter is humanist, screen-tuned, and reads softer than geometric sans like Plus Jakarta Sans. It carries less branded/marketing energy and more *personal letter* energy — which matches the site's intent.

### Heading rule

**Headings stay at weight 500 (medium). Never 600, 700, or 900.** Bold headings on warm backgrounds read as shouting. Medium-weight headings have presence without aggression. Borrowed directly from Yohaku's invariant on this point — it's the single biggest factor in whether type feels "hard" or "calm."

### Global type settings

```css
html {
  letter-spacing: 0.01em;   /* tiny breathing margin */
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: #3a3833;
}

h1, h2, h3, h4 {
  font-weight: 500;
  line-height: 1.2;
  color: #24231f;
}
```

### Casing rules

- **UPPERCASE + wide tracking** — section labels only (`PROJECTS`, `SITE STATS`).
- Headings — sentence case.
- Buttons — Title Case (`Browse Work`, `View all`).
- Dates and annotations — italic Inter, muted-text color. Treat them as marginal notes, not data fields. Mono is reserved for code, stats numbers, and metadata where precision matters more than warmth.

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
| Card idle | `0 4px 20px rgba(36,35,31,0.04)` | Default white cards |
| Card hover | `0 6px 24px rgba(36,35,31,0.06)` | Cards on hover |
| Miku hover | `0 6px 24px rgba(57,197,187,0.08)` | Miku-tinted card hover |
| CTA | `0 4px 24px rgba(57,197,187,0.25)` | Primary teal button |
| CTA hover | `0 6px 28px rgba(57,197,187,0.4)` | Primary teal button hover |

Shadows use warm near-black (`rgba(36,35,31,…)`) instead of slate. Always soft and low-opacity. The CTA leads, but it doesn't shout — the gap between idle card shadow and CTA shadow should feel like emphasis, not alarm.

---

## 5. Motion

One easing curve, three durations. Motion arrives — it doesn't bounce, slide, or pop.

| Token | Value | Used for |
|---|---|---|
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` | All transitions |
| Quick | `150ms` | Hover, focus, color shifts |
| Standard | `300ms` | Card lift, drawer open, accent fade |
| Cinematic | `600ms` | Hero entrance, slide change, page-load reveal |

**First-visit rule.** The hero slideshow auto-advances every 6s on first visit only (set a `sessionStorage` flag). On return visits, the current slide holds static — the cinematic entrance is a greeting, not a loop. Apply the same logic to any future intro animation.

**Hover principle.** Every hover says *"I noticed you,"* not *"look here!"* Color deepens, shadows soften upward, opacity nudges. Nothing leaps.

---

## 6. Page structure

### Home (`/`)

```
Hero (100vh, full-bleed)
  └── Navigation (overlay → sticky on scroll)
  └── LIVE badge, title, tagline, two CTAs, slide nav

Main (bg-[#f7f6f2], max-w-1100)
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

## 7. Component reference

### Navigation
Sticky frosted-glass bar (64px tall, max-w-1100). In `heroOverlay` mode starts transparent and transitions on scroll past 60px. Links: Home · Projects · Anime · About. Right: Contact pill.

### HeroSection
Full-viewport wallpaper slideshow. Centered title + tagline + two CTAs. Primary CTA is miku solid; secondary is dark glass with a kato-colored "New" badge. First-visit auto-advance every 6s; return visits hold static (see §5).

### ProjectCollections
Stacked card list. Each card: 4px left accent bar (cycles miku → yuru → kato → warm-grey), italic date, title, excerpt. No images, no badges. "View all" link leads to `/projects`. The left bar is the card's "starting point" — a small nod to *始发点*.

### RecentPosts
Same card style. Left accent bar color is category-driven (see §2 category map). Used by demo data; not rendered on any live page currently.

### SiteStats
Full-bleed strip. Section label flanked by miku-fading hairlines. Four white cards: Posts · Words · Tags · Days Online. Empty values show `—`.

### SiteFooter
Two columns: Brand + Pages. No tag cloud. Bottom bar has copyright and Chinese tagline.

### MusicPlayer
Fixed `bottom-6 left-6`, `z-40`. Three states: collapsed disc → expanded pill → playlist drawer. Appears after scrolling 200px (never covers hero CTAs). Uses miku green throughout.

### Anime cards
220×308px flip cards. Front: poster image + title text. Back: warm dark `#24231f` with quote. Premium ring: yuru→miku animated gradient. Standard ring: miku/yuru soft gradient. Shimmer on hover: kato/miku gradient.

---

## 8. Rules (enforce these)

- No sidebar, no LocalTime widget.
- No images inside project or post cards.
- No status pills, category badges, or tag labels anywhere in the UI.
- No "coming soon" copy.
- Three accent colors only: miku, yuru, kato. No new accent hues.
- No slate / cool greys anywhere. Neutrals are warm.
- Headings stay at weight 500. Never bold.
- One easing curve. One motion vocabulary. Animations arrive, never bounce.
- Shadows always soft and low-opacity — never harsh.
- All card corners: `rounded-2xl` or `rounded-3xl`. No sharp edges on cards.
- Pages: Home · Projects · Anime · About. No resume page.

---

## 9. File map

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
    ├── ProjectCollections.astro
    ├── SiteStats.astro
    ├── SiteFooter.astro
    └── MusicPlayer.astro

tailwind.config.mjs    # miku / yuru / kato color tokens defined here
```

---

*Last updated: 2026-05-05.*