import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter, localeDir } from '@/lib/mdx'
import { getAllTags, getTagNames } from '@/lib/tags'
import { DEFAULT_LOCALE } from '@/lib/locales'
import { useT } from '@/lib/i18n'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths({ locales }) {
  const paths = []
  for (const locale of locales) {
    const tags = await getAllTags(localeDir('blog', locale))
    Object.keys(tags).forEach((tag) => paths.push({ params: { tag }, locale }))
  }
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const dir = localeDir('blog', locale)
  const allPosts = await getAllFilesFrontMatter(dir)
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss: public/tags/<tag>/feed.xml for English, public/pt-BR/tags/<tag>/feed.xml for Portuguese
  if (filteredPosts.length > 0) {
    const tagDir = path.join(...[locale === DEFAULT_LOCALE ? '' : locale, 'tags', params.tag])
    const rss = generateRss(filteredPosts, `${tagDir}/feed.xml`, locale)
    const rssPath = path.join(root, 'public', tagDir)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  const tagNames = await getTagNames(dir)

  return {
    props: { posts: filteredPosts, tag: params.tag, tagName: tagNames[params.tag] || params.tag },
  }
}

export default function Tag({ posts, tagName }) {
  const t = useT()
  return (
    <>
      <TagSEO
        title={`${tagName} - ${siteMetadata.author}`}
        description={t.blog.tagDescription(tagName)}
      />
      <ListLayout posts={posts} title={tagName} description={t.blog.tagDescription(tagName)} />
    </>
  )
}
