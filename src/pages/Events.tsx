import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { LineBreak } from "../components/LineBreak"
import { PageHeroGraphic } from "../components/PageHeroGraphic"
import { snakeToCamel } from "../lib/snakeToCamel"
import { supabase } from "../lib/supabaseClient"

// Styled components for the events buttons section
const EventsButtonsSection = styled.section`
  ${tw`
    py-10
    w-full
  `}
`

const EventsButtonsContainer = styled.div`
  ${tw`
    mx-auto
    flex
    justify-center
    items-center
    flex-wrap
    gap-6
    md:gap-[102px]
    md:flex-row
    flex-col
  `}
`

const EventButton = styled.button<{ $active?: boolean }>`
  ${tw`
    bg-white
    border-2
    border-black
    text-black
    flex
    w-[380px]
    h-[47px]
    justify-center
    items-center
    rounded-tl-none
    rounded-tr-[10px]
    rounded-br-none
    rounded-bl-[10px]
    shadow-[0_0_0_1px_rgba(10,13,18,0.18)_inset,0_-2px_0_0_rgba(10,13,18,0.05)_inset,0_1px_2px_0_rgba(10,13,18,0.05)]
    whitespace-nowrap
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
`

const EventsContainer = styled.div`
  ${tw`
    bg-white
    text-cimc-standard
  `}
`

const EventsContentContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    pb-40
  `}
`

const EventsHeader = styled.div`
  ${tw`
    md:max-w-[960px]
    mb-12
    px-6
    md:px-0
  `}
`

const EventPageTitle = styled.p`
  ${tw`
    font-questrial
    md:text-cimc-hero
    text-[2.5rem]
    mb-8
  `}
`

const EventPageDescription = styled.p`
  ${tw`
    text-cimc-helvetica-standard
  `}
`

const EventsSectionsContainer = styled.div`
  ${tw`
    md:max-w-[960px]
    px-6
    md:px-0
  `}
`

const EventRow = styled.div`
  ${tw`
    flex
    md:flex-row
    flex-col
    md:items-center
    gap-4
    md:py-4
    pt-4
    pb-10
  `}
`

const EventDate = styled.div`
  ${tw`
    md:w-40
    text-lg
    shrink-0
  `}
`

const EventImage = styled.img<{ $backgroundColor?: string }>`
  ${tw`
    w-96
    h-52
    object-cover
  `}
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#f3f4f6"};
`

const EventDetails = styled.div`
  ${tw`
    flex-1
    md:ml-4
  `}
`

const EventTitle = styled.h3`
  ${tw`
    font-questrial
    text-cimc-logo
    mb-2
  `}
`

const EventLocation = styled.p`
  ${tw`
    mb-2
  `}
`

const LearnMoreButton = styled.a`
  ${tw`
    flex
    text-sm
    text-white
    rounded-tl-none
    rounded-tr-[7px]
    rounded-br-none
    rounded-bl-none
    border
    border-[rgba(255,255,255,0.12)]
    bg-black
    items-center
    justify-center
    w-[164px]
    h-[26px]
  `}
`

interface EventCellProps {
  datesLabel?: string
  imageUrl?: string
  backgroundColor?: string
  name: string
  location: string
  description?: string
  eventUrl?: string
  startDate?: Date
  endDate?: Date
}

const Events = () => {
  const [events, setEvents] = useState<EventCellProps[]>([])
  const [filteredEvents, setFilteredEvents] = useState<EventCellProps[]>([])
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const didFetch = useRef(false)

  useEffect(() => {
    if (didFetch.current) return
    didFetch.current = true
    async function fetchEvents() {
      setLoading(true)
      const { data, error } = await supabase.from("events").select("*")
      if (error) setError(error.message)
      else {
        const mapped = (data || []).map(
          (item) => snakeToCamel(item) as unknown as EventCellProps,
        )
        const sortedEvents = mapped.sort((a, b) => {
          if (a.startDate && b.startDate) {
            return (
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
            )
          }
          return 0
        })
        setEvents(sortedEvents)
        setFilteredEvents(sortedEvents) // Default to all events
      }
      setLoading(false)
    }
    fetchEvents()
  }, [])

  const filterEvents = (filterType: "past" | "upcoming") => {
    if (activeFilter === filterType) {
      setFilteredEvents(events)
      setActiveFilter(null)
    } else {
      const today = dayjs()
      const filtered = events.filter((event) => {
        if (filterType === "past") {
          return event.endDate && dayjs(event.endDate).isBefore(today)
        }
        if (filterType === "upcoming") {
          return event.endDate && dayjs(event.endDate).isAfter(today)
        }
        return false
      })
      setFilteredEvents(filtered)
      setActiveFilter(filterType)
    }
  }

  if (loading) return <div>Loading events…</div>
  if (error) return <div>Error: {error}</div>

  return (
    <EventsContainer id="events">
      <PageHeroGraphic />
      <EventsContentContainer>
        <EventsHeader>
          <EventPageTitle>CIMC Events</EventPageTitle>
          <EventPageDescription>
            We need an open, transdisciplinary, non-profit research initiative.
            This institute will integrate insights from philosophy, psychology,
            neuroscience, the arts, mathematics and AI into a unified framework,
            breaking down the conceptual barriers that have hindered progress in
            consciousness research. We envision this institute as a hub where
            academics, AI industry experts, and independent scholars conduct
            practical research in-house.
          </EventPageDescription>
        </EventsHeader>
        <EventsButtonsSection>
          <LineBreak width="100%" mt="0px" mb="23px" />
          <EventsButtonsContainer>
            <EventButton
              $active={activeFilter === "past"}
              onClick={() => filterEvents("past")}
            >
              SEE PAST EVENTS
            </EventButton>
            <EventButton
              $active={activeFilter === "upcoming"}
              onClick={() => filterEvents("upcoming")}
            >
              SEE UPCOMING EVENTS
            </EventButton>
          </EventsButtonsContainer>
          <LineBreak width="100%" mt="27px" mb="0px" />
        </EventsButtonsSection>
        <EventsSectionsContainer>
          {filteredEvents.map((event) => (
            <EventRow key={event.name}>
              <EventDate>{event.datesLabel}</EventDate>
              <EventImage
                src={event.imageUrl ? event.imageUrl : "./defaultEvent.png"}
                alt={event.name}
                $backgroundColor={event.backgroundColor}
              />
              <EventDetails>
                <EventTitle>{event.name}</EventTitle>
                <EventLocation>{event.location}</EventLocation>
                {event.eventUrl && (
                  <LearnMoreButton
                    href={event.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </LearnMoreButton>
                )}
              </EventDetails>
            </EventRow>
          ))}
        </EventsSectionsContainer>
      </EventsContentContainer>
    </EventsContainer>
  )
}

export default Events
