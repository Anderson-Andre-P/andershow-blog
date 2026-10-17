import Link from '@/components/Link'
import { useT } from '@/lib/i18n'

export default function Pagination({ totalPages, currentPage }) {
  const t = useT()
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            {t.blog.previousPage}
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button rel="previous">{t.blog.previousPage}</button>
          </Link>
        )}
        <span>{t.blog.pageOf(currentPage, totalPages)}</span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            {t.blog.nextPage}
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next">{t.blog.nextPage}</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
