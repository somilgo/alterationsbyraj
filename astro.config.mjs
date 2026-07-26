// @ts-check
import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';
import sitemap from '@astrojs/sitemap';
import { deploy } from './src/site.ts';

// Deployment settings live in src/site.ts (the single config file), so this
// file is identical across the sister sites. `deploy.domain`, when set, is
// written out as a CNAME at build so GitHub Pages serves the custom domain.
function cname(domain) {
  return {
    name: 'generate-cname',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!domain) return;
        await writeFile(new URL('./CNAME', dir), `${domain}\n`);
      },
    },
  };
}

export default defineConfig({
  site: deploy.site,
  base: deploy.base,
  trailingSlash: 'ignore',
  integrations: [sitemap(), cname(deploy.domain)],
});
