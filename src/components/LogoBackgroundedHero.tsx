import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogoSVG } from "./CIMCSquareLogo"

const LogoBGHeroContainer = styled.div`
  ${tw`
    md:my-10
    max-md:mt-6
    max-md:mb-12
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
    md:text-cimc-hero
    max-w-[860px]
    max-md:h-[88px]
    text-justify
    text-[21px]
    md:[letter-spacing: 4.48px]
    [letter-spacing: 1.68px]
  `}
`

const BackgroundContainer = styled.div`
  ${tw`
    absolute
    md:w-[428px]
    md:h-[428px]
    w-[280px]
    h-[280px]
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
