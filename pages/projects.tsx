import ProjectCard from "../components/ProjectCard"
import { PROJECT_LIST } from "../data/common/projectInfo"

const ProjectsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center m-10'>
      {PROJECT_LIST.map(project => {
        return <ProjectCard project={project} />
      })}
    </div>
  )
}

export default ProjectsPage