import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogo } from "../components/CIMCSquareLogo"
import Forward from "../components/Forward"
import { LaunchEvent } from "../components/LaunchEventSection"
import { LineBreak } from "../components/LineBreak"
import { LogoBackgroundedHero } from "../components/LogoBackgroundedHero"
import { NewsList } from "../components/NewsList"
import { SubstackSection } from "../components/SubstackSection"

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
      max-md:px-6
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
      max-md:px-6
    `}
`

const HeroText = styled.div`
  ${tw`
      md:text-cimc-hero
      md:w-[732px]
      text-center
      text-cimc-hero-small
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
    `}
`
const LaunchEventSection = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      justify-center
      items-center
      text-white
      selection:text-white
      selection:bg-gray-500
      to-white
      bg-black
      md:text-cimc-forward
      text-cimc-substack-button
    `}
`
const LaunchEventContainer = styled.div`
  ${tw`
      md:w-[860px]
      flex
      flex-col
      justify-center
      items-center
      max-md:px-6
      max-md:pb-8
      md:pt-28
      md:pb-24
    `}
`
const LaunchEventHeader = styled.div`
  ${tw`
    md:w-[860px]
    md:mb-16
    flex
    justify-between
    items-center
  `}
`

const LaunchEventTitle = styled.div`
  ${tw`
    md:text-cimc-white-hero
  `}
`

const LaunchEventButton = styled.a`
  ${tw`
    flex
    text-cimc-navbar
    h-[55px]
    px-[56px]
    py-[10px]
    justify-center
    items-center
    text-[#2C2C2C]
    rounded-tr-[10px]
    border-[2px] border-[#8A8989]
    bg-white
    shadow-[inset_0_0_0_1px_rgba(10,13,18,0.18),inset_0_-2px_0_0_rgba(10,13,18,0.05),0_1px_2px_0_rgba(10,13,18,0.05)]
    hover:(bg-[#2C2C2C] text-white)
  `}
`

const LaunchEventContent = styled.a`
  ${tw`
    flex
    w-[860px]
    h-[179px]
    items-center
    justify-between
  `}
`

export const Home = () => {
  return (
    <HomeContainer id="home">
      <CIMCSquareLogo showName />
      <HeroTextContainer>
        <LineBreak width="196px" />
        <HeroText>
          Understanding the mind is the most important project in the history
          of philosophy.
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
        <NewsList />
      </ForwardContainer>
      <LaunchEvent />
      <SubstackSection />
    </HomeContainer>
  )
}

export default Home
