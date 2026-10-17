import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ProjectGrid from '@/components/ProjectGrid'
import projectsData from '@/data/projectsData'
import ExperienceCard from '@/components/ExperienceCard'
import experienceData from '@/data/experienceData'
import Skills from '@/components/Skills'
import ResumeButton from '@/components/ResumeButton'
import { secondaryButton } from '@/components/buttonStyles'
import { hasPublicFile } from '@/lib/utils/files'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  const hasResume = hasPublicFile(siteMetadata.resume)

  return { props: { posts, hasResume } }
}

export default function Home({ posts, hasResume }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pb-4 pt-6 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Anderson Eleutério
            </h1>
            <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
              Mobile &amp; Forward Deployed Engineer
            </h2>
          </div>
          {/* <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
            <Image
              src="/static/images/profile-photo.jpg"
              alt="avatar"
              width="200px"
              height="200px"
              className="rounded-full"
            />
          </div> */}
        </div>
        <p className="my-4 max-w-2xl leading-loose text-zinc-600 dark:text-slate-300">
          I build Flutter apps for logistics and industrial IoT, and I care about what happens after
          they ship: how they're used in the field, where they break, and how they can make an
          operation run better.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Open to remote international roles.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hasResume && <ResumeButton />}
          <a
            className={secondaryButton}
            href="https://www.linkedin.com/in/anderson-andre-pereira"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              height="20"
              width="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            className={secondaryButton}
            href="https://github.com/Anderson-Andre-P"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              height="20"
              width="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span>GitHub</span>
          </a>
          <a className={secondaryButton} href={`mailto:${siteMetadata.email}`}>
            <svg
              height="20"
              width="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="content mb-8 mt-12 sm:mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-poppins title-font text-3xl font-bold">Projects</h2>
          <Link
            href="/projects"
            className="text-base font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
          >
            All projects &rarr;
          </Link>
        </div>
        <p className="my-4 max-w-2xl leading-loose text-zinc-600 dark:text-slate-300">
          My day-to-day work is on seven B2B apps at DDMX. These are projects I built on my own and
          as technical challenges, from asset management for maintenance teams to real estate
          search, each one end to end with Flutter. Open one to read how it was built.
        </p>
      </div>

      <ProjectGrid projects={projectsData.filter((project) => project.featured)} />
      <div className="content mt-12 sm:mt-24">
        <h2 className="font-poppins title-font text-3xl font-bold">Experience</h2>
        <ul className="mt-8">
          {experienceData.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.period}`} {...experience} />
          ))}
        </ul>
      </div>

      <div className="mt-12 sm:mt-24">
        <Skills />
      </div>

      <div className="content mt-12 sm:mt-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-poppins title-font text-3xl font-bold">Latest Posts</h2>
          {posts.length > MAX_DISPLAY && (
            <Link
              href="/blog"
              className="text-base font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
              All posts &rarr;
            </Link>
          )}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.slice(0, MAX_DISPLAY).map(({ slug, date, title, summary, tags }) => (
            <li key={slug} className="py-8">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                      {title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <p className="line-clamp-3 text-gray-500 dark:text-gray-400">{summary}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
