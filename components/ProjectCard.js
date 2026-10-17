import Image from './Image'
import Link from './Link'

const LINK_LABELS = {
  github: 'GitHub',
  playStore: 'Google Play',
  appStore: 'App Store',
  demo: 'Live demo',
}

// The whole card opens the case study (stretched title link); store/GitHub links sit above it.
const ProjectCard = ({ title, slug, description, imgSrc, links = {}, highlighted = false }) => {
  const availableLinks = Object.keys(LINK_LABELS).filter((key) => links[key])

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors focus-within:ring-2 focus-within:ring-indigo-500 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 ${
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

      <div className={`flex flex-1 flex-col p-6 ${highlighted ? 'md:justify-center' : ''}`}>
        <h3
          className={`font-bold tracking-tight text-zinc-800 dark:text-zinc-100 ${
            highlighted ? 'text-2xl' : 'text-xl'
          }`}
        >
          <Link
            href={`/projects/${slug}`}
            className="after:absolute after:inset-0 focus:outline-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
          >
            {title}
          </Link>
        </h3>
        <p
          className={`mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400 ${
            highlighted ? '' : 'line-clamp-3'
          }`}
        >
          {description}
        </p>

        {availableLinks.length > 0 && (
          <div className="relative z-10 mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm font-medium">
            {availableLinks.map((key) => (
              <Link
                key={key}
                href={links[key]}
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                aria-label={`${title} on ${LINK_LABELS[key]}`}
              >
                {LINK_LABELS[key]}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
