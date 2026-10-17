import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import ResumeButton from '@/components/ResumeButton'
import EmailButton from '@/components/EmailButton'
import { primaryButton, secondaryButton } from '@/components/buttonStyles'
import { PageSEO } from '@/components/SEO'
import experienceData from '@/data/experienceData'
import { localize, useLocale, useT } from '@/lib/i18n'

export default function AuthorLayout({ children, frontMatter, hasResume }) {
  const t = useT()
  const locale = useLocale()
  const { name, avatar, occupation, company, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO
        title={`${t.about.title} - ${name}`}
        description={t.about.description(name, occupation, company)}
      />
      <div className="pb-12 pt-6 md:grid md:grid-cols-3 md:gap-12 md:pt-12">
        <aside className="md:sticky md:top-12 md:self-start">
          <div className="w-32 overflow-hidden rounded-xl md:w-full md:max-w-[220px]">
            <Image
              src={avatar}
              alt={t.about.photoAlt(name)}
              width="440"
              height="440"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-white">
            {name}
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            {t.about.roleAt(occupation, company)}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasResume && <ResumeButton />}
            <EmailButton
              className={hasResume ? secondaryButton : primaryButton}
              label={t.common.emailMe}
            />
          </div>
          <div className="mt-5 flex gap-4">
            <SocialIcon kind="github" href={github} size={6} />
            <SocialIcon kind="linkedin" href={linkedin} size={6} />
          </div>
        </aside>

        <div className="mt-12 md:col-span-2 md:mt-0">
          <div className="prose max-w-none dark:prose-dark">{children}</div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-white">
              {t.about.career}
            </h2>
            <ol className="mt-6 border-l border-zinc-200 dark:border-zinc-800">
              {experienceData.map(({ company, role, level, period, startYear }) => (
                <li
                  key={`${company}-${startYear}-${level['en-US']}`}
                  className="relative pb-8 pl-6 last:pb-0"
                >
                  <span
                    className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary-500 dark:bg-primary-400"
                    aria-hidden="true"
                  />
                  <p
                    className="text-3xl font-bold tabular-nums tracking-tight text-zinc-400 dark:text-zinc-600"
                    aria-hidden="true"
                  >
                    {startYear}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-800 dark:text-zinc-100">{company}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {localize(role, locale)}, {localize(level, locale)}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {localize(period, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </>
  )
}
