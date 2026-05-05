# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build
npm run preview   # preview the production build
npm run format    # format all files with Prettier
```

No test suite is configured.

## Architecture

**Framework:** Astro 4 with Tailwind CSS and MDX. Zero JS frameworks — all interactivity is written as vanilla TypeScript inside `<script>` tags within `.astro` files.

**Pages** (`src/pages/`): `index.astro`, `projects.astro`, `anime.astro`, `about.astro`. Each page composes components inside `BaseLayout.astro`.

**Content collections** (`src/content/`):
- `posts` collection — markdown/MDX posts with required frontmatter: `title`, `date`, `category` (enum: `Projects | Anime | Notes | Design`), `wordCount`, `description`, `tags[]`, optional `image` and `isEncrypted`.
- `pageData` collection — MDX files that drive page-level data (currently only `anime.mdx`, which is the source of truth for the anime list). Add/edit anime entries there, not in the component.

**Music player** (`src/components/MusicPlayer.astro`): To add a track, drop an MP3 into `public/music/` and add an entry to `src/data/playlist.ts`. The player is a fixed bottom-left island; it reveals after 200px of scroll.

**Hero wallpaper slideshow** (`src/components/HeroSection.astro`): Accepts a `wallpapers` array of `{src, alt}`. Supports both image and video files (detected by extension). Videos autoplay/muted/loop. Static images lazy-load after the first slide. The slideshow auto-advances only on first visit (tracked via `sessionStorage`).

**Navigation** (`src/components/Navigation.astro`): Pass `heroOverlay={true}` on pages that have a full-viewport hero — the nav starts transparent and fades to frosted-glass on scroll.

## Design tokens

All custom colors are defined in `tailwind.config.mjs` under `theme.extend.colors`:

| Token | Hex | Use |
|---|---|---|
| `miku` / `#39c5bb` | teal | primary brand, CTAs, active states |
| `yuru` / `#F07535` | orange | secondary accent, "Next" roadmap |
| `kato` / `#F5B3C8` | pink | badge accent |
| `warm.ink` / `#24231f` | near-black | headings |
| `warm.body` / `#3a3833` | dark warm | body text |
| `warm.muted` / `#787670` | warm grey | muted/secondary text |
| `warm.meta` / `#a8a69f` | light grey | mono metadata, timestamps |
| `warm.bg` / `#f7f6f2` | off-white | page background |
| `warm.border` / `#ece9e0` | warm border | card borders |

Fonts loaded from Google Fonts: **Inter** (UI text) and **JetBrains Mono** (code, timestamps, metadata).

The custom `ease-site` timing function (`cubic-bezier(0.22, 1, 0.36, 1)`) should be used for hover/transition animations instead of the default Tailwind eases.

## Static assets

- Wallpaper images/videos → `public/images/wallpapers/`
- Music files → `public/music/`
- Anime poster images are sourced externally (MAL URLs); an `onerror` fallback uses picsum.photos.

## Adding anime entries

Edit `src/content/pageData/anime.mdx`. Each entry in `animeList` can have:
- `title` (string, required)
- `poster` (URL string, optional — falls back to picsum)
- `isPremium` (boolean, optional — adds orange/teal gradient ring + "★ Pick" badge)
- `quote` (string, optional — shown on card flip)
