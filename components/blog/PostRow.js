import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from '@/components/Link'
import { useLocale, useT } from '@/lib/i18n'
import PostTags from './PostTags'

// List view (blog and homepage). The whole row opens the post (stretched title link);
// tags stay clickable on top of it.
const PostRow = ({ slug, date, title, summary, tags, readingMinutes }) => {
  const t = useT()
  const locale = useLocale()
  const formattedDate = new Date(date).toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <article className="group relative -mx-4 flex gap-6 rounded-xl px-4 py-5 transition-colors focus-within:ring-2 focus-within:ring-primary-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 sm:items-start">
      <div className="min-w-0 flex-1">
        {/* On small screens the date sits above the title */}
        <p className="mb-2 flex gap-3 text-sm text-zinc-500 dark:text-zinc-400 sm:hidden">
          <time dateTime={date}>{formattedDate}</time>
          {readingMinutes && <span>{t.common.minRead(readingMinutes)}</span>}
        </p>
        <h2 className="text-lg font-semibold leading-snug tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          <Link
            href={`/blog/${slug}`}
            className="after:absolute after:inset-0 after:rounded-xl focus:outline-none group-hover:text-primary-600 dark:group-hover:text-primary-400"
          >
            {title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {summary}
        </p>
        <PostTags tags={tags} max={4} className="relative z-10 mt-3" />
      </div>

      <dl className="hidden w-32 shrink-0 text-right text-sm text-zinc-500 dark:text-zinc-400 sm:block">
        <dt className="sr-only">{t.common.publishedOn}</dt>
        <dd>
          <time dateTime={date}>{formattedDate}</time>
        </dd>
        {readingMinutes && (
          <>
            <dt className="sr-only">{t.common.readingTime}</dt>
            <dd className="mt-1">{t.common.minRead(readingMinutes)}</dd>
          </>
        )}
      </dl>

      <ChevronRightIcon
        className="hidden h-5 w-5 shrink-0 self-center text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-600 dark:text-zinc-600 dark:group-hover:text-primary-400 sm:block"
        aria-hidden="true"
      />
    </article>
  )
}

export default PostRow
