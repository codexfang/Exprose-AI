# Exprose Solve

A fully static React + Vite app for quick math calculations and equation graphing. Deployable to GitHub Pages with no backend.

**Live site:** [https://codexfang.github.io/exprose-solve](https://codexfang.github.io/exprose-solve)

## Features

- **Calculator** — Evaluate expressions with `+`, `-`, `*`, `/`, and parentheses.
- **Graph** — Plot `y = …` equations (e.g. `y = x^2`, `y = sin(x)`, `y = 2x + 5`) from x = −10 to 10 using Chart.js.

## Development

```bash
npm install
npm run dev
```

Open the local dev server URL shown in the terminal.

## Build

```bash
npm run build
```

Output is written to the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository named **`exprose-solve`** (must match the `base` path in `vite.config.ts` and the `homepage` in `package.json`).

2. Push this project to the repo:

   ```bash
   git remote add origin git@github.com:codexfang/exprose-solve.git
   git add .
   git commit -m "Initial Exprose Solve release"
   git push -u origin main
   ```

3. Deploy the `dist` folder with **gh-pages**:

   ```bash
   npm run deploy
   ```

   This runs `predeploy` (`npm run build`) then publishes `dist` to the `gh-pages` branch.

4. In the GitHub repo: **Settings → Pages → Build and deployment → Source**: choose **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.

5. After a minute or two, the site is live at:

   **https://codexfang.github.io/exprose-solve**

### Updating the site

After changes:

```bash
npm run deploy
```

## Configuration notes

- `package.json` → `"homepage": "https://codexfang.github.io/exprose-solve"`
- `vite.config.ts` → `base: '/exprose-solve/'` (required for asset paths on GitHub Pages)
- No client-side router — tab switching is in-app state only, so static hosting works without SPA fallbacks.

## Tech stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS 4
- mathjs (expression evaluation)
- Chart.js + react-chartjs-2 (graphing)
- gh-pages (deployment)
