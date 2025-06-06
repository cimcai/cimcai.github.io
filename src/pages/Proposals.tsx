import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

const ProposalsContainer = styled.div`
  ${tw`
    bg-white
    selection:text-black
    selection:bg-gray-500
    flex
    flex-col
    items-center
    md:justify-center
    px-0
    pt-24
    pb-20
  `}
`

const ProposalsLayout = styled.div`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    justify-between
    w-full
    max-w-[1216px]
    mx-auto
    px-6
  `}
`

const ProposalsStyle = styled.div`
  ${tw`
    md:w-[860px]
  `}
`

const ProposalsColumn = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
    text-cimc-helvetica-standard
    text-right
    md:w-[300px]
    min-h-[200px]
    mb-20
  `}
  color: rgba(24, 29, 39, 0.70);
`

const Header = styled.header`
  ${tw`
    mb-8
  `}
`

const Title = styled.h1`
  ${tw`
    text-cimc-hero
    mb-4
  `}
`

const Subtitle = styled.h2`
  ${tw`
    text-cimc-helvetica-normal
    mb-12
  `}
  color: rgba(24, 29, 39, 0.60);
`

const Section = styled.section`
  ${tw`
  `}
`

const Paragraph = styled.p`
  ${tw`
    text-cimc-helvetica-standard
    mb-12
  `}
  color: rgba(24, 29, 39, 0.70);
`

const ResearchArea = styled.div`
  ${tw`
    text-cimc-helvetica-heading
    pb-3
  `}
`

const AreaTitle = styled.h3`
  ${tw`
    text-cimc-helvetica-heading
    pb-3
  `}
`

const AreaList = styled.ul`
  ${tw`
    text-cimc-helvetica-standard
    pl-2
    mb-12
    list-inside
    list-disc
  `}
`

const AreaListItem = styled.li`
  color: rgba(24, 29, 39, 0.70);
`

const GuidelinesSection = styled.section`
  ${tw`
    text-cimc-helvetica-standard
  `}
`

const GuidelinesTitle = styled.h2`
  ${tw`
    text-cimc-helvetica-normal
  `}
  color: #181D27;
`

const GuidelinesContent = styled.div`
  ${tw`
    mb-10
  `}
`

const GuidelinesLabel = styled.p`
  ${tw`
    text-cimc-helvetica-normal
    mb-3
  `}
  color: #181D27;
`

const GuidelinesText = styled.p`
  ${tw`
    mb-10
  `}
  color: rgba(24, 29, 39, 0.70);
`

const GuidelinesList = styled.ul`
  ${tw`
  `}
  color: rgba(24, 29, 39, 0.70);
`

const Link = styled.a`
  ${tw`
    underline
    hover:underline
  `}
`

const GuidelineHeader = styled.div`
  ${tw`
  `}
  color: #181D27;
`

const GuidelinesListItem = styled.li`
  ${tw`
    text-cimc-helvetica-standard
    mb-10
  `}
  color: rgba(24, 29, 39, 0.70);
`

const LetsConnect = styled.div`
  ${tw`
    flex flex-col gap-0 text-right md:w-[250px] md:pl-10 md:ml-10`}
  color: rgba(24, 29, 39, 0.70);
  position: sticky;
  top: 120px;
  align-self: flex-start;

  & > .lets-title {
    ${tw`mb-8 pb-[20px] text-cimc-helvetica-medium`}
    border-bottom: 1px solid #000000;
    text-align: left;
  }
  & a {
    ${tw`text-cimc-helvetica-medium underline hover:underline text-black pb-[20px]`}
    text-align: left;
  }
  & .lets-label {
    ${tw`text-cimc-helvetica-medium`}
    text-align: left;
  }
  color: rgba(24, 29, 39, 0.70);
`

function ResearchProposals() {
  return (
    <ProposalsContainer>
      <PageHeroGraphic />
      <ProposalsLayout>
        <ProposalsStyle>
          <div id="proposals" className="w-full">
            <Header>
              <Title>Call for Research Proposals</Title>
              <Subtitle>Application are reviewed on a rolling basis</Subtitle>
            </Header>

            <Section>
              <Paragraph>
                CIMC is inviting research proposals, with the aim of
                understanding the nature and functionality of consciousness from
                a computationalist perspective. We want to conduct experimental
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
                We invite innovative research proposals in – but not limited to
                – the following broad categories. Proposals that venture outside
                the beaten path are welcome, provided they are of high quality
                and deeply considered.
              </Paragraph>
              <ResearchArea>
                {/* Area 1 */}
                <div>
                  <AreaTitle>
                    1. Philosophical foundations and formalization of
                    consciousness
                  </AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Investigate the space and metaphysics of analytical
                      theories of consciousness
                    </AreaListItem>
                    <AreaListItem>
                      What is consciousness, and how does it relate to mind,
                      modeling, and reality?
                    </AreaListItem>
                    <AreaListItem>
                      How can we characterize phenomenology, functionality, and
                      implementation?
                    </AreaListItem>
                    <AreaListItem>
                      Which systems can be conscious, and what are the necessary
                      and sufficient conditions?
                    </AreaListItem>
                    <AreaListItem>
                      How can we test for consciousness?
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 2 */}
                <div>
                  <AreaTitle>
                    2. Methodology of modeling consciousness
                  </AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Can we define the "strange loop" analytically and test
                      this formalization?
                    </AreaListItem>
                    <AreaListItem>
                      Should we search for consciousness by constructing and
                      analyzing simulation spaces?
                    </AreaListItem>
                    <AreaListItem>
                      Can studying biological systems reveal the nature of
                      consciousness?
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 3 */}
                <div>
                  <AreaTitle>
                    3. Emergence and Role of Self in Learning Agents
                  </AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Under what conditions does a learning agent form a
                      first-person perspective or self-model?
                    </AreaListItem>
                    <AreaListItem>
                      How can we test for self-models?
                    </AreaListItem>
                    <AreaListItem>What is a minimal self?</AreaListItem>
                    <AreaListItem>
                      Development and study of models that integrate mind,
                      self-model, motivation, and world-model interaction
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 4 */}
                <div>
                  <AreaTitle>4. Learning Through Self Organization</AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      If consciousness is discovered by the brain (as part of a
                      learning paradigm in a self organizing substrate), can we
                      replicate this process artificially?
                    </AreaListItem>
                    <AreaListItem>
                      Can self organizing learning systems control agents?
                    </AreaListItem>
                    <AreaListItem>
                      Can we get a self organizing system (eg. NCA) to learn
                      complex sequence prediction tasks?
                    </AreaListItem>
                    <AreaListItem>
                      Do we observe the discovery of self-improving
                      self-reflexive structure? What are the limitations of this
                      paradigm?
                    </AreaListItem>
                    <AreaListItem>
                      How can we understand the brain as a multiway system?
                    </AreaListItem>
                    <AreaListItem>
                      Can we discover implications for consciousness in
                      comparable systems in nature (ie. how much does
                      consciousness depend on the specific architecture of a
                      learning system?)
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 5 */}
                <div>
                  <AreaTitle>5. Architectures for Conscious Agents</AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      What is the role of attention and attention control in
                      shaping conscious behavior?
                    </AreaListItem>
                    <AreaListItem>
                      How do perception, emotion, inference, and decision making
                      interact in the development of conscious behavior?
                    </AreaListItem>
                    <AreaListItem>
                      How can we model aspects of human and animal psychology
                      within artificial systems?
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 6 */}
                <div>
                  <AreaTitle>6. Developmental Learning Architectures</AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Can we design minimal, self-improving models that
                      continuously learn and adapt (anytime learning)?
                    </AreaListItem>
                    <AreaListItem>
                      Artificial pets as paradigms for experimentation and
                      interaction
                    </AreaListItem>
                    <AreaListItem>Social simulations</AreaListItem>
                  </AreaList>
                </div>
                {/* Area 7 */}
                <div>
                  <AreaTitle>
                    7. Environments for Intelligent Behavior and Interaction
                    Between Humans and AI
                  </AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Under which conditions do intelligence and agency emerge?
                    </AreaListItem>
                    <AreaListItem>
                      What is the role of embodiment for the formation of a
                      mind?
                    </AreaListItem>
                    <AreaListItem>
                      How can we create artificial environments that effectively
                      evaluate AI behavior and facilitate human–AI interaction?
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 8 */}
                <div>
                  <AreaTitle>
                    8. Consciousness and Selfhood in Current Foundation Models
                  </AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Do existing foundation models possess phenomenology?
                    </AreaListItem>
                    <AreaListItem>
                      Can the self of simulated interaction agents be compared
                      to a personal self?
                    </AreaListItem>
                    <AreaListItem>
                      Can interpretability help us understand the bounds and
                      constraints of the possibilities of all possible simulacra
                      or of individual simulacra?
                    </AreaListItem>
                    <AreaListItem>
                      Is CoT a paradigm that can be compared to consciousness?
                    </AreaListItem>
                    <AreaListItem>
                      How does adding and removing certain modalities influence
                      the appearance of consciousness?
                    </AreaListItem>
                  </AreaList>
                </div>
                {/* Area 9 */}
                <div>
                  <AreaTitle>
                    9. Extracting Models of Human Psychology from Foundation
                    Models
                  </AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      Use of foundation models to create virtual test subjects
                    </AreaListItem>
                    <AreaListItem>
                      Development of psychometric tools to evaluate the personas
                      of these models
                    </AreaListItem>
                    <AreaListItem>
                      Comparing human and artificial psychology
                    </AreaListItem>
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
                    <AreaListItem>
                      High fidelity human machine interfaces
                    </AreaListItem>
                    <AreaListItem>Modeling of user intentions</AreaListItem>
                    <AreaListItem>
                      Feedback between human and AI systems
                    </AreaListItem>
                    <AreaListItem>Human augmentation</AreaListItem>
                    <AreaListItem>Machine perception</AreaListItem>
                    <AreaListItem>
                      Mechanisms for human machine extension
                    </AreaListItem>
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
                    difficult, given the counter-intuitive nature of the
                    subject; we invite contributions but will set a high bar.
                  </Paragraph>
                </div>
                {/* Area 14 */}
                <div>
                  <AreaTitle>14. Futurism</AreaTitle>
                  <AreaList>
                    <AreaListItem>
                      What developments should we expect, and how will they
                      influence human society and identity?
                    </AreaListItem>
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
                    <GuidelinesListItem>
                      <GuidelineHeader>Abstract:</GuidelineHeader> A concise
                      summary of the research objectives and significance (up to
                      250 words).
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>Research objectives:</GuidelineHeader>{" "}
                      Research questions, goals and testable hypotheses.
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>Methodology:</GuidelineHeader> Detailed
                      description of research methods, design, tools,
                      frameworks, and/or analytical approaches you intend to
                      use.
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>Expected outcomes:</GuidelineHeader>{" "}
                      Summary of the spectrum of possible research results and
                      their potential impact on the field of machine
                      consciousness.
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>Timeline:</GuidelineHeader>
                      Deliverables and their timeline.
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>Budget Justification:</GuidelineHeader>{" "}
                      Outline and explain the proposed budget.
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>Team and collaborators</GuidelineHeader>
                    </GuidelinesListItem>
                    <GuidelinesListItem>
                      <GuidelineHeader>
                        Appendices (if applicable)
                      </GuidelineHeader>
                    </GuidelinesListItem>
                  </GuidelinesList>
                </div>
                <div>
                  <GuidelinesLabel>Submission Process:</GuidelinesLabel>
                  <GuidelinesText>
                    Applications will be considered on a rolling basis. First
                    round closes May 4, 2025
                  </GuidelinesText>
                </div>
                <div>
                  <GuidelinesLabel>How to Submit:</GuidelinesLabel>
                  <GuidelinesText>
                    Upload your proposal{" "}
                    <Link href="https://form.typeform.com/to/VUXo8dsz">
                      here
                    </Link>
                  </GuidelinesText>
                </div>
                <div>
                  <GuidelinesLabel>Inquiries:</GuidelinesLabel>
                  <GuidelinesText>
                    For questions, please contact{" "}
                    <Link href="mailto:proposals@cimc.ai">
                      proposals@cimc.ai
                    </Link>
                    <Paragraph>
                      We look forward to receiving your ideas.
                    </Paragraph>
                  </GuidelinesText>
                </div>
              </GuidelinesContent>
            </GuidelinesSection>
          </div>
        </ProposalsStyle>
        <ProposalsColumn>
          <LetsConnect>
            <div className="lets-title">Let's get connected</div>
            <a href="https://cimcai.substack.com" rel="noopener noreferrer">
              Substack
            </a>
            <div className="lets-label">Email:</div>
            <a href="mailto:proposals@cimc.ai">proposals@cimc.ai</a>
          </LetsConnect>
        </ProposalsColumn>
      </ProposalsLayout>
    </ProposalsContainer>
  )
}

export default ResearchProposals
