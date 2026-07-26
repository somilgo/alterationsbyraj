// Social-share (Open Graph) image, generated from the config in src/site.ts so
// it stays in sync with the business name, area, tagline, and phone number.
import type { APIRoute } from 'astro';
import { business, seo } from '../site';

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const GET: APIRoute = () => {
  const region = esc(business.regionLabel.toUpperCase());
  const name = esc(business.name);
  const tagline = esc(seo.ogTagline);
  const phone = esc(business.phoneDisplay);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img" aria-label="${name}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#faf6f0"/>
      <stop offset="1" stop-color="#f1e9dd"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="#e3d8c7" stroke-width="2"/>
  <text x="600" y="200" text-anchor="middle" font-family="Georgia, serif" font-size="40" letter-spacing="6" fill="#b5863c">${region}</text>
  <text x="600" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="86" font-weight="600" fill="#2b2620">${name}</text>
  <text x="600" y="400" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="38" fill="#5a5247">${tagline}</text>
  <text x="600" y="500" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="bold" fill="#7a2e4a">Text ${phone} for a free quote</text>
</svg>
`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
