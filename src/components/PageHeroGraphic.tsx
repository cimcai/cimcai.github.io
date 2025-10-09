import styled from "styled-components"
import tw from "twin.macro"
import { CIMCSquareLogoSVG } from "./CIMCSquareLogo"

const PageHeroGraphicContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-start
    bg-white
    mb-20
  `}
  position: relative;
  height: 320px;
  overflow: hidden;
  border-bottom: 5px solid #000;
`

const PageHeroLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 1600px;
  height: 1600px;
  transform: translateX(-50%) translateY(-23%);
  pointer-events: none;
  z-index: 0;
`

export function PageHeroGraphic() {
  return (
    <PageHeroGraphicContainer>
      <PageHeroLogo>
        <CIMCSquareLogoSVG color="black" strokeWidth={2} />
      </PageHeroLogo>
    </PageHeroGraphicContainer>
  )
}
