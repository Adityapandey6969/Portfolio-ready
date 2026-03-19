# Setup And Deployment

## Local Development

Open a terminal in the project root and run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To verify the production version locally:

```powershell
npm.cmd run build
npm.cmd run start
```

## Important Scripts

From `package.json`:

- `npm.cmd run dev`: starts the development server
- `npm.cmd run build`: creates the production build
- `npm.cmd run start`: runs the production server

## Asset Workflow

Upload static files to:

- `public/resume`
- `public/certificates`
- `public/images/profile`

Then update references in:

- `src/data/personal.ts`
- `src/data/education.ts`

## Git Workflow

Initialize and publish:

```powershell
git init
git add .
git commit -m "Portfolio ready"
git branch -M main
git remote add origin https://github.com/Adityapandey6969/Portfolio-ready.git
git push -u origin main
```

If the remote already exists:

```powershell
git remote set-url origin https://github.com/Adityapandey6969/Portfolio-ready.git
git push -u origin main
```

## Deploying To Vercel

### Option 1: Dashboard

1. Go to `https://vercel.com`
2. Sign in with GitHub
3. Click `New Project`
4. Import the repository
5. Keep the default Next.js settings
6. Click `Deploy`

### Option 2: Auto-Deploy Flow

Once connected, every push to `main` can trigger a new deployment automatically.

## Post-Deployment Checklist

- verify homepage loads correctly
- verify profile image displays
- verify resume buttons open the correct PDFs
- verify certificate links open uploaded files
- verify project detail pages render correctly
- verify contact links work

## Optional Improvements

- add a custom domain
- replace placeholder social URLs if needed
- add analytics
- add Open Graph images
- add a proper ESLint configuration if you want linting in CI

