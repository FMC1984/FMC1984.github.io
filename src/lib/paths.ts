/**
 * Base-aware URL helper.
 *
 * Every internal link and asset path in this site goes through `url()`, so
 * switching between a user site (base: '/') and a project site
 * (base: '/portfolio') only requires editing astro.config.mjs.
 *
 *   url('/about/')              -> '/about/'        or '/portfolio/about/'
 *   url('/images/og/card.png')  -> '/images/...'    or '/portfolio/images/...'
 */
const BASE = import.meta.env.BASE_URL; // always has a trailing slash in Astro

export function url(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  return `${BASE}${path.replace(/^\/+/, '')}`;
}

/** Absolute URL, for canonicals, Open Graph and structured data. */
export function absolute(path: string, site: URL | undefined): string {
  const origin = site ? site.origin : 'https://tinawilliamson.github.io';
  return new URL(url(path), origin).href;
}

/** True when `href` is the current page (used for aria-current on nav links). */
export function isCurrent(href: string, pathname: string): boolean {
  const norm = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  const target = norm(url(href));
  const here = norm(pathname);
  if (target === norm(BASE)) return here === norm(BASE);
  return here === target || here.startsWith(target);
}
