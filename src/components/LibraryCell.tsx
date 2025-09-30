import type React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { LineBreak } from "./LineBreak"

export interface LibraryCellProps {
  title: string
  linkUrl?: string
  thumbnailUrl?: string
  description?: string
  tags?: string[]
}

const LibraryCellContainer = styled.div`
  ${tw`
    flex
    flex-col
    border
    border-gray-300
    rounded
    overflow-hidden
    shadow-md
  `}
`

const ThumbnailContainer = styled.div`
  ${tw`
    flex
    min-w-[393px]
    min-h-[206px]
    pb-[0.253px]
    justify-center
    items-center
  `}
`

const TitleContainer = styled.div`
  ${tw`
    bottom-0
    left-0
    text-cimc-helvetica-30
    px-4
    py-4
  `}
`

const DescriptionContainer = styled.div`
  ${tw`
    p-4
  `}
`

const TagContainer = styled.div`
  ${tw`
    text-right
  `}
`

const Tag = styled.span`
  ${tw`
    inline-block
    bg-cimc_light
    text-black
    text-xs
    px-2
    py-1
    rounded
  `}
`

const ThumbnailImage = styled.img`
  ${tw`
    shrink-0
    aspect-[393/205.75]
    object-cover
  `}
`

function LibraryCell({
  title,
  description,
  linkUrl,
  thumbnailUrl,
  tags,
}: LibraryCellProps) {
  return (
    <LibraryCellContainer>
      {thumbnailUrl && (
        <ThumbnailContainer>
          <a href={linkUrl} target="_blank" rel="noreferrer">
            <ThumbnailImage src={thumbnailUrl} alt={`${title} Thumbnail`} />
          </a>
        </ThumbnailContainer>
      )}
      <TitleContainer>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          {title}
        </a>
      </TitleContainer>
      <LineBreak width="100%" mt="1" mb="2" />
      <DescriptionContainer>
        <p
          className="text-black cimc-helvetica-medium min-h-32 mb-1"
          style={{ lineHeight: "120%" }}
        >
          {description}
        </p>
        {tags && tags.length > 0 && (
          <TagContainer>
            <Tag>{tags[0]}</Tag>
          </TagContainer>
        )}
      </DescriptionContainer>
    </LibraryCellContainer>
  )
}

export default LibraryCell
