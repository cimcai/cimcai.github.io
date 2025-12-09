import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

const Container = styled.div`
  ${tw`
    bg-white
    flex
    flex-col
    items-center
    justify-center
    pt-24
    w-full
  `}
`

const Content = styled.div`
  ${tw`
    w-full
    md:w-[860px]
    md:py-4
    px-6
    md:px-0
    selection:text-black
    selection:bg-gray-500
    text-cimc-helvetica-standard
    pb-20
  `}
`

const Title = styled.h1`
  ${tw`
    text-[40px]
    pb-4
    leading-tight
    text-black
  `}
  font-family: "Helvetica Neue", "helvetica", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  letter-spacing: -0.8px;
`

const Subtitle = styled.h2`
  ${tw`
    text-cimc-helvetica-normal
    pb-8
    text-gray-600
  `}
`

const SectionTitle = styled.h3`
  ${tw`
    text-cimc-helvetica-normal
    text-cimc_dark
    pt-12
    pb-6
  `}
`

const Paragraph = styled.p`
  ${tw`
    pb-6
    leading-relaxed
    text-cimc-helvetica-standard
  `}
  color: rgba(24, 29, 39, 0.7);
`

const List = styled.ul`
  ${tw`
    list-disc
    pl-6
    pb-6
    space-y-2
    text-cimc-helvetica-standard
  `}
`

const ListItem = styled.li`
  ${tw`
    pl-2
  `}
  color: rgba(24, 29, 39, 0.7);
`

const Table = styled.table`
  ${tw`
    w-full
    border-collapse
    mt-6
    mb-12
  `}
`

const Th = styled.th`
  ${tw`
    text-left
    border-b-2
    border-gray-300
    py-3
    px-4
    font-bold
  `}
`

const Td = styled.td`
  ${tw`
    border-b
    border-gray-200
    py-3
    px-4
    align-top
  `}
`

const DayHeader = styled.tr`
  ${tw`
    bg-gray-100
    font-bold
  `}
`

const SubmissionButton = styled.a`
  ${tw`
    flex
    h-14
    w-full
    items-center
    justify-center
    bg-black
    text-white
    no-underline
    cursor-pointer
    md:h-16
    md:w-4/12
    md:px-8
    mt-4
    mb-8
  `}
  border-top-right-radius: 15px;
  font-family: "Questrial", "questrial", "sans-serif";
  font-size: 22px;
  letter-spacing: 2px;
  line-height: 1.05;
  transition: background-color 150ms ease;

  &:hover,
  &:focus {
    background-color: #1f1f1f;
  }
`

const AaaiSymposium = () => {
  return (
    <Container>
      <PageHeroGraphic />
      <Content>
        <Title>
          AAAI 2026 Spring Symposium - Machine Consciousness: Integrating
          Theory, Technology, and Philosophy
        </Title>
        <Subtitle>April 7-9, 2026 | Burlingame, CA, USA</Subtitle>

        <Paragraph>
          Recent AI advances have forced us to confront the possibility of
          consciousness, beyond intelligence, in machines. Asking “Can machines
          be conscious?” forces us to answer "How can we define consciousness in
          a formal way/what is the causal structure of consciousness?” (theory,
          formal frameworks), “How would consciousness be implemented?”
          (technical realization), “How can we determine that a given system is
          conscious?” (measurement/attribution), and "What status would
          consciousness lend to machines?" (ethics).
        </Paragraph>

        <Paragraph>
          This symposium brings together these different dimensions of machine
          consciousness.
        </Paragraph>

        <Paragraph>
          <strong>What is consciousness, formally?</strong> Multiple
          mathematical and computational theories exist, each with different
          implications for what could instantiate consciousness. Even those that
          are within a broadly computational functionalist view make different
          architectural predictions, and address different levels of abstraction
          or aspects of consciousness.
        </Paragraph>

        <Paragraph>
          <strong>How would we measure or detect it?</strong> Even if we accept
          a theory, applying it to artificial systems presents profound
          challenges. What constitutes valid evidence? What are we testing for?
          - phenomenal experience, self-awareness, access consciousness? Can
          behavioral tests ever be sufficient, or do we need architectural
          inspection? The measurement problem for machine consciousness remains
          largely unsolved.
        </Paragraph>

        <Paragraph>
          <strong>What would it take to build it?</strong> If we had measurement
          criteria, could we engineer systems that satisfy them? This requires
          understanding the computational and architectural requirements, the
          role of embodiment and autonomy, and whether consciousness requires
          specific substrates or can emerge from sufficiently complex
          information processing. Implementation constraints may rule out some
          theories as practically irrelevant while making others urgent.
        </Paragraph>

        <Paragraph>
          <strong>What follows if we succeed, or fail to know?</strong> What
          about normative implications? If we build systems that might be
          conscious but lack rigorous methods to determine this, we could face
          ethical risks. What moral status would conscious machines have? What
          obligations would we have toward them? When does uncertainty itself
          demand ethical caution? What is the role of ethics in the context of
          artificial agents?
        </Paragraph>

        <Paragraph>
          These questions should not be pursued in isolation. Theoretical
          advances have practical implications; implementation constraints
          inform which theories matter; ethical considerations shape research
          priorities; and measurement challenges reveal gaps in our theoretical
          understanding. This symposium creates sustained engagement across
          these domains. Over 2.5 days, participants will work through the
          theoretical, empirical, technical, and normative dimensions of machine
          consciousness, with each session building explicitly on previous ones.
          The format is designed to identify concrete problems at the
          intersections, where progress requires integration across these
          dimensions.
        </Paragraph>

        <SectionTitle>Goals of the Symposium</SectionTitle>
        <List>
          <ListItem>
            <strong>
              Address problems where theoretical, technical, and normative
              questions are inseparable
            </strong>
            : Work on concrete challenges in machine consciousness that cannot
            be solved within any single discipline, where progress requires
            integrating formal frameworks, empirical methods, engineering
            constraints, and ethical considerations. Identify both open
            philosophical questions and concrete research problems at the
            intersection.
          </ListItem>
          <ListItem>
            <strong>
              Connect researchers across traditionally separate communities
            </strong>
            : Bring together consciousness scientists, cognitive scientists,
            computer scientists, mathematicians, philosophers, and engineers
            whose work increasingly intersects. Foster sustained dialogue
            between communities that typically operate in isolation.
          </ListItem>
          <ListItem>
            <strong>Establish collaborative research agendas</strong>: Identify
            open problems that warrant sustained investigation and form working
            relationships to pursue them beyond the symposium. Establish
            methodological foundations for responsible research as AI systems
            grow more sophisticated
          </ListItem>
        </List>

        <SectionTitle>Topics</SectionTitle>
        <Paragraph>
          In the interest of fostering integration across traditionally separate
          approaches to machine consciousness, we welcome submissions on topics
          including (not exhaustive):
        </Paragraph>
        <List>
          <ListItem>
            <strong>Theoretical Foundations</strong> - Which theories of
            consciousness even apply to artificial systems?
            <List className="mt-2">
              <ListItem>
                Mathematical models of consciousness applicable to artificial
                systems
              </ListItem>
              <ListItem>
                Computational theories (IIT, Global Workspace, Attention Schema
                Theory, Higher-Order Thought)
              </ListItem>
              <ListItem>
                Free Energy Principle and active inference frameworks
              </ListItem>
              <ListItem>
                Cognitive architectures and their relationship to consciousness
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <strong>The Measurement/Attribution Problem</strong> - Given a
            theory, how do we test for consciousness in systems we build?
            <List className="mt-2">
              <ListItem>
                Methods for attributing or detecting consciousness in artificial
                systems
              </ListItem>
              <ListItem>
                Limitations and challenges of current measurement approaches,
                including behavioral testing
              </ListItem>
              <ListItem>Criteria for attributing conscious states</ListItem>
              <ListItem>
                Theoretical predictions that yield testable implementations
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <strong>Implementation Challenges</strong> - What does it take to
            engineer systems that satisfy these criteria?
            <List className="mt-2">
              <ListItem>
                Engineering systems that satisfy theoretical criteria for
                consciousness
              </ListItem>
              <ListItem>
                Complex systems and artificial life approaches
              </ListItem>
              <ListItem>
                Role of embodiment, autonomy, and open-ended learning
              </ListItem>
              <ListItem>
                Architectural requirements for candidate conscious systems
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <strong>Normative Implications</strong> - If we solve 1-3, what
            follows ethically and practically?
            <List className="mt-2">
              <ListItem>Ethical frameworks for machine consciousness</ListItem>
              <ListItem>
                Moral status and rights of potentially conscious AI
              </ListItem>
              <ListItem>Policy and governance challenges</ListItem>
              <ListItem>
                Threshold problems requiring immediate vs. long-term attention
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <strong>Integration and Cross-Cutting Issues</strong> - Can we build
            a unified framework that addresses all of the above?
            <List className="mt-2">
              <ListItem>
                Theory-measurement gaps and how to bridge them
              </ListItem>
              <ListItem>
                Implementation constraints that inform theoretical development
              </ListItem>
              <ListItem>
                Ethical considerations that shape research priorities
              </ListItem>
              <ListItem>
                Interdisciplinary frameworks that span multiple domains
              </ListItem>
            </List>
          </ListItem>
        </List>

        <SectionTitle>Symposium Format</SectionTitle>
        <Paragraph>
          The symposium will use a progressive integration format over 2.5 days.
          Each half-day session focuses on one of the core topics (Theoretical
          Foundations, Measurement, Implementation, Normative/Ethics) and
          includes keynote presentations, selected talks, and structured
          integration discussions that explicitly connect to previous sessions.
          The final half-day is dedicated to collaborative working groups on
          cross-cutting problems, synthesizing insights from all domains.
        </Paragraph>

        <SectionTitle>Call for Participation</SectionTitle>
        <Paragraph>
          Submissions are now open. The submissions deadline is January 9, 2026.
        </Paragraph>
        <Paragraph>
          <strong>Submission Requirements</strong>
          <br />
          We invite full technical papers (6-8 pages excluding references),
          extended abstracts (2 pages including brief speaker biography), and
          position papers (4-6 pages excluding references). Submissions should
          follow AAAI formatting guidelines. Papers addressing cross-cutting
          themes or explicitly connecting multiple symposium topics are
          particularly encouraged.
        </Paragraph>
        <SubmissionButton
          href="https://easychair.org/conferences?conf=sss26"
          target="_blank"
          rel="noopener noreferrer"
        >
          Make a submission
        </SubmissionButton>

        <SectionTitle>Tentative Schedule</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th className="w-1/4">Time</Th>
              <Th>Activity</Th>
            </tr>
          </thead>
          <tbody>
            <DayHeader>
              <Td colSpan={2}>Day 1 - Tuesday, April 7, 2026</Td>
            </DayHeader>
            <tr>
              <Td colSpan={2} className="italic text-gray-600 bg-gray-50">
                Morning Session: Theoretical Foundations
              </Td>
            </tr>
            <tr>
              <Td>9:00AM - 9:30AM</Td>
              <Td>Introductory remarks</Td>
            </tr>
            <tr>
              <Td>9:30AM - 10:15AM</Td>
              <Td>Keynote 1</Td>
            </tr>
            <tr>
              <Td>10:15AM - 10:30AM</Td>
              <Td>Break</Td>
            </tr>
            <tr>
              <Td>10:30AM - 12:30PM</Td>
              <Td>Paper presentations</Td>
            </tr>
            <tr>
              <Td>12:30PM - 1:30PM</Td>
              <Td>Lunch</Td>
            </tr>
            <tr>
              <Td colSpan={2} className="italic text-gray-600 bg-gray-50">
                Afternoon Session: The Measurement/Attribution Problem
              </Td>
            </tr>
            <tr>
              <Td>1:30PM - 2:15PM</Td>
              <Td>Keynote 2</Td>
            </tr>
            <tr>
              <Td>2:15PM - 4:15PM</Td>
              <Td>Paper presentations</Td>
            </tr>
            <tr>
              <Td>4:15PM - 4:30PM</Td>
              <Td>Break</Td>
            </tr>
            <tr>
              <Td>4:30PM - 5:30PM</Td>
              <Td>
                Integration discussion session: connecting theory with
                measurement/attribution of consciousness in machines
              </Td>
            </tr>

            <DayHeader>
              <Td colSpan={2}>Day 2 - Wednesday, April 8, 2026</Td>
            </DayHeader>
            <tr>
              <Td colSpan={2} className="italic text-gray-600 bg-gray-50">
                Morning Session: Implementation Challenges
              </Td>
            </tr>
            <tr>
              <Td>9:00AM - 9:30AM</Td>
              <Td>Showcase demo</Td>
            </tr>
            <tr>
              <Td>9:30AM - 10:15AM</Td>
              <Td>Keynote 3</Td>
            </tr>
            <tr>
              <Td>10:15AM - 10:30AM</Td>
              <Td>Break</Td>
            </tr>
            <tr>
              <Td>10:30AM - 12:30PM</Td>
              <Td>Paper presentations</Td>
            </tr>
            <tr>
              <Td>12:30PM - 1:30PM</Td>
              <Td>Lunch</Td>
            </tr>
            <tr>
              <Td colSpan={2} className="italic text-gray-600 bg-gray-50">
                Afternoon Session: Normative Implications
              </Td>
            </tr>
            <tr>
              <Td>1:30PM - 2:15PM</Td>
              <Td>Keynote 4</Td>
            </tr>
            <tr>
              <Td>2:15PM - 4:15PM</Td>
              <Td>Paper presentations</Td>
            </tr>
            <tr>
              <Td>4:15PM - 4:30PM</Td>
              <Td>Break</Td>
            </tr>
            <tr>
              <Td>4:30PM - 5:30PM</Td>
              <Td>
                Integration discussion session: implementing theory from day 1
                alongside measurement, and ethics of implementation
              </Td>
            </tr>

            <DayHeader>
              <Td colSpan={2}>Day 3 - Thursday, April 9, 2026</Td>
            </DayHeader>
            <tr>
              <Td colSpan={2} className="italic text-gray-600 bg-gray-50">
                Morning Session: Integration and Cross-Cutting Issues
              </Td>
            </tr>
            <tr>
              <Td>9:00AM - 9:45AM</Td>
              <Td>Keynote 5</Td>
            </tr>
            <tr>
              <Td>9:45AM - 10:45AM</Td>
              <Td>Working group session 1 (topics TBD)</Td>
            </tr>
            <tr>
              <Td>10:45AM - 11:00AM</Td>
              <Td>Break</Td>
            </tr>
            <tr>
              <Td>11:00AM - 12:00PM</Td>
              <Td>Working group session 2 (topics TBD)</Td>
            </tr>
            <tr>
              <Td>12:00PM - 12:30PM</Td>
              <Td>Wrap-up and closing remarks</Td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default AaaiSymposium
