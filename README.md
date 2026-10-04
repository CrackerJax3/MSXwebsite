# MSX website

Source for [msxbocachica.org](https://msxbocachica.org), built with React and Vite.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run lint
npm run build    # production build in dist/
npm run preview  # serve dist/ locally
```

## Deploy

Every push to the main working branch runs `.github/workflows/deploy.yml`, which
lints, builds and publishes `dist/` to the `gh-pages` branch. GitHub Pages serves
that branch at the custom domain in `public/CNAME`.

To deploy by hand instead, run `npm run deploy`.

## Where things live

- `src/pages.js`: title and description for each page. The build writes a
  separate HTML file per page (`art.html`, `about.html`, ...) with these tags,
  plus `404.html` and `sitemap.xml`. Add new pages here as well as in `src/App.jsx`.
- `src/modules/ArtPage/artPieces.js`: the pieces on the Art page.
- `src/modules/Tools/contact.js`: WhatsApp and YouTube links used across the site.
- Images are WebP, at most 1920px wide.
