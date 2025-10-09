import styled from "styled-components"
import tw from "twin.macro"

const ForwardContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:max-w-[860px]
    px-6
    md:px-0
    pb-10
    border-b
    border-b-color-text-default-default
  `}
`

const ForwardParagraph = styled.p`
  ${tw`
    md:text-cimc-forward
    text-cimc-substack-button
  `}
`

function Forward() {
  return (
    <ForwardContainer>
      <ForwardParagraph>
        The development of powerful, generally intelligent agents—driven by
        economic, cultural, and military incentives—appears inevitable.
        Attempting to control highly advanced agentic systems far more powerful
        than ourselves is unlikely to succeed. Our only viable path may be to
        create AIs that are conscious, enabling them to understand and share
        common ground with us.
        <br />
        <br />
        Currently, the AIs we are building are powerful but unaware. These
        systems act upon the world without an understanding of their
        relationship to it. Without understanding, there can be no common
        ground. At the same time, AI seems to be indispensable for addressing
        the existential challenges we face —challenges born from large-scale,
        real-time coordination failures.
        <br />
        <br />
        The key to a flourishing future lies in developing AI agents that
        understand human subjective experience, coexist with other agents, and
        navigate ethical agency within dynamic, multi-agent systems. All of this
        requires we address consciousness.
        <br />
        <br />
        Will we be colonized by digital golems or can we spread life, mind and
        consciousness onto new substrates?
      </ForwardParagraph>
    </ForwardContainer>
  )
}

export default Forward
