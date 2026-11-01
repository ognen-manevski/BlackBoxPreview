// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { remarkInlineEditorialImage } from './scripts/remark-inline-editorial-image.mjs';

const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'BlackBoxPreview';
const basePath = isGitHubPages ? `/${repoName}` : '';
const legacyProductRoutes = new Set([
  '/digital-signage',
  '/shelf-labels',
  '/video-streaming',
  '/software-development',
  '/mk/digital-signage',
  '/mk/shelf-labels',
  '/mk/video-streaming',
  '/mk/software-development',
]);

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages
    ? "https://ognen-manevski.github.io"
    : "https://blackboxsolutions.mk",

  i18n: {
    locales: ["en", "mk"],
    defaultLocale: "en",

    routing: {
      prefixDefaultLocale: false,
    },
  },

  base: isGitHubPages
    ? `/${repoName}/`
    : "/",

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const route = basePath && pathname.startsWith(`${basePath}/`)
          ? pathname.slice(basePath.length)
          : pathname;
        return !legacyProductRoutes.has(route.replace(/\/+$/, '') || '/');
      },
    }),
  ],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkInlineEditorialImage],
    }),
  },
});

