import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogoSVG } from "../components/CIMCSquareLogo"

const SubstackSectionContainer = styled.section`
  ${tw`w-full min-h-screen flex items-center bg-white`}
`
const SubstackLogoCol = styled.div`
  ${tw`h-full flex relative min-w-0 flex-1`}
  max-width: 50%;
`
const SubstackLogoWrapper = styled.div`
  ${tw`h-full flex items-center absolute left-0 top-1/2`}
  transform: translate(-50%, -50%);
  z-index: 0;
`
const SubstackContentCol = styled.div`
  ${tw`flex flex-col items-center justify-center h-full`}
  flex: 2;
`
const SubstackTitle = styled.h2`
  ${tw`text-cimc-substack text-center`}
`
const SubstackDesc = styled.p`
  ${tw`text-cimc-substack-description md:text-base mb-6 text-center`}
  rgba(24, 29, 39, 0.70);
`
const SubstackButton = styled.a`
  ${tw`
    border border-black
    text-cimc-substack-button
    py-4 px-36
    transition
    hover:bg-black hover:text-white
    text-center
    flex items-center
    h-16
    min-w-[240px]
    rounded-tr-[10px] rounded-tl-none rounded-br-none rounded-bl-none
    shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)]
  `}
`

export function SubstackSection() {
  return (
    <SubstackSectionContainer>
      <SubstackLogoCol>
        <SubstackLogoWrapper>
          <CIMCSquareLogoSVG width={845} height={845} />
        </SubstackLogoWrapper>
      </SubstackLogoCol>
      <SubstackContentCol>
        <SubstackTitle>SUBSTACK</SubstackTitle>
        <SubstackDesc>Sign in to get the most out of CIMC.</SubstackDesc>
        <SubstackButton href="https://cimcai.substack.com">
          Sign up
        </SubstackButton>
      </SubstackContentCol>
    </SubstackSectionContainer>
  )
}
