import styled from "styled-components"
import tw from "twin.macro"

const ProposalsContainer = styled.div`
  ${tw`
    bg-white
    selection:text-black
    selection:bg-gray-500
    flex
    md:justify-center
    px-6
    md:px-0
    pt-16
    pb-20
  `}
`

const ProposalsStyle = styled.div`
  ${tw`
    md:w-[729px]
  `}
`

const Header = styled.header`
  ${tw`
    mb-8
  `}
`

const Title = styled.h1`
  ${tw`
    text-3xl
    font-bold
    text-gray-900
    mb-2
  `}
`

const Subtitle = styled.h2`
  ${tw`
    text-2xl
    font-semibold
    text-gray-800
  `}
`

const Section = styled.section`
  ${tw`
    bg-white
    p-6
    rounded-lg
    shadow-md
    mb-8
  `}
`

const Paragraph = styled.p`
  ${tw`
    text-gray-700
    mb-4
  `}
`

const ResearchArea = styled.div`
  ${tw`
    space-y-6
  `}
`

const AreaTitle = styled.h3`
  ${tw`
    text-xl
    font-semibold
    text-gray-700
  `}
`

const AreaList = styled.ul`
  ${tw`
    list-disc
    pl-6
    text-gray-600
  `}
`

const GuidelinesSection = styled.section`
  ${tw`
    bg-white
    p-6
    rounded-lg
    shadow-md
  `}
`

const GuidelinesTitle = styled.h2`
  ${tw`
    text-2xl
    font-semibold
    text-gray-800
    mb-4
  `}
`

const GuidelinesContent = styled.div`
  ${tw`
    space-y-4
  `}
`

const GuidelinesLabel = styled.p`
  ${tw`
    font-semibold
    text-gray-700
  `}
`

const GuidelinesText = styled.p`
  ${tw`
    text-gray-600
  `}
`

const GuidelinesList = styled.ul`
  ${tw`
    list-disc
    pl-6
    text-gray-600
  `}
`

const Link = styled.a`
  ${tw`
    text-blue-600
    hover:underline
  `}
`

const BoldSpan = styled.span`
  ${tw`
    font-semibold
  `}
`

function ResearchProposals() {
  return (
    <ProposalsContainer>
      <ProposalsStyle>
        <div id="proposals" className="w-full">
          <Header>
            <Title>Call for Research Proposals</Title>
            <Subtitle>
              California Institute for Machine Consciousness (CIMC)
            </Subtitle>
          </Header>

          <Section>
            <Paragraph>
              CIMC is inviting research proposals, with the aim of understanding
              the nature and functionality of consciousness from a
              computationalist perspective. We want to conduct experimental
              philosophy by formulating testable theories, conducting
              simulations, and building artifacts that allow us to explore and
              test our understanding of consciousness.
            </Paragraph>
            <Paragraph>
              Our approach is rooted in a rational, scientific epistemology,
              recognizing that current paradigms in philosophy of mind,
              neuroscience, and psychology fall short of comprehensively
              addressing mind and consciousness. We believe it is essential to
              develop new frameworks for understanding self, agency,
              intersubjectivity, and intelligence from first principles.
            </Paragraph>
            <Paragraph>
              We welcome contributions from those ready to move beyond mere
              hypothesis formation. If you are an observer, modeler, engineer,
              interdisciplinary thinker, or artist eager to conceive, build,
              iterate, and test innovative ideas, we want to hear from you.
            </Paragraph>
          </Section>

          <Section>
            <GuidelinesTitle>Research Focus Areas</GuidelinesTitle>
            <Paragraph>
              We invite innovative research proposals in – but not limited to –
              the following broad categories. Proposals that venture outside the
              beaten path are welcome, provided they are of high quality and
              deeply considered.
            </Paragraph>
            <ResearchArea>
              {/* Area 1 */}
              <div>
                <AreaTitle>
                  1. Philosophical foundations and formalization of
                  consciousness
                </AreaTitle>
                <AreaList>
                  <li>
                    Investigate the space and metaphysics of analytical theories
                    of consciousness
                  </li>
                  <li>
                    What is consciousness, and how does it relate to mind,
                    modeling, and reality?
                  </li>
                  <li>
                    How can we characterize phenomenology, functionality, and
                    implementation?
                  </li>
                  <li>
                    Which systems can be conscious, and what are the necessary
                    and sufficient conditions?
                  </li>
                  <li>How can we test for consciousness?</li>
                </AreaList>
              </div>
              {/* Area 2 */}
              <div>
                <AreaTitle>2. Methodology of modeling consciousness</AreaTitle>
                <AreaList>
                  <li>
                    Can we define the "strange loop" analytically and test this
                    formalization?
                  </li>
                  <li>
                    Should we search for consciousness by constructing and
                    analyzing simulation spaces?
                  </li>
                  <li>
                    Can studying biological systems reveal the nature of
                    consciousness?
                  </li>
                </AreaList>
              </div>
              {/* Area 3 */}
              <div>
                <AreaTitle>
                  3. Emergence and Role of Self in Learning Agents
                </AreaTitle>
                <AreaList>
                  <li>
                    Under what conditions does a learning agent form a
                    first-person perspective or self-model?
                  </li>
                  <li>How can we test for self-models?</li>
                  <li>What is a minimal self?</li>
                  <li>
                    Development and study of models that integrate mind,
                    self-model, motivation, and world-model interaction
                  </li>
                </AreaList>
              </div>
              {/* Area 4 */}
              <div>
                <AreaTitle>4. Learning Through Self Organization</AreaTitle>
                <AreaList>
                  <li>
                    If consciousness is discovered by the brain (as part of a
                    learning paradigm in a self organizing substrate), can we
                    replicate this process artificially?
                  </li>
                  <li>Can self organizing learning systems control agents?</li>
                  <li>
                    Can we get a self organizing system (eg. NCA) to learn
                    complex sequence prediction tasks?
                  </li>
                  <li>
                    Do we observe the discovery of self-improving self-reflexive
                    structure? What are the limitations of this paradigm?
                  </li>
                  <li>How can we understand the brain as a multiway system?</li>
                  <li>
                    Can we discover implications for consciousness in comparable
                    systems in nature (ie. how much does consciousness depend on
                    the specific architecture of a learning system?)
                  </li>
                </AreaList>
              </div>
              {/* Area 5 */}
              <div>
                <AreaTitle>5. Architectures for Conscious Agents</AreaTitle>
                <AreaList>
                  <li>
                    What is the role of attention and attention control in
                    shaping conscious behavior?
                  </li>
                  <li>
                    How do perception, emotion, inference, and decision making
                    interact in the development of conscious behavior?
                  </li>
                  <li>
                    How can we model aspects of human and animal psychology
                    within artificial systems?
                  </li>
                </AreaList>
              </div>
              {/* Area 6 */}
              <div>
                <AreaTitle>6. Developmental Learning Architectures</AreaTitle>
                <AreaList>
                  <li>
                    Can we design minimal, self-improving models that
                    continuously learn and adapt (anytime learning)?
                  </li>
                  <li>
                    Artificial pets as paradigms for experimentation and
                    interaction
                  </li>
                  <li>Social simulations</li>
                </AreaList>
              </div>
              {/* Area 7 */}
              <div>
                <AreaTitle>
                  7. Environments for Intelligent Behavior and Interaction
                  Between Humans and AI
                </AreaTitle>
                <AreaList>
                  <li>
                    Under which conditions do intelligence and agency emerge?
                  </li>
                  <li>
                    What is the role of embodiment for the formation of a mind?
                  </li>
                  <li>
                    How can we create artificial environments that effectively
                    evaluate AI behavior and facilitate human–AI interaction?
                  </li>
                </AreaList>
              </div>
              {/* Area 8 */}
              <div>
                <AreaTitle>
                  8. Consciousness and Selfhood in Current Foundation Models
                </AreaTitle>
                <AreaList>
                  <li>Do existing foundation models possess phenomenology?</li>
                  <li>
                    Can the self of simulated interaction agents be compared to
                    a personal self?
                  </li>
                  <li>
                    Can interpretability help us understand the bounds and
                    constraints of the possibilities of all possible simulacra
                    or of individual simulacra?
                  </li>
                  <li>
                    Is CoT a paradigm that can be compared to consciousness?
                  </li>
                  <li>
                    How does adding and removing certain modalities influence
                    the appearance of consciousness?
                  </li>
                </AreaList>
              </div>
              {/* Area 9 */}
              <div>
                <AreaTitle>
                  9. Extracting Models of Human Psychology from Foundation
                  Models
                </AreaTitle>
                <AreaList>
                  <li>
                    Use of foundation models to create virtual test subjects
                  </li>
                  <li>
                    Development of psychometric tools to evaluate the personas
                    of these models
                  </li>
                  <li>Comparing human and artificial psychology</li>
                </AreaList>
              </div>
              {/* Area 10 */}
              <div>
                <AreaTitle>
                  10. Transfer Between Artificial Intelligence Research,
                  Neuroscience, and Psychology
                </AreaTitle>
                <Paragraph>
                  What can AI research teach us about understanding biological
                  intelligence?
                </Paragraph>
              </div>
              {/* Area 11 */}
              <div>
                <AreaTitle>
                  11. Interaction Between Model Constraints and Substrate
                  Constraints
                </AreaTitle>
                <Paragraph>
                  How much does a model's behavior depend on the underlying
                  substrate and its architecture?
                </Paragraph>
              </div>
              {/* Area 12 */}
              <div>
                <AreaTitle>12. Empathetic AI</AreaTitle>
                <AreaList>
                  <li>High fidelity human machine interfaces</li>
                  <li>Modeling of user intentions</li>
                  <li>Feedback between human and AI systems</li>
                  <li>Human augmentation</li>
                  <li>Machine perception</li>
                  <li>Mechanisms for human machine extension</li>
                </AreaList>
              </div>
              {/* Area 13 */}
              <div>
                <AreaTitle>
                  13. Ethics at the interface of human and non-human agents
                </AreaTitle>
                <Paragraph>
                  Ethics is one of the most important topics in the context of
                  artificial phenomenology, non-human agency, superhuman
                  capability and coordination between individual, society,
                  nature and artificial agents. It is also one of the most
                  difficult, given the counter-intuitive nature of the subject;
                  we invite contributions but will set a high bar.
                </Paragraph>
              </div>
              {/* Area 14 */}
              <div>
                <AreaTitle>14. Futurism</AreaTitle>
                <AreaList>
                  <li>
                    What developments should we expect, and how will they
                    influence human society and identity?
                  </li>
                </AreaList>
              </div>
            </ResearchArea>
          </Section>

          <GuidelinesSection>
            <GuidelinesTitle>Submission Guidelines</GuidelinesTitle>
            <Paragraph>
              We welcome proposals that clearly articulate the research
              question, methodology, expected outcomes, and potential impact.
              Proposals should demonstrate understanding and alignment with
              CIMC's epistemology and be geared toward actionable
              research—whether theoretical, experimental, or applied.
            </Paragraph>
            <GuidelinesContent>
              <div>
                <GuidelinesLabel>Length:</GuidelinesLabel>
                <GuidelinesText>&lt; 4,000 words</GuidelinesText>
              </div>
              <div>
                <GuidelinesLabel>Content guidelines:</GuidelinesLabel>
                <GuidelinesList>
                  <li>
                    <BoldSpan>Abstract:</BoldSpan> A concise summary of the
                    research objectives and significance (up to 250 words).
                  </li>
                  <li>
                    <BoldSpan>Research objectives:</BoldSpan> Research
                    questions, goals and testable hypotheses.
                  </li>
                  <li>
                    <BoldSpan>Methodology:</BoldSpan> Detailed description of
                    research methods, design, tools, frameworks, and/or
                    analytical approaches you intend to use.
                  </li>
                  <li>
                    <BoldSpan>Expected outcomes:</BoldSpan> Summary of the
                    spectrum of possible research results and their potential
                    impact on the field of machine consciousness.
                  </li>
                  <li>
                    <BoldSpan>Timeline:</BoldSpan> deliverables and their
                    timeline.
                  </li>
                  <li>
                    <BoldSpan>Budget Justification:</BoldSpan> Outline and
                    explain the proposed budget.
                  </li>
                  <li>
                    <BoldSpan>Team and collaborators</BoldSpan>
                  </li>
                  <li>
                    <BoldSpan>Appendices</BoldSpan> (if applicable)
                  </li>
                </GuidelinesList>
              </div>
              <div>
                <GuidelinesLabel>Submission Deadline:</GuidelinesLabel>
                <GuidelinesText>
                  Applications will be considered on a rolling basis. First
                  round closes May 4, 2025
                </GuidelinesText>
              </div>
              <div>
                <GuidelinesLabel>How to Submit:</GuidelinesLabel>
                <GuidelinesText>
                  Upload your proposal{" "}
                  <Link href="https://form.typeform.com/to/VUXo8dsz">here</Link>
                </GuidelinesText>
              </div>
              <div>
                <GuidelinesLabel>Inquiries:</GuidelinesLabel>
                <GuidelinesText>
                  For questions, please contact{" "}
                  <Link href="mailto:proposals@cimc.ai">proposals@cimc.ai</Link>
                </GuidelinesText>
              </div>
            </GuidelinesContent>
            <Paragraph>We look forward to receiving your ideas.</Paragraph>
          </GuidelinesSection>
        </div>
      </ProposalsStyle>
    </ProposalsContainer>
  )
}

export default ResearchProposals
