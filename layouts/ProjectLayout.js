import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import PrevNextNav from '@/components/PrevNextNav'
import siteMetadata from '@/data/siteMetadata'
import { localize, useLocale, useT } from '@/lib/i18n'

const LINK_KEYS = ['github', 'playStore', 'appStore', 'demo']

export default function ProjectLayout({ project, frontMatter = {}, prev, next, children }) {
  const t = useT()
  const locale = useLocale()
  const { title, imgSrc, links = {} } = project
  const description = localize(project.description, locale)
  const { year, type, stack = [] } = frontMatter
  const availableLinks = LINK_KEYS.filter((key) => links[key])

  return (
    <>
      <PageSEO title={`${title} - ${siteMetadata.author}`} description={description} />
      <article className="pb-12 pt-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          &larr; {t.projects.allProjects}
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
                  {t.projects.links[key]}
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
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {t.projects.type}
                </dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{type}</dd>
              </div>
            )}
            {year && (
              <div>
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {t.projects.year}
                </dt>
                <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{year}</dd>
              </div>
            )}
            {stack.length > 0 && (
              <div className="col-span-2">
                <dt className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {t.projects.stack}
                </dt>
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

        <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <PrevNextNav
            prev={prev}
            next={next}
            prevLabel={t.projects.previous}
            nextLabel={t.projects.next}
            ariaLabel={t.projects.more}
          />
        </div>
      </article>
    </>
  )
}
