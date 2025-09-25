import styled from "styled-components"
import tw from "twin.macro"

interface LineBreakProps {
  width: string
  spaceBelow?: boolean
}

export const LineBreak = styled.div.withConfig({
  shouldForwardProp: (prop) => !["width", "spaceBelow"].includes(prop),
})<LineBreakProps>`
  ${tw`
    h-[1px]
    bg-black
    items-center
  `}
  width: ${({ width }) => width};
  margin-top: ${({ spaceBelow }) => (spaceBelow ? "0px" : "48px")};
  margin-bottom: ${({ spaceBelow }) => (spaceBelow ? "48px" : "0px")};
`
