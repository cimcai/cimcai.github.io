import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogoSVG } from "./CIMCSquareLogo"

const LogoBGHeroContainer = styled.div`
  ${tw`
    my-10
    flex
    max-w-[860px]
    py-20
    gap-16
    justify-center
    items-center
  `}
`

const HeadingText = styled.div`
  ${tw`
    text-cimc-hero
    max-w-[860px]
    text-justify
    [letter-spacing: 4.48px]
  `}
`

const BackgroundContainer = styled.div`
  ${tw`
    absolute
    w-[428px]
    h-[428px]
    opacity-25
  `}
`

interface LogoBackgroundedHeroProps {
  text: string
}

export function LogoBackgroundedHero({ text }: LogoBackgroundedHeroProps) {
  return (
    <LogoBGHeroContainer>
      <BackgroundContainer>
        <CIMCSquareLogoSVG className="w-full h-full" color="#000000" />
      </BackgroundContainer>
      <HeadingText>{text}</HeadingText>
    </LogoBGHeroContainer>
  )
}
