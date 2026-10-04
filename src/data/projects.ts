/**
 * Project index.
 *
 * This file holds the *metadata* for every case study: it drives the project
 * cards on /work/ and the homepage, the "Related work" links, breadcrumbs and
 * structured data. The case-study *body* lives in src/pages/work/<slug>.astro.
 *
 * To add a case study:
 *   1. Add an entry here.
 *   2. Copy an existing src/pages/work/*.astro file and edit the sections.
 * See README.md -> "Adding a case study".
 */

/**
 * Which practice a project belongs to. Drives the grouping on /work/ so the
 * site can speak to a search audience and a data/analytics audience without
 * either one wading through the other's projects.
 */
export type Discipline = 'search' | 'data';

export interface Project {
  slug: string;
  discipline: Discipline;
  /** Short label used on cards and in nav contexts. */
  title: string;
  /** Full headline used as the <h1> on the case study page. */
  headline: string;
  /** Shorter title for <title> and search results. Keep under ~45 characters. */
  seoTitle: string;
  /** Meta description. Keep between 120 and 158 characters. */
  metaDescription: string;
  /** Organization or context. */
  org: string;
  /** Freeform period/status, e.g. 'Freelance engagement' or '2024 – present'. */
  period: string;
  /** One-sentence summary for cards, meta descriptions and schema. */
  summary: string;
  /** What Tina personally owned. */
  role: string;
  /** Headline disciplines, rendered as tags. */
  tags: string[];
  /** Key tools/platforms, shown in case-study metadata. */
  tools: string[];
  /** Show on the homepage "Selected work" section. */
  featured: boolean;
  /** Where to drop screenshots for this project. */
  imageDir: string;
  /** ISO date for schema. Use the date the case study was published/updated. */
  published: string;
  /** Optional link to the source repository (data/technical projects). */
  repoUrl?: string;
  /** Optional link to a live dashboard or demo. */
  demoUrl?: string;
  /** Optional dataset provenance, e.g. 'Public — CMS Open Payments 2024'. */
  dataSource?: string;
}

export const projects: Project[] = [
  {
    slug: 'douglas-county-housing-partnership',
    discipline: 'search',
    seoTitle: 'Douglas County Housing Partnership Website',
    metaDescription: 'Strategy through implementation for a housing nonprofit: information architecture, UX, SEO and a custom website I designed and built.',
    title: 'Douglas County Housing Partnership',
    headline: 'Building a Custom Digital Experience for Douglas County Housing Partnership',
    org: 'Douglas County Housing Partnership',
    period: 'Freelance engagement',
    summary:
      'Strategy through implementation for a housing organization that needed a clear, search-friendly home for its programs, resources and services.',
    role: 'Digital strategy, information architecture, UX, SEO, content structure, development',
    tags: ['Digital Strategy', 'Information Architecture', 'SEO', 'Web Development'],
    tools: ['HTML / CSS', 'SEO tooling', 'Google Search Console', 'AI-assisted development', 'Manual QA'],
    featured: true,
    imageDir: '/images/projects/dchp',
    published: '2026-10-04',
  },
  {
    slug: 'ai-visibility-platform',
    discipline: 'search',
    seoTitle: 'Designing an AI Visibility Platform',
    metaDescription: 'A product concept for measuring AI search visibility in multifamily: entity consistency, citation presence and renter question coverage.',
    title: 'AI Visibility Platform',
    headline: 'Designing an AI Visibility Platform for Multifamily Search',
    org: 'Independent product concept',
    period: 'In development',
    summary:
      'A product concept that measures how accurately and how often a property is represented across AI-driven search and answer systems — not just how it ranks in Google.',
    role: 'Product strategy, system design, data model, measurement framework',
    tags: ['GEO / AEO', 'Product Strategy', 'Search Intelligence', 'Analytics'],
    tools: [
      'Google Analytics 4',
      'Google Search Console',
      'Google Business Profile',
      'AI research workflows',
      'Yext (concept integration)',
      'Microsoft Clarity (concept integration)',
    ],
    featured: true,
    imageDir: '/images/projects/ai-visibility',
    published: '2026-10-04',
  },
  {
    slug: 'multifamily-search-optimization',
    discipline: 'search',
    seoTitle: 'Multifamily SEO at Portfolio Scale',
    metaDescription: 'How I run search optimization across dozens of multifamily property websites at once: onboarding, implementation, local search and QA.',
    title: 'Multifamily Search Optimization',
    headline: 'Running Search Optimization at Portfolio Scale in Multifamily',
    org: 'REACH by RentCafe / Yardi',
    period: 'Technical Specialist',
    summary:
      'A repeatable onboarding and optimization method applied across dozens of property websites at a time, with consistency and QA built into the process rather than bolted on.',
    role: 'Search strategy, technical implementation, onboarding, QA, performance analysis',
    tags: ['Technical SEO', 'Local SEO', 'Process Design', 'Analytics'],
    tools: [
      'Google Search Console',
      'Google Analytics 4',
      'Google Business Profile',
      'Schema markup (JSON-LD)',
      'Property website platforms',
    ],
    featured: true,
    imageDir: '/images/projects/multifamily-seo',
    published: '2026-10-04',
  },
  {
    slug: 'geo-aeo-search-strategy',
    discipline: 'search',
    seoTitle: 'A Working Method for GEO and AEO',
    metaDescription: 'My method for GEO and AEO: entity clarity, fact consistency across sources, answer-retrievable content and citation measurement.',
    title: 'GEO / AEO Search Strategy',
    headline: 'A Working Method for GEO and AEO Search Strategy',
    org: 'Practice area',
    period: 'Ongoing',
    summary:
      'How I extend conventional search strategy to cover AI Overviews, assistants and answer engines: entity clarity, fact consistency, retrievable content and citation presence.',
    role: 'Methodology, entity strategy, content structure, measurement design',
    tags: ['GEO', 'AEO', 'Entity Strategy', 'Content Systems'],
    tools: ['Structured data', 'Google Search Console', 'AI answer monitoring', 'Claude', 'Gemini'],
    featured: true,
    imageDir: '/images/projects/geo-aeo',
    published: '2026-10-04',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const searchProjects = projects.filter((p) => p.discipline === 'search');
export const dataProjects = projects.filter((p) => p.discipline === 'data');

export const disciplineLabels: Record<Discipline, { title: string; intro: string }> = {
  search: {
    title: 'Search & AI visibility',
    intro: 'Strategy, implementation and measurement across SEO, GEO and AEO.',
  },
  data: {
    title: 'Data & analytics',
    intro: 'Analysis, SQL and measurement work — the question, the method, and what the data actually supported.',
  },
};

export function getProject(slug: string): Project {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown project slug: ${slug}`);
  return found;
}

/** Other projects, for the "Related work" block at the end of a case study. */
export function relatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}
