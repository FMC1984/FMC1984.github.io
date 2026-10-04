# tinawilliamson.github.io

Portfolio site for **Tina Williamson** — SEO, GEO & AI Search Strategist.

Built with [Astro](https://astro.build), plain HTML and CSS, and about twenty
lines of JavaScript (the mobile menu). No UI framework, no CSS framework, no
webfonts, no analytics by default, no backend. It builds to static files and
deploys to GitHub Pages.

---

## Table of contents

1. [Quick start](#1-quick-start)
2. [Project structure](#2-project-structure)
3. [Running and building locally](#3-running-and-building-locally)
4. [Deploying to GitHub Pages](#4-deploying-to-github-pages)
5. [User site vs. project site (`site` and `base`)](#5-user-site-vs-project-site-site-and-base)
6. [Editing content](#6-editing-content)
7. [Adding a case study](#7-adding-a-case-study)
8. [Replacing project images](#8-replacing-project-images)
9. [Adding the résumé PDF](#9-adding-the-résumé-pdf)
10. [Social share image](#10-social-share-image)
11. [Connecting a custom domain](#11-connecting-a-custom-domain)
12. [Adding Google Analytics 4](#12-adding-google-analytics-4)
13. [What to fill in before launch](#13-what-to-fill-in-before-launch)
14. [SEO, GEO and accessibility notes](#14-seo-geo-and-accessibility-notes)

---

## 1. Quick start

You need [Node.js](https://nodejs.org) 20 or newer. Check with `node -v`.

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

---

## 2. Project structure

```
.
├── .github/workflows/deploy.yml   GitHub Pages deployment
├── astro.config.mjs               site URL, base path, sitemap
├── public/                        copied to the site root as-is
│   ├── favicon.svg
│   ├── robots.txt
│   ├── .nojekyll                  stops GitHub Pages running Jekyll
│   ├── images/
│   │   ├── og/                    social share image
│   │   └── projects/              case-study screenshots
│   └── resume/                    the résumé PDF goes here
└── src/
    ├── components/                reusable pieces (see below)
    ├── layouts/
    │   ├── BaseLayout.astro        every page
    │   └── CaseStudyLayout.astro   every case study
    ├── data/
    │   ├── site.ts                 name, contact, nav, specialties, tools
    │   ├── projects.ts             case-study metadata
    │   └── experience.ts           roles and expertise areas
    ├── lib/
    │   ├── paths.ts                base-aware URL helper
    │   └── schema.ts               all JSON-LD structured data
    ├── pages/                      one file per URL
    │   ├── index.astro             /
    │   ├── about.astro             /about/
    │   ├── experience.astro        /experience/
    │   ├── resume.astro            /resume/
    │   ├── contact.astro           /contact/
    │   ├── 404.astro               /404/
    │   └── work/
    │       ├── index.astro         /work/
    │       └── <slug>.astro        /work/<slug>/
    └── styles/global.css           the entire design system
```

**Components:** `BaseHead` (all meta tags), `Schema` (JSON-LD), `Nav`, `Footer`,
`Hero`, `SectionHeading`, `ProjectCard`, `CaseStudyMeta`, `ExpertiseCard`,
`AnswerBlock`, `CTA`, `Breadcrumbs`, `ImagePlaceholder`.

---

## 3. Running and building locally

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at <http://localhost:4321> with live reload |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves `dist/` locally, exactly as it will be deployed |
| `npm run check` | Type-checks the Astro and TypeScript files |

The only runtime dependencies are `astro` and `@astrojs/sitemap`. `@astrojs/check`
and `typescript` are dev dependencies used by `npm run check`; they are never
shipped to the browser.

Always run `npm run build` before pushing a significant change — the build
catches broken imports and bad component props that the dev server tolerates.

---

## 4. Deploying to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds the site and publishes it
on every push to `main`. One-time setup:

1. **Create the repository.** For a user site it must be named exactly
   `tinawilliamson.github.io` (replace `tinawilliamson` with your GitHub
   username if it differs — the name must match your username).

2. **Push this project to it:**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/tinawilliamson/tinawilliamson.github.io.git
   git push -u origin main
   ```

3. **Turn on Pages with the Actions source.** In the repository:
   **Settings → Pages → Build and deployment → Source → GitHub Actions.**
   This step is required. Without it the workflow builds but has nowhere to
   publish.

4. **Watch the first run** under the **Actions** tab. It takes a minute or two.
   When it finishes, the site is live at <https://tinawilliamson.github.io>.

After that, every `git push` to `main` redeploys automatically.

### If the deployment fails

- *"Get Pages site failed"* — step 3 wasn't done, or wasn't saved.
- *404 on every page* — `base` in `astro.config.mjs` doesn't match the
  repository type. See the next section.
- *The page loads but has no styling* — same cause: wrong `base`.

---

## 5. User site vs. project site (`site` and `base`)

Two values in `astro.config.mjs` control every URL the site generates.

**Current configuration — user site (the default, and what you want):**

```js
site: 'https://tinawilliamson.github.io',
base: '/',
```

Use this when the repository is named `tinawilliamson.github.io`. The site is
served from the domain root.

**Project site** — repository named something else, e.g.
`github.com/tinawilliamson/portfolio`:

```js
site: 'https://tinawilliamson.github.io',
base: '/portfolio',          // must match the repository name exactly
```

The site is then served from `https://tinawilliamson.github.io/portfolio/`.

You don't need to touch anything else. Every internal link and asset path in the
site goes through the `url()` helper in `src/lib/paths.ts`, which prefixes
`base` automatically. That's the only reason switching is a two-line change.

Two things to keep in sync when you change `site`:

- `origin` in `src/data/site.ts` (used as a fallback in structured data)
- the `Sitemap:` line in `public/robots.txt`

---

## 6. Editing content

Most edits are text edits in one of two places.

### Data files — `src/data/`

| File | What lives there |
| --- | --- |
| `site.ts` | Your name, role, bio, **email, LinkedIn, GitHub**, navigation links, specialties list, tools, education |
| `projects.ts` | Case-study metadata: titles, summaries, roles, tags, tools |
| `experience.ts` | Roles with ownership and selected work; the six expertise areas |

Changing `site.ts` updates the nav, footer, contact page, résumé page and the
`Person` structured data at once. Changing `experience.ts` updates the homepage,
About page, Experience page and résumé at once.

### Pages — `src/pages/`

Page-specific prose lives directly in the `.astro` files. They're HTML with a
frontmatter block at the top between `---` fences. Edit the text between the
tags and leave the tags alone.

### Placeholders

Anywhere a verified number is missing, the site shows a visible marker:

```html
<span class="todo">[ADD VERIFIED RESULT]</span>
```

These are deliberately conspicuous. Search the project for `ADD VERIFIED` to
find all of them, and either replace them with confirmed figures or delete the
sentence.

---

## 7. Adding a case study

Two steps.

**Step 1 — add the metadata.** In `src/data/projects.ts`, add an entry to the
`projects` array:

```ts
{
  slug: 'new-project-slug',            // becomes /work/new-project-slug/
  title: 'Short Card Title',
  headline: 'The Full Headline Used As The Page H1',
  seoTitle: 'Short Title For Search Results',   // keep under ~45 characters
  metaDescription: 'One sentence for search results. Aim for 120-158 characters.',
  org: 'Client or context',
  period: 'Freelance engagement',
  summary: 'One sentence. Used on cards, in the meta description and in schema.',
  role: 'What you personally owned',
  tags: ['Technical SEO', 'Analytics'],
  tools: ['Google Search Console', 'GA4'],
  featured: true,                       // true = also shown on the homepage
  imageDir: '/images/projects/new-project-slug',
  published: '2026-10-04',              // ISO date, used in structured data
}
```

**Step 2 — create the page.** Copy an existing file in `src/pages/work/` and
rename it to `<slug>.astro`, matching the slug exactly. Then:

- change the `getProject('...')` argument to your slug
- edit the `sections` array so each `id` matches an `<h2>`'s `id` in the body
  (this array builds the "On this page" sidebar)
- write the sections

That's it. The card on `/work/`, the homepage listing, "Related work" links,
breadcrumbs, the sitemap and the `CreativeWork` structured data all pick it up
automatically.

Keep the section order consistent across case studies — Overview, Challenge, My
role, Approach, Execution, Outcome, Why it matters — so the set reads as one
body of work. Also create `public/images/projects/<slug>/` for its screenshots.

---

## 8. Replacing project images

Screenshot placeholders render as dashed frames that print the exact file path
they expect. To replace one:

1. Save the image at the path shown on the page, e.g.
   `public/images/projects/dchp/homepage-desktop.png`.
2. Resize it to at most ~1600px wide and compress it
   ([squoosh.app](https://squoosh.app) works well).
3. In the case-study page, replace the whole `<ImagePlaceholder ... />` call
   with a real figure:

```astro
<figure class="ph">
  <img
    src={url('/images/projects/dchp/homepage-desktop.png')}
    width="1200"
    height="900"
    alt="Douglas County Housing Partnership homepage, showing the three primary audience pathways."
    loading="lazy"
    decoding="async"
  />
  <figcaption>Homepage: primary pathways above the fold.</figcaption>
</figure>
```

4. Add `import { url } from '../../lib/paths';` to that page's frontmatter if it
   isn't already there.

Always set `width` and `height` to the real pixel dimensions — that's what keeps
layout shift at zero. Write alt text that describes what the screenshot shows,
not what the file is called.

See `public/images/README.md` for the same instructions next to the folders.

---

## 9. Adding the résumé PDF

Put the file at:

```
public/resume/tina-williamson-resume.pdf
```

Then rebuild. The download button on `/resume/` renders only when the file
exists, so until you add it the page shows a visible `[ADD RESUME PDF: ...]`
marker instead of linking to a missing file.

To use a different filename, update `resumePdf` in `src/data/site.ts`.

---

## 10. Social share image

Create a 1200×630 PNG, save it as `public/images/og/og-default.png`, then set
`ogImageEnabled: true` in `src/data/site.ts`.

Until then the site emits no `og:image` tag at all, which is correct — a tag
pointing at a missing file is worse than no tag.

---

## 11. Connecting a custom domain

GitHub Pages supports custom domains without changing anything structural.

1. **At your DNS provider**, for an apex domain (`tinawilliamson.com`) create
   four `A` records pointing to:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   For a subdomain (`www.tinawilliamson.com`) create one `CNAME` record pointing
   to `tinawilliamson.github.io`.

2. **In the repository**, go to **Settings → Pages → Custom domain**, enter the
   domain and save. GitHub creates a `CNAME` file in the published site. Tick
   **Enforce HTTPS** once the certificate is issued (this can take an hour).

3. **Update the site URL** in `astro.config.mjs`:

   ```js
   site: 'https://tinawilliamson.com',
   base: '/',
   ```

   Also update `origin` in `src/data/site.ts` and the `Sitemap:` line in
   `public/robots.txt`, then push. This step matters: canonical URLs, Open Graph
   URLs, structured data and the sitemap all derive from `site`.

> If you set the custom domain in the GitHub UI, also add a `public/CNAME` file
> containing just the domain name. Otherwise the Actions deployment can
> overwrite GitHub's generated one.

---

## 12. Adding Google Analytics 4

No analytics are installed, and there is no fake measurement ID anywhere in the
project. To add GA4:

1. Create a GA4 property and copy its measurement ID (`G-XXXXXXXXXX`).
2. Open `src/layouts/BaseLayout.astro` and add this just before `</head>`,
   replacing the ID:

```astro
<!-- Google Analytics 4 -->
<script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Because it's in `BaseLayout`, it applies to every page at once.

Two notes. First, this adds a third-party script to every page — it will cost
you some Lighthouse performance score, which is a reasonable trade but worth
making knowingly. Second, if you need consent management for your audience, add
it before the tag rather than after.

Verification in Google Search Console is simplest via a DNS `TXT` record (works
with a custom domain) or by adding a `<meta name="google-site-verification" ... />`
tag to `BaseHead.astro`.

---

## 13. What to fill in before launch

Search the project for these:

| Marker / file | What's needed |
| --- | --- |
| `src/data/site.ts` → `email` | The address you actually want published |
| `src/data/site.ts` → `linkedin`, `github` | Your real profile URLs |
| `[ADD VERIFIED RESULT]` | Confirmed metrics, or delete the sentence |
| `[ADD VERIFIED CERTIFICATIONS]` | Certifications, or delete the block on `/resume/` |
| `public/resume/` | The résumé PDF |
| `public/images/projects/*/` | Real screenshots |
| `public/images/og/` | The 1200×630 share image |

Everything else is written and ready.

---

## 14. SEO, GEO and accessibility notes

The site is built to be an example of the work, so a few things are deliberate.

**Technical SEO**
- Unique title and meta description on every page, set per page, never generated
- Canonical URL on every page, derived from `site` + path
- Open Graph and Twitter card metadata
- `sitemap-index.xml` generated at build (`@astrojs/sitemap`), with `/404/`
  excluded automatically
- `robots.txt` allowing all crawlers, including AI crawlers
- Clean directory-style URLs with consistent trailing slashes
- One `<h1>` per page and a heading hierarchy that never skips a level
- Descriptive link text — no "click here", and repeated "Read the case study"
  links carry a visually hidden project name

**Structured data** (`src/lib/schema.ts`)
- `Person` and `WebSite` on every page, linked by stable `@id` values
- `ProfilePage` on About, `CollectionPage` + `ItemList` on Work,
  `ContactPage` on Contact
- `BreadcrumbList` on every page below the root
- `CreativeWork` on each case study, authored by the `Person` node
- `FAQPage` only where the question and answer are visible on the page

**GEO / AEO**
- Short direct-answer blocks ("What does Tina Williamson specialize in?") written
  as self-contained answers that make sense lifted out of context
- Consistent entity facts — name, role, employer, education and specialties come
  from one data file, so the page text and the structured data can't drift apart
- Factual, scoped claims; no invented metrics

**Performance**
- No webfonts. Headlines use a system serif stack, body copy a system sans stack,
  so there are zero font requests and no layout shift from font swapping
- One stylesheet, no CSS framework
- ~20 lines of JavaScript total, inline, for the mobile menu
- No images in the chrome of the site; the hero figure is CSS and text

**Accessibility**
- Skip link to main content
- Visible focus rings on everything interactive
- The mobile menu is a real `<button>` with `aria-expanded`, closes on `Escape`
- Semantic landmarks: `<header>`, `<nav aria-label>`, `<main>`, `<footer>`
- `aria-current="page"` on the active nav item
- Text contrast meets WCAG AA throughout, in both light and dark mode
- `prefers-reduced-motion` honoured
- Dark mode via `prefers-color-scheme`, with its own checked contrast values

---

## License

Content and design © Tina Williamson. The code is yours to reuse.
