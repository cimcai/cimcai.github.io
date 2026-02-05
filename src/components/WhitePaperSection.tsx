import styled from "styled-components"
import tw from "twin.macro"

const WHITEPAPER_URL = "/cimcWhitepaper.pdf"

const Container = styled.section`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    gap-8
    px-6
    md:px-0
    py-[55px]
    text-center
    bg-white
  `}
`

const Title = styled.h2`
  ${tw`
    font-questrial
    uppercase
    text-[32px]
    md:text-[48px]
    leading-[1.05]
    tracking-[10.56px]
    text-black
    font-normal
  `}
`
const CTAButton = styled.a`
  ${tw`
    flex
    max-w-[394px]
    h-[55px]
    px-[56px]
    py-[10px]
    justify-center
    items-center
    gap-[6px]
    shrink-0
    rounded-tr-[10px]
    border-[2px]
    border-[#8A8989]
    bg-white
    text-[#2C2C2C]
    text-[20px]
    tracking-[-0.02em]
    transition-colors
    duration-200
    shadow-[inset_0_0_0_1px_rgba(10,13,18,0.18),inset_0_-2px_0_0_rgba(10,13,18,0.05),0_1px_2px_0_rgba(10,13,18,0.05)]
    no-underline
    hover:(bg-[#2C2C2C] text-white)
  `}
`
export const WhitePaperSection = () => {
  return (
    <Container>
      <Title>WHITEPAPER</Title>
      <CTAButton href={WHITEPAPER_URL} target="_blank" rel="noreferrer">
        Read the Whitepaper
      </CTAButton>
    </Container>
  )
}
