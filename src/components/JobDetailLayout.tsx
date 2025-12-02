import styled from "styled-components"
import tw from "twin.macro"

export const JobDetailContainer = styled.div`
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

export const JobDetailLayout = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    justify-between
    w-full
    max-w-[1280px]
    mx-auto
    px-6
  `}
`

export const JobMainColumn = styled.div`
  ${tw`
    md:w-[860px]
  `}
`

export const JobSidebar = styled.aside`
  ${tw`
    flex
    flex-col
    gap-4
    text-cimc-helvetica-standard
    text-right
    md:w-[300px]
    min-h-[200px]
    mb-20
    md:sticky
    md:top-[120px]
    self-start
  `}
  color: rgba(24, 29, 39, 0.7);
`

export const JobSidebarTitle = styled.p`
  ${tw`
    pb-1
    text-cimc-helvetica-medium
    text-left
  `}
`

export const JobSidebarLink = styled.a`
  ${tw`
    text-cimc-helvetica-medium
    underline
    hover:underline
    text-black
    pb-[20px]
    text-left
  `}
`

export const JobSidebarLabel = styled.p`
  ${tw`
    text-cimc-helvetica-medium
    text-left
  `}
  color: rgba(24, 29, 39, 0.7);
`

export const JobHeader = styled.header`
  ${tw`
    w-full
    mb-8
  `}
`

export const JobHeaderRow = styled.div`
  ${tw`
    flex
    flex-col
    gap-6
    w-full
    md:flex-row
    md:items-center
    md:justify-between
  `}
`

export const JobTitle = styled.h1`
  ${tw`
    text-black
  `}
  font-family: "Helvetica Neue", "helvetica", "Helvetica", "Arial", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.8px;
  margin: 0;
`

export const JobSubtitle = styled.h2`
  ${tw`
    text-cimc-helvetica-normal
    mb-12
  `}
  color: rgba(24, 29, 39, 0.6);
`

export const JobApplyButton = styled.a`
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
    md:w-[306px]
  `}
  border-top-right-radius: 15px;
  font-family: "Questrial", "questrial", "sans-serif";
  font-size: 26px;
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

export const JobSection = styled.section``

export const JobParagraph = styled.p`
  ${tw`
    text-cimc-helvetica-standard
    mb-12
  `}
  color: rgba(24, 29, 39, 0.7);
`

export const JobList = styled.ul`
  ${tw`
    text-cimc-helvetica-standard
    pl-2
    mb-8
    list-inside
    list-disc
  `}
`

export const JobListItem = styled.li`
  color: rgba(24, 29, 39, 0.7);
`

export const JobLabel = styled.p`
  ${tw`
    text-cimc-helvetica-normal
    text-cimc_dark
    mb-3
  `}
`

export const JobEmailLink = styled.a`
  ${tw`
    underline
    hover:underline
    text-black
  `}
`
