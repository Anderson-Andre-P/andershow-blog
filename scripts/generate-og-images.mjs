// Generates the link preview images (Open Graph) shown when a page is shared on LinkedIn,
// WhatsApp, Slack and so on: one per locale for the general pages, plus one per post and
// per project. Runs before `next build`; the output in public/static/images/og/ is gitignored.
//
//   node ./scripts/generate-og-images.mjs
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const matter = require('gray-matter')

const root = process.cwd()
const outDir = path.join(root, 'public/static/images/og')

// Data files use `export default`; transpile them so this runs on any Node version.
const loadData = (file) => {
  const { code } = esbuild.transformSync(fs.readFileSync(path.join(root, file), 'utf8'), {
    format: 'cjs',
    loader: 'js',
  })
  const module = { exports: {} }
  new Function('module', 'exports', code)(module, module.exports)
  return module.exports.default || module.exports
}

const siteMetadata = require(path.join(root, 'data/siteMetadata.js'))
const dictionary = loadData('data/i18n.js')
const projectsData = loadData('data/projectsData.js')

// Keep in sync with lib/locales.js
const LOCALES = ['en-US', 'pt-BR']
const DEFAULT_LOCALE = 'en-US'
const localize = (value, locale) =>
  value && typeof value === 'object' && !Array.isArray(value) && DEFAULT_LOCALE in value
    ? value[locale] ?? value[DEFAULT_LOCALE]
    : value

const LABELS = {
  'en-US': { post: 'Article', project: 'Project' },
  'pt-BR': { post: 'Artigo', project: 'Projeto' },
}

const font = (weight) =>
  fs.readFileSync(
    path.join(root, `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`)
  )
const fonts = [400, 600, 700].map((weight) => ({
  name: 'Inter',
  data: font(weight),
  weight,
  style: 'normal',
}))

const avatar = `data:image/jpeg;base64,${fs
  .readFileSync(path.join(root, 'public', siteMetadata.image))
  .toString('base64')}`

const WIDTH = 1200
const HEIGHT = 630

const COLORS = {
  background: '#18181b', // zinc-900
  border: '#27272a', // zinc-800
  text: '#fafafa', // zinc-50
  muted: '#a1a1aa', // zinc-400
  accent: '#3b82f6', // primary-500
  green: '#34d399', // emerald-400
}

// Minimal hyperscript for satori's element tree
const h = (type, style, ...children) => ({
  type,
  props: { style: { display: 'flex', ...style }, children: children.flat() },
})

const truncate = (text, max) =>
  text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, '')}…` : text

function card({ locale, kicker, title, subtitle }) {
  const t = dictionary[locale].home
  const domain = new URL(siteMetadata.siteUrl).host
  const titleSize = title.length > 70 ? 54 : title.length > 40 ? 64 : 76

  return h(
    'div',
    {
      // satori sizes boxes as content-box: subtract padding and border from 1200x630
      width: WIDTH - 2 * 72,
      height: HEIGHT - 2 * 64 - 12,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      backgroundColor: COLORS.background,
      borderTop: `12px solid ${COLORS.accent}`,
      fontFamily: 'Inter',
      color: COLORS.text,
    },
    h(
      'div',
      { flexDirection: 'column' },
      kicker
        ? h(
            'div',
            {
              fontSize: 26,
              fontWeight: 600,
              color: COLORS.accent,
              textTransform: 'uppercase',
              letterSpacing: 2,
            },
            kicker
          )
        : [],
      h(
        'div',
        {
          marginTop: kicker ? 20 : 0,
          fontSize: titleSize,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: -1.5,
        },
        title
      ),
      subtitle
        ? h('div', { marginTop: 24, fontSize: 30, lineHeight: 1.4, color: COLORS.muted }, subtitle)
        : []
    ),
    h(
      'div',
      {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 32,
        borderTop: `2px solid ${COLORS.border}`,
      },
      h(
        'div',
        { alignItems: 'center' },
        {
          type: 'img',
          props: {
            src: avatar,
            width: 72,
            height: 72,
            style: { borderRadius: 36, objectFit: 'cover' },
          },
        },
        h(
          'div',
          { flexDirection: 'column', marginLeft: 20 },
          h('div', { fontSize: 28, fontWeight: 700 }, siteMetadata.author),
          h('div', { fontSize: 22, color: COLORS.muted, marginTop: 4 }, domain)
        )
      ),
      h(
        'div',
        {
          alignItems: 'center',
          padding: '10px 22px',
          borderRadius: 999,
          border: `2px solid ${COLORS.green}`,
          color: COLORS.green,
          fontSize: 22,
          fontWeight: 600,
        },
        h('div', {
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: COLORS.green,
          marginRight: 12,
        }),
        t.openToWork
      )
    )
  )
}

async function render(file, props) {
  const svg = await satori(card(props), { width: WIDTH, height: HEIGHT, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng()
  const target = path.join(outDir, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, png)
}

const postsOf = (locale) => {
  const dir = path.join(root, 'data/blog', locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ''),
      ...matter(fs.readFileSync(path.join(dir, file), 'utf8')).data,
    }))
    .filter((post) => !post.draft)
}

async function main() {
  fs.rmSync(outDir, { recursive: true, force: true })
  let count = 0

  for (const locale of LOCALES) {
    const t = dictionary[locale].home

    await render(`${locale}/default.png`, {
      locale,
      title: localize(siteMetadata.tagline, locale),
      subtitle: t.openToRemote,
    })
    count++

    for (const post of postsOf(locale)) {
      await render(`${locale}/blog/${post.slug}.png`, {
        locale,
        kicker: LABELS[locale].post,
        title: post.title,
        subtitle: (post.tags || []).join(' · '),
      })
      count++
    }

    for (const project of projectsData) {
      await render(`${locale}/projects/${project.slug}.png`, {
        locale,
        kicker: LABELS[locale].project,
        title: project.title,
        subtitle: truncate(localize(project.description, locale), 140),
      })
      count++
    }
  }

  console.log(`Generated ${count} Open Graph images in ${path.relative(root, outDir)}/`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
