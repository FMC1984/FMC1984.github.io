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
    title: 'Marketing Specialist, SEO & Digital Strategy',
    period: 'October 2022 – present',
    context:
      'Digital strategy across a portfolio of 40+ client websites, working as a strategic client partner rather than an execution resource — and as the person on the team who handles the technical implementation.',
    ownership: [
      'Digital strategy across a 40+ client website portfolio, aligning SEO, content, analytics, digital experience and paid-media insight with each client\'s business objectives',
      'Client partnership: translating performance data, competitive intelligence and shifting search behaviour into recommendations clients can act on',
      'SEO, GEO and AI-search strategy — technical optimization, structured data, information architecture, E-E-A-T, and visibility across Google and generative AI platforms',
      'Executive reporting: Looker Studio dashboards built on GA4 and Google Search Console data',
      'Integrated analysis of paid-search and campaign performance alongside organic and on-site behaviour',
      'Client consultation and training on Google Analytics, SEO strategy and marketing technology',
      'Local search and Google Business Profile optimization',
      'Standardized workflows, reporting processes, training materials and content optimization systems used across accounts',
      'Property onboarding, technical implementation and cross-device QA',
    ],
    selected: [
      'Managed a portfolio of approximately 46 properties at one point, each with its own site, market and competitive set',
      'Worked through onboarding and optimization at a cadence of roughly 20 properties per month, which required a documented, repeatable method rather than one-off work',
      'Built content and metadata patterns that hold up across many properties while staying specific to each market',
      'Built executive-ready Looker Studio dashboards on GA4 and Search Console data, so clients could see organic growth, engagement and optimization opportunities without needing an analyst to interpret them',
      'Created the standardized workflows, frameworks and training materials the team uses to deliver consistently across accounts',
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
