const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

// Keep in sync with lib/locales.js. English has no URL prefix.
const LOCALES = ['en-US', 'pt-BR']
const DEFAULT_LOCALE = 'en-US'
const prefix = (locale) => (locale === DEFAULT_LOCALE ? '' : `/${locale}`)

const isPublished = (file) => {
  const { data } = matter(fs.readFileSync(file, 'utf8'))
  return !data.draft && !data.canonicalUrl
}

const slugOf = (file) =>
  file
    .split('/')
    .pop()
    .replace(/\.mdx?$/, '')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Pages and case studies exist in every locale
  const pages = (await globby(['pages/*.js', '!pages/_*.js', '!pages/404.js']))
    .map((page) => page.replace('pages/', '/').replace('.js', ''))
    .map((route) => (route === '/index' ? '' : route))
  const projects = (await globby(['data/projects/en-US/*.mdx'])).map(
    (file) => `/projects/${slugOf(file)}`
  )

  const routes = []
  for (const locale of LOCALES) {
    for (const route of [...pages, ...projects]) routes.push(`${prefix(locale)}${route}`)

    // Posts and tag feeds only where they exist for that locale
    const posts = await globby([`data/blog/${locale}/**/*.mdx`, `data/blog/${locale}/**/*.md`])
    posts
      .filter(isPublished)
      .forEach((file) => routes.push(`${prefix(locale)}/blog/${slugOf(file)}`))

    const tagFeeds = await globby([`public${prefix(locale)}/tags/**/feed.xml`])
    tagFeeds.forEach((feed) => routes.push(feed.replace('public', '').replace('/feed.xml', '')))
  }

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map((route) => `<url><loc>${siteMetadata.siteUrl}${route}</loc></url>`).join('')}
    </urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
