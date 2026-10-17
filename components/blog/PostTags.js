import Tag from '@/components/Tag'
import { useT } from '@/lib/i18n'

// Shows the first `max` tags and how many are left
const PostTags = ({ tags = [], max = 3, className = '' }) => {
  const t = useT()
  const hidden = tags.length - max
  return (
    <div className={`flex flex-wrap items-center ${className}`}>
      {tags.slice(0, max).map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
      {hidden > 0 && (
        <span
          className="mb-2 text-xs text-zinc-500 dark:text-zinc-400"
          title={tags.slice(max).join(', ')}
        >
          {t.blog.moreTags(hidden)}
        </span>
      )}
    </div>
  )
}

export default PostTags
