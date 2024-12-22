import styled from "styled-components";
import linksData from "../data/links.json"
import tw from "twin.macro";

interface LibraryCellProps {
  title: string;
  linkUrl?: string;
  thumbnailUrl?: string;
  description?: string;
}

const LibraryCell: React.FC<LibraryCellProps & React.RefAttributes<HTMLAnchorElement>> = ({title, description, linkUrl, thumbnailUrl }) => {
  return (
    <div className="flex-col md:pr-4 max-md:w-11/12">
      <div>
        <a href={linkUrl} target="_blank">
          {thumbnailUrl ? <img src={thumbnailUrl} alt={`${title} Thumbnail`} className="flex pb-2 max-md:w-9/12" /> : null}
        </a>
        <div className={`pt-${thumbnailUrl ? 0 : 8} leading-tight ${linkUrl ? "underline underline-offset-auto pb-2" : ""}`}>
          <a href={linkUrl} target="_blank">
            {title}
          </a>
        </div>
      </div>
      {description ?
        <p className="pb-6 leading-tight">
          {description}
        </p>
       : null}
    </div>
  )
}

interface LibrarySectionColumnProps {
  columnData: LibraryCellProps[];
}
const LibrarySectionColumn: React.FC<LibrarySectionColumnProps> = ({ columnData }) => {
  return (
    <div>
      {
        columnData.map((cellData) => {
          const {title, description, linkUrl, thumbnailUrl } = cellData
          return (
            <LibraryCell key={title} title={title} linkUrl={linkUrl} thumbnailUrl={thumbnailUrl} description={description}/>
          )
        })
      }
    </div>
  )
}

const LibraryColumnsContainer = styled.div`
  ${tw`
    md:grid
    gap-3
  `}
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const LibrarySectionContainer = styled.div`
  ${tw`
  `}
`
interface LibrarySectionProps {
  topic: string;
  linkData: LibraryCellProps[];
}

const LibrarySection: React.FC<LibrarySectionProps> = ({topic, linkData }) => {
  const rowCount = Math.ceil(linkData.length / 3)

  const column1 = linkData.slice(0, rowCount)
  const column2 = linkData.slice(rowCount, rowCount*2)
  const column3 = linkData.slice(rowCount*2, linkData.length)

  return (
    <LibrarySectionContainer>
      <div className="py-6 text-xl">
        {topic}
      </div>
      <LibraryColumnsContainer>
        <LibrarySectionColumn columnData={column1}/>
        <LibrarySectionColumn columnData={column2}/>
        <LibrarySectionColumn columnData={column3}/>
        </LibraryColumnsContainer>
    </LibrarySectionContainer>
  )
}

const LibraryContainer = styled.div`
  ${tw`
  bg-white
    text-cimc-standard
    flex
    md:justify-center
    max-md:px-6
    pt-16
    pb-40
  `}
`
const LibrarySectionsContainer = styled.div`
  ${tw`
    md:w-[729px]
  `}
`

const Library = () => {
  return (
    <LibraryContainer id="library">
      <LibrarySectionsContainer>
      {
        linksData.map((linksData) => {
          const {topic, linkData} = linksData
          return (
            <LibrarySection topic={topic} linkData={linkData} />
          )
        })
      }
      </LibrarySectionsContainer>
    </LibraryContainer>
  )
}

export default Library
