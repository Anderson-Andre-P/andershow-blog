import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {
    slug,
    fileName,
    date,
    title,
    tags,
    readingMinutes,
    translation,
    lang = siteMetadata.language,
  } = frontMatter
  const isPortuguese = lang.startsWith('pt')

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article lang={lang}>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="flex justify-center gap-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <dt className="sr-only">Published on</dt>
                <dd>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(lang, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </time>
                </dd>
                {readingMinutes && (
                  <>
                    <dt className="sr-only">Reading time</dt>
                    <dd lang="en">{readingMinutes} min read</dd>
                  </>
                )}
              </dl>

              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              {translation && (
                <p className="pt-2 text-sm text-gray-500 dark:text-gray-400">
                  {isPortuguese ? (
                    <Link
                      href={`/blog/${translation}`}
                      lang="en"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                    >
                      Read this post in English
                    </Link>
                  ) : (
                    <Link
                      href={`/blog/${translation}`}
                      lang="pt-BR"
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                    >
                      Leia este post em português
                    </Link>
                  )}
                </p>
              )}
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38"
                          height="38"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Github</dt>
                        <dd>
                          {author.github && (
                            <Link
                              href={author.github}
                              className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                            >
                              {author.github.replace('https://github.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
              {/* <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div> */}
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2
                      lang="en"
                      className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                    >
                      Tags
                    </h2>
                    <div className="mt-2 flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2
                          lang="en"
                          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                        >
                          Previous article
                        </h2>
                        <div className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2
                          lang="en"
                          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                        >
                          Next article
                        </h2>
                        <div className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  lang="en"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
                >
                  &larr; Back to blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
