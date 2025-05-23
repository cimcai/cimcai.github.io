import styled from "styled-components"
import tw from "twin.macro"
import Institute from "../components/Institute"
import MissionStatement from "../components/MissionStatement"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

const MissionContainer = styled.div`
  ${tw`
  bg-white
    text-cimc-standard
  selection:text-black
  selection:bg-gray-500
    flex
    flex-col
    items-center
    justify-center
    pt-24
  `}
`

const MissionStyle = styled.div`
  ${tw`
    md:w-[860px]
    md:py-4
    max-md:px-6
    `}
`
const Mission = () => {
  return (
    <>
      <MissionContainer>
        <PageHeroGraphic />
        <MissionStyle>
          <Institute />
          <MissionStatement />
        </MissionStyle>
      </MissionContainer>
    </>
  )
}

export default Mission
