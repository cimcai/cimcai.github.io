import styled from "styled-components"
import tw from "twin.macro"

const OngoingResearchHeaderContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    gap-4
  `}
`

const OngoingResearchTitle = styled.div`
  ${tw`
    font-questrial
    text-cimc-hero
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
