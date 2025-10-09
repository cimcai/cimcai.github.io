import styled from "styled-components"
import tw from "twin.macro"

const OngoingResearchHeaderContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    gap-8
    md:px-0
    md:py-0
    px-6
    pt-16
    pb-[56px]
  `}
`

const OngoingResearchTitle = styled.div`
  ${tw`
    font-questrial
    md:text-cimc-hero
    text-cimc-hero-small
    self-stretch
  `}
`

const OngoingResearchSubtitle = styled.div`
  ${tw`
    text-cimc-helvetica-normal-alt
    self-stretch
    text-cimc_dark/60
  `}
`

export const OngoingResearchHeader = () => (
  <OngoingResearchHeaderContainer>
    <OngoingResearchTitle>Ongoing Research Projects</OngoingResearchTitle>
    <OngoingResearchSubtitle>
      A look into the new research projects being done under CIMC
    </OngoingResearchSubtitle>
  </OngoingResearchHeaderContainer>
)
