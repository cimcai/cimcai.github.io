import styled from "styled-components"
import tw from "twin.macro"
import { CIMCLogo } from "../components/CIMCLogo"
import DismissibleBanner from "../components/DismissableBanner"
import Forward from "../components/Forward"

const HomeContainer = styled.div`
  ${tw`
      flex
      justify-center
      items-center
      text-black
      selection:text-white
      selection:bg-gray-500
      to-black
      bg-white
    `}
`
const ContentContainer = styled.div`
  ${tw`
      md:w-[987px]
    `}
`

const VideoContainer = styled.div`
  ${tw`
      flex
      justify-center
      items-center
      max-md:px-6
      max-md:pb-6
      md:pb-2
    `}
`
const HeroTextContainer = styled.div`
  ${tw`
      flex
      justify-center
      items-center
      py-14
    `}
`
const HeroText = styled.div`
  ${tw`
      text-cimc-hero
      md:w-[892px]
    `}
`

export const Home = () => {
  return (
    <HomeContainer id="home">
      <ContentContainer>
        <CIMCLogo showName />
        <HeroTextContainer>
          <HeroText>
            Consciousness is crucial for ethical AI, yet it remains largely
            unexplored.
          </HeroText>
        </HeroTextContainer>

        <VideoContainer>
          <video controls width={879} poster="cimcintro.jpg">
            <source src="./cimcintro.mp4" type="video/mp4" />
            <track kind="captions" src="./joschamoc.vtt" label="English" />
          </video>
        </VideoContainer>
        <Forward />
      </ContentContainer>
    </HomeContainer>
  )
}

export default Home
