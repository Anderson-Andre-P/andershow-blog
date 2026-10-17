import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter, localeDir } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { localize, useLocale, useT } from '@/lib/i18n'
import { POSTS_PER_PAGE } from '../../blog'

export async function getStaticPaths({ locales }) {
  const paths = []
  for (const locale of locales) {
    const posts = await getAllFilesFrontMatter(localeDir('blog', locale))
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    for (let i = 1; i <= totalPages; i++) {
      paths.push({ params: { page: i.toString() }, locale })
    }
  }
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { page }, locale }) {
  const posts = await getAllFilesFrontMatter(localeDir('blog', locale))
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { posts, initialDisplayPosts, pagination } }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  const t = useT()
  const locale = useLocale()
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.author}`}
        description={localize(siteMetadata.description, locale)}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        showTopicFilter
        title={t.blog.title}
      />
    </>
  )
}
