import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

const MissionContainer = styled.div`
  ${tw`
  bg-white
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
    selection:text-black
    selection:bg-gray-500
    text-cimc-helvetica-normal
    `}
`
const Mission = () => {
  return (
    <MissionContainer>
      <PageHeroGraphic />
      <MissionStyle>
        <p className="font-questrial text-cimc-hero pb-8">The Missing Institute</p>
        <p className="pb-20">
          We need an open, transdisciplinary, non-profit research initiative.
          This institute will integrate insights from philosophy, psychology,
          neuroscience, the arts, mathematics and AI into a unified framework,
          breaking down the conceptual barriers that have hindered progress in
          consciousness research. We envision this institute as a hub where
          academics, AI industry experts, and independent scholars conduct
          practical research in-house.
        </p>
        <p className="font-questrial text-cimc-hero-sub pb-8">
          Mission of the California Institute for Machine Consciousness
        </p>
        <p className="pb-10">
          Develop testable theories of machine consciousness and foster a
          culture and ethics built on a deeper understanding of consciousness.
        </p>
        <p className="pb-28">
          I. Advance and validate theories of consciousness through applied
          research
          <br />
          <br />
          II. Build a robust ethical framework for AI that prioritizes conscious
          agency and societal impact.
          <br />
          <br />
          III. Engage collaboratively with academia, industry, and the public
        </p>
      </MissionStyle>
    </MissionContainer>
  )
}

export default Mission
