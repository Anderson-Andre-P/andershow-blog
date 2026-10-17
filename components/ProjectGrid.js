import ProjectCard from '@/components/ProjectCard'

// Two columns; with an odd number of projects the last one spans the full row
// (horizontal layout) so the grid never ends with an empty cell.
const ProjectGrid = ({ projects }) => (
  <div className="grid gap-6 py-8 sm:grid-cols-2">
    {projects.map((project, index) => {
      const fillsRow = projects.length % 2 === 1 && index === projects.length - 1
      return (
        // `grid` on the wrapper stretches the card so cards in a row share the same height
        <div key={project.title} className={`grid ${fillsRow ? 'sm:col-span-2' : ''}`}>
          <ProjectCard {...project} highlighted={fillsRow} />
        </div>
      )
    })}
  </div>
)

export default ProjectGrid
