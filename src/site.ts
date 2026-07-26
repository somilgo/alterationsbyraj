// =============================================================================
// THE ONLY FILE YOU EDIT — all business details & site content live here.
// =============================================================================
// This file is the single source of truth for the whole website: the business
// name, phone number, services, prices, service area, every headline and
// paragraph, and the deployment settings.
//
// This is *also* the only file that differs between this site and its sister
// site (Doylestown Alterations). Every other file in the two repos is identical,
// so they stay in sync — to change how the site *looks or works*, edit the
// shared components; to change what it *says*, edit this file.
//
// =============================================================================

// --- Deployment ---------------------------------------------------------------
// `site`   full production URL. For a custom domain use the domain; for a
//          github.io project page use 'https://<user>.github.io'.
// `base`   sub-path the site is served from. '/' for a custom domain at the
//          root, or '/<repo-name>' for a github.io project page.
// `domain` custom domain for GitHub Pages. Leave '' to use the github.io URL.
//          When set, a CNAME file is generated at build so Pages serves it.
//
// Currently deployed to the free github.io project page. When you buy
// alterationsbyraj.com, change these three lines to:
//     site: 'https://alterationsbyraj.com',
//     base: '/',
//     domain: 'alterationsbyraj.com',
export const deploy = {
  site: 'https://alterationsbyraj.com',
  base: '/',
  domain: '',
};

export const business = {
  name: 'Alterations by Raj',
  // How the name is split in the header/footer logo: `pre` in ink, `accent` in
  // the plum brand color.
  brand: { pre: 'Alterations by', accent: 'Raj' },

  // Phone number in two formats: one for links, one for display.
  // ⚠️ PLACEHOLDER — replace with Raj's real number before sharing the site.
  phoneLink: '+18139652399', // used by text/call links — keep the +1 and no spaces
  phoneDisplay: '(813) 965-2399', // how the number appears on the page

  // Service-area business — we intentionally do NOT show a street address. We
  // only name the town/region for trust + local SEO.
  locality: 'St. Petersburg',
  region: 'FL',
  regionName: 'Florida',
  country: 'US',
  // Short human label for the area, used in eyebrows/headings.
  regionLabel: 'St. Petersburg & Tampa Bay, FL',

  // "$" = inexpensive (good for an affordable positioning). Options: $, $$, $$$.
  priceRange: '$',

  // Towns served — used in the page copy AND in the structured data Google reads.
  areaServed: [
    'St. Petersburg',
    'Gulfport',
    'Pinellas Park',
    'Kenneth City',
    'St. Pete Beach',
    'Seminole',
    'Largo',
    'Clearwater',
    'Tierra Verde',
    'Tampa',
  ],
};

// --- SEO / social -------------------------------------------------------------
export const seo = {
  title:
    'Alterations by Raj | Clothing & Curtain Alterations in St. Petersburg, FL',
  description:
    'Expert clothing alterations, repairs, and curtain & drapery work in St. Petersburg, FL — from a tailor who ran his own cleaners for years. Almost every alteration is just $10. Text for a fast, free quote.',
  // Bottom line shown on the social-share (Open Graph) image.
  ogTagline: 'Expert alterations, repairs & curtains',
};

// --- Hero ---------------------------------------------------------------------
// `lead` and `contactNote` may contain simple HTML (e.g. <strong>).
export const hero = {
  eyebrow: 'Expert alterations · St. Petersburg & Tampa Bay, FL',
  heading: 'Expert alterations — almost everything just $10.',
  lead: 'Clothing alterations, repairs, and curtain & drapery work from Raj, a tailor who spent years running his own cleaners. Almost every alteration is a flat <strong>$10</strong>, with a clear price before any work begins.',
  contactNote:
    '<strong>Text is the best way to reach Raj.</strong> Send a photo and a quick note about what you need for a fast, free quote.',
};

// A few headline "from" prices shown right in the hero so the affordable
// positioning is obvious at a glance.
export const priceHighlights: { label: string; price: string }[] = [
  { label: 'Pants', price: '$10' },
  { label: 'Shirts', price: '$10' },
  { label: 'Zippers', price: '$10' },
];

// "Why customers choose us" card in the hero.
export const whyUs = {
  title: 'Why customers trust Raj',
  points: [
    'Years of experience running his own cleaners',
    'Almost every alteration just $10',
    'Clothing, curtains & drapery, plus repairs',
    'Quick turnaround and honest, upfront pricing',
    'Personal, one-on-one service',
  ],
};

// --- Services -----------------------------------------------------------------
// Set `fromPrice` to a string like '$10' to show "from $10", or to null to show
// "Ask for a quote" instead (used here for open-ended custom curtain jobs).
export type Service = {
  title: string;
  description: string;
  fromPrice: string | null;
};

export const services: Service[] = [
  {
    title: 'Hemming & Lengths',
    description:
      'Shorten pants, jeans, skirts, and dresses to the perfect length — including original-hem finishes on jeans.',
    fromPrice: '$10',
  },
  {
    title: 'Taking In & Letting Out',
    description:
      'Adjust waists and side seams so your favorite pieces fit just right — whether they need to be taken in or let out.',
    fromPrice: '$10',
  },
  {
    title: 'Repairs & Adjustments',
    description:
      'Replace zippers and buttons, mend seams and tears, and make general repairs and adjustments to give your clothes a second life.',
    fromPrice: '$10',
  },
  {
    title: 'Curtains & Drapery',
    description:
      'Hem, shorten, and resize curtains and drapery to fit your windows perfectly. Custom sizing is quoted per job.',
    fromPrice: null,
  },
];

// --- Section copy -------------------------------------------------------------
// In `area.lead` you can use the tokens {locality} and {topTowns}; in
// `about.paragraphs` you can use {locality}. They are filled in automatically.
export const sections = {
  services: {
    eyebrow: 'What Raj does',
    heading: 'Alterations, repairs & curtains',
    lead: 'From everyday clothing alterations to curtains and drapery — expert work at one simple price. (Custom curtain sizing is quoted per job.)',
  },
  pricing: {
    eyebrow: 'Simple, flat pricing',
    heading: 'Most alterations are just $10',
    lead: 'Almost every clothing alteration — pants, shirts, zippers, and more — is a flat $10. Curtains and larger custom jobs are quoted up front, with no surprises.',
    note: 'Curtain and drapery work varies by size, so it’s quoted per job. You’ll always get a clear price before any work begins.',
  },
  area: {
    eyebrow: 'Where Raj works',
    heading: 'Serving St. Petersburg & the Tampa Bay area',
    lead: 'Based in {locality} and serving {topTowns}, and the surrounding Tampa Bay communities.',
  },
  faq: {
    eyebrow: 'Good to know',
    heading: 'Frequently asked questions',
  },
};

// --- About --------------------------------------------------------------------
export const about = {
  eyebrow: 'About',
  heading: 'An expert tailor who ran his own cleaners',
  paragraphs: [
    'Alterations by Raj is run by Raj, who spent years owning and operating his own cleaners — doing alterations and repairs day in and day out for countless happy customers. Now based in {locality}, he brings that same expert craftsmanship directly to your neighborhood.',
    'From hemming pants to taking in a dress, fixing a stubborn zipper, or resizing curtains for your windows, every job gets careful attention and an honest, upfront price — with almost every alteration just $10.',
  ],
  stats: [
    { num: 'Expert', label: 'trained running his own cleaners' },
    { num: 'Local', label: 'serving St. Petersburg, FL' },
    { num: '$10', label: 'most alterations, flat rate' },
  ],
  card: {
    title: 'Ready when you are',
    body: 'The easiest way to get started is a quick text. Tell Raj what you need, attach a photo if you can, and he’ll reply with a price and a time to drop off your garments or curtains.',
  },
};

// --- Contact / CTA ------------------------------------------------------------
export const cta = {
  eyebrow: 'Get a free quote',
  heading: 'Let’s get everything fitting perfectly.',
  lead: 'Text a photo and a short description of what you need — clothing or curtains — and you’ll get a friendly, no-obligation quote, usually the same day.',
  note: 'Please text rather than call — it’s the fastest way to reach Raj.',
};

export const footer = {
  tagline: 'Serving St. Petersburg & the Tampa Bay area, FL',
  note: 'By appointment · Local drop-off & pick-up',
};

// --- FAQ ----------------------------------------------------------------------
export const faqs = [
  {
    q: 'How much do alterations cost?',
    a: 'Almost every clothing alteration is a flat $10 — pants, shirts, zippers, and more. Curtains, drapery, and larger custom jobs are quoted up front. Text a description (a photo helps!) for an exact price.',
  },
  {
    q: 'Do you alter curtains and drapery?',
    a: 'Yes! In addition to clothing, Raj hems and resizes curtains and drapery to fit your windows. Because sizes vary so much, curtain work is quoted per job rather than at the flat $10 rate.',
  },
  {
    q: 'What makes Raj different?',
    a: 'Raj spent years running his own cleaners, doing alterations and repairs every single day. You get that expert, professional experience at a simple, honest price.',
  },
  {
    q: 'How long do alterations take?',
    a: 'Most everyday alterations are ready within a few days. If you have an event coming up, just mention your deadline and Raj will do his best to accommodate it.',
  },
  {
    q: 'Where are you located?',
    a: 'Raj is based in St. Petersburg and proudly serves the surrounding Tampa Bay area. Drop-off and pick-up details are arranged when you reach out by text.',
  },
  {
    q: 'How do I get started?',
    a: 'Just text ' + business.phoneDisplay + ' with a quick description of what you need. It’s the fastest way to get a quote and find a time to drop off your garments or curtains.',
  },
];
