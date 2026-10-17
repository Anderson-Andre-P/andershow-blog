import { getAllFilesFrontMatter, localeDir } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { localize, useLocale, useT } from '@/lib/i18n'

export async function getStaticProps({ locale }) {
  const posts = await getAllFilesFrontMatter(localeDir('blog', locale))
  return { props: { posts } }
}

export default function Blog({ posts }) {
  const t = useT()
  const locale = useLocale()
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.author}`}
        description={localize(siteMetadata.description, locale)}
      />
      <ListLayout posts={posts} title={t.blog.title} description={t.blog.intro} showFilters />
    </>
  )
}
