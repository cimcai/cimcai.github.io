import styled from "styled-components"
import tw from "twin.macro"
import Institute from "../components/Institute"
import MissionStatement from "../components/MissionStatement"

const MissionContainer = styled.div`
  ${tw`
  bg-white
    text-cimc-standard
  selection:text-black
  selection:bg-gray-500
    flex
    justify-center
    px-6
    pt-24
  `}
`

const MissionStyle = styled.div`
  ${tw`
    md:w-[860px]
    md:py-4
    `}
`
const Mission = () => {
  return (
    <>
      <MissionContainer>
        <MissionStyle>
          <Institute />
          <MissionStatement />
        </MissionStyle>
      </MissionContainer>
    </>
  )
}

export default Mission
