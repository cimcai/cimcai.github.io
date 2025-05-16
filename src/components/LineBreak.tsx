import styled from "styled-components"
import tw from "twin.macro"

interface LineBreakProps {
  width: string
}

export const LineBreak = styled.div.withConfig({
  shouldForwardProp: (prop) => !["width"].includes(prop),
})<LineBreakProps>`
  ${tw`
    h-[1px]
    bg-black
    items-center
    mt-12
  `}
  width: ${({ width }) => width};
`
