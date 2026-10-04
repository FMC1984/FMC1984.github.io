import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment target: GitHub Pages USER SITE -> https://FMC1984.github.io
 *
 * If you move this to a PROJECT site (e.g. github.com/tinawilliamson/portfolio),
 * change the two values below to:
 *   site: 'https://fmc1984.github.io',
 *   base: '/portfolio',
 *
 * If you add a custom domain later, change `site` to 'https://yourdomain.com'
 * and leave `base` as '/'. See README.md -> "Custom domain".
 */
export default defineConfig({
  site: 'https://fmc1984.github.io',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Inline the stylesheet into every page. It is ~4.4 KB gzipped, so this
    // removes a render-blocking request AND removes a real failure mode on
    // GitHub Pages: HTML is served with max-age=600, so for ten minutes after
    // a deploy a cached page could reference a hashed CSS file that no longer
    // exists and render completely unstyled.
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
  prefetch: false,
});
