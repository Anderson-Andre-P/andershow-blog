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
  const next = projects[(index + 1) % projects.length]
  const caseStudy = hasCaseStudy(params.slug) ? await getFileBySlug('projects', params.slug) : null

  return {
    props: {
      project,
      next: next.slug !== project.slug ? { slug: next.slug, title: next.title } : null,
      caseStudy,
    },
  }
}

export default function Project({ project, next, caseStudy }) {
  if (!caseStudy) {
    return <ProjectLayout project={project} next={next} />
  }

  return (
    <MDXLayoutRenderer
      layout="ProjectLayout"
      mdxSource={caseStudy.mdxSource}
      frontMatter={caseStudy.frontMatter}
      project={project}
      next={next}
    />
  )
}
