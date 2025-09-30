import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

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

function Research() {
  return (
    <ResearchContainer>
      <PageHeroGraphic />
      <ResearchLayout>
        <CallForProposalsContainer>
          <div>
            <div className="text-cimc-hero self-stretch text-center mb-4">
              Call for Research Proposals
            </div>
            <div className="text-cimc-helvetica-normal-alt self-stretch text-center text-cimc_dark/60">
              Applications are reviewed on a rolling bases
            </div>
          </div>
          <ProposalButton href="/#/research/proposals">DETAILS FOR APPLYING</ProposalButton>
        </ CallForProposalsContainer>
      </ResearchLayout>
    </ResearchContainer>
  )
}

export default Research
