import Image from './Image'
import Link from './Link'
import { localize, useLocale, useT } from '@/lib/i18n'

// The whole card opens the case study (stretched title link). External links (GitHub, stores)
// only appear on the case study page.
// Without a banner (imgSrc), `previewScreens` shows a few app screens side by side instead.
const ProjectCard = ({ title, slug, description, imgSrc, previewScreens, highlighted = false }) => {
  const t = useT()
  const locale = useLocale()

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors focus-within:ring-2 focus-within:ring-primary-500 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 ${
        highlighted ? 'md:flex-row' : ''
      }`}
    >
      {imgSrc && (
        <div
          className={`relative aspect-[2/1] bg-zinc-100 dark:bg-zinc-800 ${
            highlighted ? 'md:aspect-auto md:min-h-[280px] md:w-3/5' : ''
          }`}
        >
          <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
        </div>
      )}

      {!imgSrc && previewScreens?.length > 0 && (
        <div
          className={`flex items-center justify-center gap-3 bg-zinc-100 px-6 pt-6 dark:bg-zinc-800 sm:gap-4 ${
            highlighted ? 'md:w-3/5 md:pb-6' : ''
          }`}
        >
          {previewScreens.map((src, index) => (
            <div
              key={src}
              className={`w-1/4 overflow-hidden rounded-t-xl border border-b-0 border-zinc-300 dark:border-zinc-700 ${
                highlighted ? 'md:rounded-xl md:border-b' : ''
              } ${index === 1 ? '' : 'mt-6'}`}
            >
              <Image src={src} alt="" width={540} height={1200} layout="responsive" />
            </div>
          ))}
        </div>
      )}

      <div className={`flex flex-1 flex-col p-6 ${highlighted ? 'md:justify-center' : ''}`}>
        <h3
          className={`font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ${
            highlighted ? 'text-2xl' : 'text-xl'
          }`}
        >
          <Link
            href={`/projects/${slug}`}
            className="after:absolute after:inset-0 focus:outline-none group-hover:text-primary-600 dark:group-hover:text-primary-400"
          >
            {title}
          </Link>
        </h3>
        <p
          className={`mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400 ${
            highlighted ? '' : 'line-clamp-3'
          }`}
        >
          {localize(description, locale)}
        </p>
        <span
          className="mt-auto pt-5 text-sm font-medium text-primary-600 dark:text-primary-400"
          aria-hidden="true"
        >
          {t.projects.readCaseStudy} &rarr;
        </span>
      </div>
    </article>
  )
}

export default ProjectCard
