import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

const ProjectGrid = () => (
  <div className="container py-12">
    <div className="-m-4 flex flex-wrap">
      {projectsData.map((d) => (
        <Card
          key={d.title}
          title={d.title}
          description={d.description}
          imgSrc={d.imgSrc}
          href={d.href}
        />
      ))}
    </div>
  </div>
)

export default ProjectGrid
