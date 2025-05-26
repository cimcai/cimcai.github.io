import styled from "styled-components"
import tw, { theme } from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"
import LinkIcon from "../components/icons/LinkIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import XIcon from "../components/icons/XIcon"
import profilesData from "../data/profiles.json"

const TeamContainer = styled.div`
  ${tw`
      text-black
      bg-white
      selection:text-black
      selection:bg-gray-500
      flex
      flex-col
      items-center
      justify-center
      pt-24
    `}
  color: ${theme`colors.cimc_dark`};
`

const TeamLayout = styled.div`
  ${tw`
      md:w-[1024px]
      max-md:px-6
    `}
`
const TeamName = styled.p`
  ${tw`
      text-cimc-helvetica-large
      mb-8
    `}
`

const ProfileListGrid = styled.div`
  ${tw`
    grid
    md:grid-cols-2
    grid-cols-1
    gap-x-20
    gap-y-16
    mb-28
  `}
`

const ProfileCard = styled.div`
  ${tw`
    flex
    flex-row
    gap-6
    items-center
    mb-[22px]
  `}
`

const Portrait = styled.img`
  ${tw`
    w-[160px]
    h-[220px]
    object-cover
    rounded
    flex-shrink-0
  `}
`

const ProfileInfo = styled.div`
  ${tw`
    flex flex-col flex-1 min-w-0`}
`

const ProfileName = styled.div`
  ${tw`
    text-cimc-large
    mb-[6px]
  `}
`

const ProfileJob = styled.div`
  ${tw`
    text-cimc-helvetica-smaller
  `}
  color: rgba(24, 29, 39, 0.70);
`

const ProfileInstitution = styled.a`
  ${tw`
    text-cimc-helvetica-smaller
    underline
  `}
  color: rgba(24, 29, 39, 0.70);
`

const ProfileDesc = styled.div`
  ${tw`
    text-cimc-helvetica-smaller
    mt-4
    mb-6
    min-h-16
  `}
`

const ProfileLinks = styled.div`
  ${tw`
    flex flex-row gap-4 justify-between`}
`

type TeamMember = {
  name: string
  job?: string
  description?: string
  institution?: string
  institutionUrl?: string
  portraitUrl: string
}

// ProfileList component
const ProfileList = ({
  teamName,
  teamMembers,
}: { teamName: string; teamMembers: TeamMember[] }) => (
  <div>
    <TeamName>{teamName}</TeamName>
    <ProfileListGrid>
      {teamMembers.map((member) => (
        <ProfileCard key={member.name}>
          <Portrait
            src={member.portraitUrl.replace("./", "/public/")}
            alt={member.name}
          />
          <ProfileInfo>
            <ProfileName>{member.name}</ProfileName>
            {member.job && <ProfileJob>{member.job}</ProfileJob>}

            <ProfileDesc>
              {member.description ||
                "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor inure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis."}
            </ProfileDesc>
            <ProfileLinks>
              {member.institutionUrl && member.institution ? (
                <ProfileInstitution
                  href={member.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <div className="flex items-center gap-1">
                    <LinkIcon />
                    {member.institution}
                  </div>
                </ProfileInstitution>
              ) : (
                <div />
              )}
              <div className="flex flex-row gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <XIcon />
                </a>
              </div>
            </ProfileLinks>
          </ProfileInfo>
        </ProfileCard>
      ))}
    </ProfileListGrid>
  </div>
)

const Team = () => {
  return (
    <TeamContainer id="team">
      <PageHeroGraphic />
      <TeamLayout>
        <p className="text-cimc-hero mb-16">Team</p>
        {profilesData.teams.map((team) => (
          <div key={team.teamName}>
            <ProfileList
              teamName={team.teamName}
              teamMembers={team.teamMembers}
            />
          </div>
        ))}
      </TeamLayout>
    </TeamContainer>
  )
}

export default Team
