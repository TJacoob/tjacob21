# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for tjacob.dev. It's a **Nuxt 2** app (`target: 'static'`) using **@nuxt/content v1** for data and **Tailwind CSS 2.1** for styling. Most changes are content updates (new jobs, projects, skills, CV), not code.

## Commands

```bash
npm run dev        # dev server with hot reload (HOST/PORT from .env, default localhost:3000)
npm run build      # production build into .nuxt/ — quickest way to check that a change compiles
npm run generate   # static export to dist/ (the deployable site)
npm run start      # serve a previous build
```

There are no tests, linter, or formatter. Use `npm run build` to verify changes. It builds fine on Node 24.

Indentation is tabs (size 4), LF line endings (`.editorconfig`).

## Environment

- `.env` (gitignored) supplies `BASE_URL` (used for `og:url` and the sitemap hostname), `GA_ID` (Google Analytics via `plugins/analytics.js`, client-only), `HOST`, `PORT`. These reach the app through `publicRuntimeConfig` in `nuxt.config.js`.
- `.npmrc` (gitignored) routes the `@fortawesome` scope to FontAwesome's private registry with an auth token. `npm install` needs this file to resolve the FontAwesome packages.

## Architecture

### Content-driven pages

Each folder in `content/` is a collection, and a page reads it in `asyncData` with `$content(...)`. Each page renders specific frontmatter fields, so a new entry has to use the same keys as the existing files in that folder:

| Collection | Consumed by | Frontmatter used | Ordering |
|---|---|---|---|
| `generic/intro.md`, `generic/aboutme.md` | `pages/index.vue`, `pages/aboutme.vue` | body only | — |
| `work/` | `pages/work/index.vue` | `position`, `company`, `website`, `started`, `ended`, `logo` + body | `started` desc |
| `projects/` | `pages/projects/index.vue`, `pages/projects/_slug.vue`, `pages/index.vue` (latest 2) | `title`, `description`, `image_1`…`image_4`, `techs` (comma-separated string, split in the page), `year`, `level`, optional `website`/`github` + body | list: `level` asc; home: `year` desc then `level` |
| `skills/` | `pages/skills/index.vue`, `pages/index.vue` (top 3) | `title`, `rating` (out of 10) | `rating` desc; first 6 are the large cards |
| `education/` | `pages/education/index.vue` | `degree`, `university`, `cover`, `startYear`, `endYear` | `endYear` desc |

`pages/blog/` queries an `articles` collection that doesn't exist. It's an unstyled stub that the sidebar doesn't link to. `pages/work/package.json` is a stray `npm init` file. Nuxt ignores it, so it isn't a sub-package.

### Images

Frontmatter image fields (`logo`, `image_N`, `cover`) are bare filenames in `static/images/`. Pages load them with ``require(`~/static/images/${...}`)``, so webpack bundles them, and a missing or misspelled file **fails the build**. A file referenced by a plain `/images/...` path (e.g. the profile picture in `Sidebar.vue`) skips webpack and fails silently at runtime.

CV PDFs live in `static/files/`. The current one is hard-coded in `pages/index.vue` (the "Curriculum" link), so a new CV means adding the PDF and updating that link.

### Layout and navigation

`layouts/default.vue` holds the fixed `components/Sidebar.vue` and the scrolling content pane. On mobile, the menu opens by rotating and scaling the content pane (`showNavbarMobile`). The sidebar links are hard-coded `NuxtLink`s, so a new top-level page also needs a link added there. Components are auto-imported (`components: true`).

### Icons

FontAwesome is tree-shaken. Only the icons listed in `configs/fontawesome.js` exist at runtime. They're used as `<fa-icon :icon="{prefix:'fas', iconName:'chevron-right'}" />` (`fas`/`far`/`fab`). Register any new icon in that file first.

### Styling

- Tailwind 2.1 in classic (non-JIT) mode: `tailwind.config.js` uses the legacy `purge` and `variants` keys. A variant such as `group-hover:` or `active:` only works on utilities whose `variants` entry lists it.
- Custom tokens: colors `primary` / `primary-lighter` / `secondary` / `black`, plus extra `w-*`/`h-*` sizes (e.g. `h-136`, `w-200`).
- In production, `purge` scans only `components/`, `layouts/`, `pages/`, `plugins/`, and `nuxt.config.js`. **Tailwind classes written inside `content/*.md` will be stripped.**
- CSS entry point is `assets/scss/tailwind.scss` (set via `tailwindcss.cssPath`). It also defines SVG background-pattern utilities. Markdown rendered by `<nuxt-content>` is styled by the `.nuxt-content` rules in `assets/scss/type.scss`.

### SEO

Global meta tags live in `nuxt.config.js` `head`. `pages/projects/_slug.vue` overrides them per project via `head()`, matching tags by `hid`. `@nuxtjs/sitemap` generates the sitemap from `BASE_URL`.
