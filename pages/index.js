import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import ExperienceCard from '@/components/ExperienceCard'
import experienceData from '@/data/experienceData'
import Skills from '@/components/Skills'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
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
              Specialist in building scalable software for the real world.
            </h2>
          </div>
          {/* <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
            <Image
              src="/static/images/profile_pic.png"
              alt="avatar"
              width="200px"
              height="200px"
              className="rounded-full"
            />
          </div> */}
        </div>
        <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
          Software developer with a degree in Information Systems and a passion for creating
          efficient and effective solutions. My technical skills cover a wide range of technologies,
          including object-oriented programming, version control, database management, and software
          development with scalable architectures such as Model-View-Controller (MVC) and
          Model-View-ViewModel (MVVM).
        </p>
        <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
          I have extensive experience as a mobile and web application developer, performing tasks
          such as bug fixing and problem-solving in legacy software systems. In addition to my
          professional experience, I am constantly working on personal projects to improve my skills
          and stay up to date with the latest trends and advancements in the field.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/anderson-andre-pereira"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-purple-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-purple-500/10 transition selection:bg-white/30 hover:bg-purple-500/80 hover:shadow-purple-500/5 focus:ring-purple-500/40 dark:bg-purple-400 dark:text-zinc-900 dark:shadow-purple-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-purple-400/80 dark:hover:shadow-purple-400/5 dark:focus:ring-purple-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://github.com/Anderson-Andre-P"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-green-600 px-2.5 py-2 font-medium text-white shadow-lg shadow-green-600/10 transition selection:bg-white/30 hover:bg-green-600/80 hover:shadow-green-600/5 focus:ring-green-500/40 dark:bg-green-400 dark:text-zinc-900 dark:shadow-green-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-green-400/80 dark:hover:shadow-green-400/5 dark:focus:ring-green-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href={`mailto:${siteMetadata.email}`}
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">E-mail</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>
      </div>

      <Skills />

      <div className="content mb-8">
        <h2 className="font-poppins title-font text-3xl font-bold">Projects</h2>
        <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
          Here you’ll find a curated selection of projects that showcase my expertise in mobile and
          web development. Each project reflects my focus on delivering high-quality code, scalable
          solutions, and seamless user experiences, while applying modern technologies such as
          Flutter, Dart, and RESTful APIs.
        </p>
        <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
          These projects range from real-world professional work to personal initiatives that
          highlight my ability to solve problems, optimize performance, and create intuitive
          applications aligned with business goals and user needs.
        </p>
      </div>

      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
      <div className="content mt-12 sm:mt-24">
        <h2 className="font-poppins title-font text-3xl font-bold">Main Experiences</h2>
        <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
          I have extensive experience in cross-platform mobile development with Flutter, delivering
          fast, scalable, and user-friendly apps for both iOS and Android. I also work on native
          mobile applications using Swift and Kotlin, implementing new features, optimizing
          performance, and integrating real-time communication with WebSockets.
        </p>

        <p className="my-4 space-y-4 leading-loose text-zinc-500 dark:text-slate-300">
          My experience includes integrating maps and geolocation for real-time tracking, managing
          data efficiently with DAOs, ensuring app stability through migration to null safety, and
          publishing and maintaining apps on the Google Play Store and Apple App Store.
        </p>

        <ul className="mt-8">
          {experienceData.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.period}`} {...experience} />
          ))}
        </ul>
      </div>
    </>
  )
}
