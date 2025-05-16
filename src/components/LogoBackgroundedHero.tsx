import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogo } from "./CIMCSquareLogo"

const LogoBGHeroContainer = styled.div`
  ${tw`
    my-10
    relative
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
    relative
    z-10
  `}
`

const BackgroundContainer = styled.div`
  ${tw`
    absolute
    left-1/2
    top-1/2
    w-[428px]
    h-[428px]
    -translate-x-1/2
    -translate-y-1/2
    z-0
    pointer-events-none
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
        <CIMCSquareLogo className="w-full h-full" color="#000000" />
      </BackgroundContainer>
      <HeadingText>{text}</HeadingText>
    </LogoBGHeroContainer>
  )
}
