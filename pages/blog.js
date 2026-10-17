import { getAllFilesFrontMatter, localeDir } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { localize, useLocale, useT } from '@/lib/i18n'

export const POSTS_PER_PAGE = 6

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter(localeDir('blog', locale))
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
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
