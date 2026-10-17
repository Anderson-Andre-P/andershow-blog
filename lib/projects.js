// Featured projects first, keeping the order from projectsData
export const sortProjects = (projects) => [
  ...projects.filter((p) => p.featured),
  ...projects.filter((p) => !p.featured),
]
