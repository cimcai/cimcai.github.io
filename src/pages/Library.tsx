import { useEffect, useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { LibraryHeader } from "../components/LibraryHeader"
import { PageHeroGraphic } from "../components/PageHeroGraphic"
import { snakeToCamel } from "../lib/snakeToCamel"
import { supabase } from "../lib/supabaseClient"

interface LibraryCellProps {
  title: string
  linkUrl?: string
  thumbnailUrl?: string
  description?: string
  tags?: string[]
}

const LibraryCell: React.FC<
  LibraryCellProps & React.RefAttributes<HTMLAnchorElement>
> = ({ title, description, linkUrl, thumbnailUrl }) => {
  return (
    <div className="flex-col md:pr-4 max-md:w-11/12">
      <div>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={`${title} Thumbnail`}
              className="flex pb-2 max-md:w-9/12"
            />
          ) : null}
        </a>
        <div
          className={`pt-${thumbnailUrl ? 0 : 8} leading-tight ${linkUrl ? "underline underline-offset-auto pb-2" : ""}`}
        >
          <a href={linkUrl} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
      </div>
      {description ? <p className="pb-6 leading-tight">{description}</p> : null}
    </div>
  )
}

interface LibrarySectionColumnProps {
  columnData: LibraryCellProps[]
}
const LibrarySectionColumn: React.FC<LibrarySectionColumnProps> = ({
  columnData,
}) => {
  return (
    <div>
      {columnData.map((cellData) => {
        const { title, description, linkUrl, thumbnailUrl } = cellData
        return (
          <LibraryCell
            key={title}
            title={title}
            linkUrl={linkUrl}
            thumbnailUrl={thumbnailUrl}
            description={description}
          />
        )
      })}
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
  topic: string
  linkData: LibraryCellProps[]
}

const LibrarySection: React.FC<LibrarySectionProps> = ({ topic, linkData }) => {
  const rowCount = Math.ceil(linkData.length / 3)

  const column1 = linkData.slice(0, rowCount)
  const column2 = linkData.slice(rowCount, rowCount * 2)
  const column3 = linkData.slice(rowCount * 2, linkData.length)

  return (
    <LibrarySectionContainer>
      <div className="py-6 text-xl">{topic}</div>
      <LibraryColumnsContainer>
        <LibrarySectionColumn columnData={column1} />
        <LibrarySectionColumn columnData={column2} />
        <LibrarySectionColumn columnData={column3} />
      </LibraryColumnsContainer>
    </LibrarySectionContainer>
  )
}

const LibraryContainer = styled.div`
  ${tw`
  bg-white
    text-cimc-standard
    flex
    flex-col
    items-center
    justify-center
    md:justify-center
    pt-24
    pb-40
  `}
`
const LibrarySectionsContainer = styled.div`
  ${tw`
    md:w-[860px]
    max-md:px-6
  `}
`

const Library = () => {
  const [links, setLinks] = useState<LibraryCellProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [selectedTag, setSelectedTag] = useState<string>("")

  useEffect(() => {
    async function fetchLinks() {
      setLoading(true)
      const { data, error } = await supabase.from("links").select("*")
      if (error) setError(error.message)
      else {
        const mapped = (data || []).map(
          (item) => snakeToCamel(item) as unknown as LibraryCellProps,
        )
        setLinks(mapped)
      }
      setLoading(false)
    }
    fetchLinks()
  }, [])

  // Collect all unique tags
  const allTags = Array.from(
    new Set(links.flatMap((link) => (link.tags?.length ? link.tags : []))),
  )

  // Filter links by selected tag and search
  const filteredLinks = links.filter((link) => {
    const matchesTag = selectedTag ? link.tags?.includes(selectedTag) : true
    const matchesSearch = search
      ? link.title.toLowerCase().includes(search.toLowerCase()) ||
        link.description?.toLowerCase().includes(search.toLowerCase())
      : true
    return matchesTag && matchesSearch
  })

  // Group by first tag (for section display)
  const grouped = filteredLinks.reduce<{ [tag: string]: LibraryCellProps[] }>(
    (acc, link) => {
      if (!link.tags || !link.tags.length) return acc
      const tag = link.tags[0]
      if (!acc[tag]) acc[tag] = []
      acc[tag].push(link)
      return acc
    },
    {},
  )

  if (loading) return <div>Loading library…</div>
  if (error) return <div>Error: {error}</div>

  return (
    <LibraryContainer id="library">
      <PageHeroGraphic />
      <LibraryHeader
        tags={allTags}
        selectedTag={selectedTag}
        onTagSelect={(tag) => setSelectedTag(selectedTag === tag ? "" : tag)}
        search={search}
        onSearch={setSearch}
        onFilterClick={() => {
          // Placeholder for filter click functionality
        }}
      />
      <LibrarySectionsContainer>
        {Object.entries(grouped).map(([topic, linkData]) => (
          <div key={topic}>
            <LibrarySection topic={topic} linkData={linkData} />
          </div>
        ))}
      </LibrarySectionsContainer>
    </LibraryContainer>
  )
}

export default Library
