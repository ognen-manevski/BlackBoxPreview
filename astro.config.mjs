// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { remarkInlineEditorialImage } from './scripts/remark-inline-editorial-image.mjs';

const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'BlackBoxPreview';

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

  integrations: [sitemap()],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkInlineEditorialImage],
    }),
  },
});


