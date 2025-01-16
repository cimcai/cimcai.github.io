import styled from "styled-components"
import tw, { theme } from "twin.macro"
import profilesData from "../data/profiles.json"
import portraitJoscha from "../../public/portraitJoscha.jpg"
import portraitErik from "../../public/portraitErik.jpg"

const TeamContainer = styled.div`
  ${tw`
      text-black
      bg-white
      selection:text-black
      selection:bg-gray-500
      flex
      justify-center
      max-md:px-6
      pt-16
      pb-40
    `}
  color: ${theme`colors.cimc_dark`};
`

const ProfileContainer = styled.div`
  ${tw`
      pb-4
      leading-tight
    `}
`

interface AdvisorProfileData {
  name: string;
  job: string;
  institution: string;
  institutionUrl: string;
  portraitUrl: string;
}

interface AdvisorProfileProps {
  profileData: AdvisorProfileData;
}

const AdvisorProfile: React.FC<AdvisorProfileProps & React.RefAttributes<HTMLAnchorElement>> = ({profileData}) => {
  const {name, job, institution, institutionUrl, portraitUrl} = profileData
  return (
    <ProfileContainer>
      <img src={portraitUrl} alt={`${name} Portrait`} className="flex rounded py-2 h-56" />
      <p className="text-cimc-heading">
        {name}
      </p>
      <p className="text-cimc-standard">
        {job}
      </p>
      <a href={institutionUrl}>
        <p className="text-cimc-standard underline underline-offset-2">
          {institution}
        </p>
      </a>
    </ProfileContainer>
  )
}

interface AdvisorProfileColumnProps {
  columnCellsData: AdvisorProfileData[];
}


const AdvisorProfileColumn: React.FC<AdvisorProfileColumnProps> = ({ columnCellsData, }) => {
  return (
    <div className={`flex-1 py-4 md:w-1/2`}>
      {
        columnCellsData.map((profileData) => {
          return <AdvisorProfile key={profileData.name} profileData={profileData} />
        })
      }
    </div>
  )
}

const Team = () => {
  return (
    <>
      <TeamContainer id="team">
        <div className="md:w-[729px]">
          <p className="text-cimc-subheading py-4">
            Core Team
          </p>
          <p className="text-cimc-heading leading-tight">
            <div className="md:flex">
              <div className="flex-1 md:w-1/2 pb-4">
                <img src={portraitJoscha} alt="Joscha Portrait" className="flex rounded py-2 h-56" />
                Joscha Bach
                <p className="text-cimc-standard">
                  Director
                </p>
              </div>
              <div className="flex-1 md:w-1/2 pb-4">
                <img src={portraitErik} alt="Erik Newton" className="flex rounded py-2 h-56" />
                Erik Newton
                <p className="text-cimc-standard">
                President
                </p>
              </div>
            </div>
          </p>
          <p className="text-cimc-subheading">
            Scientific Advisors
          </p>
          <div className="md:flex">
            <AdvisorProfileColumn columnCellsData={profilesData.slice(0, 2)} />
            <AdvisorProfileColumn columnCellsData={profilesData.slice(-2)} />
          </div>

          <p className="text-cimc-standard leading-normal pt-4">
            <p className="text-cimc-heading">Board</p>
            <br/>
            Jim O’Neill
            <br/>
            Philip Rosedale
            <br/>
            Zhen Tan
            <br/>
            Lou de Kerhuelvez
            <br/>
            <br/>
            <p className="text-cimc-heading">Board Observer</p>
            <br/>
            Christine Peterson
            <br/>
            <br/>
            <p className="text-cimc-heading">Organizational Advisors</p>
            <br/>
            Jim Rutt
            <br/>
            Allison Duettman
            <br/>
            Dan Girshovich
            <br/>
            Franz Hildebrandt-Harangozó
          </p>
        </div>
      </TeamContainer>
    </>
  )
}

export default Team
