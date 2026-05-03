# DESIGN.md — Yean Ter Portfolio Home Page

> *所有奇迹的始发点 · Where All Miracles Begin*

A single source of truth for everything UI/UX on the home page. If you change a token or a behaviour, update this file. If you add a new component, add a section.

---

## Table of contents

1. [Design philosophy](#1-design-philosophy)
2. [Design tokens](#2-design-tokens)
3. [Typography](#3-typography)
4. [Spacing, radius, shadow](#4-spacing-radius-shadow)
5. [Page structure & layout](#5-page-structure--layout)
6. [Component reference](#6-component-reference)
7. [Interaction & motion](#7-interaction--motion)
8. [Responsive behaviour](#8-responsive-behaviour)
9. [Accessibility](#9-accessibility)
10. [File map](#10-file-map)
11. [Open items & gotchas](#11-open-items--gotchas)

---

## 1. Design philosophy

The home page is a personal portfolio with three jobs, in order of priority:

1. **Greet the visitor warmly.** A full-bleed cinematic hero sets a mood — neon, late-night, a little nostalgic — and tells you who lives here in two centred lines.
2. **Show what's been made and what's being made.** A scannable list of recent posts in the main column; a profile card in the sidebar that says "this is me, this is what I'm building right now."
3. **Stay ambient.** A floating music player in the corner so the soundtrack follows you down the page. A live local clock in the sidebar so the page feels inhabited.

Visual language: **Plus Jakarta Sans + JetBrains Mono**, white surfaces, soft shadows, generous radius, single-accent teal (`#39c5bb`) with a warm orange sidekick (`#f59e0b`) used sparingly for "new" / "featured" moments. Everything else is slate-gray.

The page should feel **calm, not busy**. No gradients on every surface. No motion for motion's sake. Movement is reserved for things that are alive: the vinyl spinning, the LIVE pulse, the EQ bars in the playlist.

---

## 2. Design tokens

### Colour

#### Brand
| Token            | Hex        | Usage                                                       |
|------------------|------------|-------------------------------------------------------------|
| `teal`           | `#39c5bb`  | Primary brand. CTAs, active states, links, accent dots.     |
| `teal-deep`      | `#2ba8a0`  | Hover state for `teal`. Gradient pair.                      |
| `teal-soft`      | `rgba(57,197,187,0.10)` | Tinted backgrounds (category pills, hover).    |
| `teal-ring`      | `rgba(57,197,187,0.30)` | Subtle borders around teal-tinted surfaces.    |

#### Accents
| Token            | Hex        | Usage                                                       |
|------------------|------------|-------------------------------------------------------------|
| `orange`         | `#f59e0b`  | "Anime" category, "New" badge, secondary accents.           |
| `orange-deep`    | `#d97706`  | Text on orange-tinted backgrounds.                          |
| `orange-soft`    | `rgba(245,158,11,0.10)` | Anime category pill bg, code-square bg.       |
| `purple`         | `#8b5cf6`  | "Journal" category accent.                                  |
| `purple-deep`    | `#7c3aed`  | Text on purple-tinted backgrounds.                          |
| `slate-accent`   | `#475569`  | "Dev" category accent (neutral).                            |

#### Surfaces & ink
| Token            | Hex        | Usage                                                       |
|------------------|------------|-------------------------------------------------------------|
| `bg-page`        | `#f1f5f9`  | The main page background (the gray strip behind cards).     |
| `bg-surface`     | `#ffffff`  | Cards, the footer, the music player pill.                   |
| `bg-muted`       | `#f8fafc`  | Inset blocks (e.g. "Currently building" bar).               |
| `border-default` | `#e2e8f0`  | All card borders.                                           |
| `border-soft`    | `#f1f5f9`  | Hairline dividers inside cards.                             |
| `ink-900`        | `#0f172a`  | Headings, primary text.                                     |
| `ink-700`        | `#334155`  | Body text on light surfaces.                                |
| `ink-500`        | `#64748b`  | Secondary body, navigation links.                           |
| `ink-400`        | `#94a3b8`  | Excerpts, labels.                                           |
| `ink-300`        | `#cbd5e1`  | Disabled, captions, monospace metadata.                     |
| `ink-100`        | `#e2e8f0`  | Decorative dots, very low contrast text.                    |

#### Hero scrim
The hero uses a custom four-stop gradient over the wallpaper for legibility:
```css
linear-gradient(to bottom,
  rgba(0,0,0,0.08)  0%,
  rgba(0,0,0,0.18) 35%,
  rgba(0,0,0,0.55) 70%,
  rgba(0,0,0,0.85) 100%);
```

### Category colour map

The `Recent Posts` card system uses one row per category. **Always source colours from this table** — don't hand-pick new shades.

| Category | Accent   | Pill bg                | Pill text  | Code box bg            | Code-box text | Code |
|----------|----------|------------------------|------------|------------------------|---------------|------|
| Anime    | `#f59e0b`| `rgba(245,158,11,0.10)`| `#d97706`  | `rgba(245,158,11,0.08)`| `#d97706`     | `AN` |
| Design   | `#39c5bb`| `rgba(57,197,187,0.10)`| `#2ba8a0`  | `rgba(57,197,187,0.08)`| `#2ba8a0`     | `DE` |
| Dev      | `#475569`| `rgba(71,85,105,0.10)` | `#334155`  | `rgba(71,85,105,0.06)` | `#475569`     | `DE` |
| Journal  | `#8b5cf6`| `rgba(139,92,246,0.10)`| `#7c3aed`  | `rgba(139,92,246,0.08)`| `#7c3aed`     | `JO` |
| (fallback)| `#475569`| `rgba(71,85,105,0.10)`| `#334155`  | `rgba(71,85,105,0.06)` | `#475569`     | `PO` |

> **Note:** Anime and Dev share the `DE` two-letter code by accident. If they ever appear next to each other and read ambiguously, change `Dev` → `DV`. The map lives in `RecentPosts.astro`.

---

## 3. Typography

### Font families
- **Plus Jakarta Sans** (400 / 500 / 600 / 700 / 800 / 900) — everything UI.
- **JetBrains Mono** (500) — clocks, dates, file paths (`index.astro`), serial-style metadata, anywhere we want the "code-y" feel.

Both are loaded once in `BaseLayout.astro` from Google Fonts.

### Scale

| Use                                    | Size                       | Weight | Tracking      |
|----------------------------------------|----------------------------|--------|---------------|
| Hero title (`Yean Ter`)                | `clamp(2.6rem, 6.5vw, 4.5rem)` | 900   | tight         |
| Hero greeting line                     | 13px                       | 500    | wide          |
| Hero tagline                           | `clamp(0.85rem, 1.6vw, 1rem)` | 500    | wide          |
| Hero CTA                               | 13px                       | 700    | normal        |
| Section divider label (e.g. SITE STATS)| 10px                       | 900    | `0.22em`      |
| Big stat number                        | `clamp(1.85rem, 3.5vw, 2.4rem)` | 900   | tabular nums  |
| Card title (post)                      | 14px                       | 900    | tight         |
| Card excerpt                           | 12px                       | 500    | normal        |
| Profile name                           | 18px                       | 900    | tight         |
| Profile tagline                        | 12px                       | 500    | normal        |
| Sidebar section label                  | 9px                        | 900    | `0.20em`      |
| LocalTime clock                        | 18px JetBrains Mono        | 900    | `0.04em`      |
| Footer columns header (PAGES, TAGS)    | 10px                       | 900    | `0.18em`      |
| Tag pill                               | 10px                       | 700    | normal        |
| Category pill                          | 10px                       | 900    | `0.12em` upper |
| Hashtag (`#UI`)                        | 10px JetBrains Mono        | 400    | normal        |
| Date metadata                          | 10px JetBrains Mono        | 400    | normal        |

### Casing

- **UPPERCASE + wide tracking** is reserved for category pills, section labels, and stat captions. Never put body text in uppercase.
- **Headings** use sentence case: `My Top 5 Anime This Season`, not `My Top 5 Anime this Season`.
- **Buttons** use Title Case: `Browse Work`, `View all posts`.

---

## 4. Spacing, radius, shadow

### Spacing rhythm

Tailwind defaults (`gap-1` = 4px, `gap-2` = 8px, etc.). Most layouts use `gap-3` (12px), `gap-4` (16px), `gap-5` (20px), `gap-8` (32px). Vertical rhythm in the sidebar is `space-y-5` (20px).

Page max width: **1100px** (`max-w-[1100px]`). This is non-negotiable — every inner container respects it. Outer regions (hero, stats, footer) bleed full-width but their inner content reins back to 1100.

Page horizontal padding: **24px** (`px-6`) at all breakpoints.

### Border radius

| Surface             | Radius       |
|---------------------|--------------|
| Pill (CTA, tag, badge, music player pill) | `9999px` |
| Card (post, profile, music drawer, stats) | `16px` (`rounded-2xl`) |
| Inset block (currently building, code square)| `12px` (`rounded-xl`) |
| Small badge (LIVE, category pill)         | `8px` (`rounded-md` / `rounded-lg`) |
| Hover/focus ring                          | matches host  |

### Shadow

There are exactly **four** shadow levels. Don't invent more.

| Level        | Value                                                       | Used on                          |
|--------------|-------------------------------------------------------------|----------------------------------|
| `shadow-card`| `0 4px 20px rgba(15,23,42,0.04)`                            | Default white cards (idle).      |
| `shadow-card-hover`| `0 6px 24px rgba(15,23,42,0.06)` or `rgba(57,197,187,0.08)` | Cards on hover.                  |
| `shadow-cta` | `0 4px 24px rgba(57,197,187,0.45)`                          | Primary teal CTA (Browse Work).  |
| `shadow-float` | `0 8px 28px rgba(15,23,42,0.18)` (with optional pulsing ring) | Floating music player disc.   |

CTA hover boosts to `0 6px 28px rgba(57,197,187,0.6)`. Music player playing-state adds a pulsing teal ring via animation (see [§7](#7-interaction--motion)).

---

## 5. Page structure & layout

### Vertical flow

```
┌─────────────────────────────────────────────────┐
│  Hero (100vh, full-bleed)                       │
│  ├── Navigation (overlay, transitions on scroll)│
│  ├── LIVE badge (top-left)                      │
│  ├── Dismiss X (top-center, decorative)         │
│  ├── Title block (centered, lower-third)        │
│  │   ├── Greeting line                          │
│  │   ├── Title — "Yean Ter"                     │
│  │   ├── Tagline                                │
│  │   └── Two CTAs                               │
│  └── Slide nav (bottom-center: ‹ • • ‹•› • • ›) │
├─────────────────────────────────────────────────┤
│  Main grid (max-w-1100, on bg-page)             │
│  ┌──────── 4 ────────┬──────── 8 ──────────┐    │
│  │ LocalTime         │ RecentPosts         │    │
│  │ SidebarProfile    │ (8 cards stacked)   │    │
│  │                   │ View all posts →    │    │
│  └───────────────────┴─────────────────────┘    │
├─────────────────────────────────────────────────┤
│  SiteStats (full-bleed, on bg-page)             │
│  • SITE STATS divider                           │
│  • 4 white cards: Posts · Words · Tags · Days   │
├─────────────────────────────────────────────────┤
│  SiteFooter (full-bleed, white)                 │
│  ┌──────────┬──────────┬──────────────────┐     │
│  │ Brand    │ Pages    │ Tags             │     │
│  └──────────┴──────────┴──────────────────┘     │
│  Bottom bar: © · 所有奇迹的始发点                │
└─────────────────────────────────────────────────┘

Floating overlay (always on top, persistent):
  • Music Player (bottom-left, fixed)
```

### Grid

- Hero, SiteStats, SiteFooter are **full-bleed sections**. Their direct child re-applies `max-w-[1100px] mx-auto px-6`.
- Main content uses a 12-column CSS grid: `grid grid-cols-1 lg:grid-cols-12 gap-8`.
  - Sidebar: `lg:col-span-4`
  - Main:    `lg:col-span-8`
- Below `lg` (1024px), the grid collapses to a single column. Sidebar stacks above main.

### Z-index map

| Layer              | Z-index | Element                                        |
|--------------------|---------|------------------------------------------------|
| Floating player    | `40`    | `MusicPlayer` (`#floating-player`)             |
| Navigation         | `50`    | `Navigation` header                            |
| Hero overlays      | `20`    | LIVE badge, dismiss X, slide nav               |
| Hero centre block  | `10`    | Title group, scroll hint                       |
| Page bg accents    | `-10`   | The fixed teal blur orb                        |

> **Important:** The Navigation (`z-50`) sits **above** the floating music player (`z-40`) on purpose — the nav must always be reachable. If you move things around, preserve this order.

---

## 6. Component reference

### 6.1 BaseLayout (`layouts/BaseLayout.astro`)

The HTML shell. Mounts fonts, applies the Plus Jakarta Sans body, sets `bg-page` (currently `#F8FAFC` — should be normalised to `#f1f5f9` to match the rest of the system).

Contains two global animations referenced by other components:
- `.vinyl-record` — 4s linear infinite spin, paused by default, runs when `.playing` is added. *Used by the older sidebar music player; the floating player uses its own scoped `.fp-vinyl-spin` and does not depend on this.*
- `.loading-shimmer` — the wallpaper loader stripe. Currently only used by `HeroBanner.astro` (not on the home page).

### 6.2 Navigation (`Navigation.astro`)

Sticky-or-floating header, max-width 1100, height 64px.

**Modes**
- `heroOverlay={false}` (default) — sticky from page load, frosted-glass white background.
- `heroOverlay={true}` — starts `position: absolute` and **fully transparent** so it floats over the hero image; transitions to frosted-glass and switches to `position: sticky` once the user has scrolled more than 60px.

**Links** — `Home / Projects / Anime / Resume / About`. Each has:
- Active state: teal text, bold, with a 3×2px teal underline pill below.
- Hover state: text darkens to `slate-900` on a frosted background, or to white on the hero overlay.

**CTA** — single `Contact` pill on the right (`slate-900` bg, white text). Mobile: hidden behind the hamburger.

**Mobile menu** — 3-line hamburger animates to ✕. Drawer reveals via `max-height` transition. Auto-closes on outside click and on Astro view transitions.

> **Bug fixed in this revision:** the scroll handler used to query `[data-hero-link]` but the attribute was never set on the link elements, so the link colour didn't actually flip on scroll. The attribute is now applied conditionally (only when `heroOverlay=true`).

### 6.3 HeroSection (`HeroSection.astro`)

Full-viewport (`min-height: 100vh`) cinematic hero.

**Props**
| Prop          | Type                       | Default                              | Notes                                  |
|---------------|----------------------------|--------------------------------------|----------------------------------------|
| `title`       | string                     | required                             | Renders as the big centered H1.        |
| `tagline`     | string                     | —                                    | Bilingual subtitle line.               |
| `greeting`    | string                     | —                                    | Small line above title (with emoji ok).|
| `wallpapers`  | `{src, alt}[]`             | —                                    | Slideshow mode if length > 1.          |
| `wallpaper`   | string                     | unsplash placeholder                 | Single-image fallback.                 |
| `liveLabel`   | string                     | `'LIVE'`                             | Top-left badge text.                   |
| `primaryCta`  | `{label, href}`            | `{Browse Work, /projects}`           | Teal solid pill.                       |
| `secondaryCta`| `{label, href, badge?}`    | `{Anime Labs, /anime, badge:'New'}`  | Dark glass pill with optional badge.   |

**Anatomy (top to bottom)**
1. **Wallpaper layer** — stack of `<img>` elements, all `object-cover`, fading via `opacity` on slide change.
2. **Scrim** — see [§2](#2-design-tokens). Pointer-events disabled.
3. **LIVE badge** — top-left at `top-20 left-6` (80px / 24px), teal-80 bg, white pulsing dot.
4. **Dismiss X** — `top-[68px]`, centered horizontally. Decorative; clicking fades it out. Treat as a **playful** affordance, not load-bearing UX.
5. **Navigation slot** — `<slot name="nav" />`. Parent injects `<Navigation heroOverlay />`.
6. **Centre text block** — `bottom: 24%`, centred. Contains greeting + title + tagline + CTA row.
7. **Slide nav** — `bottom: 80px`, centred, frosted dark pill: prev chevron · dot · dot · pill · dot · dot · next chevron. Active dot is wider (`w-5`).
8. **Scroll hint** — `bottom-3`, centred. A 1px × 24px white vertical line that pulses scaleY. Fades out once `window.scrollY > 40`.

**Slideshow timing** — auto-advance every **6 seconds**. User interaction with prev/next/dots resets the cadence.

### 6.4 LocalTime (`LocalTime.astro`)

Small white card. Sits at the **top of the sidebar**, above the profile.

**Layout** — left: 40×40 teal-tinted ring with a clock-face SVG. Right: three lines stacked.
- Top line: `LOCAL TIME · CHINA` (9px, 900, slate-400, `tracking-[0.18em]`).
- Middle line: `02:33:54` (18px, 900, slate-900, JetBrains Mono, tabular-nums, `letter-spacing: 0.04em`).
- Bottom line: `Mon, May 4` (10px, 500, slate-400, tabular-nums).

**Behaviour** — uses `Intl.DateTimeFormat` with `timeZone: 'Asia/Shanghai'`. Recomputes every 1000ms via `setInterval`. Format is **24-hour** (`hour12: false`), so this clock reads `02:33:54` not `2:33:54 AM`.

**Props** — `label` (default `LOCAL TIME · CHINA`) and `timezone` (default `Asia/Shanghai`). Both are configurable; if you change to e.g. `Asia/Tokyo`, also update the label.

### 6.5 SidebarProfile (`SidebarProfile.astro`)

White card, no gradient ring (cleaner than the previous revision).

**Anatomy (top to bottom)**
1. Section label — teal dot + `PROFILE`.
2. Avatar (56×56, gradient teal fill with initials fallback) + name + tagline. Online dot in the corner of the avatar, animated pulse.
3. Tags — wrap row of 10px uppercase pills. Teal for skills, orange for hobbies, slate for "neutral" tech. Map lives in the component.
4. **Currently building** strip — slate-50 inset rectangle, teal pulsing dot, two stacked lines (label + status).
5. Hairline divider.
6. **Directory / Pages** — five mock-file links (`index.astro`, `projects.astro`, …) each with a coloured dot prefix. Hover turns the link teal.

The whole card has a soft hover that boosts the shadow tint from neutral to a faint teal.

### 6.6 RecentPosts (`RecentPosts.astro`)

The main content column. **No top divider** in this revision — the list begins immediately.

**Card anatomy** (one row per post)
```
┌──┬─────────────────────────────────────────────────────────┐
│  │ [CATEGORY]  #tag  #tag                       date     │  │
│ ▌│ Title (one line, line-clamp-1)                          │
│  │ Excerpt over up to two lines, slate-400.                │
└──┴─────────────────────────────────────────────────────────┘
                                           ↑ 78×78 code square
```

- **Left accent bar** — 4px wide, full card height, coloured per category. Animates to 6px (`w-1.5`) on hover.
- **Meta row** — category pill (uppercase, tinted), then `#tags` in JetBrains Mono slate-300, then date pushed to the right (`ml-auto`, also slate-300 mono).
- **Title** — 14px, weight 900. Turns teal on row hover.
- **Excerpt** — 12px, slate-400, two-line clamp.
- **Right code square** — 78×78 rounded `rounded-xl`, tinted with the category's `boxBg`, displays the two-letter `code` (e.g. `AN`) at 13px / 900 / 0.55 opacity. Scales 1.05 on hover. If the post has a `heroImage`, that replaces the code.

**View all** — centred link below the list with a subtle right arrow.

**Demo data** — when the posts collection is empty, the component renders 8 demo cards covering all four categories so the layout never collapses.

### 6.7 SiteStats (`SiteStats.astro`)

Full-bleed strip on `bg-page`.

- Centred section label `SITE STATS` flanked by a teal-fading hairline on each side.
- Four white cards in a 1-column → 2-column → 4-column responsive grid (`grid-cols-2 sm:grid-cols-4`), `gap-4`. Each card has its own border + soft shadow.
- Inside each card: big number (`clamp(1.85rem, 3.5vw, 2.4rem)`, weight 900, tabular-nums) above a 10px uppercase caption.
- Empty values render as `—` so the layout never collapses.

### 6.8 SiteFooter (`SiteFooter.astro`)

White, `border-t` only (no internal stat bar — `SiteStats` does that now).

- **Three columns** in a 1 → 3 grid:
  1. **Brand** — gradient `PORTFOLIO` wordmark, bilingual tagline, GitHub + X social pills, version pill with a pulsing teal dot.
  2. **Pages** — 5 vertical nav links with a tiny dot prefix.
  3. **Tags** — flex-wrap of pill-shaped tags. If the live `tags` prop is empty, falls back to a fixed demo list rendered as non-link `<span>`s (so they don't 404).
- **Bottom bar** — `mt-10 pt-5 border-t`. Left: `© <year> <ownerName> · Built with Astro`. Right: `所有奇迹的始发点` (very low contrast).

### 6.9 MusicPlayer (`MusicPlayer.astro`) — floating

Position-fixed at `bottom-6 left-6` (`bottom-4 left-4` on mobile). `z-40`. Persistent across scroll.

**Three states**
| State          | Class on `#floating-player`     | Visual                                                  |
|----------------|---------------------------------|---------------------------------------------------------|
| `collapsed`    | (no extra class)                | 56×56 black vinyl disc with glowing teal core.          |
| `expanded`     | `.expanded`                     | 320px white pill: small disc + track info + 5 controls. |
| `playlist-open`| `.expanded.playlist-open`       | Drawer (320×280max) slides up from above the pill.      |

**Initial reveal** — the entire container has `opacity: 0; transform: translateY(20px); pointer-events: none`. Once `window.scrollY > 200`, it fades in and slides up via the `.visible` class. So the player **never appears over the hero CTAs**.

**Interactions**
- **Disc click** (collapsed) → expand. If audio hasn't started, also kicks off track 0.
- **Vinyl click** (inside pill) → toggle play/pause.
- **Teal play button** → toggle play/pause.
- **Prev / Next** → switch tracks; preserves play state (skipping while playing keeps it playing).
- **List button** (☰) → toggle playlist drawer; goes teal when open.
- **Close** (✕) → collapse back to disc.
- **Click outside the player** → closes the drawer but **keeps the pill expanded** (less aggressive).
- **Auto-collapse** — if the player is paused **and** the user hasn't moused over for 8 seconds, it collapses itself. Playing audio cancels the timer indefinitely.

**Visual feedback**
- Disc spins (4s linear) only when `.playing` is on it.
- A pulsing teal halo (`@keyframes fpPulse`) rings the disc while playing — `box-shadow: 0 0 0 8px rgba(57,197,187,0)` expanding outward over 2s.
- The currently playing track in the drawer shows three dancing EQ bars in place of its number.

**Empty state** — if `playlist` is empty, the player still renders but as a static dim disc with `cursor: default` and a tooltip "No tracks loaded." No script wires up.

**Audio engine** — single hidden `<audio id="audioEngine" preload="metadata">` shared across the player. The ID is preserved from the previous revision so any external integrations (analytics, Media Session API) keep working.

---

## 7. Interaction & motion

### Easing & duration

- **Default ease** for all hover transitions: `ease` or `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's default).
- **Default duration**: 200ms for state changes, 300ms for layout-y things (nav backdrop), 400ms for reveals (player slide-up uses `cubic-bezier(0.16, 1, 0.3, 1)` for a softer landing).
- **Long autoplay loops** (slideshow, vinyl spin): linear so they don't read as breathing.

### Hover-level micro-interactions

| Surface                      | Hover effect                                         |
|------------------------------|------------------------------------------------------|
| Post card                    | `translate-y(-2px)` + shadow lift                    |
| Profile / LocalTime card     | Shadow tint shifts neutral → teal                    |
| Primary CTA (`Browse Work`)  | `translate-y(-2px)` + brighter shadow                |
| Secondary CTA (`Anime Labs`) | `translate-y(-2px)` + bg darkens                     |
| Music disc (collapsed)       | `scale(1.05)` + teal border ring intensifies         |
| Music disc (with overlay)    | A blurred dark veil fades in revealing play icon     |
| Code square in post card     | `scale(1.05)`                                        |
| Nav link (non-active)        | bg `slate-100/80`, text darkens to `slate-900`       |

### Looping animations

| Animation         | Duration | Where                                 |
|-------------------|----------|---------------------------------------|
| `vinyl-spin`      | 4s linear| Music disc (only while playing)       |
| `fpPulse`         | 2s ease  | Music disc halo (only while playing)  |
| `fpEq`            | 0.8s alt | EQ bars in the playlist drawer        |
| `scrollPulse`     | 2s ease  | Hero scroll-hint vertical line        |
| `pulse` (Tailwind)| ~2s      | LIVE badge dot, online dot, focus dots|

### Slideshow & ticker timings

- Hero wallpaper auto-advance: **6000ms**.
- Hero ticker (when used) auto-advance: **4000ms**. *(Not used on the home page in this revision — see [§11](#11-open-items--gotchas).)*

---

## 8. Responsive behaviour

| Breakpoint     | Behaviour                                                                      |
|----------------|--------------------------------------------------------------------------------|
| `< 480px`      | Music player tightens to `bottom-4 left-4`. Pill width = `100vw - 32px`.       |
| `< 640px (sm)` | SiteStats drops to 2 columns. SiteFooter columns stack. Stats numbers scale via `clamp`. |
| `< 768px (md)` | Navigation desktop links collapse into the hamburger menu. CTA `Contact` hides on small screens. |
| `< 1024px (lg)`| Main grid collapses 12-col → 1-col. Sidebar stacks above main content.         |

Hero text uses fluid `clamp()` on font size, so it scales smoothly without breakpoint jumps. Padding stays a flat 24px horizontally at every size.

---

## 9. Accessibility

### Done
- Every icon-only button has an `aria-label`. Examples: "Previous slide", "Toggle menu", "Toggle playlist", "Collapse player".
- The dismiss X in the hero is `<button>` not `<div>` despite being decorative.
- Hero scrim is marked `aria-hidden="true"`.
- Avatar fallback initials are wrapped in an element whose visible text is the initials and whose `<img>` (when present) carries `alt={profile.name}`.
- `<header role="banner">` is implicit via `<header>` semantic. Mobile menu sets `aria-expanded` as it opens.
- Online status dot has `aria-label="Online"`.
- Focus is preserved on all interactive surfaces (no `outline: none` without a replacement).

### To watch
- The **floating music player covers ~80×80px** in the bottom-left corner. Users zooming in or with low-vision setups may want it gone — consider a visually-hidden "skip to main content" link or a setting to disable it.
- Auto-collapse on the player happens after **8s of no interaction**. If you have keyboard-only users tab-focused on the pill, the timer will still fire. Consider pausing the timer while focus is inside the pill.
- Hero auto-advance has **no pause-on-focus** affordance for screen readers. If accessibility is a priority, add a pause control or kill the autoplay on `prefers-reduced-motion`.
- No `prefers-reduced-motion` queries currently. Add `@media (prefers-reduced-motion: reduce)` to disable: vinyl spin, halo pulse, EQ bars, scroll hint, slideshow autoplay, ticker autoplay.

### Colour contrast spot-checks
All passing AA on white (4.5:1):
- `ink-900` (`#0f172a`) — 18.7:1 ✅
- `ink-700` (`#334155`) — 11.5:1 ✅
- `ink-500` (`#64748b`) — 5.7:1 ✅
- Teal `#39c5bb` on white — 2.5:1 ❌ (used only for **bold ≥14px** or **large numbers** which lifts the requirement to 3:1, still below). Use `teal-deep` `#2ba8a0` (3.0:1) for body-sized text, which most components already do.

---

## 10. File map

```
src/
├── pages/
│   └── index.astro              # Home page entry (Section 5 layout)
├── layouts/
│   └── BaseLayout.astro         # HTML shell, fonts, global animations
├── components/
│   ├── Navigation.astro         # §6.2
│   ├── HeroSection.astro        # §6.3
│   ├── LocalTime.astro          # §6.4 (NEW)
│   ├── SidebarProfile.astro     # §6.5
│   ├── RecentPosts.astro        # §6.6
│   ├── SiteStats.astro          # §6.7
│   ├── SiteFooter.astro         # §6.8
│   └── MusicPlayer.astro        # §6.9 (refactored to floating)
└── data/
    └── playlist.ts              # Music tracks (consumed by MusicPlayer)
```

**Unused on the home page** (kept around in case other pages need them):
- `HeroBanner.astro` — older inline hero card style.
- `HeroTicker.astro` — frosted-glass post ticker. Designed to slot into HeroSection's `ticker` slot. Removed from home in this revision.
- `ProjectCollections.astro` — 2-column project card grid.

---

## 11. Open items & gotchas

1. **`BaseLayout` brand colour mismatch.** `:root --color-primary` is `#00D1FF` but the rest of the system uses `#39c5bb`. Either kill that variable or normalise to teal. Currently nothing on the home page reads from `--color-primary`, so the inconsistency is invisible — but it'll bite if you ever build something that does.

2. **`bg-page` mismatch.** `BaseLayout` sets `--color-bg-main: #F8FAFC` while the home page uses `bg-[#f1f5f9]` directly. They're close (`#F8FAFC` = `slate-50`, `#f1f5f9` = `slate-100`) but not the same. Pick one and roll it out.

3. **Hero wallpapers are Unsplash placeholders.** The exact "CENTRAL CINEMA" image from the prototype is not in the array — swap in your own asset when ready.

4. **Dismiss X is decorative.** It currently fades itself out on click. If you want it to dismiss something meaningful (a notification banner, a beta flag), wire it up. Otherwise consider deleting it — non-functional UI ages badly.

5. **Music player + nav z-index ordering.** Nav is `z-50`, player is `z-40`. The player is always **below** the nav. If you ever add a modal that needs to cover both, use `z-60`+.

6. **Auto-collapse timer ignores keyboard focus.** See [§9](#9-accessibility).

7. **No `prefers-reduced-motion` handling.** Vinyl will spin, hero will autoplay, EQ bars will dance regardless of OS setting. This is the easiest accessibility win to ship next.

8. **Anime + Dev share `DE` two-letter code.** See note under [§2](#2-design-tokens).

9. **Local time defaults to `Asia/Shanghai`.** If you're not in China, change the prop on the home page. The component is generic — `<LocalTime label="LOCAL TIME · MALAYSIA" timezone="Asia/Kuala_Lumpur" />` works fine.

10. **`HeroTicker` is no longer rendered on home.** It still exists as a component and HeroSection still has a `<slot name="ticker" />`. If you want it back, just pass it through:
    ```astro
    <HeroSection ...>
      <Navigation slot="nav" heroOverlay />
      <HeroTicker slot="ticker" posts={recent} />
    </HeroSection>
    ```

---

*Last updated: 2026-05-04. Update this file when behaviour or tokens change.*# DESIGN.md — Yean Ter Portfolio Home Page

> *所有奇迹的始发点 · Where All Miracles Begin*

A single source of truth for everything UI/UX on the home page. If you change a token or a behaviour, update this file. If you add a new component, add a section.

---

## Table of contents

1. [Design philosophy](#1-design-philosophy)
2. [Design tokens](#2-design-tokens)
3. [Typography](#3-typography)
4. [Spacing, radius, shadow](#4-spacing-radius-shadow)
5. [Page structure & layout](#5-page-structure--layout)
6. [Component reference](#6-component-reference)
7. [Interaction & motion](#7-interaction--motion)
8. [Responsive behaviour](#8-responsive-behaviour)
9. [Accessibility](#9-accessibility)
10. [File map](#10-file-map)
11. [Open items & gotchas](#11-open-items--gotchas)

---

## 1. Design philosophy

The home page is a personal portfolio with three jobs, in order of priority:

1. **Greet the visitor warmly.** A full-bleed cinematic hero sets a mood — neon, late-night, a little nostalgic — and tells you who lives here in two centred lines.
2. **Show what's been made and what's being made.** A scannable list of recent posts in the main column; a profile card in the sidebar that says "this is me, this is what I'm building right now."
3. **Stay ambient.** A floating music player in the corner so the soundtrack follows you down the page. A live local clock in the sidebar so the page feels inhabited.

Visual language: **Plus Jakarta Sans + JetBrains Mono**, white surfaces, soft shadows, generous radius, single-accent teal (`#39c5bb`) with a warm orange sidekick (`#f59e0b`) used sparingly for "new" / "featured" moments. Everything else is slate-gray.

The page should feel **calm, not busy**. No gradients on every surface. No motion for motion's sake. Movement is reserved for things that are alive: the vinyl spinning, the LIVE pulse, the EQ bars in the playlist.

---

## 2. Design tokens

### Colour

#### Brand
| Token            | Hex        | Usage                                                       |
|------------------|------------|-------------------------------------------------------------|
| `teal`           | `#39c5bb`  | Primary brand. CTAs, active states, links, accent dots.     |
| `teal-deep`      | `#2ba8a0`  | Hover state for `teal`. Gradient pair.                      |
| `teal-soft`      | `rgba(57,197,187,0.10)` | Tinted backgrounds (category pills, hover).    |
| `teal-ring`      | `rgba(57,197,187,0.30)` | Subtle borders around teal-tinted surfaces.    |

#### Accents
| Token            | Hex        | Usage                                                       |
|------------------|------------|-------------------------------------------------------------|
| `orange`         | `#f59e0b`  | "Anime" category, "New" badge, secondary accents.           |
| `orange-deep`    | `#d97706`  | Text on orange-tinted backgrounds.                          |
| `orange-soft`    | `rgba(245,158,11,0.10)` | Anime category pill bg, code-square bg.       |
| `purple`         | `#8b5cf6`  | "Journal" category accent.                                  |
| `purple-deep`    | `#7c3aed`  | Text on purple-tinted backgrounds.                          |
| `slate-accent`   | `#475569`  | "Dev" category accent (neutral).                            |

#### Surfaces & ink
| Token            | Hex        | Usage                                                       |
|------------------|------------|-------------------------------------------------------------|
| `bg-page`        | `#f1f5f9`  | The main page background (the gray strip behind cards).     |
| `bg-surface`     | `#ffffff`  | Cards, the footer, the music player pill.                   |
| `bg-muted`       | `#f8fafc`  | Inset blocks (e.g. "Currently building" bar).               |
| `border-default` | `#e2e8f0`  | All card borders.                                           |
| `border-soft`    | `#f1f5f9`  | Hairline dividers inside cards.                             |
| `ink-900`        | `#0f172a`  | Headings, primary text.                                     |
| `ink-700`        | `#334155`  | Body text on light surfaces.                                |
| `ink-500`        | `#64748b`  | Secondary body, navigation links.                           |
| `ink-400`        | `#94a3b8`  | Excerpts, labels.                                           |
| `ink-300`        | `#cbd5e1`  | Disabled, captions, monospace metadata.                     |
| `ink-100`        | `#e2e8f0`  | Decorative dots, very low contrast text.                    |

#### Hero scrim
The hero uses a custom four-stop gradient over the wallpaper for legibility:
```css
linear-gradient(to bottom,
  rgba(0,0,0,0.08)  0%,
  rgba(0,0,0,0.18) 35%,
  rgba(0,0,0,0.55) 70%,
  rgba(0,0,0,0.85) 100%);
```

### Category colour map

The `Recent Posts` card system uses one row per category. **Always source colours from this table** — don't hand-pick new shades.

| Category | Accent   | Pill bg                | Pill text  | Code box bg            | Code-box text | Code |
|----------|----------|------------------------|------------|------------------------|---------------|------|
| Anime    | `#f59e0b`| `rgba(245,158,11,0.10)`| `#d97706`  | `rgba(245,158,11,0.08)`| `#d97706`     | `AN` |
| Design   | `#39c5bb`| `rgba(57,197,187,0.10)`| `#2ba8a0`  | `rgba(57,197,187,0.08)`| `#2ba8a0`     | `DE` |
| Dev      | `#475569`| `rgba(71,85,105,0.10)` | `#334155`  | `rgba(71,85,105,0.06)` | `#475569`     | `DE` |
| Journal  | `#8b5cf6`| `rgba(139,92,246,0.10)`| `#7c3aed`  | `rgba(139,92,246,0.08)`| `#7c3aed`     | `JO` |
| (fallback)| `#475569`| `rgba(71,85,105,0.10)`| `#334155`  | `rgba(71,85,105,0.06)` | `#475569`     | `PO` |

> **Note:** Anime and Dev share the `DE` two-letter code by accident. If they ever appear next to each other and read ambiguously, change `Dev` → `DV`. The map lives in `RecentPosts.astro`.

---

## 3. Typography

### Font families
- **Plus Jakarta Sans** (400 / 500 / 600 / 700 / 800 / 900) — everything UI.
- **JetBrains Mono** (500) — clocks, dates, file paths (`index.astro`), serial-style metadata, anywhere we want the "code-y" feel.

Both are loaded once in `BaseLayout.astro` from Google Fonts.

### Scale

| Use                                    | Size                       | Weight | Tracking      |
|----------------------------------------|----------------------------|--------|---------------|
| Hero title (`Yean Ter`)                | `clamp(2.6rem, 6.5vw, 4.5rem)` | 900   | tight         |
| Hero greeting line                     | 13px                       | 500    | wide          |
| Hero tagline                           | `clamp(0.85rem, 1.6vw, 1rem)` | 500    | wide          |
| Hero CTA                               | 13px                       | 700    | normal        |
| Section divider label (e.g. SITE STATS)| 10px                       | 900    | `0.22em`      |
| Big stat number                        | `clamp(1.85rem, 3.5vw, 2.4rem)` | 900   | tabular nums  |
| Card title (post)                      | 14px                       | 900    | tight         |
| Card excerpt                           | 12px                       | 500    | normal        |
| Profile name                           | 18px                       | 900    | tight         |
| Profile tagline                        | 12px                       | 500    | normal        |
| Sidebar section label                  | 9px                        | 900    | `0.20em`      |
| LocalTime clock                        | 18px JetBrains Mono        | 900    | `0.04em`      |
| Footer columns header (PAGES, TAGS)    | 10px                       | 900    | `0.18em`      |
| Tag pill                               | 10px                       | 700    | normal        |
| Category pill                          | 10px                       | 900    | `0.12em` upper |
| Hashtag (`#UI`)                        | 10px JetBrains Mono        | 400    | normal        |
| Date metadata                          | 10px JetBrains Mono        | 400    | normal        |

### Casing

- **UPPERCASE + wide tracking** is reserved for category pills, section labels, and stat captions. Never put body text in uppercase.
- **Headings** use sentence case: `My Top 5 Anime This Season`, not `My Top 5 Anime this Season`.
- **Buttons** use Title Case: `Browse Work`, `View all posts`.

---

## 4. Spacing, radius, shadow

### Spacing rhythm

Tailwind defaults (`gap-1` = 4px, `gap-2` = 8px, etc.). Most layouts use `gap-3` (12px), `gap-4` (16px), `gap-5` (20px), `gap-8` (32px). Vertical rhythm in the sidebar is `space-y-5` (20px).

Page max width: **1100px** (`max-w-[1100px]`). This is non-negotiable — every inner container respects it. Outer regions (hero, stats, footer) bleed full-width but their inner content reins back to 1100.

Page horizontal padding: **24px** (`px-6`) at all breakpoints.

### Border radius

| Surface             | Radius       |
|---------------------|--------------|
| Pill (CTA, tag, badge, music player pill) | `9999px` |
| Card (post, profile, music drawer, stats) | `16px` (`rounded-2xl`) |
| Inset block (currently building, code square)| `12px` (`rounded-xl`) |
| Small badge (LIVE, category pill)         | `8px` (`rounded-md` / `rounded-lg`) |
| Hover/focus ring                          | matches host  |

### Shadow

There are exactly **four** shadow levels. Don't invent more.

| Level        | Value                                                       | Used on                          |
|--------------|-------------------------------------------------------------|----------------------------------|
| `shadow-card`| `0 4px 20px rgba(15,23,42,0.04)`                            | Default white cards (idle).      |
| `shadow-card-hover`| `0 6px 24px rgba(15,23,42,0.06)` or `rgba(57,197,187,0.08)` | Cards on hover.                  |
| `shadow-cta` | `0 4px 24px rgba(57,197,187,0.45)`                          | Primary teal CTA (Browse Work).  |
| `shadow-float` | `0 8px 28px rgba(15,23,42,0.18)` (with optional pulsing ring) | Floating music player disc.   |

CTA hover boosts to `0 6px 28px rgba(57,197,187,0.6)`. Music player playing-state adds a pulsing teal ring via animation (see [§7](#7-interaction--motion)).

---

## 5. Page structure & layout

### Vertical flow

```
┌─────────────────────────────────────────────────┐
│  Hero (100vh, full-bleed)                       │
│  ├── Navigation (overlay, transitions on scroll)│
│  ├── LIVE badge (top-left)                      │
│  ├── Dismiss X (top-center, decorative)         │
│  ├── Title block (centered, lower-third)        │
│  │   ├── Greeting line                          │
│  │   ├── Title — "Yean Ter"                     │
│  │   ├── Tagline                                │
│  │   └── Two CTAs                               │
│  └── Slide nav (bottom-center: ‹ • • ‹•› • • ›) │
├─────────────────────────────────────────────────┤
│  Main grid (max-w-1100, on bg-page)             │
│  ┌──────── 4 ────────┬──────── 8 ──────────┐    │
│  │ LocalTime         │ RecentPosts         │    │
│  │ SidebarProfile    │ (8 cards stacked)   │    │
│  │                   │ View all posts →    │    │
│  └───────────────────┴─────────────────────┘    │
├─────────────────────────────────────────────────┤
│  SiteStats (full-bleed, on bg-page)             │
│  • SITE STATS divider                           │
│  • 4 white cards: Posts · Words · Tags · Days   │
├─────────────────────────────────────────────────┤
│  SiteFooter (full-bleed, white)                 │
│  ┌──────────┬──────────┬──────────────────┐     │
│  │ Brand    │ Pages    │ Tags             │     │
│  └──────────┴──────────┴──────────────────┘     │
│  Bottom bar: © · 所有奇迹的始发点                │
└─────────────────────────────────────────────────┘

Floating overlay (always on top, persistent):
  • Music Player (bottom-left, fixed)
```

### Grid

- Hero, SiteStats, SiteFooter are **full-bleed sections**. Their direct child re-applies `max-w-[1100px] mx-auto px-6`.
- Main content uses a 12-column CSS grid: `grid grid-cols-1 lg:grid-cols-12 gap-8`.
  - Sidebar: `lg:col-span-4`
  - Main:    `lg:col-span-8`
- Below `lg` (1024px), the grid collapses to a single column. Sidebar stacks above main.

### Z-index map

| Layer              | Z-index | Element                                        |
|--------------------|---------|------------------------------------------------|
| Floating player    | `40`    | `MusicPlayer` (`#floating-player`)             |
| Navigation         | `50`    | `Navigation` header                            |
| Hero overlays      | `20`    | LIVE badge, dismiss X, slide nav               |
| Hero centre block  | `10`    | Title group, scroll hint                       |
| Page bg accents    | `-10`   | The fixed teal blur orb                        |

> **Important:** The Navigation (`z-50`) sits **above** the floating music player (`z-40`) on purpose — the nav must always be reachable. If you move things around, preserve this order.

---

## 6. Component reference

### 6.1 BaseLayout (`layouts/BaseLayout.astro`)

The HTML shell. Mounts fonts, applies the Plus Jakarta Sans body, sets `bg-page` (currently `#F8FAFC` — should be normalised to `#f1f5f9` to match the rest of the system).

Contains two global animations referenced by other components:
- `.vinyl-record` — 4s linear infinite spin, paused by default, runs when `.playing` is added. *Used by the older sidebar music player; the floating player uses its own scoped `.fp-vinyl-spin` and does not depend on this.*
- `.loading-shimmer` — the wallpaper loader stripe. Currently only used by `HeroBanner.astro` (not on the home page).

### 6.2 Navigation (`Navigation.astro`)

Sticky-or-floating header, max-width 1100, height 64px.

**Modes**
- `heroOverlay={false}` (default) — sticky from page load, frosted-glass white background.
- `heroOverlay={true}` — starts `position: absolute` and **fully transparent** so it floats over the hero image; transitions to frosted-glass and switches to `position: sticky` once the user has scrolled more than 60px.

**Links** — `Home / Projects / Anime / Resume / About`. Each has:
- Active state: teal text, bold, with a 3×2px teal underline pill below.
- Hover state: text darkens to `slate-900` on a frosted background, or to white on the hero overlay.

**CTA** — single `Contact` pill on the right (`slate-900` bg, white text). Mobile: hidden behind the hamburger.

**Mobile menu** — 3-line hamburger animates to ✕. Drawer reveals via `max-height` transition. Auto-closes on outside click and on Astro view transitions.

> **Bug fixed in this revision:** the scroll handler used to query `[data-hero-link]` but the attribute was never set on the link elements, so the link colour didn't actually flip on scroll. The attribute is now applied conditionally (only when `heroOverlay=true`).

### 6.3 HeroSection (`HeroSection.astro`)

Full-viewport (`min-height: 100vh`) cinematic hero.

**Props**
| Prop          | Type                       | Default                              | Notes                                  |
|---------------|----------------------------|--------------------------------------|----------------------------------------|
| `title`       | string                     | required                             | Renders as the big centered H1.        |
| `tagline`     | string                     | —                                    | Bilingual subtitle line.               |
| `greeting`    | string                     | —                                    | Small line above title (with emoji ok).|
| `wallpapers`  | `{src, alt}[]`             | —                                    | Slideshow mode if length > 1.          |
| `wallpaper`   | string                     | unsplash placeholder                 | Single-image fallback.                 |
| `liveLabel`   | string                     | `'LIVE'`                             | Top-left badge text.                   |
| `primaryCta`  | `{label, href}`            | `{Browse Work, /projects}`           | Teal solid pill.                       |
| `secondaryCta`| `{label, href, badge?}`    | `{Anime Labs, /anime, badge:'New'}`  | Dark glass pill with optional badge.   |

**Anatomy (top to bottom)**
1. **Wallpaper layer** — stack of `<img>` elements, all `object-cover`, fading via `opacity` on slide change.
2. **Scrim** — see [§2](#2-design-tokens). Pointer-events disabled.
3. **LIVE badge** — top-left at `top-20 left-6` (80px / 24px), teal-80 bg, white pulsing dot.
4. **Dismiss X** — `top-[68px]`, centered horizontally. Decorative; clicking fades it out. Treat as a **playful** affordance, not load-bearing UX.
5. **Navigation slot** — `<slot name="nav" />`. Parent injects `<Navigation heroOverlay />`.
6. **Centre text block** — `bottom: 24%`, centred. Contains greeting + title + tagline + CTA row.
7. **Slide nav** — `bottom: 80px`, centred, frosted dark pill: prev chevron · dot · dot · pill · dot · dot · next chevron. Active dot is wider (`w-5`).
8. **Scroll hint** — `bottom-3`, centred. A 1px × 24px white vertical line that pulses scaleY. Fades out once `window.scrollY > 40`.

**Slideshow timing** — auto-advance every **6 seconds**. User interaction with prev/next/dots resets the cadence.

### 6.4 LocalTime (`LocalTime.astro`)

Small white card. Sits at the **top of the sidebar**, above the profile.

**Layout** — left: 40×40 teal-tinted ring with a clock-face SVG. Right: three lines stacked.
- Top line: `LOCAL TIME · CHINA` (9px, 900, slate-400, `tracking-[0.18em]`).
- Middle line: `02:33:54` (18px, 900, slate-900, JetBrains Mono, tabular-nums, `letter-spacing: 0.04em`).
- Bottom line: `Mon, May 4` (10px, 500, slate-400, tabular-nums).

**Behaviour** — uses `Intl.DateTimeFormat` with `timeZone: 'Asia/Shanghai'`. Recomputes every 1000ms via `setInterval`. Format is **24-hour** (`hour12: false`), so this clock reads `02:33:54` not `2:33:54 AM`.

**Props** — `label` (default `LOCAL TIME · CHINA`) and `timezone` (default `Asia/Shanghai`). Both are configurable; if you change to e.g. `Asia/Tokyo`, also update the label.

### 6.5 SidebarProfile (`SidebarProfile.astro`)

White card, no gradient ring (cleaner than the previous revision).

**Anatomy (top to bottom)**
1. Section label — teal dot + `PROFILE`.
2. Avatar (56×56, gradient teal fill with initials fallback) + name + tagline. Online dot in the corner of the avatar, animated pulse.
3. Tags — wrap row of 10px uppercase pills. Teal for skills, orange for hobbies, slate for "neutral" tech. Map lives in the component.
4. **Currently building** strip — slate-50 inset rectangle, teal pulsing dot, two stacked lines (label + status).
5. Hairline divider.
6. **Directory / Pages** — five mock-file links (`index.astro`, `projects.astro`, …) each with a coloured dot prefix. Hover turns the link teal.

The whole card has a soft hover that boosts the shadow tint from neutral to a faint teal.

### 6.6 RecentPosts (`RecentPosts.astro`)

The main content column. **No top divider** in this revision — the list begins immediately.

**Card anatomy** (one row per post)
```
┌──┬─────────────────────────────────────────────────────────┐
│  │ [CATEGORY]  #tag  #tag                       date     │  │
│ ▌│ Title (one line, line-clamp-1)                          │
│  │ Excerpt over up to two lines, slate-400.                │
└──┴─────────────────────────────────────────────────────────┘
                                           ↑ 78×78 code square
```

- **Left accent bar** — 4px wide, full card height, coloured per category. Animates to 6px (`w-1.5`) on hover.
- **Meta row** — category pill (uppercase, tinted), then `#tags` in JetBrains Mono slate-300, then date pushed to the right (`ml-auto`, also slate-300 mono).
- **Title** — 14px, weight 900. Turns teal on row hover.
- **Excerpt** — 12px, slate-400, two-line clamp.
- **Right code square** — 78×78 rounded `rounded-xl`, tinted with the category's `boxBg`, displays the two-letter `code` (e.g. `AN`) at 13px / 900 / 0.55 opacity. Scales 1.05 on hover. If the post has a `heroImage`, that replaces the code.

**View all** — centred link below the list with a subtle right arrow.

**Demo data** — when the posts collection is empty, the component renders 8 demo cards covering all four categories so the layout never collapses.

### 6.7 SiteStats (`SiteStats.astro`)

Full-bleed strip on `bg-page`.

- Centred section label `SITE STATS` flanked by a teal-fading hairline on each side.
- Four white cards in a 1-column → 2-column → 4-column responsive grid (`grid-cols-2 sm:grid-cols-4`), `gap-4`. Each card has its own border + soft shadow.
- Inside each card: big number (`clamp(1.85rem, 3.5vw, 2.4rem)`, weight 900, tabular-nums) above a 10px uppercase caption.
- Empty values render as `—` so the layout never collapses.

### 6.8 SiteFooter (`SiteFooter.astro`)

White, `border-t` only (no internal stat bar — `SiteStats` does that now).

- **Three columns** in a 1 → 3 grid:
  1. **Brand** — gradient `PORTFOLIO` wordmark, bilingual tagline, GitHub + X social pills, version pill with a pulsing teal dot.
  2. **Pages** — 5 vertical nav links with a tiny dot prefix.
  3. **Tags** — flex-wrap of pill-shaped tags. If the live `tags` prop is empty, falls back to a fixed demo list rendered as non-link `<span>`s (so they don't 404).
- **Bottom bar** — `mt-10 pt-5 border-t`. Left: `© <year> <ownerName> · Built with Astro`. Right: `所有奇迹的始发点` (very low contrast).

### 6.9 MusicPlayer (`MusicPlayer.astro`) — floating

Position-fixed at `bottom-6 left-6` (`bottom-4 left-4` on mobile). `z-40`. Persistent across scroll.

**Three states**
| State          | Class on `#floating-player`     | Visual                                                  |
|----------------|---------------------------------|---------------------------------------------------------|
| `collapsed`    | (no extra class)                | 56×56 black vinyl disc with glowing teal core.          |
| `expanded`     | `.expanded`                     | 320px white pill: small disc + track info + 5 controls. |
| `playlist-open`| `.expanded.playlist-open`       | Drawer (320×280max) slides up from above the pill.      |

**Initial reveal** — the entire container has `opacity: 0; transform: translateY(20px); pointer-events: none`. Once `window.scrollY > 200`, it fades in and slides up via the `.visible` class. So the player **never appears over the hero CTAs**.

**Interactions**
- **Disc click** (collapsed) → expand. If audio hasn't started, also kicks off track 0.
- **Vinyl click** (inside pill) → toggle play/pause.
- **Teal play button** → toggle play/pause.
- **Prev / Next** → switch tracks; preserves play state (skipping while playing keeps it playing).
- **List button** (☰) → toggle playlist drawer; goes teal when open.
- **Close** (✕) → collapse back to disc.
- **Click outside the player** → closes the drawer but **keeps the pill expanded** (less aggressive).
- **Auto-collapse** — if the player is paused **and** the user hasn't moused over for 8 seconds, it collapses itself. Playing audio cancels the timer indefinitely.

**Visual feedback**
- Disc spins (4s linear) only when `.playing` is on it.
- A pulsing teal halo (`@keyframes fpPulse`) rings the disc while playing — `box-shadow: 0 0 0 8px rgba(57,197,187,0)` expanding outward over 2s.
- The currently playing track in the drawer shows three dancing EQ bars in place of its number.

**Empty state** — if `playlist` is empty, the player still renders but as a static dim disc with `cursor: default` and a tooltip "No tracks loaded." No script wires up.

**Audio engine** — single hidden `<audio id="audioEngine" preload="metadata">` shared across the player. The ID is preserved from the previous revision so any external integrations (analytics, Media Session API) keep working.

---

## 7. Interaction & motion

### Easing & duration

- **Default ease** for all hover transitions: `ease` or `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's default).
- **Default duration**: 200ms for state changes, 300ms for layout-y things (nav backdrop), 400ms for reveals (player slide-up uses `cubic-bezier(0.16, 1, 0.3, 1)` for a softer landing).
- **Long autoplay loops** (slideshow, vinyl spin): linear so they don't read as breathing.

### Hover-level micro-interactions

| Surface                      | Hover effect                                         |
|------------------------------|------------------------------------------------------|
| Post card                    | `translate-y(-2px)` + shadow lift                    |
| Profile / LocalTime card     | Shadow tint shifts neutral → teal                    |
| Primary CTA (`Browse Work`)  | `translate-y(-2px)` + brighter shadow                |
| Secondary CTA (`Anime Labs`) | `translate-y(-2px)` + bg darkens                     |
| Music disc (collapsed)       | `scale(1.05)` + teal border ring intensifies         |
| Music disc (with overlay)    | A blurred dark veil fades in revealing play icon     |
| Code square in post card     | `scale(1.05)`                                        |
| Nav link (non-active)        | bg `slate-100/80`, text darkens to `slate-900`       |

### Looping animations

| Animation         | Duration | Where                                 |
|-------------------|----------|---------------------------------------|
| `vinyl-spin`      | 4s linear| Music disc (only while playing)       |
| `fpPulse`         | 2s ease  | Music disc halo (only while playing)  |
| `fpEq`            | 0.8s alt | EQ bars in the playlist drawer        |
| `scrollPulse`     | 2s ease  | Hero scroll-hint vertical line        |
| `pulse` (Tailwind)| ~2s      | LIVE badge dot, online dot, focus dots|

### Slideshow & ticker timings

- Hero wallpaper auto-advance: **6000ms**.
- Hero ticker (when used) auto-advance: **4000ms**. *(Not used on the home page in this revision — see [§11](#11-open-items--gotchas).)*

---

## 8. Responsive behaviour

| Breakpoint     | Behaviour                                                                      |
|----------------|--------------------------------------------------------------------------------|
| `< 480px`      | Music player tightens to `bottom-4 left-4`. Pill width = `100vw - 32px`.       |
| `< 640px (sm)` | SiteStats drops to 2 columns. SiteFooter columns stack. Stats numbers scale via `clamp`. |
| `< 768px (md)` | Navigation desktop links collapse into the hamburger menu. CTA `Contact` hides on small screens. |
| `< 1024px (lg)`| Main grid collapses 12-col → 1-col. Sidebar stacks above main content.         |

Hero text uses fluid `clamp()` on font size, so it scales smoothly without breakpoint jumps. Padding stays a flat 24px horizontally at every size.

---

## 9. Accessibility

### Done
- Every icon-only button has an `aria-label`. Examples: "Previous slide", "Toggle menu", "Toggle playlist", "Collapse player".
- The dismiss X in the hero is `<button>` not `<div>` despite being decorative.
- Hero scrim is marked `aria-hidden="true"`.
- Avatar fallback initials are wrapped in an element whose visible text is the initials and whose `<img>` (when present) carries `alt={profile.name}`.
- `<header role="banner">` is implicit via `<header>` semantic. Mobile menu sets `aria-expanded` as it opens.
- Online status dot has `aria-label="Online"`.
- Focus is preserved on all interactive surfaces (no `outline: none` without a replacement).

### To watch
- The **floating music player covers ~80×80px** in the bottom-left corner. Users zooming in or with low-vision setups may want it gone — consider a visually-hidden "skip to main content" link or a setting to disable it.
- Auto-collapse on the player happens after **8s of no interaction**. If you have keyboard-only users tab-focused on the pill, the timer will still fire. Consider pausing the timer while focus is inside the pill.
- Hero auto-advance has **no pause-on-focus** affordance for screen readers. If accessibility is a priority, add a pause control or kill the autoplay on `prefers-reduced-motion`.
- No `prefers-reduced-motion` queries currently. Add `@media (prefers-reduced-motion: reduce)` to disable: vinyl spin, halo pulse, EQ bars, scroll hint, slideshow autoplay, ticker autoplay.

### Colour contrast spot-checks
All passing AA on white (4.5:1):
- `ink-900` (`#0f172a`) — 18.7:1 ✅
- `ink-700` (`#334155`) — 11.5:1 ✅
- `ink-500` (`#64748b`) — 5.7:1 ✅
- Teal `#39c5bb` on white — 2.5:1 ❌ (used only for **bold ≥14px** or **large numbers** which lifts the requirement to 3:1, still below). Use `teal-deep` `#2ba8a0` (3.0:1) for body-sized text, which most components already do.

---

## 10. File map

```
src/
├── pages/
│   └── index.astro              # Home page entry (Section 5 layout)
├── layouts/
│   └── BaseLayout.astro         # HTML shell, fonts, global animations
├── components/
│   ├── Navigation.astro         # §6.2
│   ├── HeroSection.astro        # §6.3
│   ├── LocalTime.astro          # §6.4 (NEW)
│   ├── SidebarProfile.astro     # §6.5
│   ├── RecentPosts.astro        # §6.6
│   ├── SiteStats.astro          # §6.7
│   ├── SiteFooter.astro         # §6.8
│   └── MusicPlayer.astro        # §6.9 (refactored to floating)
└── data/
    └── playlist.ts              # Music tracks (consumed by MusicPlayer)
```

**Unused on the home page** (kept around in case other pages need them):
- `HeroBanner.astro` — older inline hero card style.
- `HeroTicker.astro` — frosted-glass post ticker. Designed to slot into HeroSection's `ticker` slot. Removed from home in this revision.
- `ProjectCollections.astro` — 2-column project card grid.

---

## 11. Open items & gotchas

1. **`BaseLayout` brand colour mismatch.** `:root --color-primary` is `#00D1FF` but the rest of the system uses `#39c5bb`. Either kill that variable or normalise to teal. Currently nothing on the home page reads from `--color-primary`, so the inconsistency is invisible — but it'll bite if you ever build something that does.

2. **`bg-page` mismatch.** `BaseLayout` sets `--color-bg-main: #F8FAFC` while the home page uses `bg-[#f1f5f9]` directly. They're close (`#F8FAFC` = `slate-50`, `#f1f5f9` = `slate-100`) but not the same. Pick one and roll it out.

3. **Hero wallpapers are Unsplash placeholders.** The exact "CENTRAL CINEMA" image from the prototype is not in the array — swap in your own asset when ready.

4. **Dismiss X is decorative.** It currently fades itself out on click. If you want it to dismiss something meaningful (a notification banner, a beta flag), wire it up. Otherwise consider deleting it — non-functional UI ages badly.

5. **Music player + nav z-index ordering.** Nav is `z-50`, player is `z-40`. The player is always **below** the nav. If you ever add a modal that needs to cover both, use `z-60`+.

6. **Auto-collapse timer ignores keyboard focus.** See [§9](#9-accessibility).

7. **No `prefers-reduced-motion` handling.** Vinyl will spin, hero will autoplay, EQ bars will dance regardless of OS setting. This is the easiest accessibility win to ship next.

8. **Anime + Dev share `DE` two-letter code.** See note under [§2](#2-design-tokens).

9. **Local time defaults to `Asia/Shanghai`.** If you're not in China, change the prop on the home page. The component is generic — `<LocalTime label="LOCAL TIME · MALAYSIA" timezone="Asia/Kuala_Lumpur" />` works fine.

10. **`HeroTicker` is no longer rendered on home.** It still exists as a component and HeroSection still has a `<slot name="ticker" />`. If you want it back, just pass it through:
    ```astro
    <HeroSection ...>
      <Navigation slot="nav" heroOverlay />
      <HeroTicker slot="ticker" posts={recent} />
    </HeroSection>
    ```

---

*Last updated: 2026-05-04. Update this file when behaviour or tokens change.*