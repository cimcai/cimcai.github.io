import styled from "styled-components";
import tw from "twin.macro";
import { useProjectsStore } from "../store/projectsStore";

const DetailsContainer = styled.div`
  ${tw`flex flex-col items-start bg-white p-8 rounded-lg shadow-md`}
`;

const Title = styled.h1`
  ${tw`text-2xl font-bold mb-4`}
`;

const SectionTitle = styled.h2`
  ${tw`text-xl font-semibold mt-6 mb-2`}
`;

const Paragraph = styled.p`
  ${tw`text-base mb-4`}
`;

const TeamSection = styled.div`
  ${tw`mt-6`}
`;

const TeamButton = styled.a`
  ${tw`inline-block mt-6 px-6 py-2 rounded-full bg-black text-white text-sm`}
`;

interface ProjectDetailsProps {
  projectId: string;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const { projects } = useProjectsStore();
  const project = projects.find((p) => String(p.id) === projectId);

  if (!project) {
    console.log("Project not found for ID:", projectId);
    console.log("Projects:", projects);
    return <div>Project not found.</div>;
  }

  return (
    <DetailsContainer>
      <Title>{project.name}</Title>

      {project.need && (
        <>
          <SectionTitle>Statement of Need:</SectionTitle>
          <Paragraph>{project.need}</Paragraph>
        </>
      )}

      {project.mission && (
        <>
          <SectionTitle>Mission Statement:</SectionTitle>
          <Paragraph>{project.mission}</Paragraph>
        </>
      )}

      {project.teamDescription && (
        <>
          <SectionTitle>About the Team:</SectionTitle>
          <Paragraph>{project.teamDescription}</Paragraph>
        </>
      )}

      <TeamSection>
        <TeamButton href="#">Link to Recent Publications</TeamButton>
      </TeamSection>
    </DetailsContainer>
  );
};
