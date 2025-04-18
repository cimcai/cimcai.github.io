import styled from "styled-components"
import tw from "twin.macro"
import { CIMCLogo } from "../components/CIMCLogo"
import DismissibleBanner from "../components/DismissableBanner"
import Forward from "../components/Forward"

const HomeContainer = styled.div`
  ${tw`
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
      max-md:pb-6
      md:pb-2
    `}
`

export const Home = () => {
  return (
    <HomeContainer id="home">
      <DismissibleBanner
        description="CIMC is inviting research proposals, "
        callToAction="read about our research interests here"
        route="proposals"
      />
      <CIMCLogo showName />
      <VideoContainer>
        <video controls width={729} poster="cimcintro.jpg">
          <source src="./cimcintro.mp4" type="video/mp4" />
          <track kind="captions" src="./joschamoc.vtt" label="English" />
        </video>
      </VideoContainer>
      <Forward />
    </HomeContainer>
  )
}

export default Home
