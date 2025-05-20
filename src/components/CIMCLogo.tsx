import styled from "styled-components"
import tw from "twin.macro"
import LogoCIMC from "../assets/logocimc.svg"

const LogoContainer = styled.div<{ $width: number | string }>`
  ${tw`
    flex
    justify-center
    items-center
  `}
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width};
`
interface CIMCLogoProps {
  color?: string
  width?: number | string
  className?: string
}

export function CIMCLogo({
  color = "black",
  width = 215,
  className,
}: CIMCLogoProps) {
  return (
    <LogoContainer $width={width} className={className}>
      <img src={LogoCIMC} className="cimc-logo-img" alt="CIMC Logo" />
    </LogoContainer>
  )
}
