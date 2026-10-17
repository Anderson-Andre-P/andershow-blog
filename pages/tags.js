import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags, getTagNames } from '@/lib/tags'
import { localeDir } from '@/lib/mdx'
import { useT } from '@/lib/i18n'

export async function getStaticProps({ locale }) {
  const tags = await getAllTags(localeDir('blog', locale))
  const tagNames = await getTagNames(localeDir('blog', locale))

  return { props: { tags, tagNames } }
}

export default function Tags({ tags, tagNames }) {
  const t = useT()
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description={t.blog.tagsDescription} />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            {t.blog.tags}
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && t.blog.noTags}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="flex items-baseline">
                <Tag text={tagNames[t] || t} />
                <span className="mb-2 mr-4 text-xs text-zinc-500 dark:text-zinc-400">
                  {tags[t]}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
