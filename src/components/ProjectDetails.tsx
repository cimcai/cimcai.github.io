import styled from "styled-components";
import tw from "twin.macro";
import { useProjectsStore } from "../store/projectsStore";
import { useReferencesStore } from "../store/referencesStore";

const DetailsContainer = styled.div`
  ${tw`flex flex-col items-start bg-white p-8 font-questrial md:max-w-[860px]`}
`;

const Title = styled.h1`
  ${tw`text-cimc-48px mb-9 leading-[105%]`}
`;

const SectionTitle = styled.h2`
  ${tw`text-cimc-navbar-mobile mt-6 mb-5`}
`;

const Paragraph = styled.p`
  ${tw`text-[21px] mb-5`}
`;

const LinkSection = styled.div`
  ${tw`mt-6`}
`;

const LinkButton = styled.a`
  ${tw`inline-block mx-6 px-6 py-2 text-sm rounded-[40px] bg-[#F2F2F7] p-[var(--sds-size-space-300)] justify-center items-center flex-shrink-0`}
`;

interface ProjectDetailsProps {
  projectId: string;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const { projects } = useProjectsStore();
  const { references } = useReferencesStore();
  const projectReferences = references.filter((reference) => reference.projectId === Number(projectId));
  const project = projects.find((p) => String(p.id) === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <DetailsContainer>
      <Title>{project.name}</Title>

      {project.need && (
        <>
          <Paragraph>Statement of Need:</Paragraph>
          <Paragraph>{project.need}</Paragraph>
        </>
      )}

      {project.mission && (
        <>
          <Paragraph>Mission Statement:</Paragraph>
          <Paragraph>{project.mission}</Paragraph>
        </>
      )}

      {project.approach && (
        <>
          <Paragraph>Approach:</Paragraph>
          <Paragraph>{project.approach}</Paragraph>
        </>
      )}

      {project.teamMembers && (
        <>
          <SectionTitle>About the Team:</SectionTitle>
          {Array.isArray(project.teamMembers) && (
            <Paragraph>
              {project.teamMembers.map((member, index) => (
                <span key={member}>
                  {member}
                  {index < (project.teamMembers?.length ?? 0) - 1 && ", "}
                </span>
              ))}
            </Paragraph>
          )}
        </>
      )}
      {project.teamDescription && Array.isArray(project.teamDescription) && (
        <ul>
          {project.teamDescription.map((memberDescription, index) => (
            <li key={project.teamMembers ? project.teamMembers[index] : index}>
              <Paragraph>{memberDescription}</Paragraph>
            </li>
          ))}
        </ul>
      )}

      {projectReferences.length > 0 && (
        <LinkSection>
          <SectionTitle>Publications:</SectionTitle>
          <ul>
            {projectReferences.map((reference) => (
              <li key={reference.id}>
                <Paragraph>
                  {reference.title}
                  <br />
                  {reference.publication} ({reference.year})
                <LinkButton href={reference.url}>Link</LinkButton>
                </Paragraph>
              </li>
            ))}
          </ul>
        </LinkSection>
      )}
    </DetailsContainer>
  );
};
