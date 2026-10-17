import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { SearchIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/outline'
import PostCard from '@/components/blog/PostCard'
import PostRow from '@/components/blog/PostRow'
import blogTopics from '@/data/blogTopics'
import { localize, useLocale, useT } from '@/lib/i18n'

const SORTS = {
  newest: (a, b) => (a.date < b.date ? 1 : -1),
  oldest: (a, b) => (a.date > b.date ? 1 : -1),
  shortest: (a, b) => a.readingMinutes - b.readingMinutes,
  longest: (a, b) => b.readingMinutes - a.readingMinutes,
  title: (a, b) => a.title.localeCompare(b.title),
}

const LENGTHS = {
  any: () => true,
  short: (minutes) => minutes < 5,
  medium: (minutes) => minutes >= 5 && minutes <= 10,
  long: (minutes) => minutes > 10,
}

const DEFAULTS = { q: '', topic: 'all', tag: '', length: 'any', sort: 'newest' }
const VIEW_STORAGE_KEY = 'blog-view'

const inTopic = (post, topicId) =>
  topicId === 'all' ||
  post.tags.some((tag) => blogTopics.find((topic) => topic.id === topicId)?.tags.includes(tag))

const controlClass =
  'rounded-md border border-zinc-300 bg-white py-1.5 pl-3 pr-8 text-sm text-zinc-700 focus:border-primary-500 focus:ring-primary-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'

// Blog index and tag pages. `showFilters` adds search, topics, tag and reading-time filters,
// kept in the URL so a filtered view can be shared.
export default function ListLayout({ posts, title, description, showFilters = false }) {
  const t = useT()
  const locale = useLocale()
  const router = useRouter()
  const [filters, setFilters] = useState(DEFAULTS)
  const [view, setView] = useState('grid')

  // Read filters and view from the URL (and the saved view) once the router is ready
  useEffect(() => {
    if (!router.isReady) return
    const { q, topic, tag, length, sort, view: viewParam } = router.query
    if (showFilters) {
      setFilters({
        q: q || DEFAULTS.q,
        topic: blogTopics.some((item) => item.id === topic) ? topic : DEFAULTS.topic,
        tag: tag || DEFAULTS.tag,
        length: length in LENGTHS ? length : DEFAULTS.length,
        sort: sort in SORTS ? sort : DEFAULTS.sort,
      })
    } else if (sort in SORTS) {
      setFilters((current) => ({ ...current, sort }))
    }
    const savedView = window.localStorage.getItem(VIEW_STORAGE_KEY)
    setView(['grid', 'list'].includes(viewParam) ? viewParam : savedView || 'grid')
    // Only on the first load; later changes come from the controls
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  const syncUrl = (nextFilters, nextView) => {
    const query = {}
    Object.entries(nextFilters).forEach(([key, value]) => {
      if (value !== DEFAULTS[key]) query[key] = value
    })
    if (nextView !== 'grid') query.view = nextView
    const path = router.asPath.split('?')[0]
    router.replace({ pathname: path, query }, undefined, { shallow: true, scroll: false })
  }

  const updateFilter = (key, value) => {
    const next = { ...filters, [key]: value }
    setFilters(next)
    syncUrl(next, view)
  }

  const changeView = (nextView) => {
    setView(nextView)
    window.localStorage.setItem(VIEW_STORAGE_KEY, nextView)
    syncUrl(filters, nextView)
  }

  const clearFilters = () => {
    setFilters(DEFAULTS)
    syncUrl(DEFAULTS, view)
  }

  // Tags and topic counts come from the posts on this page
  const tagOptions = useMemo(
    () => [...new Set(posts.flatMap((post) => post.tags))].sort((a, b) => a.localeCompare(b)),
    [posts]
  )
  const topicCounts = useMemo(
    () =>
      Object.fromEntries(
        blogTopics.map((topic) => [
          topic.id,
          posts.filter((post) => inTopic(post, topic.id)).length,
        ])
      ),
    [posts]
  )

  const visiblePosts = useMemo(() => {
    const query = filters.q.trim().toLowerCase()
    return posts
      .filter((post) => inTopic(post, filters.topic))
      .filter((post) => !filters.tag || post.tags.includes(filters.tag))
      .filter((post) => LENGTHS[filters.length](post.readingMinutes))
      .filter(
        (post) =>
          !query ||
          `${post.title} ${post.summary} ${post.tags.join(' ')}`.toLowerCase().includes(query)
      )
      .sort(SORTS[filters.sort])
  }, [posts, filters])

  const hasActiveFilters = ['q', 'topic', 'tag', 'length'].some(
    (key) => filters[key] !== DEFAULTS[key]
  )

  return (
    <div className="pb-12 pt-6">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{description}</p>
        )}
      </header>

      <div className="mt-8 space-y-4">
        {/* Search, sort and layout */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {showFilters && (
            <div className="relative flex-1">
              <SearchIcon
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={filters.q}
                onChange={(e) => updateFilter('q', e.target.value)}
                placeholder={t.blog.search}
                aria-label={t.blog.search}
                className="block w-full rounded-md border border-zinc-300 bg-white py-2 pl-10 pr-3 text-zinc-900 focus:border-primary-500 focus:ring-primary-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
            </div>
          )}
          <div className="flex items-center gap-3 sm:ml-auto">
            <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="whitespace-nowrap">{t.blog.sortLabel}</span>
              <select
                value={filters.sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className={controlClass}
              >
                {Object.keys(SORTS).map((key) => (
                  <option key={key} value={key}>
                    {t.blog.sort[key]}
                  </option>
                ))}
              </select>
            </label>
            <div
              role="group"
              aria-label={t.blog.viewLabel}
              className="flex rounded-md border border-zinc-300 p-0.5 dark:border-zinc-700"
            >
              {[
                ['grid', ViewGridIcon],
                ['list', ViewListIcon],
              ].map(([key, Icon]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => changeView(key)}
                  aria-pressed={view === key}
                  aria-label={t.blog.view[key]}
                  title={t.blog.view[key]}
                  className={`rounded p-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    view === key
                      ? 'bg-primary-600 text-white'
                      : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {showFilters && (
          <>
            {/* Topics */}
            <div
              role="group"
              aria-label={t.blog.topicLabel}
              className="flex flex-wrap gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800"
            >
              {[{ id: 'all', label: t.blog.allTopics, count: posts.length }]
                .concat(
                  blogTopics
                    .map((topic) => ({
                      id: topic.id,
                      label: localize(topic.label, locale),
                      count: topicCounts[topic.id],
                    }))
                    .filter((topic) => topic.count > 0)
                )
                .map(({ id, label, count }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => updateFilter('topic', id)}
                    aria-pressed={filters.topic === id}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      filters.topic === id
                        ? 'bg-primary-600 text-white'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {label}
                    <span
                      className={
                        filters.topic === id
                          ? 'text-primary-100'
                          : 'text-zinc-500 dark:text-zinc-400'
                      }
                    >
                      {count}
                    </span>
                  </button>
                ))}
            </div>

            {/* Tag, reading time and results */}
            <div className="flex flex-wrap items-center gap-3">
              <label className="sr-only" htmlFor="blog-tag-filter">
                {t.blog.tagLabel}
              </label>
              <select
                id="blog-tag-filter"
                value={filters.tag}
                onChange={(e) => updateFilter('tag', e.target.value)}
                className={controlClass}
              >
                <option value="">{t.blog.allTags}</option>
                {tagOptions.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <label className="sr-only" htmlFor="blog-length-filter">
                {t.blog.lengthLabel}
              </label>
              <select
                id="blog-length-filter"
                value={filters.length}
                onChange={(e) => updateFilter('length', e.target.value)}
                className={controlClass}
              >
                {Object.keys(LENGTHS).map((key) => (
                  <option key={key} value={key}>
                    {t.blog.length[key]}
                  </option>
                ))}
              </select>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {t.blog.clearFilters}
                </button>
              )}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 sm:ml-auto" aria-live="polite">
                {t.blog.results(visiblePosts.length, posts.length)}
              </p>
            </div>
          </>
        )}
      </div>

      {visiblePosts.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
          <p className="text-zinc-600 dark:text-zinc-400">{t.blog.noResults}</p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {t.blog.clearFilters}
            </button>
          )}
        </div>
      ) : view === 'grid' ? (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <li key={post.slug} className="grid">
              <PostCard {...post} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-6 space-y-1">
          {visiblePosts.map((post) => (
            <li key={post.slug}>
              <PostRow {...post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
