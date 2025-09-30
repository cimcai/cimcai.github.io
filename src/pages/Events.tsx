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
  ${tw`py-10 px-5`}
`

const EventsButtonsContainer = styled.div`
  ${tw`
    mx-auto
    flex
    justify-center
    items-center
    flex-wrap
    gap-[102px]
    max-md:gap-6
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
    ? tw`bg-black text-white border-black`
    : tw`bg-white text-black hover:bg-gray-200`}
`

const EventsContainer = styled.div`
  ${tw`
    bg-white
    max-md:px-6
    text-cimc-standard
    flex
    flex-col
    items-center
    justify-center
    pt-24
    pb-40
  `}
`

const EventsHeader = styled.div`
  ${tw`
    md:w-[860px]
    mb-12
  `}
`

const EventsSectionsContainer = styled.div`
  ${tw`
    md:w-[860px]
  `}
`

const EventRow = styled.div`
  ${tw`
    flex
    items-center
    gap-4
    py-4
  `}
`

const EventDate = styled.div`
  ${tw`
    w-40
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
    ml-4
  `}
`

const EventTitle = styled.h3`
  ${tw`
    text-xl
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
            return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
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
      <EventsHeader>
        <p className="text-cimc-hero mb-8">CIMC Events</p>
        <p className="text-cimc-helvetica-standard">
          We need an open, transdisciplinary, non-profit research initiative.
          This institute will integrate insights from philosophy, psychology,
          neuroscience, the arts, mathematics and AI into a unified framework,
          breaking down the conceptual barriers that have hindered progress in
          consciousness research. We envision this institute as a hub where
          academics, AI industry experts, and independent scholars conduct
          practical research in-house.
        </p>
      </EventsHeader>
      <EventsButtonsSection>
        <LineBreak width="1440px" mt="0px" mb="23px"/>
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
        <LineBreak width="1440px" mt="27px" mb="0px"/>
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
    </EventsContainer>
  )
}

export default Events
