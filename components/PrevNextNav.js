import Link from './Link'

const NavCard = ({ item, label, align }) => (
  <Link
    href={item.href}
    className={`group flex flex-col gap-1 rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-zinc-800 dark:hover:border-zinc-600 ${
      align === 'right' ? 'text-right sm:col-start-2' : ''
    }`}
  >
    <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
    <span className="font-semibold leading-snug text-zinc-800 group-hover:text-primary-600 dark:text-zinc-100 dark:group-hover:text-primary-400">
      {item.title}
    </span>
  </Link>
)

// Previous/next links shown at the end of a post or case study.
// prev/next: { href, title } or null
const PrevNextNav = ({ prev, next, prevLabel, nextLabel, ariaLabel }) => {
  if (!prev && !next) return null

  return (
    <nav lang="en" aria-label={ariaLabel} className="grid gap-4 sm:grid-cols-2">
      {prev && <NavCard item={prev} label={<>&larr; {prevLabel}</>} />}
      {next && <NavCard item={next} label={<>{nextLabel} &rarr;</>} align="right" />}
    </nav>
  )
}

export default PrevNextNav
