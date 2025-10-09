import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { snakeToCamel } from "../lib/snakeToCamel"
import { supabase } from "../lib/supabaseClient"

const NewsListContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-12
    max-w-[860px]
    justify-center
    items-center
    pb-24
    px-6
    md:px-0
  `}
`

const NewsItem = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    gap-8
    w-full
    items-center
  `}
`
const NewsImage = styled.img<{ $backgroundColor?: string }>`
  ${tw`
    w-full
    md:w-[400px]
    md:h-[400px]
    object-cover
    rounded
  `}
  min-width: 320px;
  min-height: 320px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#f3f4f6"};
`
const NewsContent = styled.div`
  ${tw`
    flex
    flex-col
    flex-1
    justify-center
  `}
`
const NewsMeta = styled.div`
  ${tw`
    uppercase
    text-xs
    text-gray-400
    mb-2
  `}
  letter-spacing: 0.1em;
`
const NewsTitle = styled.h2`
  ${tw`
    font-questrial
    text-cimc-logo-small
    mb-2
  `}
`
const NewsDate = styled.div`
  ${tw`
    text-gray-400
    text-sm
    mb-2
  `}
`
const NewsDesc = styled.p`
  ${tw`
    text-gray-600
    mb-6
  `}
`
const NewsButton = styled.a`
  ${tw`
    block
    bg-black
    border
    border-black
    text-white
    text-lg
    py-4
    w-full
    md:w-[320px]
    text-center
    rounded-tr-[10px]
    rounded-tl-none
    rounded-br-none
    rounded-bl-none
    transition
    hover:bg-white
    hover:text-black
  `}
`

interface NewsItemProps {
  hide?: boolean
  backgroundColor?: string
  pictureUrl?: string
  youtubeId?: string
  title: string
  date?: string
  description?: string
  linkUrl?: string
}

export function NewsList() {
  const [news, setNews] = useState<NewsItemProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const didFetch = useRef(false)

  useEffect(() => {
    if (didFetch.current) return
    didFetch.current = true
    async function fetchNews() {
      setLoading(true)
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("hide", false)
        .order("date", { ascending: true })
      if (error) setError(error.message)
      else {
        const mapped = (data || []).map(
          (item) => snakeToCamel(item) as unknown as NewsItemProps,
        )
        setNews(mapped)
      }
      setLoading(false)
    }
    fetchNews()
  }, [])

  if (loading) return <div>Loading news…</div>
  if (error) return <div>Error: {error}</div>

  return (
    <NewsListContainer>
      {news.map((item) => (
        <NewsItem key={item.title}>
          {item.youtubeId ? (
            <iframe
              width="400"
              height="400"
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <NewsImage
              src={item.pictureUrl}
              alt={item.title}
              $backgroundColor={item.backgroundColor}
            />
          )}
          <NewsContent>
            <NewsMeta>Explore</NewsMeta>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDate>• {item.date}</NewsDate>
            <NewsDesc>{item.description}</NewsDesc>
            <NewsButton href={item.linkUrl} target="_blank">
              Learn more
            </NewsButton>
          </NewsContent>
        </NewsItem>
      ))}
    </NewsListContainer>
  )
}
