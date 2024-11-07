import React from 'react'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import { CIMCLogo, ResponsiveCIMCLogo } from '../components/CIMCLogo'
import Forward from '../components/Forward'

const HomeContainer = styled.div`
  ${tw`
      text-white
      selection:text-white
      selection:bg-gray-500
      to-black
    `}
    background-color: ${theme`colors.cimc_blue`};
`
const LogoContainer = styled.div`
  ${tw`
      flex
      justify-center
      items-center
      max-md:px-6
      pt-60
      pb-6
    `}
`
const VideoContainer = styled.div`
  ${tw`
      flex
      justify-center
      items-center
      max-md:px-6
      pt-28
      pb-6
    `}
`

export const Home = () => {
return (
    <HomeContainer id="home">
      <LogoContainer >
        <CIMCLogo />
      </LogoContainer>
      <ResponsiveCIMCLogo />
      <VideoContainer>
        <video controls width={729} poster="joschamoc.png">
          <source src="./joschamoc.mp4" type="video/mp4" />
        </video>
      </VideoContainer>
      <Forward />
    </HomeContainer>
  )
}

export default Home
