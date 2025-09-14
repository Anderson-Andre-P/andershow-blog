import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="space-y-3 pb-8 pt-12 text-center md:pb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Discover my journey, skills, and what drives me.
          </p>
        </div>

        {/* Card do autor */}
        <div className="relative flex flex-col items-center gap-8 rounded-2xl border border-zinc-200 bg-gradient-to-tr from-white to-zinc-50 p-8 shadow-md transition hover:scale-[1.01] hover:shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 md:flex-row md:items-center md:gap-12">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={avatar || '/static/images/profile_pic.jpeg'}
              alt="avatar"
              width="170"
              height="170"
              className="rounded-full border-4 border-indigo-200 shadow-lg dark:border-indigo-700"
            />
          </div>

          {/* Info principal */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold leading-9 tracking-tight text-zinc-800 dark:text-white">
              {name}
            </h3>
            <p className="mt-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
              {occupation}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{company}</p>

            {/* Separador */}
            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700"></div>

            {/* Social links */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-start">
              <a
                href={`mailto:${email}`}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Contact Me
              </a>
              <div className="flex gap-4">
                <SocialIcon kind="github" href={github} size={6} />
                <SocialIcon kind="linkedin" href={linkedin} size={6} />
              </div>
            </div>
          </div>
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose">
            <div className="prose max-w-none pb-8 pt-8 text-zinc-500 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </p>
        </p>
      </div>
    </>
  )
}
