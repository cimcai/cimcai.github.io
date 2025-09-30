import styled from "styled-components"
import tw from "twin.macro"

interface LineBreakProps {
  width: string
  mt?: string
  mb?: string
  color?: string
}

export const LineBreak = styled.div.withConfig({
  shouldForwardProp: (prop) => !["width", "mt", "mb", "color"].includes(prop),
})<LineBreakProps>`
  ${tw`
    h-[1px]
    items-center
  `}
  width: ${({ width }) => width};
  margin-top: ${({ mt }) => (mt ? mt : "48px")};
  margin-bottom: ${({ mb }) => mb};
  background-color: ${({ color }) => (color ? color : "black")};
`
