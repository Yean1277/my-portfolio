# Portfolio

Personal portfolio built with Astro, Tailwind CSS, and MDX — featuring an anime collection, music player, and project showcase.

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| [Astro](https://astro.build) | 4.16 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | 3.4 | Utility-first styling |
| [MDX](https://mdxjs.com) | 3.0 | Content authoring |
| [Three.js](https://threejs.org) | 0.183 | 3D rendering |
| [Tween.js](https://github.com/tweenjs/tween.js) | 25.0 | Animation easing |
| TypeScript | 5.0 | Type-safe scripting |
| [Prettier](https://prettier.io) | 3.0 | Code formatting |

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero slideshow, sidebar profile, music player, recent posts |
| `/anime` | Anime collection — flip cards with quotes |
| `/projects` | Projects listing |
| `/about` | About page |

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Scripts

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run format    # format all files with Prettier
```

## Project Structure

```
src/
├── components/       # Astro components (Navigation, MusicPlayer, HeroSection, ...)
├── content/
│   ├── pageData/     # MDX files for page content (anime.mdx, about.mdx)
│   └── posts/        # Blog post markdown files
├── data/
│   └── playlist.ts   # Music player track list
├── layouts/
│   └── BaseLayout.astro
├── pages/            # File-based routes
└── styles/
    └── globals.css
public/
├── images/
│   └── wallpapers/   # Hero wallpaper images/videos
└── music/            # MP3 files for the music player
```

## Adding Content

**Anime entry** — edit `src/content/pageData/anime.mdx`:
```yaml
- title: 'Anime Title'
  poster: 'https://...'
  isPremium: true        # optional — adds star badge + gradient ring
  quote: 'A quote from the anime.'
```

**Music track** — drop an MP3 into `public/music/`, then add an entry to `src/data/playlist.ts`:
```ts
{ id: 4, title: 'Song Title', artist: 'Artist', file: 'filename.mp3', durationStr: '3:30' }
```

**Blog post** — create a `.md` file in `src/content/posts/` with the required frontmatter:
```yaml
---
title: 'Post Title'
date: '2026-01-01'
category: 'Projects'    # Projects | Anime | Notes | Design
wordCount: 500
description: 'Short description.'
tags: ['Astro', 'Design']
---
```

**Hero wallpaper** — drop an image or video into `public/images/wallpapers/` and add a `{src, alt}` entry to the `wallpapers` array in `src/pages/index.astro`.
