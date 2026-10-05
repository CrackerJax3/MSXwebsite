import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'node:fs'
import path from 'node:path'
import pages, { SITE_URL } from './src/pages.js'

// Production serves the site at the custom domain root. For a preview on
// <user>.github.io/<repo>/, build with SITE_BASE=/<repo>/ and
// SITE_URL=https://<user>.github.io/<repo>: the CNAME is then left out and
// pages are marked noindex so the preview never competes with the real site.
const base = process.env.SITE_BASE || '/'
const siteUrl = (process.env.SITE_URL || SITE_URL).replace(/\/+$/, '')
const isPreview = base !== '/'

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// GitHub Pages has no SPA fallback, so write dist/<route>.html for every page
// (with that page's title and meta tags) plus a 404.html for anything else.
// GitHub Pages serves /art from art.html without a redirect.
const staticPages = () => ({
  name: 'static-pages',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve('dist')
    const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
    const render = (route) => {
      const { title, description } = pages[route]
      const url = siteUrl + (route === '/' ? '/' : route)
      return template
        .replace(/__TITLE__/g, escape(title))
        .replace(/__DESCRIPTION__/g, escape(description))
        .replace(/__URL__/g, url)
        .replace(/__SITE__/g, siteUrl)
        .replace(/__ROBOTS__/g, isPreview ? 'noindex' : 'index, follow')
    }
    for (const route of Object.keys(pages)) {
      const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
      fs.writeFileSync(path.join(dist, file), render(route))
    }
    fs.writeFileSync(path.join(dist, '404.html'), render('/').replace(/name="robots" content="[^"]*"/, 'name="robots" content="noindex"'))
    const today = new Date().toISOString().slice(0, 10)
    const urls = Object.keys(pages).map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${today}</lastmod></url>`).join('\n')
    if (isPreview) {
      fs.rmSync(path.join(dist, 'CNAME'), { force: true })
      fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n')
    }
    fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  },
})

export default defineConfig({
  plugins: [react(), staticPages()],
  base,
  build: { outDir: 'dist' },
})
