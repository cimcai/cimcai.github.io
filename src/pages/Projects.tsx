import styled from "styled-components";
import tw from "twin.macro";

const ProjectsContainer = styled.div`
  ${tw`
    bg-white
    text-black
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
const Projects = () => {
  return(
    <ProjectsContainer id="projects">
      <ProjectStyle>
        <p className="text-cimc-heading leading-tight py-4">
          PROJECTS
        </p>
        <ul>
          <li className="pb-4">
            What is consciousness, how does it relate to mind, modeling, reality?
          </li>
          <li className="pb-4">
            How can we characterize phenomenology, functionality and implementation?
          </li>
          <li className="pb-4">
            Which systems can be conscious?
          </li>
          <li className="pb-4">
            What are necessary and sufficient conditions?
          </li>
          <li className="pb-4">
            How can we test for consciousness?
          </li>
          <li className="pb-4">
            Hypothesis: consciousness is discovered by the brain, as part of learning paradigm in a self organizing substrate
          </li>
          <li className="pb-4">
            Understanding the brain as a multiway system
          </li>
          <li className="pb-4">
            Can we get a self organizing system (eg. NCA) to learn complex sequence prediction tasks?
          </li>
          <li className="pb-4">
            Can self organizing learning systems control agents?
          </li>
          <li className="pb-4">
            Do we observe the discovery of self improving self reflexive structure?
          </li>
          <li className="pb-4">
            What are the limitations of this paradigm?
          </li>
          <li>
            Can we discover implications for consciousness in comparable systems in nature (ie. how much does it depend on architecture?)
          </li>
        </ul>
      </ProjectStyle>
    </ProjectsContainer>
  )
}

export default Projects
