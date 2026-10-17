import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const LINK_LABELS = {
  github: 'View on GitHub',
  playStore: 'Get it on Google Play',
  appStore: 'Download on the App Store',
  demo: 'Open live demo',
}

export default function ProjectLayout({ project, frontMatter = {}, next, children }) {
  const { title, description, imgSrc, links = {} } = project
  const { year, type, stack = [] } = frontMatter
  const availableLinks = Object.keys(LINK_LABELS).filter((key) => links[key])

  return (
    <>
      <PageSEO title={`${title} - ${siteMetadata.author}`} description={description} />
      <article className="pb-12 pt-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          &larr; All projects
        </Link>

        <header className="mt-6 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          {availableLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {availableLinks.map((key, index) => (
                <Link
                  key={key}
                  href={links[key]}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 ${
                    index === 0
                      ? 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700'
                      : 'border border-zinc-300 text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500'
                  }`}
                >
                  {LINK_LABELS[key]}
                </Link>
              ))}
            </div>
          )}
        </header>

        {imgSrc && (
          <div className="relative mt-10 aspect-[2/1] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
            <Image src={imgSrc} alt="" layout="fill" objectFit="cover" priority />
          </div>
        )}

        <div className="mt-10 md:grid md:grid-cols-4 md:gap-12">
          <dl className="grid grid-cols-2 gap-6 border-b border-zinc-200 pb-8 text-sm dark:border-zinc-800 md:col-span-1 md:block md:space-y-6 md:self-start md:border-0 md:pb-0">
            {type && (
              <div>
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">Type</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{type}</dd>
              </div>
            )}
            {year && (
              <div>
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">Year</dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{year}</dd>
              </div>
            )}
            {stack.length > 0 && (
              <div className="col-span-2">
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>

          <div className="prose mt-8 max-w-none dark:prose-dark md:col-span-3 md:mt-0">
            {children}
          </div>
        </div>

        {next && (
          <nav className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Next project</p>
            <Link
              href={`/projects/${next.slug}`}
              className="mt-1 inline-block text-2xl font-bold tracking-tight text-zinc-800 hover:text-primary-600 dark:text-zinc-100 dark:hover:text-primary-400"
            >
              {next.title}
            </Link>
          </nav>
        )}
      </article>
    </>
  )
}
