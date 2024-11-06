import React from 'react'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import { CIMCLogo, ResponsiveCIMCLogo } from '../components/CIMCLogo'
import Forward from '../Forward'

const HomeContainer = styled.div`
  ${tw`
      text-white
      selection:text-white
      selection:bg-gray-500
    `}
  background-color: ${theme`colors.cimc_blue`};
`


export const Home = () => {
return (
    <HomeContainer>
      <div id="home" className="flex bg-transparent justify-center items-center max-md:px-6 pt-60 md:pb-40 max-md:pb-6">
        <CIMCLogo />
      </div>
      <ResponsiveCIMCLogo />

      <Forward />
    </HomeContainer>
  )
}

export default Home
