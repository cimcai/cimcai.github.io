import {
  JobDetailContainer,
  JobDetailLayout,
  JobEmailLink,
  JobHeader,
  JobHeaderRow,
  JobLabel,
  JobList,
  JobListItem,
  JobMainColumn,
  JobParagraph,
  JobSection,
  JobSidebar,
  JobSidebarLabel,
  JobSidebarLink,
  JobSidebarTitle,
  JobSubtitle,
  JobTitle,
} from "../components/JobDetailLayout"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

function ResearchEngineer() {
  return (
    <JobDetailContainer>
      <PageHeroGraphic />
      <JobDetailLayout>
        <JobMainColumn>
          <div id="jobs" className="w-full">
            <JobHeader>
              <JobHeaderRow>
                <JobTitle>Research Engineer – Machine Consciousness</JobTitle>
              </JobHeaderRow>
              <JobSubtitle>
                Full-time · On-site preferred (San Francisco) · California
                Institute for Machine Consciousness (CIMC)
              </JobSubtitle>
            </JobHeader>
            <JobSection>
              <JobParagraph>
                <b>About CIMC</b>
                <br />
                The California Institute for Machine Consciousness (CIMC) is an
                independent, non-profit research organization building testable
                theories—and working prototypes—of artificial consciousness. We
                want to test the theory that current hardware is sufficient to
                recreate the mechanisms of consciousness of the human mind,
                while expecting to have to move past the current ML paradigms.
              </JobParagraph>
            </JobSection>
            <JobSection>
              <JobParagraph>
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
              </JobParagraph>
              <JobLabel>In this role you will:</JobLabel>
              <JobList>
                <JobListItem>
                  Design and implement experimental AI systems from scratch.
                </JobListItem>
                <JobListItem>
                  Hack up tasks that explore attention, self-modeling, and
                  self-organizing learning.
                </JobListItem>
                <JobListItem>
                  Translate questions from philosophers and cognitive scientists
                  into runnable experiments; publish open-source code and
                  preprints.
                </JobListItem>
                <JobListItem>
                  Develop a testing paradigm for artificial consciousness.
                </JobListItem>
                <JobListItem>
                  Run experiments that inform CIMC’s broader research areas
                  (from developmental learning to foundation-model
                  phenomenology).
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>What makes you a fit:</JobLabel>
              <JobList>
                <JobListItem>
                  Programming skills, of course Python, Pytorch, …
                  CUDA/WebGL/C++ is a bonus
                </JobListItem>
                <JobListItem>Experience in AI/ML</JobListItem>
                <JobListItem>
                  You enjoy hacking, unusual research questions, spinning up
                  demos
                </JobListItem>
                <JobListItem>You think that minds are software</JobListItem>
                <JobListItem>
                  You believe that understanding consciousness is the most
                  important thing in the world
                </JobListItem>
                <JobListItem>
                  Living in the bay area or willing to relocate there
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>Bonus Signals</JobLabel>
              <JobList>
                <JobListItem>
                  Published code/papers on emergent agency, ARC-style
                  generalization, or self-organizing systems.
                </JobListItem>
                <JobListItem>
                  Background in neuroscience, philosophy of mind, or cognitive
                  psychology.
                </JobListItem>
                <JobListItem>
                  Blog posts, talks, or repos that show you can explain complex
                  ideas clearly
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>How to Apply</JobLabel>
              <JobParagraph>
                Email{" "}
                <JobEmailLink href="mailto:apply@cimc.ai">
                  apply@cimc.ai
                </JobEmailLink>{" "}
                with:
              </JobParagraph>
              <JobList>
                <JobListItem>
                  <b>Portfolio links</b> – GitHub, papers, videos, or a short
                  write-up of your projects and/or experiments.
                </JobListItem>
                <JobListItem>
                  <b>Two brief answers (≤ 200 words each)</b>
                  <JobList>
                    <JobListItem>
                      <i>
                        What is your current working definition of
                        consciousness?
                      </i>
                    </JobListItem>
                    <JobListItem>
                      <i>How would you test for machine consciousness?</i>
                    </JobListItem>
                  </JobList>
                </JobListItem>
                <JobListItem>
                  <b>Resume / CV.</b>
                </JobListItem>
              </JobList>
              <JobParagraph>
                Applications will be reviewed on a rolling basis.
              </JobParagraph>
            </JobSection>
          </div>
        </JobMainColumn>
        <JobSidebar>
          <JobSidebarTitle>Email to apply</JobSidebarTitle>
          <JobSidebarLink href="mailto:apply@cimc.ai">
            apply@cimc.ai
          </JobSidebarLink>
          <JobSidebarLabel>
            We review applications on a rolling basis.
          </JobSidebarLabel>
        </JobSidebar>
      </JobDetailLayout>
    </JobDetailContainer>
  )
}

export default ResearchEngineer
