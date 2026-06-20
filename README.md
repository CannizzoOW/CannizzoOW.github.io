# CannizzoOW Project Hub

A simple gateway to my GitHub Pages projects, built with React and Vite.

## Local development

```bash
npm install
npm run dev
```

Project cards and links are kept together in `src/App.jsx`.

## Deployment

The workflow in `.github/workflows/deploy.yml` automatically builds and deploys
to GitHub Pages when changes are pushed to `main`. Select **GitHub Actions** as
the source in the repository's Pages settings.
