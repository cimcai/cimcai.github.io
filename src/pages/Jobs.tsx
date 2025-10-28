import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

const JobsContainer = styled.div`
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

const JobsLayout = styled.div`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    justify-between
    w-full
    max-w-[1280px]
    mx-auto
    px-6
  `}
`

const JobsStyle = styled.div`
  ${tw`
    md:w-[860px]
  `}
`

const JobsColumn = styled.div`
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
    font-questrial
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

const Section = styled.section``

const Paragraph = styled.p`
  ${tw`
    text-cimc-helvetica-standard
    mb-12
  `}
  color: rgba(24, 29, 39, 0.70);
`

const List = styled.ul`
  ${tw`
    text-cimc-helvetica-standard
    pl-2
    mb-8
    list-inside
    list-disc
  `}
`

const ListItem = styled.li`
  color: rgba(24, 29, 39, 0.70);
`

const Label = styled.p`
  ${tw`
    text-cimc-helvetica-normal
    text-cimc_dark
    mb-3
  `}
`

const EmailLink = styled.a`
  ${tw`
    underline
    hover:underline
    text-black
  `}
`

const JobsConnect = styled.div`
  ${tw`
    flex
    flex-col
    gap-0
    text-right
    md:w-[250px]
    md:pl-10
    md:ml-10
  `}
  color: rgba(24, 29, 39, 0.70);
  position: sticky;
  top: 120px;
  align-self: flex-start;

  & > .jobs-title {
    ${tw`
      pb-1
      text-cimc-helvetica-medium
    `}
    text-align: left;
  }
  & a {
    ${tw`
      text-cimc-helvetica-medium
      underline
      hover:underline
      text-black
      pb-[20px]
    `}
    text-align: left;
  }
  & .jobs-label {
    ${tw`
      text-cimc-helvetica-medium
    `}
    text-align: left;
  }
  color: rgba(24, 29, 39, 0.70);
`

function Jobs() {
  return (
    <JobsContainer>
      <PageHeroGraphic />
      <JobsLayout>
        <JobsStyle>
          <div id="jobs" className="w-full">
            <Header>
              <Title>Research Engineer – Machine Consciousness</Title>
              <Subtitle>
                Full-time · On-site preferred (San Francisco) · California
                Institute for Machine Consciousness (CIMC)
              </Subtitle>
            </Header>
            <Section>
              <Paragraph>
                <b>About CIMC</b>
                <br />
                The California Institute for Machine Consciousness (CIMC) is an
                independent, non-profit research organization building testable
                theories—and working prototypes—of artificial consciousness. We
                want to test the theory that current hardware is sufficient to
                recreate the mechanisms of consciousness of the human mind,
                while expecting to have to move past the current ML paradigms.
              </Paragraph>
            </Section>
            <Section>
              <Paragraph>
                <b>The Role</b>
                <br />
                We are looking for a highly creative research engineer
                intrinsically motivated to contribute to and advance our
                mission. You would work with an early stage, mission-driven team
                tackling one of the hardest questions in the history of science
                and philosophy.
                <br />
                <br />
                This role involves an opportunity to shape new research programs
                spanning our focus areas: formalizing strange loops,
                self-organizing learners, foundation-model phenomenology,
                embodied simulation, and beyond.
                <br />
                <br />
                We value scientific rigor and intellectual openness. We welcome
                applicants from all backgrounds who share our drive to build and
                understand machine consciousness.
              </Paragraph>
              <Label>In this role you will:</Label>
              <List>
                <ListItem>
                  Design and implement experimental AI systems from scratch.
                </ListItem>
                <ListItem>
                  Hack up tasks that explore attention, self-modeling, and
                  self-organizing learning.
                </ListItem>
                <ListItem>
                  Translate questions from philosophers and cognitive scientists
                  into runnable experiments; publish open-source code and
                  preprints.
                </ListItem>
                <ListItem>
                  Develop a testing paradigm for artificial consciousness.
                </ListItem>
                <ListItem>
                  Run experiments that inform CIMC’s broader research areas
                  (from developmental learning to foundation-model
                  phenomenology).
                </ListItem>
              </List>
            </Section>
            <Section>
              <Label>What makes you a fit:</Label>
              <List>
                <ListItem>
                  Programming skills, of course Python, Pytorch, …
                  CUDA/WebGL/C++ is a bonus
                </ListItem>
                <ListItem>Experience in AI/ML</ListItem>
                <ListItem>
                  You enjoy hacking, unusual research questions, spinning up
                  demos
                </ListItem>
                <ListItem>You think that minds are software</ListItem>
                <ListItem>
                  You believe that understanding consciousness is the most
                  important thing in the world
                </ListItem>
                <ListItem>
                  Living in the bay area or willing to relocate there
                </ListItem>
              </List>
            </Section>
            <Section>
              <Label>Bonus Signals</Label>
              <List>
                <ListItem>
                  Published code/papers on emergent agency, ARC-style
                  generalization, or self-organizing systems.
                </ListItem>
                <ListItem>
                  Background in neuroscience, philosophy of mind, or cognitive
                  psychology.
                </ListItem>
                <ListItem>
                  Blog posts, talks, or repos that show you can explain complex
                  ideas clearly
                </ListItem>
              </List>
            </Section>
            <Section>
              <Label>How to Apply</Label>
              <Paragraph>
                Email{" "}
                <EmailLink href="mailto:apply@cimc.ai">apply@cimc.ai</EmailLink>{" "}
                with:
              </Paragraph>
              <List>
                <ListItem>
                  <b>Portfolio links</b> – GitHub, papers, videos, or a short
                  write-up of your projects and/or experiments.
                </ListItem>
                <ListItem>
                  <b>Two brief answers (≤ 200 words each)</b>
                  <List>
                    <ListItem>
                      <i>
                        What is your current working definition of
                        consciousness?
                      </i>
                    </ListItem>
                    <ListItem>
                      <i>How would you test for machine consciousness?</i>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <b>Resume / CV.</b>
                </ListItem>
              </List>
              <Paragraph>
                Applications will be reviewed on a rolling basis.
              </Paragraph>
            </Section>
          </div>
        </JobsStyle>
        <JobsColumn>
          <JobsConnect>
            <div className="jobs-title">Email to apply</div>
            <a href="mailto:apply@cimc.ai">apply@cimc.ai</a>
          </JobsConnect>
        </JobsColumn>
      </JobsLayout>
    </JobsContainer>
  )
}

export default Jobs
