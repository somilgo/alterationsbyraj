# Alterations by Raj — Website

A fast, SEO-optimized one-page marketing site for **Alterations by Raj**, an
expert alterations, repairs, and curtain/drapery service in **St. Petersburg,
FL** and the Tampa Bay area.

Built with [Astro](https://astro.build) and deployed for free with GitHub Pages.

This site is the **sister site** of
[Doylestown Alterations](https://github.com/somilgo/plumsteadalterations): the
two repos share identical code and differ **only** in `src/site.ts`. Keep them
in sync by copying non-config changes between the repos.

---

## ✏️ How to edit the content (the easy part)

Everything you'll want to change — the business name, phone number, services,
**prices**, service area, all the page copy, and the deploy settings — lives in
**one file**:

```
src/site.ts
```

Open it, edit the text between the quotes, save, and the whole site updates.

> **⚠️ Set the real phone number.** `phoneLink` / `phoneDisplay` in `src/site.ts`
> are placeholders. Replace them with Raj's real number before sharing the site.

## 🚀 Going live (GitHub Pages)

This repo includes an automated deploy workflow (`.github/workflows/deploy.yml`).
To turn it on, once:

1. Go to the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (merging the website PR does this). The site builds and
   deploys automatically. Future edits to `main` redeploy on their own.

Your site will be live at:

```
https://somilgo.github.io/alterationsbyraj/
```

## 🌐 Later: the alterationsbyraj.com custom domain

When you buy `alterationsbyraj.com` (~$12/yr), you only edit `src/site.ts`:

```ts
export const deploy = {
  site: 'https://alterationsbyraj.com',
  base: '/',
  domain: 'alterationsbyraj.com',
};
```

That makes canonical URLs, the sitemap, the Open Graph image, and a `CNAME` file
all use the real domain. Then in **Settings → Pages → Custom domain**, enter the
domain and follow the DNS steps GitHub shows you (point an A record / CNAME at
GitHub Pages).

## 📍 Google Business Profile (do this — the #1 local SEO step)

A **Google Business Profile** is what makes you show up in Google Maps and the
"near me" results. Create one (free) at <https://business.google.com>:

- Business name: **Alterations by Raj**
- Category: **Clothing alteration service**
- Mark it as a **service-area business** (no storefront) and list the towns from
  `areaServed` in `src/site.ts` — this keeps the home address private.
- Add the phone number, the website URL, hours, and photos of finished work.
- After it's verified, ask happy customers for reviews — reviews are the biggest
  driver of local ranking.

---

## 🧑‍💻 Local development

```sh
npm install      # install dependencies (first time only)
npm run dev      # start a local preview
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

## 📁 Project structure

```
public/            static files copied as-is (favicon)
src/
  site.ts          ← ALL business details, content & deploy settings (the only
                     file that differs from Doylestown Alterations)
  layouts/         the <head> with SEO tags + structured data
  pages/
    index.astro    the page sections (hero, services, pricing, about, FAQ, CTA)
    og-image.svg.ts generated social-share image (from src/site.ts)
    robots.txt.ts  generated robots.txt (from src/site.ts)
  styles/global.css the look & feel
.github/workflows/ the automatic deploy-to-Pages workflow
```
