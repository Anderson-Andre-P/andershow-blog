import Link from '@/components/Link'
import PostMeta from './PostMeta'
import PostTags from './PostTags'

// List view: a compact row per post
const PostRow = ({ slug, date, title, summary, tags, readingMinutes }) => (
  <article className="grid gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
    <PostMeta date={date} readingMinutes={readingMinutes} className="sm:flex-col sm:gap-1" />
    <div>
      <h2 className="text-xl font-semibold leading-snug tracking-tight">
        <Link
          href={`/blog/${slug}`}
          className="text-zinc-800 hover:text-primary-600 dark:text-zinc-100 dark:hover:text-primary-400"
        >
          {title}
        </Link>
      </h2>
      <p className="mt-2 line-clamp-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {summary}
      </p>
      <PostTags tags={tags} max={5} className="mt-3" />
    </div>
  </article>
)

export default PostRow
