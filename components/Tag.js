import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`} legacyBehavior>
      <a className="mb-2 mr-2 rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-primary-50 hover:text-primary-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-primary-900/40 dark:hover:text-primary-300">
        {text}
      </a>
    </Link>
  )
}

export default Tag
