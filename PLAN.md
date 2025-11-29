# Zeb.codes Site Plan

## Overview

Personal portfolio site for Zebhdiyah Pykosz, a frontend developer, built with Astro.js as a static site with markdown content.

## Tech Stack

- **Framework**: Astro.js (latest v5.x)
- **Content**: Markdown/MDX stored in `/content` directory
- **Styling**: Dracula-inspired dark theme with system fonts
- **Deployment**: Static site generation

## Site Structure

### Pages

1. **Homepage** (`/`)

   - Brief intro with avatar/photo
   - Recent blog posts (3-5 latest)
   - Featured work (3-5 highlighted)
   - Featured projects (3-5 highlighted)
   - Links to social profiles

2. **Blog** (`/blog`)

   - List of all blog posts
   - Sorted by date (newest first)
   - Each entry shows title, description, date, optional hero image
   - Blogs should store images alongside their md files, e.g. content is in `/blog/<slug>/index.md` and `/blog/<slug>/hero.jpg`
   - Blogs should have tags

3. **Blog Post** (`/blog/[slug]`)

   - Individual post page
   - Title, date, content, tags
   - Optional hero image
   - Navigation to prev/next posts

4. **Projects** (`/projects`)

   - Grid/list of all projects
   - Each showing title, tags, brief description
   - Filter by tags (frontend, nodejs, react, etc.)

5. **Project Detail** (`/projects/[slug]`)

   - Individual project page
   - Title, tags, full description
   - Links (live demo, GitHub repo, etc.)
   - Screenshots/images

6. **Work** /work and /work/[slug]
   - Shows professional/career work projects
   - Title, tags, description/content, date, client name
   - Screenshots/images
   - Links

## Content Collections

### Blog Collection (`content/blog/`)

```typescript
{
  title: string
  description: string
  pubDate: Date
  updatedDate?: Date
  heroImage?: string
  tags?: string[]
  draft?: boolean
}
```

### Projects Collection (`content/projects/`)

```typescript
{
  title: string
  description: string
  tags: string[]
  tech: string[] // Technologies used

  // Links
  liveUrl?: string
  githubUrl?: string
  npmUrl?: string

  // Display
  featured?: boolean
  image?: string
  order?: number

  // Dates
  startDate?: Date
  endDate?: Date
}
```

### Work Collection (`content/work/`)

```typescript
{
  title: string
  description: string
  client?: string
  tags: string[]
  tech: string[] // Technologies used

  // Links
  liveUrl?: string
  caseStudyUrl?: string

  // Display
  featured?: boolean
  image?: string
  order?: number

  // Dates
  startDate: Date
  endDate?: Date // null means ongoing
}
```

## Design System

### Color Palette (Dracula-inspired)

```css
--background: #282a36
--current-line: #44475a
--foreground: #f8f8f2
--comment: #6272a4
--cyan: #8be9fd
--green: #50fa7b
--orange: #ffb86c
--pink: #ff79c6
--purple: #bd93f9
--red: #ff5555
--yellow: #f1fa8c
```

### Typography

- System font stack:
  - Primary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
  - Monospace: `'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace`

### Layout

- Max content width: 1200px
- Readable content width: 65ch for text
- Responsive breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Components

### Layout Components

1. **BaseLayout.astro**

   - HTML boilerplate
   - Meta tags, favicon
   - Global styles
   - Header and Footer slots

2. **Header.astro**

   - Site logo/name
   - Main navigation (Home, Blog, Projects, Work)
   - Mobile hamburger menu

3. **Footer.astro**
   - Copyright info
   - Social links
   - Contact email

### Content Components

1. **BlogCard.astro**

   - Display blog post preview
   - Title, description, date, hero image

2. **ProjectCard.astro**

   - Display project preview
   - Title, tags, description, image

3. **WorkCard.astro**

   - Display work preview
   - Title, client, tags, description, image, dates

4. **TagList.astro**
   - Display tags with styling
   - Reusable for blog, projects, and work

### Utility Components

1. **FormattedDate.astro**
   - Format dates consistently
   - Relative dates for recent posts

## File Structure

```
/
├── src/
│   ├── components/
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── WorkCard.astro
│   │   ├── TagList.astro
│   │   └── FormattedDate.astro
│   ├── layouts/
│   │   ├── BlogPost.astro
│   │   ├── ProjectDetail.astro
│   │   └── WorkDetail.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── work/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── content/
│       └── config.ts
├── content/
│   ├── blog/
│   │   └── <slug>/
│   │       ├── index.md
│   │       └── hero.jpg (optional)
│   ├── projects/
│   │   └── <slug>/
│   │       ├── index.md
│   │       └── images/
│   └── work/
│       └── <slug>/
│           ├── index.md
│           └── images/
├── data/
│   └── site.ts
├── public/
│   └── img/
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Implementation Steps

1. **Project Setup**

   - Install Astro v5.x and dependencies
   - Create astro.config.mjs
   - Configure TypeScript

2. **Content Collections**

   - Define blog collection schema (with tags support)
   - Define projects collection schema
   - Define work collection schema
   - Update existing content to match schemas
   - Migrate blog posts to subdirectory structure with images

3. **Design System**

   - Create global.css with Dracula theme
   - Define CSS custom properties
   - Set up responsive breakpoints

4. **Layout Components**

   - Build BaseLayout with SEO meta tags
   - Create Header with navigation
   - Create Footer

5. **Homepage**

   - Hero section with intro
   - Recent blog posts section
   - Featured work section
   - Featured projects section

6. **Blog Section**

   - Blog listing page with all posts (with tags)
   - Individual blog post layout (with tags display)
   - Blog card component

7. **Projects Section**

   - Projects listing page
   - Tag filtering functionality
   - Individual project layout
   - Project card component

8. **Work Section**

   - Work listing page with all professional projects
   - Individual work detail layout
   - Work card component
   - Display client and date information

9. **Responsive Design**

   - Mobile navigation
   - Responsive grid layouts
   - Touch-friendly interactive elements

10. **Content Updates**

    - Migrate existing blog posts to subdirectory structure
    - Add tags to existing blog posts
    - Update existing projects with new metadata
    - Update existing work entries with new metadata
    - Add sample content if needed

11. **Testing & Polish**
    - Test all routes (home, blog, projects, work)
    - Verify responsive design
    - Check accessibility
    - Optimize images

## Notes

- Existing content in `/content/blog/`, `/content/projects/`, and `/content/work/` will be migrated
- Blog posts will be reorganized into subdirectories to co-locate images with content
- Personal data from `/data/site.ts` will be used for header, footer, and homepage
- Site will be fully static with no client-side JavaScript required for core functionality
- Code syntax highlighting will use Shiki (built into Astro) with Dracula theme
- Work section separates professional/client work from personal projects
