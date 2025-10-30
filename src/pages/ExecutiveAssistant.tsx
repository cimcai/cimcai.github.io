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

function ExecutiveAssistant() {
  return (
    <JobDetailContainer>
      <PageHeroGraphic />
      <JobDetailLayout>
        <JobMainColumn>
          <div id="jobs-executive-assistant" className="w-full">
            <JobHeader>
              <JobHeaderRow>
                <JobTitle>Executive Assistant to the Founding Team</JobTitle>
              </JobHeaderRow>
              <JobSubtitle>
                Full-time or Part-time (negotiable) · Hybrid; 2-3 days/week in
                person (San Francisco) · California Institute for Machine
                Consciousness (CIMC)
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
                We are seeking a proactive, highly organized Executive Assistant
                to support CIMC’s executive team in San Francisco. You will work
                closely with leadership to coordinate schedules, manage
                communications, assist with operations, and keep the
                organization running smoothly as we scale our programs and
                partnerships.
                <br />
                <br />
                This is an exciting opportunity to contribute directly to a
                pioneering research organization at the intersection of AI,
                philosophy, and ethics.
              </JobParagraph>
            </JobSection>
            <JobSection>
              <JobLabel>In this role you will:</JobLabel>
              <JobList>
                <JobListItem>
                  <b>Executive support:</b> manage calendars, travel logistics,
                  and scheduling for the executive team.
                </JobListItem>
                <JobListItem>
                  <b>Operations:</b> assist with hiring, onboarding, and
                  internal communications.
                </JobListItem>
                <JobListItem>
                  <b>Meetings &amp; documentation:</b> record tasks, track
                  follow-ups, and maintain project timelines.
                </JobListItem>
                <JobListItem>
                  <b>Communications:</b> draft correspondence and assist with
                  donor relations and public outreach.
                </JobListItem>
                <JobListItem>
                  <b>Events:</b> support organization of seminars, salons, and
                  conferences in San Francisco and abroad.
                </JobListItem>
                <JobListItem>
                  <b>General administration:</b> handle expense tracking, vendor
                  coordination, and document management.
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>What makes you a fit:</JobLabel>
              <JobList>
                <JobListItem>
                  You are exceptionally organized and detail-oriented, with
                  excellent written and verbal communication skills.
                </JobListItem>
                <JobListItem>
                  You thrive in early-stage, dynamic, intellectually ambitious
                  environments.
                </JobListItem>
                <JobListItem>
                  You are comfortable handling sensitive information with
                  discretion and professionalism.
                </JobListItem>
                <JobListItem>
                  You’re adaptable and able to move fluidly between
                  administrative, creative, and operational tasks.
                </JobListItem>
                <JobListItem>
                  You have experience supporting founders, executives, or
                  researchers in fast-moving organizations.
                </JobListItem>
                <JobListItem>
                  Familiarity with academic, scientific, or nonprofit contexts
                  is a strong plus.
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>Qualifications</JobLabel>
              <JobList>
                <JobListItem>
                  3+ years of experience in executive or operations support.
                </JobListItem>
                <JobListItem>
                  Proficiency in Google Workspace, Slack, and project management
                  tools.
                </JobListItem>
                <JobListItem>
                  Strong interpersonal skills and professional presence.
                </JobListItem>
                <JobListItem>
                  (Preferred) Interest in science, philosophy, AI, or related
                  fields.
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>Compensation and terms</JobLabel>
              <JobList>
                <JobListItem>
                  <b>Compensation:</b> competitive to similar roles in
                  non-profits, commensurate with experience.
                </JobListItem>
                <JobListItem>
                  <b>Hours:</b> flexible; can range from part-time (20–30
                  hrs/week) to full-time.
                </JobListItem>
                <JobListItem>
                  <b>Location:</b> based in San Francisco, with hybrid
                  flexibility.
                </JobListItem>
                <JobListItem>
                  <b>Start Date:</b> as soon as possible.
                </JobListItem>
              </JobList>
            </JobSection>
            <JobSection>
              <JobLabel>How to apply</JobLabel>
              <JobParagraph>
                Email{" "}
                <JobEmailLink href="mailto:apply@cimc.ai">
                  apply@cimc.ai
                </JobEmailLink>{" "}
                with:
              </JobParagraph>
              <JobList>
                <JobListItem>
                  A brief statement of interest (max 300 words)
                </JobListItem>
                <JobListItem>Resume / CV.</JobListItem>
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
            Submit your resume and we&apos;ll follow up with next steps as the
            role opens.
          </JobSidebarLabel>
        </JobSidebar>
      </JobDetailLayout>
    </JobDetailContainer>
  )
}

export default ExecutiveAssistant
