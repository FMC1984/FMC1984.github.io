/**
 * Experience and expertise data.
 *
 * Nothing here should contain a performance number that has not been verified.
 * Where a metric belongs but is not confirmed, the copy uses the literal
 * marker [ADD VERIFIED RESULT] so it is obvious on the page.
 */

export interface Role {
  org: string;
  orgUrl?: string;
  title: string;
  period: string;
  context: string;
  ownership: string[];
  selected: string[];
}

export const roles: Role[] = [
  {
    org: 'REACH by RentCafe / Yardi',
    orgUrl: 'https://www.rentcafe.com/digital-marketing/',
    title: 'Technical Specialist',
    period: 'Recent / current',
    context:
      'Search strategy and technical implementation for multifamily property marketing, working across large portfolios of property websites rather than a single brand site.',
    ownership: [
      'Organic search strategy for property websites, including on-page optimization, metadata, internal linking and image optimization',
      'GEO and AEO work: structuring property information so AI search and answer systems can interpret and cite it accurately',
      'Structured data and schema markup implementation',
      'FAQ strategy built around the questions renters actually ask',
      'Local search and Google Business Profile optimization',
      'Search performance analysis in Google Search Console and Google Analytics 4',
      'Property onboarding, technical implementation and cross-device QA',
    ],
    selected: [
      'Managed a portfolio of approximately 46 properties at one point, each with its own site, market and competitive set',
      'Worked through onboarding and optimization at a cadence of roughly 20 properties per month, which required a documented, repeatable method rather than one-off work',
      'Built content and metadata patterns that hold up across many properties while staying specific to each market',
      'Translated search performance data into prioritized recommendations for stakeholders who do not work in search',
    ],
  },
  {
    org: 'Douglas County Housing Partnership',
    title: 'Digital Strategy & Web Development (Freelance)',
    period: 'Freelance engagement',
    context:
      'Designed and built a custom website for a housing organization, owning the work end to end from architecture through implementation.',
    ownership: [
      'Information architecture and content organization',
      'UX decisions and page-level structure',
      'Custom website design and development',
      'On-page and technical SEO',
      'Digital strategy guidance for an organization without an in-house digital team',
      'AI-assisted development workflows where they shortened implementation time',
    ],
    selected: [
      'Turned a broad set of programs, resources and services into a navigable structure that a first-time visitor can follow',
      'Delivered a working website, not a specification — strategy, design decisions and implementation were the same engagement',
    ],
  },
  {
    org: 'Independent',
    title: 'AI Visibility Platform — Product Concept',
    period: 'In development',
    context:
      'Designing a search-intelligence product that measures brand and property visibility inside AI-driven answer systems.',
    ownership: [
      'Product strategy and system design',
      'Measurement framework for AI visibility, entity consistency and citation presence',
      'Integration model spanning GA4, Search Console, Google Business Profile and public digital footprint sources',
      'AI-assisted research pipelines for competitor and question-coverage analysis',
    ],
    selected: [
      'Defined the shift from "how do we rank?" to "how accurately and how often are we represented?" as a measurable set of signals',
    ],
  },
];

export interface Expertise {
  title: string;
  blurb: string;
  items: string[];
}

export const expertise: Expertise[] = [
  {
    title: 'Search Strategy',
    blurb: 'Organic growth planning grounded in intent, not keyword volume alone.',
    items: ['Search intent mapping', 'Content strategy', 'Internal linking', 'Metadata systems', 'Competitive analysis'],
  },
  {
    title: 'AI Search / GEO & AEO',
    blurb: 'Making a brand legible and citable to AI answer systems.',
    items: ['Entity clarity', 'Fact consistency across sources', 'Answer-retrievable content', 'Citation visibility', 'AI answer monitoring'],
  },
  {
    title: 'Technical SEO',
    blurb: 'The implementation layer, done hands-on.',
    items: ['Structured data / JSON-LD', 'Crawlability and indexation', 'Core Web Vitals', 'Image optimization', 'Site architecture'],
  },
  {
    title: 'Content Systems',
    blurb: 'Content patterns that scale across many pages without going generic.',
    items: ['Page templates and briefs', 'FAQ strategy', 'Local content frameworks', 'Editorial QA', 'AI-assisted drafting workflows'],
  },
  {
    title: 'Analytics',
    blurb: 'Reading performance data and turning it into decisions.',
    items: ['Google Analytics 4', 'Google Search Console', 'KPI definition', 'Organic visibility analysis', 'Reporting for non-specialists'],
  },
  {
    title: 'Digital Experience',
    blurb: 'Information architecture and UX decisions that support discovery.',
    items: ['Information architecture', 'User pathways', 'Conversion-oriented CTAs', 'Accessibility', 'Design-to-build execution'],
  },
];
