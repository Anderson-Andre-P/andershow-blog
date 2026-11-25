import recommendationsData, { recommendationsUrl } from '@/data/recommendationsData'
import { localize, useLocale, useT } from '@/lib/i18n'

const Recommendations = () => {
  const t = useT()
  const locale = useLocale()

  return (
    <div className="content mt-12 sm:mt-24">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-poppins title-font text-3xl font-bold">{t.home.recommendations}</h2>
        <a
          href={recommendationsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-base font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
        >
          {t.home.recommendationsLink} &rarr;
        </a>
      </div>
      {t.home.recommendationsNote && (
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {t.home.recommendationsNote}
        </p>
      )}

      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {recommendationsData.map(({ name, title, relationship, date, text }) => (
          <li
            key={name}
            className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>&ldquo;{localize(text, locale)}&rdquo;</p>
            </blockquote>
            <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{localize(title, locale)}</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {localize(relationship, locale)} · {localize(date, locale)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recommendations
