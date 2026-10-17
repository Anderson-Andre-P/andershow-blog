import Image from './Image'
import Link from './Link'

// The whole card opens the case study (stretched title link). External links (GitHub, stores)
// only appear on the case study page.
const ProjectCard = ({ title, slug, description, imgSrc, highlighted = false }) => (
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
        {description}
      </p>
      <span
        className="mt-auto pt-5 text-sm font-medium text-primary-600 dark:text-primary-400"
        aria-hidden="true"
      >
        Read case study &rarr;
      </span>
    </div>
  </article>
)

export default ProjectCard
