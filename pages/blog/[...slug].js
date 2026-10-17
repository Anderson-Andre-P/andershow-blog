import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles, localeDir } from '@/lib/mdx'
import { DEFAULT_LOCALE } from '@/lib/locales'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths({ locales }) {
  const paths = locales.flatMap((locale) =>
    getFiles(localeDir('blog', locale)).map((file) => ({
      params: { slug: formatSlug(file).split('/') },
      locale,
    }))
  )
  return { paths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const dir = localeDir('blog', locale)
  const allPosts = await getAllFilesFrontMatter(dir)
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug(dir, params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug(localeDir('authors', locale), [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss: feed.xml for English, feed.pt-BR.xml for Portuguese
  if (allPosts.length > 0) {
    const feed = locale === DEFAULT_LOCALE ? 'feed.xml' : `feed.${locale}.xml`
    fs.writeFileSync(`./public/${feed}`, generateRss(allPosts, feed, locale))
  }

  return { props: { post, authorDetails, prev, next } }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
