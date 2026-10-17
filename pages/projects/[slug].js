import fs from 'fs'
import path from 'path'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import ProjectLayout from '@/layouts/ProjectLayout'
import { getFileBySlug } from '@/lib/mdx'
import { sortProjects } from '@/lib/projects'
import projectsData from '@/data/projectsData'

const hasCaseStudy = (slug) =>
  fs.existsSync(path.join(process.cwd(), 'data', 'projects', `${slug}.mdx`))

export async function getStaticPaths() {
  return {
    paths: projectsData.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projects = sortProjects(projectsData)
  const index = projects.findIndex((p) => p.slug === params.slug)
  const project = projects[index]
  const toLink = (p) => ({ href: `/projects/${p.slug}`, title: p.title })
  const prev = index > 0 ? toLink(projects[index - 1]) : null
  const next = index < projects.length - 1 ? toLink(projects[index + 1]) : null
  const caseStudy = hasCaseStudy(params.slug) ? await getFileBySlug('projects', params.slug) : null

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
