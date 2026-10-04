/**
 * JSON-LD builders.
 *
 * Everything the site publishes as structured data is assembled here so the
 * entity description stays consistent: one Person, one WebSite, and
 * page-specific BreadcrumbList / CreativeWork nodes that reference them by @id.
 */
import { site, specialties, education } from '../data/site';
import type { Project } from '../data/projects';

/** Stable @id values let AI systems and search engines connect the nodes. */
export const ids = {
  person: (origin: string) => `${origin}/#tina-williamson`,
  website: (origin: string) => `${origin}/#website`,
};

export function personSchema(origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': ids.person(origin),
    name: site.name,
    givenName: 'Tina',
    familyName: 'Williamson',
    jobTitle: site.role,
    description: site.longBio,
    url: `${origin}/`,
    email: `mailto:${site.email}`,
    sameAs: [site.linkedin, site.github],
    knowsAbout: [...specialties],
    worksFor: {
      '@type': 'Organization',
      name: 'REACH by RentCafe / Yardi',
      url: 'https://www.rentcafe.com/digital-marketing/',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: education.school,
      url: education.schoolUrl,
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Search Strategist',
      occupationalCategory: 'Marketing and search strategy',
      skills: [
        'Search engine optimization',
        'Generative engine optimization',
        'Answer engine optimization',
        'Technical SEO',
        'Digital analytics',
      ],
    },
  };
}

export function websiteSchema(origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ids.website(origin),
    url: `${origin}/`,
    name: `${site.name} — ${site.role}`,
    description: site.shortBio,
    inLanguage: 'en-US',
    publisher: { '@id': ids.person(origin) },
    author: { '@id': ids.person(origin) },
  };
}

export function profilePageSchema(origin: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: pageUrl,
    isPartOf: { '@id': ids.website(origin) },
    about: { '@id': ids.person(origin) },
    mainEntity: { '@id': ids.person(origin) },
  };
}

export interface Crumb {
  name: string;
  /** Absolute URL. Omit for the current page. */
  item?: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.item ? { item: c.item } : {}),
    })),
  };
}

export function caseStudySchema(origin: string, pageUrl: string, project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#case-study`,
    name: project.headline,
    headline: project.headline,
    description: project.summary,
    url: pageUrl,
    inLanguage: 'en-US',
    datePublished: project.published,
    dateModified: project.published,
    author: { '@id': ids.person(origin) },
    creator: { '@id': ids.person(origin) },
    isPartOf: { '@id': ids.website(origin) },
    about: project.tags,
    keywords: project.tags.join(', '),
    genre: 'Case study',
  };
}

/** Collection page schema for /work/. */
export function collectionSchema(origin: string, pageUrl: string, projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: pageUrl,
    name: 'Work and case studies',
    isPartOf: { '@id': ids.website(origin) },
    about: { '@id': ids.person(origin) },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: `${origin}/work/${p.slug}/`,
      })),
    },
  };
}

/**
 * Short question-and-answer pairs that already appear as visible content on the
 * page. Only pass answers that a reader can see — never schema-only text.
 */
export function faqSchema(pairs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
