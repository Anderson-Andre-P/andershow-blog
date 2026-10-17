import fs from 'fs'
import path from 'path'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import ProjectLayout from '@/layouts/ProjectLayout'
import { getFileBySlug, localeDir } from '@/lib/mdx'
import { DEFAULT_LOCALE } from '@/lib/locales'
import { sortProjects } from '@/lib/projects'
import projectsData from '@/data/projectsData'

const hasCaseStudy = (slug, locale) =>
  fs.existsSync(path.join(process.cwd(), 'data', localeDir('projects', locale), `${slug}.mdx`))

export async function getStaticPaths({ locales }) {
  return {
    paths: locales.flatMap((locale) =>
      projectsData.map(({ slug }) => ({ params: { slug }, locale }))
    ),
    fallback: false,
  }
}

export async function getStaticProps({ params, locale }) {
  const projects = sortProjects(projectsData)
  const index = projects.findIndex((p) => p.slug === params.slug)
  const project = projects[index]
  const toLink = (p) => ({ href: `/projects/${p.slug}`, title: p.title })
  const prev = index > 0 ? toLink(projects[index - 1]) : null
  const next = index < projects.length - 1 ? toLink(projects[index + 1]) : null
  // Falls back to the English case study while a translation doesn't exist
  const caseStudyLocale = hasCaseStudy(params.slug, locale) ? locale : DEFAULT_LOCALE
  const caseStudy = hasCaseStudy(params.slug, caseStudyLocale)
    ? await getFileBySlug(localeDir('projects', caseStudyLocale), params.slug)
    : null

  return {
    props: {
      project,
      prev,
      next,
      caseStudy,
    },
  }
}

export default function Project({ project, prev, next, caseStudy }) {
  if (!caseStudy) {
    return <ProjectLayout project={project} prev={prev} next={next} />
  }

  return (
    <MDXLayoutRenderer
      layout="ProjectLayout"
      mdxSource={caseStudy.mdxSource}
      frontMatter={caseStudy.frontMatter}
      project={project}
      prev={prev}
      next={next}
    />
  )
}
