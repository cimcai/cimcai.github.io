import styled from "styled-components";
import linksData from "../data/links.json"
import tw from "twin.macro";
const { column1, column2, column3 } = linksData;

interface LibraryCellProps {
  title: string;
  linkUrl: string;
  thumbnailUrl?: string;
  description?: string;
}

const LibraryCell: React.FC<LibraryCellProps & React.RefAttributes<HTMLAnchorElement>> = ({title, description, linkUrl, thumbnailUrl }) => {
  return (
    <div className="rounded py-4 flex-col">
      <a href={linkUrl} target="_blank">
        {thumbnailUrl ? <img src={thumbnailUrl} alt={`${title} Thumbnail`} className="flex rounded py-2 max-md:w-9/12" /> : null}
      </a>
      <div className="pb-2">
        <a href={linkUrl} target="_blank" className="underline">
          {title}
        </a>
      </div>
      {description ?
        <p className="text-sm leading-tight">
          {description}
        </p>
       : null}
    </div>
  )
}

interface LibraryColumnProps {
  columnCellsData: LibraryCellProps[];
  extraXPadding?: boolean;
}


const LibraryColumn: React.FC<LibraryColumnProps> = ({ columnCellsData, extraXPadding = false }) => {
  return (
    <div className={`flex-1 py-4 md:w-1/3 ${extraXPadding ? "px-6" : ""}`}>
      {
        columnCellsData.map((cellData) => {
          const {title, description, linkUrl, thumbnailUrl } = cellData
          return <LibraryCell key={title} title={title} linkUrl={linkUrl} thumbnailUrl={thumbnailUrl} description={description}/>
        })
      }
    </div>
  )
}

const LibraryContainer = styled.div`
  ${tw`
  bg-black
  text-white
    flex
    md:justify-center
    max-md:px-6
    pt-16
    pb-40
  `}
`
const LibraryColumnContainer = styled.div`
  ${tw`
    flex
    md:w-[729px]
    max-md:flex-col
  `}
`


const Library = () => {
  return (
    <LibraryContainer id="library">
      <LibraryColumnContainer>
        <LibraryColumn columnCellsData={column1} />
        <LibraryColumn columnCellsData={column2} extraXPadding/>
        <LibraryColumn columnCellsData={column3} />
      </LibraryColumnContainer>
    </LibraryContainer>
  )
}

export default Library
