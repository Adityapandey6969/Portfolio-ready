# Project Overview

## Summary

This project is a portfolio-style web application built with Next.js App Router, React, TypeScript, and Tailwind CSS.

The app presents:

- a landing page with animated hero content
- a detailed about page
- a categorized skills page
- a projects listing page
- dynamic project detail pages
- a contact page with resume and certificate access

## Core Stack

- Framework: Next.js 14
- UI: React 18
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: React Icons
- Text animation: `react-type-animation`

## App Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    skills/page.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    ui/
      BattleEffects.tsx
      GameCard.tsx
      ScrollFighter.tsx
      ShadowFighter.tsx
      ShadowParticles.tsx
  data/
    education.ts
    navigation.ts
    personal.ts
    projects.ts
    skills.ts
  lib/
    utils.ts
  styles/
    globals.css
public/
  certificates/
  images/
  resume/
```

## Routing

- `/`: homepage
- `/about`: about section and certifications
- `/skills`: categorized skills page
- `/projects`: all projects
- `/projects/[slug]`: individual project detail page
- `/contact`: contact form and social links

## Data Model

The project uses static local data files under `src/data/`.

- `personal.ts`: primary profile and asset links
- `projects.ts`: project metadata used for cards and detail pages
- `skills.ts`: categorized skill definitions and stats
- `education.ts`: education, certifications, and activities
- `navigation.ts`: navbar links

## UI Composition

### Layout Components

- `Navbar.tsx`: top navigation and external links
- `Footer.tsx`: footer navigation and contact shortcuts

### Reusable UI Components

- `GameCard.tsx`: animated reveal wrapper
- `ShadowParticles.tsx`: floating background effect
- `BattleEffects.tsx`: stylized slash animation overlay
- `ScrollFighter.tsx`: scroll-reactive accent element
- `ShadowFighter.tsx`: canvas-based fighter visual

## Static Assets

All uploaded files are served from `public/`.

Examples:

- resumes: `public/resume`
- certificates: `public/certificates`
- profile images: `public/images/profile`

Files inside `public` are available directly by URL.

Example:

```text
public/images/profile/example.jpg
```

becomes:

```text
/images/profile/example.jpg
```

## Styling

Global styling lives in `src/styles/globals.css`.

The current visual language includes:

- dark background with cyan and blue accents
- glass-like surfaces
- card hover motion
- animated stat counters
- animated skill bars

## Build Output

This project supports:

- local development with `next dev`
- production builds with `next build`
- production serving with `next start`

## Notes for Maintenance

- update static content from the `src/data` directory
- upload new files to `public`
- keep paths in data files synchronized with uploaded assets
- prefer reusable UI changes in `src/components`

