import ProjectCard from '@/components/ProjectCard'

const ProjectGrid = ({ projects }) => (
  <div className="grid gap-6 py-8 sm:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
)

export default ProjectGrid
