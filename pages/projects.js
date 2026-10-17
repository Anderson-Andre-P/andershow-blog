import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import ProjectGrid from '@/components/ProjectGrid'
import { PageSEO } from '@/components/SEO'
import { sortProjects } from '@/lib/projects'

const [highlighted, ...rest] = sortProjects(projectsData)

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-5xl">
          Projects
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Mobile apps I've built with Flutter, from technical challenges to personal projects. Open
          a project to see how it was built.
        </p>
      </div>
      {highlighted && <ProjectCard {...highlighted} highlighted />}
      <ProjectGrid projects={rest} />
    </>
  )
}
