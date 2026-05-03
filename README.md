# Portfolio

Personal portfolio built with Astro, Tailwind CSS, and MDX — featuring an anime collection, music player, resume viewer, and blog posts.

## Tech Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling via `@astrojs/tailwind`
- [MDX](https://mdxjs.com) — content authoring via `@astrojs/mdx`
- TypeScript

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero section, sidebar profile, music player, recent posts |
| `/anime` | Anime collection — flip cards with quotes |
| `/projects` | Projects listing |
| `/resume` | Embedded PDF resume |
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
```

## Project Structure

```
src/
├── components/       # Astro components (Navigation, MusicPlayer, HeroSection, ...)
├── content/
│   ├── pageData/     # MDX files for page content (anime.mdx, projects.mdx, ...)
│   └── posts/        # Blog post markdown files
├── data/
│   └── playlist.ts   # Music player track list
├── layouts/
│   └── BaseLayout.astro
├── pages/            # File-based routes
└── styles/
    └── globals.css
public/
├── music/            # MP3 files for the music player
└── resume.pdf        # Resume PDF
```

## Adding Content

**Anime entry** — edit `src/content/pageData/anime.mdx`:
```yaml
- title: 'Anime Title'
  poster: 'https://...'
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
category: 'Dev'
wordCount: 500
description: 'Short description.'
tags: ['Astro', 'Design']
---
```

**Resume** — replace `public/resume.pdf` with your updated PDF.
