<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Personal Portfolio & Workspace

## 🎯 Project Vision

A minimalist personal workspace combining:
- **Open source projects & portfolio** (primary focus)
- **Anime tracking & gallery** (personal interest)
- **Creative notes & design inspiration**

Zero backend, Git-based CMS philosophy. Deployed on Vercel. Designed with soft pastel colors and modular card components.

---

## 💡 Core Positioning

### What It Solves
- **Save 2 hours daily**: No more hunting through 10+ folders/apps for projects, notes, designs
- **Personal ownership**: All content lives in GitHub, download anytime
- **Minimal maintenance**: Static site, no databases, no servers to babysit
- **Beautiful by default**: Soft aesthetic that doesn't distract from content

### Who It's For
- Developers building in public
- Designers sharing work
- Creators managing multiple projects
- Anyone tired of scattered notes

---

## 🏗️ Architecture Philosophy

### Git as Database
- All content stored as `.md` and `.json` in the repository
- Native version control for every change
- No database injections, no data loss
- Full audit trail from Git history

### Static Generation & Deployment
- **Build Tool**: Next.js 16 with App Router (latest)
- **Styling**: Tailwind CSS 4 with custom color variables
- **Deployment**: Vercel (auto-deploy on git push)
- **CDN**: Global edge distribution
- **Performance**: 0ms server response, instant cached responses

### No Backend
- GitHub API for any future dynamic features
- Forms submit directly via email or GitHub Issues
- Authentication via GitHub OAuth (if needed)

---

## 🎨 Design System

### Color Palette (Soft Pastel Theme)
```
Primary Colors:
  - Wisteria (Purple): #c44bdb
  - Celadon (Sage Green): #a8d4b8
  - Sakura (Pink): #f4c2d2
  - Honey (Cream): #f5e6c4

Background:
  - Main BG: #f9f4ef (Warm Ivory)
  - Card BG: #fff8f2 (Off-white)
  - Muted: #ebe8f5 (Mist Violet)

Text:
  - Primary: #5d4a44
  - Secondary: #7b6d66
  - Muted: #9e8f84
```

### Component Patterns
- **Card Radius**: 24px-32px rounded corners
- **Shadows**: Soft (0 18px 45px rgba(115, 82, 154, 0.08))
- **Glass Effect**: backdrop-blur-sm with 70-95% opacity
- **Spacing**: 4px 8px grid system
- **Typography**: M+ Rounded 1c font

### Responsive Breakpoints
- Mobile-first approach
- Tablet: `lg:` breakpoint (1024px+)
- Cards stack on mobile, grid on desktop

---

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with nav
│   │   ├── page.tsx           # Home page (blog/notes feed)
│   │   ├── globals.css        # All Tailwind + custom classes
│   │   ├── projects/page.tsx  # Project showcase
│   │   ├── anime/page.tsx     # Anime tracking list
│   │   ├── resume/page.tsx    # CV & experience
│   │   └── about/page.tsx     # About me page
│   └── components/
│       ├── HeroHeader.tsx     # Hero section
│       ├── ProfileCard.tsx    # Author bio card
│       ├── BlogPost.tsx       # Note/post card
│       ├── Statistics.tsx      # (removed in v2)
│       └── Calendar.tsx        # (removed in v2)
├── public/                     # Static assets, PDF resume
├── package.json
├── tsconfig.json
├── tailwind.config.[ts|mjs]
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

---

## 🔧 Key Features & Pages

### 1. **Home Page** (`/`)
- Hero section with value proposition
- Category filter (All, Projects, Anime, Notes, Design)
- Feed of recent work & notes
- Side profile card

### 2. **Projects** (`/projects`)
- Showcase open source & finished work
- Links to GitHub & live demos
- Tags for technology stack
- Card-based layout

### 3. **Anime** (`/anime`)
- Personal anime tracking list
- Ratings (1-10 scale)
- Thoughts/reviews for each show
- Status indicators (Completed, Ongoing)

### 4. **Resume** (`/resume`)
- Online CV display
- Experience & education
- Skills & languages
- Download PDF button (link: `/public/resume.pdf`)

### 5. **About** (`/about`)
- Personal bio
- What I do (skills breakdown)
- Interests & hobbies
- Contact links (email, GitHub, Twitter)

---

## 🎬 Content Management

### How to Add New Posts/Notes
1. Edit `src/app/page.tsx` → `posts` array
2. Add object with: `title, date, category, wordCount, description, tags, image?, isEncrypted?`
3. Commit & push → auto-deploy

### How to Update Projects
1. Edit `src/app/projects/page.tsx` → `projects` array
2. Add: `title, description, tags, github, live`
3. Commit & push → auto-deploy

### How to Add Anime
1. Edit `src/app/anime/page.tsx` → `animeList` array
2. Add: `title, rating, status, thoughts`
3. Commit & push → auto-deploy

---

## 🛠️ Development Guide

### Setup
```bash
npm install
npm run dev  # http://localhost:3000
```

### Build & Deploy

#### 🏗️ Architecture Philosophy: Decentralized "No-Backend" Practice

This architecture is an evolution of the **"Git-based Headless CMS"** paradigm. It completely eliminates traditional servers and databases.

**Deep Breakdown:**

##### 1️⃣ Git as the Database (Git 即数据库)

**Logic:**
- Traditional blogs store data in MySQL, fetching via API
- This project stores every blog post, config, and note as `.md` or `.json` files directly in the repository

**Advantages:**
- Natural version control: Rollback any change instantly
- Zero database injection attacks
- Complete audit trail in Git history
- Data is never "lost" — it's immortal in version control

---

##### 2️⃣ GitHub App as the Backend (GitHub App 即后端)

**Logic:**
- User clicks "save" on frontend
- Instead of sending request to Node.js server, the frontend uses GitHub App permissions to directly call GitHub's Commit API
- Backend logic is completely outsourced to GitHub's infrastructure

**Advantages:**
- No server maintenance, no downtime
- Infinite scalability (GitHub handles it)
- Fine-grained permissions (only access to specific repo branches)
- Enterprise-grade reliability

**Implementation:**
```bash
# User edits post → Click save
# → GitHub App authenticates
# → Direct commit to repository
# → Webhook triggers build
```

---

##### 3️⃣ Build as Delivery (构建即交付)

**Logic:**
- Data changes → Git commit is created
- Commit triggers Vercel/Cloudflare's automated build pipeline
- Static HTML/CSS/JS is generated and deployed to CDN

**Philosophy:**
- Static Generation = Extreme speed (0ms server latency)
- Global CDN = Your site is cached everywhere
- Concurrent requests = Zero performance degradation

**Pipeline:**
```
Push to main
    ↓
Vercel webhook triggered
    ↓
Next.js builds static site (all pages pre-rendered)
    ↓
Output uploaded to Vercel Edge Network
    ↓
Instant global deployment (< 30s)
    ↓
Users get cached responses from CDN nearest to them
```

---

#### 🚀 Development Workflow

```bash
# Local development
npm install
npm run dev  # http://localhost:3000

# Before pushing
npm run build    # Verify all pages generate correctly
npm run start    # Test production build locally

# Deployment (automatic)
git add .
git commit -m "Add new post"
git push origin main
# → Vercel auto-deploys within seconds
```

#### 📊 Why This Approach?

| Aspect | Traditional | This Project |
|--------|-----------|------------|
| Database | MySQL, PostgreSQL | Git (free, infinite versions) |
| Backend | Node.js server | GitHub API (free, no maintenance) |
| Cost | $5-50/month | Free (GitHub + Vercel free tier) |
| Scalability | Limited by server | Unlimited (static CDN) |
| Data Loss Risk | High (DB corruption) | Zero (Git immutability) |
| Deployment | Manual, error-prone | Automatic on every commit |
| Downtime | Common | Never (CDN cached) |

---

#### 🔐 Security

- **No SQL injection** — No database
- **No XSS** — Content is static HTML, compiled at build time
- **No DDoS impact** — Cached on CDN, not hitting origin
- **No data breaches** — Content is public in GitHub anyway
- **Full audit trail** — Every change tracked in Git

---

### Key Technologies

- **React 19** with Server Components (minimal client-side JS)
- **TypeScript** for type safety across the stack
- **Tailwind CSS 4** with `@theme` custom properties
- **Next.js 16** App Router (App-based routing, no pages/ dir)
- **Vercel** for automatic static deployment
- **GitHub API** for content management
- **M+ Rounded 1c** Google Font for soft, approachable look

---

---

## 📋 Content Writing Guidelines

### Blog Post / Note Format
```typescript
{
  title: 'Specific, conversational title',
  date: 'YYYY-MM-DD',
  category: 'Projects | Anime | Notes | Design', 
  wordCount: 1025,
  description: 'One-liner, conversational tone',
  tags: ['tag1', 'tag2'],
  image?: 'URL or path',
  isEncrypted?: false,
}
```

### Tone & Voice
- **Specific over generic**: "Every day I save 2 hours" not "Improve productivity"
- **Conversational**: Like talking to a friend, not a tech doc
- **Emotional**: "No more hunting through 10 apps" not "streamlined workflow"
- **Relatable problems**: Start with the pain point, then solution

---

## 🚀 Future Enhancements

- [ ] Comment system (GitHub Discussions)
- [ ] Newsletter signup
- [ ] Dark mode toggle
- [ ] Search & full-text indexing
- [ ] Image gallery for anime/design
- [ ] Reading time estimates
- [ ] Social sharing buttons
- [ ] Email-to-notes feature (via GitHub Actions)

---
  
## 📚 Architecture Documents

### Git-based CMS Philosophy
- Content = Code in Repository
- Version control = Content audit trail
- CI/CD = Publishing workflow
- Static generation = Perfect performance

### Why This Stack?
1. **Next.js App Router** - Server components reduce JS bundle
2. **Tailwind 4** - Utility classes + custom theme
3. **Vercel** - Automatic deployments, edge caching
4. **Git** - Single source of truth, no vendor lock-in
5. **Soft Design** - Professional but approachable aesthetic

---

## ✨ Design Principles

1. **Minimalism**: Only show what matters
2. **Consistency**: Same card patterns throughout
3. **Accessibility**: WCAG AA standard
4. **Performance**: <1s initial load
5. **Personality**: Soft colors, rounded corners, breathing space

---

**Last Updated**: April 2026  
**Maintained By**: Yean Ter  
**License**: Open sourced for inspiration

