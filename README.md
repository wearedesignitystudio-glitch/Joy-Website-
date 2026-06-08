# Aurum Legal Solutions

A premium multi-page website for Aurum Legal Solutions — a client-focused Australian law firm.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- React Hook Form
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Deploy to GitHub + Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Aurum Legal Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** → import your repository.
3. Vercel auto-detects Next.js. Use these settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (project root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install`
4. Click **Deploy**.

No environment variables are required for this project.

## Project Structure

```
app/                  ← Next.js App Router pages
components/           ← UI, layout, sections, forms
lib/                  ← Constants, utilities, animations
public/images/        ← Static assets (logo)
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/practice-areas` | Practice Areas |
| `/practice-areas/[slug]` | Individual practice area |
| `/services` | Our Services |
| `/resources` | Resources |
| `/contact` | Contact |
| `/book-consultation` | Book a Consultation |
