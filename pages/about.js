import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { hasPublicFile } from '@/lib/utils/files'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const hasResume = hasPublicFile(siteMetadata.resume)
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
