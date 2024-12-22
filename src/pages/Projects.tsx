import styled from "styled-components";
import tw from "twin.macro";
import projectsList from "../data/projects.json"

const ProjectsContainer = styled.div`
  ${tw`
    bg-white
    selection:text-black
    selection:bg-gray-500
      flex
      md:justify-center
      max-md:px-6
      pt-16
      pb-20
    `}
`
const ProjectStyle = styled.div`
  ${tw`
      md:w-[729px]
    `}
`
interface ProjectsData {
  topic: string;
  projects: string[];
}

interface ProjectListProps {
  projectsList: ProjectsData;
}

const ProjectList = ({projectsList}: ProjectListProps) => {
  const {topic, projects} = projectsList
  return (
    <>
      <p className="text-cimc-heading leading-tight py-4">
        {topic}
      </p>
      <ul>
        {
          projects.map((project)=>{
            return (
              <li className="text-cimc-standard pb-4">
                {project}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

const Projects = () => {
  return(
    <ProjectsContainer id="projects">
      <ProjectStyle>
        {
          projectsList.map((projectList) => {
            return (
              <ProjectList projectsList={projectList} />
            )
          })
        }
      </ProjectStyle>
    </ProjectsContainer>
  )
}

export default Projects
