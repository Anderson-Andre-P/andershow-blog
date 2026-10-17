import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import ProjectGrid from '@/components/ProjectGrid'
import { PageSEO } from '@/components/SEO'
import { sortProjects } from '@/lib/projects'
import { localize, useLocale, useT } from '@/lib/i18n'

const [highlighted, ...rest] = sortProjects(projectsData)

export default function Projects() {
  const t = useT()
  const locale = useLocale()

  return (
    <>
      <PageSEO
        title={`${t.projects.title} - ${siteMetadata.author}`}
        description={localize(siteMetadata.description, locale)}
      />
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-5xl">
          {t.projects.title}
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{t.projects.intro}</p>
      </div>
      {highlighted && <ProjectCard {...highlighted} highlighted />}
      <ProjectGrid projects={rest} />
    </>
  )
}
