import { useEffect, useState} from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import { OngoingResearchHeader } from "../components/OngoingResearchHeader"
import { PageHeroGraphic } from "../components/PageHeroGraphic"
import { ProjectDetails } from "../components/ProjectDetails"
import { ProjectsAccordion } from "../components/ProjectsAccordion"

const ResearchContainer = styled.div`
  ${tw`
    bg-white
    selection:text-black
    selection:bg-gray-500
    flex
    flex-col
    items-center
    md:justify-center
    px-0
    pt-24
    pb-20
  `}
`

const ResearchLayout = styled.div`
  ${tw`
    flex
    flex-col
    justify-between
    w-full
    max-w-[1280px]
    mx-auto
    px-6
  `}
`

const CallForProposalsContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    gap-[59px]
    w-[1100px]
    md:mt-[70px]
    md:mb-[40px]
  `}
`

const ProposalButton = styled.a`
  ${tw`
    flex
    justify-center
    items-center
    w-[380px]
    h-[47px]
    px-[56px]
    py-[10px]
    gap-[6px]
    rounded-tl-none
    rounded-tr-[10px]
    rounded-bl-none
    rounded-br-none
    border-2
    border-black
    bg-white
    text-black
    shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)]
    transition-colors
    duration-200
    ease-in-out
    hover:bg-black
    hover:text-white
  `}
`

const CallForTitle = styled.div`
  ${tw`
    font-questrial
    text-cimc-hero
    self-stretch
    text-center
    mb-4
  `}
`

const CallForSubtitle = styled.div`
  ${tw`
    text-cimc-helvetica-normal-alt
    self-stretch
    text-center
    text-cimc_dark/60
  `}
`

function Research() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("")
  const [searchParams] = useSearchParams()
  useEffect(() => {
      const projectIdFromUrl = searchParams.get("projectId")
      if (projectIdFromUrl) {
        setSelectedProjectId(projectIdFromUrl)
      }
    }, [searchParams])

  useEffect(() => {
    const handleUrlChange = () => {
      const projectIdFromUrl = searchParams.get("projectId");
      if (!projectIdFromUrl) {
        setSelectedProjectId("");
      }
    };

    handleUrlChange(); // Check on initial render

    const observer = new MutationObserver(() => {
      handleUrlChange();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [searchParams]);

  return (
    <ResearchContainer>
      <PageHeroGraphic />
      <ResearchLayout>
        {
          selectedProjectId ? (
            <ProjectDetails projectId={selectedProjectId} />
          ) : (
            <>
              <div className="flex flex-col gap-14 justify-start">
                <OngoingResearchHeader />
                <ProjectsAccordion isFullListMode/>
              </div>
              <CallForProposalsContainer>
                <CallForTitle>
                  Call for Research Proposals
                </CallForTitle>
                <CallForSubtitle>
                  Applications are reviewed on a rolling bases
                </CallForSubtitle>
                <ProposalButton href="/#/research/proposals">
                  DETAILS FOR APPLYING
                </ProposalButton>
              </CallForProposalsContainer>
            </>
          )
        }
      </ResearchLayout>
    </ResearchContainer>
  )
}

export default Research
