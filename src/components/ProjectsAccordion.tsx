import { useEffect, useState } from "react";
import type { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useProjectsStore } from "../store/projectsStore";

const AccordionContainer = styled.div`
  ${tw`flex flex-col pb-[120px]`}
`;

const ProjectRow = styled.div`
  ${tw`border-b border-black flex items-center justify-between py-6 pr-8 cursor-pointer text-cimc-helvetica-normal-alt text-black`}
`;

const ProjectName = styled.div`
  ${tw`flex-1 text-left text-cimc-forward-lh`}
`;

const IconButton = styled.button`
  ${tw`ml-4 text-cimc-helvetica-48 bg-transparent border-none outline-none cursor-pointer select-none`}
`;

const ProjectDetails = styled.div`
  ${tw`bg-gray-50 p-8 text-cimc-helvetica-small text-black`}
`;

const TeamButton = styled.a`
  ${tw`inline-block mt-6 px-6 py-2 rounded-full bg-black text-white text-cimc-helvetica-small`}
`;

interface ProjectsAccordionProps {
  isFullListMode?: boolean;
}

export const ProjectsAccordion: FC<ProjectsAccordionProps> = ({ isFullListMode = false }) => {
  const { projects, loading, error } = useProjectsStore();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setOpenIndex(null);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (loading) return <div>Loading projects…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!projects.length) return <div>No projects found.</div>;

  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <AccordionContainer>
      {sortedProjects.map((project, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={project.id}>
            <ProjectRow
              onClick={() => {
                if (isFullListMode) {
                  window.location.href = `#research/?projectId=${project.id}`;
                } else {
                  setOpenIndex(isOpen ? null : idx);
                }
              }}
            >
              <ProjectName>{project.name}</ProjectName>
              <IconButton
                aria-label={isFullListMode ? "Arrow" : isOpen ? "Collapse" : "Expand"}
              >
                {isFullListMode ? (<span className="text-2xl">→</span>) : isOpen ? "−" : "+"}
              </IconButton>
            </ProjectRow>
            {!isFullListMode && isOpen && (
              <ProjectDetails>
                <div className="text-cimc-standard-18">
                  <p>Mission Statement:</p>
                  <br />
                  <p>{project.mission}</p>
                </div>
                <TeamButton href={`#research/?projectId=${project.id}`}>
                  Research Team Page
                </TeamButton>
              </ProjectDetails>
            )}
          </div>
        );
      })}
    </AccordionContainer>
  );
};
