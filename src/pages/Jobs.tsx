import { Link } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"

const JobsPageContainer = styled.div`
  ${tw`
    bg-white
    selection:text-black
    selection:bg-gray-500
    flex
    flex-col
    items-center
    px-0
    pt-24
    pb-20
  `}
`

const JobsContent = styled.div`
  ${tw`
    flex
    w-full
    max-w-[1280px]
    flex-col
    gap-16
    px-6
  `}
`

const JobsHeader = styled.header`
  ${tw`
    flex
    flex-col
    gap-6
    md:flex-row
    md:items-center
    md:justify-between
  `}
`

const JobsHeading = styled.h1`
  ${tw`
    text-black
  `}
  font-family: "Questrial", "questrial", "sans-serif";
  font-size: 55px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 5.5px;
  margin: 0;
  text-transform: uppercase;
  white-space: normal;

  @media (min-width: 768px) {
    white-space: nowrap;
  }
`

const JobsSubheading = styled.p`
  ${tw`
    text-black
  `}
  font-family: "Helvetica Neue", "helvetica", "Helvetica", "Arial", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.72px;
  margin: 0;
  white-space: normal;

  @media (min-width: 768px) {
    white-space: nowrap;
  }
`

const JobsIntro = styled.p`
  ${tw`
    text-cimc-helvetica-standard
  `}
  color: rgba(24, 29, 39, 0.7);
  max-width: 860px;
`

const JobsList = styled.div`
  ${tw`
    flex
    flex-col
    border-y-[0.5px] border-[#8A8989]
  `}
`

const JobRow = styled.div`
  ${tw`
    flex
    flex-col
    gap-6
    py-8
    md:flex-row
    md:items-center
    md:justify-between
    [&:not(:last-of-type)]:border-b-[0.5px]
    [&:not(:last-of-type)]:border-[#8A8989]
  `}
`

const JobRowTitle = styled.h3`
  ${tw`
    text-black
    font-questrial
    [font-size: 24px]
    md:[font-size: 40px]
  `}
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.8px;
  margin: 0;
  max-width: 700px;
`

const JobRowApply = styled(Link)`
  ${tw`
    flex
    h-6
    md:h-16
    w-[154px]
    md:w-[306px]
    items-center
    justify-center
    bg-black
    text-white
    no-underline
    cursor-pointer
    md:h-16
    font-questrial
    [font-size: 12px]
    md:[font-size: 24px]
  `}
  border-top-right-radius: 15px;
  letter-spacing: 3.9px;
  line-height: 1.05;
  transition: background-color 150ms ease;

  &:hover,
  &:focus {
    background-color: #1f1f1f;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`

const JobsFooterNote = styled.p`
  ${tw`
    text-cimc-helvetica-standard
  `}
  color: rgba(24, 29, 39, 0.7);
  max-width: 860px;
`

const JobsFooterLink = styled.a`
  ${tw`
    underline
    hover:underline
    text-black
  `}

`

interface JobListing {
  title: string
  to: string
}

const jobListings: JobListing[] = [
  {
    title: "Research Engineer – Machine Consciousness",
    to: "/jobs/engineer",
  },
  {
    title: "Executive Assistant to the Founding Team",
    to: "/jobs/executive-assistant",
  },
]

function Jobs() {
  return (
    <JobsPageContainer>
      <PageHeroGraphic />
      <JobsContent>
        <JobsHeader>
          <JobsHeading>Open Positions</JobsHeading>
        </JobsHeader>
        <JobsIntro>
          We&apos;re assembling a multidisciplinary team to explore machine
          consciousness. Explore our current openings below or share your
          background if you believe you can help shape this field.
        </JobsIntro>
        <JobsList>
          {jobListings.map((job) => (
            <JobRow key={job.title}>
              <JobRowTitle>{job.title}</JobRowTitle>
              <JobRowApply to={job.to}>Apply</JobRowApply>
            </JobRow>
          ))}
        </JobsList>
        <JobsFooterNote>
          Don&apos;t see a perfect fit yet? Email{" "}
          <JobsFooterLink href="mailto:apply@cimc.ai">
            apply@cimc.ai
          </JobsFooterLink>{" "}
          with your background and ambitions.
        </JobsFooterNote>
      </JobsContent>
    </JobsPageContainer>
  )
}

export default Jobs
