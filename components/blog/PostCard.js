import Link from '@/components/Link'
import PostMeta from './PostMeta'
import PostTags from './PostTags'

// Grid view. The whole card opens the post (stretched title link); tags stay clickable on top.
const PostCard = ({ slug, date, title, summary, tags, readingMinutes }) => (
  <article className="group relative flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 transition-colors focus-within:ring-2 focus-within:ring-primary-500 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600">
    <PostMeta date={date} readingMinutes={readingMinutes} />
    <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-800 dark:text-zinc-100">
      <Link
        href={`/blog/${slug}`}
        className="after:absolute after:inset-0 focus:outline-none group-hover:text-primary-600 dark:group-hover:text-primary-400"
      >
        {title}
      </Link>
    </h2>
    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
      {summary}
    </p>
    <PostTags tags={tags} className="relative z-10 mt-auto pt-4" />
  </article>
)

export default PostCard
