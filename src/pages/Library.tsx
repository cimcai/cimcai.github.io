import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import LibraryCell, { type LibraryCellProps } from "../components/LibraryCell";
import { LibraryHeader } from "../components/LibraryHeader"
import { PageHeroGraphic } from "../components/PageHeroGraphic"
import { snakeToCamel } from "../lib/snakeToCamel"
import { supabase } from "../lib/supabaseClient"

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
`;

const LibraryGridContainer = styled.div`
  ${tw`
    grid
    gap-x-8
    gap-y-12
    md:grid-cols-3
    md:min-w-[860px]
    md:px-20
    px-6
  `}
`;

const Library = () => {
  const [links, setLinks] = useState<LibraryCellProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const didFetch = useRef(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tagFromUrl = searchParams.get("tag");
    if (tagFromUrl) {
      setSelectedTag(tagFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    async function fetchLinks() {
      setLoading(true);
      const { data, error } = await supabase.from("links").select("*");
      if (error) setError(error.message);
      else {
        const mapped = (data || []).map(
          (item) => snakeToCamel(item) as unknown as LibraryCellProps
        );
        setLinks(mapped);
      }
      setLoading(false);
    }
    fetchLinks();
  }, []);

    const prioritizeLaunchEventTag = (tags: string[]) => {
    return tags.includes("Launch Event")
      ? ["Launch Event", ...tags.filter((tag) => tag !== "Launch Event")]
      : tags
  }

  // Prioritize 'Launch Event' in allTags
  const allTags = Array.from(new Set(links.flatMap((link) => link.tags || [])))
  const sortedAllTags = prioritizeLaunchEventTag(allTags)

  const prioritizeLaunchEvent = (items: LibraryCellProps[]) => {
    return items.sort((a, b) => {
      const aIsLaunchEvent = a.tags?.includes("Launch Event") ? -1 : 1;
      const bIsLaunchEvent = b.tags?.includes("Launch Event") ? -1 : 1;
      return aIsLaunchEvent - bIsLaunchEvent;
    });
  };

  // Filter links by selected tag and search
  const filteredLinks = links.filter((link) => {
    const matchesTag = selectedTag ? link.tags?.includes(selectedTag) : true;
    const matchesSearch = search
      ? link.title.toLowerCase().includes(search.toLowerCase()) ||
        link.description?.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });

  // Prioritize 'Launch Event' in filtered links
  const prioritizedLinks = prioritizeLaunchEvent(filteredLinks);

  if (loading) return <div>Loading library…</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <LibraryContainer id="library">
      <PageHeroGraphic />
      <LibraryHeader
        tags={sortedAllTags}
        selectedTag={selectedTag}
        onTagSelect={(tag) => setSelectedTag(selectedTag === tag ? "" : tag)}
        search={search}
        onSearch={setSearch}
        onFilterClick={() => {
          // Placeholder for filter click functionality
        }}
      />
      <LibraryGridContainer>
        {prioritizedLinks.map((link) => {
          const key = link.linkUrl || link.title;
          return (
              <div key={key}>
                <LibraryCell
                  title={link.title}
                  linkUrl={link.linkUrl}
                  thumbnailUrl={link.thumbnailUrl}
                  description={link.description}
                  tags={link.tags}
                />
              </div>
          );
        })}
      </LibraryGridContainer>
    </LibraryContainer>
  );
};

export default Library
