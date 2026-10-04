import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment target: GitHub Pages USER SITE -> https://tinawilliamson.github.io
 *
 * If you move this to a PROJECT site (e.g. github.com/tinawilliamson/portfolio),
 * change the two values below to:
 *   site: 'https://tinawilliamson.github.io',
 *   base: '/portfolio',
 *
 * If you add a custom domain later, change `site` to 'https://yourdomain.com'
 * and leave `base` as '/'. See README.md -> "Custom domain".
 */
export default defineConfig({
  site: 'https://tinawilliamson.github.io',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  prefetch: false,
});
