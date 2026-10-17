import { useLocale, useT } from '@/lib/i18n'

// Publication date and reading time, shared by the grid and list views
const PostMeta = ({ date, readingMinutes, className = '' }) => {
  const t = useT()
  const locale = useLocale()
  return (
    <dl className={`flex flex-wrap gap-x-3 text-sm text-zinc-500 dark:text-zinc-400 ${className}`}>
      <dt className="sr-only">{t.common.publishedOn}</dt>
      <dd>
        <time dateTime={date}>
          {new Date(date).toLocaleDateString(locale, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
      </dd>
      {readingMinutes && (
        <>
          <dt className="sr-only">{t.common.readingTime}</dt>
          <dd>{t.common.minRead(readingMinutes)}</dd>
        </>
      )}
    </dl>
  )
}

export default PostMeta
