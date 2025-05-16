import styled from "styled-components"
import tw from "twin.macro"
import { CIMCLogo } from "../components/CIMCLogo"
import Forward from "../components/Forward"
import { LineBreak } from "../components/LineBreak"
import { LogoBackgroundedHero } from "../components/LogoBackgroundedHero"

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
      max-md:pb-8
      md:pb-2
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
    `}
`

const HeroText = styled.div`
  ${tw`
      text-cimc-hero
      md:w-[732px]
      text-center
    `}
`

const ForwardContainer = styled.div`
  ${tw`
      flex
      flex-col
      justify-center
      items-center
      max-md:px-6
      max-md:pb-8
      md:pb-2
      gap-10
      py-10
    `}
`

export const Home = () => {
  return (
    <HomeContainer id="home">
      <ContentContainer>
        <CIMCLogo showName />
        <HeroTextContainer>
          <LineBreak width="196px" />
          <HeroText>
            Understanding the mind is the most important in the history of
            philosophy.
          </HeroText>
        </HeroTextContainer>
        <VideoContainer>
          <video controls width={879} poster="cimcintro.jpg">
            <source src="./cimcintro.mp4" type="video/mp4" />
            <track kind="captions" src="./joschamoc.vtt" label="English" />
          </video>
        </VideoContainer>
        <ForwardContainer>
          <Forward />
          <LogoBackgroundedHero text="Understanding the nature and functionality of consciousness from a computationalist perspective" />
        </ForwardContainer>
      </ContentContainer>
    </HomeContainer>
  )
}

export default Home
