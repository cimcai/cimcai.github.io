import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import styled from "styled-components"
import tw from "twin.macro"

const HeaderContainer = styled.div`
  ${tw`
    md:min-w-[860px]
    md:px-20
    max-md:px-6
    flex
    flex-col
    items-start
    md:items-center
    w-auto
    mb-8
  `}
`

const TitleContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    md:items-center
    justify-start
    md:justify-between
    gap-4
    md:gap-0
    md:w-full
    mb-8
  `}
`

const Title = styled.h1`
  ${tw`
    text-[2.5rem]
    font-light
    mb-4
    md:mb-0
  `}
  font-family: Questrial, Arial, sans-serif;
`

const SearchBarContainer = styled.div`
  ${tw`
    flex
    items-center
    w-full
    md:max-w-[720px]
    bg-gray-100
    rounded
    px-4
    py-2
    mb-4
    md:mb-0
  `}
`

const SearchInput = styled.input`
  ${tw`
    flex-1
    bg-transparent
    outline-none
    text-lg
    ml-2
  `}
  font-family: inherit;
`

const TagsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    gap-3
    w-full
    md:w-auto
    mb-4
    md:mb-0
  `}
`

const TagButton = styled.button<{ $active?: boolean }>`
  ${tw`
    px-5
    py-2
    rounded-full
    text-base
    border
    border-gray-300
    transition
  `}
  ${({ $active }) =>
    $active
      ? tw`
          bg-black
          text-white
          border-black
        `
      : tw`
          bg-white
          text-black
          hover:bg-gray-200
        `}
  font-family: inherit;
`

const FilterButton = styled.button`
  ${tw`
    flex
    items-center
    gap-2
    px-4
    py-2
    border
    border-gray-300
    rounded-full
    text-base
    bg-white
    hover:bg-gray-100
    transition
    mr-3
  `}
`

const FilterIcon = styled.span`
  ${tw`
    inline-block
  `}
  font-size: 1.2em;
`

interface LibraryHeaderProps {
  tags: string[]
  selectedTag: string
  onTagSelect: (tag: string) => void
  search: string
  onSearch: (value: string) => void
  onFilterClick?: () => void
}

export const LibraryHeader: React.FC<LibraryHeaderProps> = ({
  tags,
  selectedTag,
  onTagSelect,
  search,
  onSearch,
  onFilterClick,
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Library</Title>
        <SearchBarContainer>
          <FiSearch size={20} />
          <SearchInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search library"
          />
        </SearchBarContainer>
      </TitleContainer>
      <TagsContainer>
        <FilterButton onClick={onFilterClick}>
          <FilterIcon>⏷</FilterIcon> Filters
        </FilterButton>
        {tags.map((tag) => (
          <TagButton
            key={tag}
            $active={selectedTag === tag}
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagsContainer>
    </HeaderContainer>
  )
}
