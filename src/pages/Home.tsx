import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogo } from "../components/CIMCSquareLogo"
import Forward from "../components/Forward"
import { LaunchEvent } from "../components/LaunchEventSection"
import { LineBreak } from "../components/LineBreak"
import { NewsList } from "../components/NewsList"
import { OngoingResearchHeader } from "../components/OngoingResearchHeader"
import { ProjectsAccordion } from "../components/ProjectsAccordion"
import { StructuredData } from "../components/StructuredData"
import { SubstackSection } from "../components/SubstackSection"
import { WhitePaperSection } from "../components/WhitePaperSection"

const HomeContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    text-black
    selection:text-white
    selection:bg-gray-500
    to-black
    bg-white
  `}
`
const VideoContainer = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    px-6
    md:px-0
    md:pb-12
    pb-8
  `}
`
const HeroTextContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    gap-12
    pb-16
    px-6
    md:px-0
  `}
`

const HeroText = styled.div`
  ${tw`
      font-questrial
      md:text-cimc-hero
      md:w-[732px]
      text-center
      text-cimc-hero-small
    `}
`

const ContentContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    w-full
    md:items-center
    gap-10
  `}
`

export const Home = () => {
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "CIMC Introduction",
    description:
      "Understanding the mind is the most important project in the history of philosophy. An introduction to the California Institute for Machine Consciousness.",
    thumbnailUrl: "https://cimc.ai/cimcintro.jpg",
    uploadDate: "2024-10-02T00:00:00-08:00",
    contentUrl: "https://cimc.ai/cimcintro.mp4",
  }

  return (
    <HomeContainer id="home">
      <StructuredData data={videoStructuredData} />
      <CIMCSquareLogo showName />
      <HeroTextContainer>
        <LineBreak width="196px" />
        <WhitePaperSection ctaHref="/cimcWhitepaper.pdf" ctaTarget="_blank" />
        <HeroText>
          Understanding the mind is the most important project in the history of
          philosophy.
        </HeroText>
      </HeroTextContainer>
      <VideoContainer>
        <video controls width={860} poster="cimcintro.jpg">
          <source src="./cimcintro.mp4" type="video/mp4" />
          <track kind="captions" src="./joschamoc.vtt" label="English" />
        </video>
      </VideoContainer>
      <ContentContainer>
        <Forward />
        <NewsList />
      </ContentContainer>
      <LaunchEvent />
      <div className="md:w-[860px] md:py-[100px] flex flex-col md:gap-14">
        <OngoingResearchHeader />
        <ProjectsAccordion />
      </div>
      <SubstackSection />
    </HomeContainer>
  )
}

export default Home
