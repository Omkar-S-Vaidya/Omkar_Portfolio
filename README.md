# Omkar Vaidya — Portfolio

A personal portfolio website built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

**Everything you'll want to change lives in one file:** [`data/site.ts`](data/site.ts).

- `profile` — name, title, tagline, summary, email, phone, LinkedIn (add `github` / `resumeUrl` too)
- `stats` — the number cards in the hero
- `skills` — grouped skill chips
- `projects` — your case studies (architecture & impact, no proprietary code)
- `experience` — work history timeline
- `education`, `certifications`

No other files need editing for content changes.

### Add your résumé as a download

1. Drop your PDF into a new `public/` folder (e.g. `public/Omkar_Vaidya_Resume.pdf`).
2. Set `resumeUrl: "/Omkar_Vaidya_Resume.pdf"` in `data/site.ts`.

## Deploy to Vercel (free)

1. Push this folder to its own **GitHub repo** (keep it separate from company code).
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.
4. (Optional) Add a custom domain in the Vercel dashboard.

## Notes

- All project descriptions are sanitized — they describe architecture, role, and
  impact only, with no proprietary code or client-confidential details.
