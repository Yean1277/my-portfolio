# SPEC.md

Project spec. Compressed format: fragments + tables, no filler. Technical values byte-exact from source.

## 1. Overview

Personal portfolio site. Astro static SSG. Zero backend, zero runtime services, zero JS frameworks — all interactivity = vanilla TypeScript in `<script>` tags inside `.astro` files. Deploy target: GitHub Pages.

## 2. Tech Stack

| Layer     | Tool                                                | Version                             | Notes                                  |
| --------- | --------------------------------------------------- | ----------------------------------- | -------------------------------------- |
| Framework | `astro`                                             | `^4.16.0`                           | static output, no adapter              |
| Styling   | `tailwindcss` + `@astrojs/tailwind`                 | `^3.4.19` / `^6.0.2`                | custom tokens in `tailwind.config.mjs` |
| Content   | `@astrojs/mdx`                                      | `^3.0.0`                            | content collections                    |
| Lang      | `typescript`                                        | `^5.0.0`                            | strict; alias `@/* → ./src/*` (unused) |
| 3D        | `three` + `@tweenjs/tween.js` + `@types/three`      | `^0.183.2` / `^25.0.0` / `^0.183.1` | INSTALLED, UNUSED                      |
| Lint/Fmt  | `eslint` / `prettier`                               | `^9.0.0` / `^3.0.0`                 | `npm run format`                       |
| CSS build | `postcss` + `autoprefixer` + `@tailwindcss/postcss` | `^8.4.0` / `^10.4.27` / `^4.0.0`    | ⚠ v3/v4 devDep mismatch                |
| Runtime   | Node                                                | 20                                  | CI only — no server runtime            |
| Hosting   | GitHub Pages                                        | —                                   | `.github/workflows/astro.yml`          |

Scripts: `npm run dev` (localhost:4321) · `build` · `preview` · `format`. No test suite.

## 3. Directory Structure

```
my-portfolio/
├── astro.config.mjs              # tailwind + mdx integrations, devToolbar off
├── tailwind.config.mjs           # design tokens (§8)
├── tsconfig.json                 # strict, @/* alias
├── eslint.config.mjs / postcss.config.mjs
├── CLAUDE.md / DESIGN.md / README.md / SPEC.md
├── .github/workflows/astro.yml   # Pages deploy (§10)
├── public/
│   ├── images/wallpapers/        # hero wallpapers (img + mp4)
│   └── music/                    # 5 MP3 tracks
└── src/
    ├── components/               # 6 components (§7)
    ├── content/
    │   ├── config.ts             # collection schemas (§5)
    │   └── pageData/             # about.mdx, anime.mdx
    ├── data/playlist.ts          # Track[] (§5)
    ├── layouts/BaseLayout.astro  # HTML shell, fonts, globals.css
    ├── pages/                    # 4 routes (§4)
    └── styles/globals.css
```

`src/content/posts/` does not exist yet — queries use `.catch(() => [])` fallback.

## 4. Routes & Endpoints

**API endpoints: NONE.** Static SSG — all data injected at build time. No dynamic routes, no RSS, no sitemap.

| Route           | Source file                | Data source                                                           | Status                                  |
| --------------- | -------------------------- | --------------------------------------------------------------------- | --------------------------------------- |
| `/`             | `src/pages/index.astro`    | `posts` collection (fallback `[]`) + demo                             | LIVE                                    |
| `/projects`     | `src/pages/projects.astro` | inline constants                                                      | LIVE                                    |
| `/anime`        | `src/pages/anime.astro`    | `pageData` entry `anime` → `animeList`                                | LIVE                                    |
| `/about`        | `src/pages/about.astro`    | `pageData` entry `about` → MDX `<Content/>`; redirects `/` if missing | LIVE                                    |
| `/posts`        | —                          | —                                                                     | PLANNED (linked in copy, unimplemented) |
| `/posts/[slug]` | —                          | —                                                                     | PLANNED (linked in copy, unimplemented) |

## 5. Data Model

### `posts` collection (`src/content/config.ts`)

| Field         | Type                                         | Req |
| ------------- | -------------------------------------------- | --- |
| `title`       | `string`                                     | ✔   |
| `date`        | `string`                                     | ✔   |
| `category`    | `enum: Projects \| Anime \| Notes \| Design` | ✔   |
| `wordCount`   | `number`                                     | ✔   |
| `description` | `string`                                     | ✔   |
| `tags`        | `string[]`                                   | ✔   |
| `image`       | `string`                                     | —   |
| `isEncrypted` | `boolean` — RESERVED, zero consumers (§6)    | —   |

### `pageData` collection

| Field       | Type           | Req |
| ----------- | -------------- | --- |
| `title`     | `string`       | —   |
| `animeList` | `AnimeEntry[]` | —   |

`AnimeEntry`: `title: string` (req) · `poster: string` (req, MAL URL) · `isPremium?: boolean` (visual badge only) · `quote?: string` (card flip).

### `Track` (`src/data/playlist.ts`)

```ts
interface Track {
  id: number;
  title: string;
  artist: string;
  file: string; // filename inside public/music/
  durationStr?: string;
}
```

### `HeroSection` wallpapers prop

`wallpapers: { src: string; alt: string }[]` — img or video by extension; video = autoplay/muted/loop.

## 6. Auth (鉴权方案)

**Current: NONE. Site fully public.** No login, no session, no cookie, no API.

- `isEncrypted` (posts schema) = reserved flag. Zero consuming logic anywhere in `src/`.
- `isPremium` (anime entries) = cosmetic ring + "★ Pick" badge. NOT access control.

**PROPOSED — not implemented.** Static-host-compatible encrypted posts:

1. Build: encrypt body of `isEncrypted: true` posts. Key = PBKDF2(password), cipher = AES-GCM (Web Crypto API).
2. Runtime: password prompt → derive key in browser → decrypt → render.
3. Limits: frontmatter/metadata stay public; protects content only; not a user/account system. Fits GitHub Pages (no server needed).

## 7. Components

| Component                  | Purpose                                                    | Key props / contract                                                                               |
| -------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `HeroSection.astro`        | Full-viewport wallpaper slideshow hero + CTAs              | `wallpapers: {src, alt}[]`; nav via `slot="nav"`; auto-advance first visit only (`sessionStorage`) |
| `Navigation.astro`         | Top nav (Home/Projects/Anime/About)                        | `heroOverlay: boolean` — transparent → frosted-glass on scroll                                     |
| `MusicPlayer.astro`        | Fixed bottom-left audio player, reveals after 200px scroll | reads `playlist` from `src/data/playlist.ts`                                                       |
| `ProjectCollections.astro` | Grid of ≤4 recent posts                                    | `posts` collection, demo fallback                                                                  |
| `SiteStats.astro`          | Stats strip                                                | numeric props: posts / words / tags / days online                                                  |
| `SiteFooter.astro`         | Footer nav + owner                                         | `ownerName` (default "Yean Ter")                                                                   |
| `layouts/BaseLayout.astro` | HTML shell                                                 | title/meta, Google Fonts preload, `globals.css`                                                    |

## 8. Design Tokens (`tailwind.config.mjs`)

| Token         | Hex       | Use                              |
| ------------- | --------- | -------------------------------- |
| `miku`        | `#39c5bb` | primary brand, CTAs, active      |
| `yuru`        | `#F07535` | secondary accent, "Next" roadmap |
| `kato`        | `#F5B3C8` | badge accent                     |
| `warm.ink`    | `#24231f` | headings                         |
| `warm.body`   | `#3a3833` | body text                        |
| `warm.muted`  | `#787670` | muted/secondary text             |
| `warm.meta`   | `#a8a69f` | mono metadata, timestamps        |
| `warm.bg`     | `#f7f6f2` | page background                  |
| `warm.border` | `#ece9e0` | card borders                     |

Fonts: **Inter** (UI) + **JetBrains Mono** (code/metadata), Google Fonts. Transitions: `ease-site` = `cubic-bezier(0.22, 1, 0.36, 1)` — use instead of default Tailwind eases. Full rationale: `DESIGN.md`.

## 9. Assets

| Asset         | Location                    | Rule                                          |
| ------------- | --------------------------- | --------------------------------------------- |
| Wallpapers    | `public/images/wallpapers/` | img + mp4 supported                           |
| Music         | `public/music/`             | drop MP3 + register in `src/data/playlist.ts` |
| Anime posters | external (MAL URLs)         | `onerror` fallback → picsum.photos            |

## 10. Build & Deploy

Flow: push `main` → GitHub Actions (`.github/workflows/astro.yml`) → `npm ci` → `astro build --site <pages-origin> --base <base-path>` (injected by `configure-pages`) → upload `./dist` → `actions/deploy-pages@v4`. Node 20. No `site` in `astro.config.mjs` — CI injects it.

## 11. Gaps / Roadmap

- `/posts`, `/posts/[slug]` — linked in copy, no page files.
- `src/content/posts/` — missing; queries fall back to `[]` / demo data.
- `isEncrypted` — flag defined, encryption pipeline pending (§6 proposed).
- `three` / `@tweenjs/tween.js` — installed, never imported.
- `@/*` tsconfig alias — configured, pages still use relative imports.
- `tailwindcss ^3.4.19` vs `@tailwindcss/postcss ^4.0.0` — version mismatch in devDeps.
