/**
 * Single source of truth for identity, contact details and navigation.
 * Nothing else in the site hard-codes these values.
 */

export const site = {
  name: 'Tina Williamson',
  role: 'Senior SEO, GEO & AEO Strategist',
  shortBio:
    'Tina Williamson is a senior SEO, GEO and AEO strategist with ten years in search, leading organic strategy across a portfolio of 40+ client websites.',
  longBio:
    'Tina Williamson is a senior search strategist with ten years of experience across SEO, generative engine optimization (GEO), answer engine optimization (AEO), analytics and technical implementation. She leads organic search strategy across a portfolio of 40+ client websites, acts as the strategic partner to those clients, builds the workflows and reporting frameworks her team delivers against, and implements the technical work herself.',
  location: 'Camarillo, California — working remotely',

  /* --- contact ------------------------------------------------------------ */
  // Interim address. Replace with tina@tinawilliamson.com once the domain is
  // registered and email forwarding is set up — see README, "Custom domain".
  email: 'melodynbloom@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tina-williamson/',
  github: 'https://github.com/FMC1984',

  /* --- deployment --------------------------------------------------------- */
  // Keep in sync with `site` in astro.config.mjs.
  origin: 'https://fmc1984.github.io',

  /* --- social card -------------------------------------------------------- */
  // Add a 1200x630 PNG at public/images/og/og-default.png, then flip
  // ogImageEnabled to true. Left false so the site never ships a broken
  // og:image reference. See README -> "Social share image".
  ogImageEnabled: false,
  ogImage: '/images/og/og-default.png',
  ogImageAlt: 'Tina Williamson — SEO, GEO and AI search strategist.',

  /* --- résumé ------------------------------------------------------------- */
  resumePdf: '/resume/tina-williamson-resume.pdf', // TODO: add the PDF to public/resume/
} as const;

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/experience/', label: 'Experience' },
  { href: '/resume/', label: 'Resume' },
  { href: '/contact/', label: 'Contact' },
] as const;

/** Specialties — used in copy and in Person schema `knowsAbout`. */
export const specialties = [
  'Search engine optimization (SEO)',
  'Generative engine optimization (GEO)',
  'Answer engine optimization (AEO)',
  'AI search visibility',
  'Technical SEO',
  'Organic growth strategy',
  'Digital strategy',
  'Content strategy',
  'Local SEO and Google Business Profile',
  'Structured data and schema markup',
  'Google Analytics 4',
  'Google Search Console',
  'Digital analytics',
  'Multifamily and real estate marketing',
  'AI-assisted marketing workflows',
] as const;

/** Tools and platforms. Used on About and in schema. */
export const toolGroups = [
  {
    name: 'Search & analytics',
    tools: [
      'Google Search Console',
      'Google Analytics 4',
      'Google Business Profile',
      'Google Tag Manager',
      'Looker Studio',
      'Screaming Frog',
      'Semrush',
      'PageSpeed Insights / Lighthouse',
    ],
  },
  {
    name: 'AI & research',
    tools: ['Claude', 'Gemini', 'ChatGPT', 'Perplexity', 'AI Overviews monitoring', 'LLM-assisted research workflows'],
  },
  {
    name: 'Implementation',
    tools: [
      'HTML / CSS',
      'JSON-LD structured data',
      'Astro',
      'Git / GitHub',
      'SQL',
      'CMS and property website platforms',
      'Microsoft Clarity',
      'Yext (listings/entity data)',
    ],
  },
] as const;

export const education = {
  degree: 'M.S. in Information Technology',
  concentration: 'Data Science Concentration',
  school: 'California State University, Fullerton',
  schoolUrl: 'https://www.fullerton.edu/',
  status: 'In progress',
  focus: ['Data science', 'SQL and databases', 'Information systems', 'Analytics', 'Technology strategy'],
} as const;
