import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="space-y-2 pb-4 pt-6 md:space-y-5">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
            Sobre
          </h1>
        </div>
        <div className="items-start">
          <div className="darK:bg-slate-100 flex flex-col items-center rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center md:flex-row">
            <div>
              <Image
                src="/static/images/profile_pic.jpeg"
                alt="avatar"
                width="150"
                height="150"
                className="rounded-full"
              />
            </div>
            <h3 className="py-2 text-2xl font-bold leading-8 tracking-tight lg:m-4">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400 lg:m-4">{company}</div>
            <div className="flex space-x-3 px-4 py-6 md:px-6 md:py-0">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
              <SocialIcon kind="github" href={github} size={5} />
              <SocialIcon kind="linkedin" href={linkedin} size={5} />
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
