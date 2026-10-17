import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'

// Posts with any of these tags show up under the "Mobile" filter
const MOBILE_TAGS = ['Flutter', 'Mobile Development', 'Dio', 'BLoC', 'Stateful', 'Stateless']
const isMobilePost = (post) => post.tags.some((tag) => MOBILE_TAGS.includes(tag))

const TOPICS = [
  { id: 'all', label: 'All posts' },
  { id: 'mobile', label: 'Mobile' },
]

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
  showTopicFilter = false,
}) {
  const [searchValue, setSearchValue] = useState('')
  const [topic, setTopic] = useState('all')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    if (topic === 'mobile' && !isMobilePost(frontMatter)) return false
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const isFiltering = Boolean(searchValue) || topic !== 'all'

  // If initialDisplayPosts exist, display it if no search or topic filter is active
  const displayPosts =
    initialDisplayPosts.length > 0 && !isFiltering ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          {showTopicFilter && (
            <div className="flex gap-2" role="group" aria-label="Filter posts by topic">
              {TOPICS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTopic(id)}
                  aria-pressed={topic === id}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    topic === id
                      ? 'bg-primary-600 text-white'
                      : 'border border-zinc-300 text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, lang, readingMinutes } = frontMatter
            const isPortuguese = lang?.startsWith('pt')
            return (
              <li key={slug} className="py-6">
                <article
                  lang={lang}
                  className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
                >
                  <dl className="text-sm text-gray-500 dark:text-gray-400">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          timeZone: 'UTC',
                        })}
                      </time>
                    </dd>
                    {readingMinutes && (
                      <>
                        <dt className="sr-only">Reading time</dt>
                        <dd lang="en">{readingMinutes} min read</dd>
                      </>
                    )}
                    {isPortuguese && (
                      <>
                        <dt className="sr-only">Language</dt>
                        <dd lang="en">In Portuguese</dd>
                      </>
                    )}
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="mt-2 flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <p className="line-clamp-3 leading-relaxed text-gray-500 dark:text-gray-400">
                      {summary}
                    </p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !isFiltering && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
