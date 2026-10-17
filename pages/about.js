import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug, localeDir } from '@/lib/mdx'
import { hasPublicFile } from '@/lib/utils/files'
import { localize } from '@/lib/locales'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps({ locale }) {
  const authorDetails = await getFileBySlug(localeDir('authors', locale), ['default'])
  const hasResume = hasPublicFile(localize(siteMetadata.resume, locale))
  return { props: { authorDetails, hasResume } }
}

export default function About({ authorDetails, hasResume }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      hasResume={hasResume}
    />
  )
}
