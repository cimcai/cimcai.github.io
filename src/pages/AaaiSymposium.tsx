import { type MouseEvent, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { PageHeroGraphic } from "../components/PageHeroGraphic"
import LinkIcon from "../components/icons/LinkIcon"
import LinkedInIcon from "../components/icons/LinkedInIcon"
import XIcon from "../components/icons/XIcon"
import speakers from "../data/speakers.json"

const Container = styled.div`
  ${tw`
    bg-white
    flex
    flex-col
    items-center
    justify-center
    pt-16
    md:pt-24
    w-full
  `}
`

const Section = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-[36px]
    md:gap-[56px]
    pb-[72px]
    w-full
  `}
`

const Content = styled.div`
  ${tw`
    w-full
    max-w-[400px]
    md:max-w-none
    md:w-[860px]
    px-4
    sm:px-5
    md:px-0
    selection:text-black
    selection:bg-gray-500
  `}
`

const TitleBlock = styled.div`
  ${tw`
    flex
    flex-col
    gap-[10px]
    md:gap-[16px]
  `}
`

const Title = styled.h1`
  ${tw`
    text-[32px]
    sm:text-[36px]
    md:text-[56px]
    leading-[1.08]
    md:leading-[1.05]
    text-cimc_dark
  `}
  font-family: "Questrial", "questrial", "sans-serif";
  letter-spacing: -2.24px;
`

const Subtitle = styled.h2`
  ${tw`
    text-[18px]
    sm:text-[20px]
    md:text-[24px]
    w-full
    md:w-[444px]
  `}
  color: rgba(24, 29, 39, 0.6);
  letter-spacing: -0.72px;
`

const SectionHeading = styled.h3`
  ${tw`
    text-[20px]
    md:text-[24px]
    text-cimc_dark
    pt-[8px]
    pb-[12px]
  `}
  letter-spacing: -0.72px;
  scroll-margin-top: 100px;
`

const TocBox = styled.div`
  ${tw`
    bg-[#f2f2f79e]
    border-l-[7px]
    border-[#dcdcdc]
    border-solid
    pl-4
    pr-4
    md:pl-6
    md:pr-6
    rounded-[10px]
  `}
`

const TocInner = styled.div`
  ${tw`
    flex
    flex-col
    gap-[10px]
    md:gap-[16px]
    py-[10px]
    md:py-[14px]
  `}
`

const TocTitle = styled.h3`
  ${tw`
    text-[26px]
    md:text-[36px]
    text-cimc_dark
  `}
  font-family: "Questrial", "questrial", "sans-serif";
  letter-spacing: -1.44px;
`

const TocList = styled.ul`
  ${tw`
    list-none
    space-y-2
  `}
`

const TocItem = styled.li`
  ${tw`
    pl-0
  `}
`

const TocLink = styled.a`
  ${tw`
    text-[18px]
    md:text-[24px]
    hover:text-black
    no-underline
    transition-colors
    duration-150
  `}
  color: rgba(24, 29, 39, 0.6);
  letter-spacing: -0.72px;

  &:hover {
    color: rgba(24, 29, 39, 1);
    text-decoration: underline;
  }
`

const Paragraph = styled.p`
  ${tw`
    pb-6
    leading-[1.5]
    text-[16px]
    sm:text-[17px]
    md:text-[20px]
  `}
  color: rgba(24, 29, 39, 0.7);
`

const List = styled.ul`
  ${tw`
    list-disc
    pl-6
    pb-6
    space-y-2
    text-[16px]
    sm:text-[17px]
    md:text-[20px]
  `}
`

const ListItem = styled.li`
  ${tw`
    pl-2
  `}
  color: rgba(24, 29, 39, 0.7);
  line-height: 1.5;
`

const MainContent = styled.div`
  ${tw`
    flex
    flex-col
    gap-[28px]
    md:gap-[40px]
    w-full
  `}
`

const ContentSection = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    w-full
  `}
`

const SpeakerCard = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    gap-3
    md:gap-5
    items-center
    w-full
    mb-4
    md:mb-6
  `}
`

const SpeakerImageWrap = styled.div`
  ${tw`
    shrink-0
    w-[132px]
    sm:w-[148px]
    md:w-[160px]
    h-[164px]
    sm:h-[182px]
    md:h-[198px]
    overflow-hidden
    self-start
  `}
`

const SpeakerImg = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
  `}
`

const SpeakerInfoCol = styled.div`
  ${tw`
    flex
    flex-1
    flex-col
    gap-[10px]
    md:gap-[16px]
    py-[8px]
    md:py-[16px]
    w-full
  `}
`

const SpeakerNameRow = styled.div`
  ${tw`
    flex
    flex-col
    gap-[6px]
  `}
`

const SpeakerName = styled.h4`
  ${tw`
    text-[20px]
    md:text-[24px]
    text-cimc_dark
    leading-[1.05]
  `}
  font-family: "Questrial", "questrial", "sans-serif";
  letter-spacing: -0.72px;
`

const SpeakerLinkRow = styled.div`
  ${tw`
    flex
    items-start
    md:items-center
    justify-between
    gap-2
    w-full
  `}
`

const SpeakerLinkLeft = styled.div`
  ${tw`
    flex
    items-start
    md:items-center
    gap-[5px]
    min-w-0
    flex-1
  `}
`

const SpeakerLinkAnchor = styled.a`
  ${tw`
    text-[12px]
    md:text-[14px]
    underline
    hover:opacity-80
    transition-opacity
    duration-150
  `}
  color: rgba(24, 29, 39, 0.7);
  letter-spacing: -0.28px;
  overflow-wrap: anywhere;
  word-break: break-word;
`

const SpeakerXLink = styled.a`
  ${tw`
    flex
    items-center
    hover:opacity-70
    transition-opacity
    duration-150
  `}
  color: rgba(24, 29, 39, 0.7);
`

const SpeakerBio = styled.p`
  ${tw`
    text-[13px]
    md:text-[14px]
    leading-[1.12]
  `}
  color: rgba(24, 29, 39, 0.7);
`

const TalkInfo = styled.div`
  ${tw`
    text-[14px]
    md:text-[16px]
    leading-[1.12]
    mb-8
    md:mb-12
  `}
  color: rgba(24, 29, 39, 0.7);
`

const FloatingTocButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["visible"].includes(prop),
})<{ visible: boolean }>`
  ${tw`
    fixed
    right-4
    bottom-5
    md:right-8
    md:bottom-8
    z-30
    bg-[#f2f2f79e]
    w-11
    h-11
    md:w-12
    md:h-12
    rounded-[10px]
    border
    border-[#dcdcdc]
    flex
    items-center
    justify-center
    transition-all
    duration-200
    shadow-[0px_2px_8px_rgba(10,13,18,0.18)]
    hover:opacity-85
  `}
  color: rgba(24, 29, 39, 0.6);

  ${({ visible }) =>
    visible
      ? tw`
          opacity-100
          translate-y-0
        `
      : tw`
          opacity-0
          translate-y-2
          pointer-events-none
        `}
`

const AaaiSymposium = () => {
  const tocRef = useRef<HTMLDivElement | null>(null)
  const [isBackToTocVisible, setIsBackToTocVisible] = useState(false)

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    const isDesktop = window.matchMedia("(min-width: 768px)").matches
    const topOffset = isDesktop ? 112 : 80
    const top = target.getBoundingClientRect().top + window.scrollY - topOffset
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    window.history.replaceState(null, "", `#${targetId}`)
    window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" })
  }

  const handleTocClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault()
    scrollToSection(targetId)
  }

  useEffect(() => {
    const updateBackToTocVisibility = () => {
      if (!tocRef.current) {
        setIsBackToTocVisible(false)
        return
      }

      const tocBottom =
        tocRef.current.getBoundingClientRect().bottom + window.scrollY
      setIsBackToTocVisible(window.scrollY > tocBottom + 24)
    }

    updateBackToTocVisibility()
    window.addEventListener("scroll", updateBackToTocVisibility, {
      passive: true,
    })
    window.addEventListener("resize", updateBackToTocVisibility)

    return () => {
      window.removeEventListener("scroll", updateBackToTocVisibility)
      window.removeEventListener("resize", updateBackToTocVisibility)
    }
  }, [])

  return (
    <Container>
      <PageHeroGraphic />
      <Section>
        <Content>
          <TitleBlock>
            <Title>
              AAAI 2026 Spring Symposium - Machine Consciousness: Integrating
              Theory, Technology, and Philosophy
            </Title>
            <Subtitle>April 7-9, 2026 | Burlingame, CA, USA</Subtitle>
          </TitleBlock>
        </Content>

        <Content>
          <TocBox id="table-of-contents" ref={tocRef}>
            <TocInner>
              <TocTitle>Table of Contents</TocTitle>
              <TocList>
                <TocItem>
                  <TocLink
                    href="#goals-of-the-symposium"
                    onClick={(event) =>
                      handleTocClick(event, "goals-of-the-symposium")
                    }
                  >
                    Goals of the Symposium
                  </TocLink>
                </TocItem>
                <TocItem>
                  <TocLink
                    href="#topics"
                    onClick={(event) => handleTocClick(event, "topics")}
                  >
                    Topics
                  </TocLink>
                </TocItem>
                <TocItem>
                  <TocLink
                    href="#symposium-format"
                    onClick={(event) =>
                      handleTocClick(event, "symposium-format")
                    }
                  >
                    Symposium Format
                  </TocLink>
                </TocItem>
                <TocItem>
                  <TocLink
                    href="#call-for-participation"
                    onClick={(event) =>
                      handleTocClick(event, "call-for-participation")
                    }
                  >
                    Registration
                  </TocLink>
                </TocItem>
                <TocItem>
                  <TocLink
                    href="#tentative-schedule"
                    onClick={(event) =>
                      handleTocClick(event, "tentative-schedule")
                    }
                  >
                    Tentative Schedule
                  </TocLink>
                </TocItem>
                <TocItem>
                  <TocLink
                    href="#speakers"
                    onClick={(event) => handleTocClick(event, "speakers")}
                  >
                    Speakers
                  </TocLink>
                </TocItem>
              </TocList>
            </TocInner>
          </TocBox>
        </Content>

        <Content>
          <MainContent>
            <ContentSection>
              <Paragraph>
                Recent AI advances have forced us to confront the possibility of
                consciousness, beyond intelligence, in machines. Asking “Can
                machines be conscious?” forces us to answer "How can we define
                consciousness in a formal way/what is the causal structure of
                consciousness?” (theory, formal frameworks), “How would
                consciousness be implemented?” (technical realization), “How can
                we determine that a given system is conscious?”
                (measurement/attribution), and "What status would consciousness
                lend to machines?" (ethics).
              </Paragraph>

              <Paragraph>
                This symposium brings together these different dimensions of
                machine consciousness.
              </Paragraph>

              <Paragraph>
                <strong>What is consciousness, formally?</strong> Multiple
                mathematical and computational theories exist, each with
                different implications for what could instantiate consciousness.
                Even those that are within a broadly computational functionalist
                view make different architectural predictions, and address
                different levels of abstraction or aspects of consciousness.
              </Paragraph>

              <Paragraph>
                <strong>How would we measure or detect it?</strong> Even if we
                accept a theory, applying it to artificial systems presents
                profound challenges. What constitutes valid evidence? What are
                we testing for? - phenomenal experience, self-awareness, access
                consciousness? Can behavioral tests ever be sufficient, or do we
                need architectural inspection? The measurement problem for
                machine consciousness remains largely unsolved.
              </Paragraph>

              <Paragraph>
                <strong>What would it take to build it?</strong> If we had
                measurement criteria, could we engineer systems that satisfy
                them? This requires understanding the computational and
                architectural requirements, the role of embodiment and autonomy,
                and whether consciousness requires specific substrates or can
                emerge from sufficiently complex information processing.
                Implementation constraints may rule out some theories as
                practically irrelevant while making others urgent.
              </Paragraph>

              <Paragraph>
                <strong>What follows if we succeed, or fail to know?</strong>{" "}
                What about normative implications? If we build systems that
                might be conscious but lack rigorous methods to determine this,
                we could face ethical risks. What moral status would conscious
                machines have? What obligations would we have toward them? When
                does uncertainty itself demand ethical caution? What is the role
                of ethics in the context of artificial agents?
              </Paragraph>

              <Paragraph>
                These questions should not be pursued in isolation. Theoretical
                advances have practical implications; implementation constraints
                inform which theories matter; ethical considerations shape
                research priorities; and measurement challenges reveal gaps in
                our theoretical understanding. This symposium creates sustained
                engagement across these domains. Over 2.5 days, participants
                will work through the theoretical, empirical, technical, and
                normative dimensions of machine consciousness, with each session
                building explicitly on previous ones. The format is designed to
                identify concrete problems at the intersections, where progress
                requires integration across these dimensions.
              </Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionHeading id="goals-of-the-symposium">
                Goals of the Symposium
              </SectionHeading>
              <List>
                <ListItem>
                  <strong>
                    Address problems where theoretical, technical, and normative
                    questions are inseparable
                  </strong>
                  : Work on concrete challenges in machine consciousness that
                  cannot be solved within any single discipline, where progress
                  requires integrating formal frameworks, empirical methods,
                  engineering constraints, and ethical considerations. Identify
                  both open philosophical questions and concrete research
                  problems at the intersection.
                </ListItem>
                <ListItem>
                  <strong>
                    Connect researchers across traditionally separate
                    communities
                  </strong>
                  : Bring together consciousness scientists, cognitive
                  scientists, computer scientists, mathematicians, philosophers,
                  and engineers whose work increasingly intersects. Foster
                  sustained dialogue between communities that typically operate
                  in isolation.
                </ListItem>
                <ListItem>
                  <strong>Establish collaborative research agendas</strong>:
                  Identify open problems that warrant sustained investigation
                  and form working relationships to pursue them beyond the
                  symposium. Establish methodological foundations for
                  responsible research as AI systems grow more sophisticated
                </ListItem>
              </List>
            </ContentSection>

            <ContentSection>
              <SectionHeading id="topics">Topics</SectionHeading>
              <Paragraph>
                In the interest of fostering integration across traditionally
                separate approaches to machine consciousness, we welcome
                submissions on topics including (not exhaustive):
              </Paragraph>
              <List>
                <ListItem>
                  <strong>Theoretical Foundations</strong> - Which theories of
                  consciousness even apply to artificial systems?
                  <List className="mt-2">
                    <ListItem>
                      Mathematical models of consciousness applicable to
                      artificial systems
                    </ListItem>
                    <ListItem>
                      Computational theories (IIT, Global Workspace, Attention
                      Schema Theory, Higher-Order Thought)
                    </ListItem>
                    <ListItem>
                      Free Energy Principle and active inference frameworks
                    </ListItem>
                    <ListItem>
                      Cognitive architectures and their relationship to
                      consciousness
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <strong>The Measurement/Attribution Problem</strong> - Given a
                  theory, how do we test for consciousness in systems we build?
                  <List className="mt-2">
                    <ListItem>
                      Methods for attributing or detecting consciousness in
                      artificial systems
                    </ListItem>
                    <ListItem>
                      Limitations and challenges of current measurement
                      approaches, including behavioral testing
                    </ListItem>
                    <ListItem>
                      Criteria for attributing conscious states
                    </ListItem>
                    <ListItem>
                      Theoretical predictions that yield testable
                      implementations
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <strong>Implementation Challenges</strong> - What does it take
                  to engineer systems that satisfy these criteria?
                  <List className="mt-2">
                    <ListItem>
                      Engineering systems that satisfy theoretical criteria for
                      consciousness
                    </ListItem>
                    <ListItem>
                      Complex systems and artificial life approaches
                    </ListItem>
                    <ListItem>
                      Role of embodiment, autonomy, and open-ended learning
                    </ListItem>
                    <ListItem>
                      Architectural requirements for candidate conscious systems
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <strong>Normative Implications</strong> - If we solve 1-3,
                  what follows ethically and practically?
                  <List className="mt-2">
                    <ListItem>
                      Ethical frameworks for machine consciousness
                    </ListItem>
                    <ListItem>
                      Moral status and rights of potentially conscious AI
                    </ListItem>
                    <ListItem>Policy and governance challenges</ListItem>
                    <ListItem>
                      Threshold problems requiring immediate vs. long-term
                      attention
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <strong>Integration and Cross-Cutting Issues</strong> - Can we
                  build a unified framework that addresses all of the above?
                  <List className="mt-2">
                    <ListItem>
                      Theory-measurement gaps and how to bridge them
                    </ListItem>
                    <ListItem>
                      Implementation constraints that inform theoretical
                      development
                    </ListItem>
                    <ListItem>
                      Ethical considerations that shape research priorities
                    </ListItem>
                    <ListItem>
                      Interdisciplinary frameworks that span multiple domains
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ContentSection>

            <ContentSection>
              <SectionHeading id="symposium-format">
                Symposium Format
              </SectionHeading>
              <Paragraph>
                The symposium will use a progressive integration format over 2.5
                days. Each half-day session focuses on one of the core topics
                (Theoretical Foundations, Measurement, Implementation,
                Normative/Ethics) and includes keynote presentations, selected
                talks, and structured integration discussions that explicitly
                connect to previous sessions. The final half-day is dedicated to
                collaborative working groups on cross-cutting problems,
                synthesizing insights from all domains.
              </Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionHeading id="call-for-participation">
                Registration
              </SectionHeading>
              <Paragraph>
                How to register and pricing:
                <br />
                <a
                  href="https://aaai.org/conference/spring-symposia/sss26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://aaai.org/conference/spring-symposia/sss26/
                </a>
                <br />
                <br />
                Hotel:
                <br />
                <a
                  href="https://www.hyatt.com/events/en-US/group-booking/SFOBU/G-AAAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.hyatt.com/events/en-US/group-booking/SFOBU/G-AAAI
                </a>
              </Paragraph>
              <Paragraph>
                <strong>Note</strong>
                <br />
                Anyone whose paper is accepted must register in order to
                present. We encourage general attendees who just want to attend
                to also register.
              </Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionHeading id="tentative-schedule">
                Tentative Schedule
              </SectionHeading>
              <Paragraph>(On website)</Paragraph>
            </ContentSection>

            <ContentSection>
              <SectionHeading id="speakers">Speakers</SectionHeading>

              {speakers.map((sp: any, idx: number) => {
                const base = (sp.image || "").split("/").pop() || ""
                const filename = base.replace(/^image/, "speaker")
                const imgSrc = sp.image?.startsWith("/")
                  ? sp.image
                  : `/speakers/${filename}`

                const website = (sp.links || []).find(
                  (l: any) =>
                    (l.label && /website/i.test(l.label)) ||
                    /https?:\/\//i.test(l.url),
                )
                const xLink = (sp.links || []).find((l: any) =>
                  /x\.com|twitter/i.test(l.url || ""),
                )
                const linkedin = (sp.links || []).find(
                  (l: any) =>
                    (l.label && /linkedin/i.test(l.label)) ||
                    /linkedin\.com/i.test(l.url || ""),
                )

                return (
                  <div key={sp.name || idx}>
                    <SpeakerCard>
                      <SpeakerImageWrap>
                        <SpeakerImg src={imgSrc} alt={sp.name} />
                      </SpeakerImageWrap>
                      <SpeakerInfoCol>
                        <SpeakerNameRow>
                          <SpeakerName>{sp.name}</SpeakerName>
                          <SpeakerLinkRow>
                            <SpeakerLinkLeft>
                              <LinkIcon />
                              {website ? (
                                <SpeakerLinkAnchor
                                  href={website.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {website.url}
                                </SpeakerLinkAnchor>
                              ) : null}
                            </SpeakerLinkLeft>
                            <div className="flex items-center gap-3">
                              {linkedin ? (
                                <SpeakerXLink
                                  href={linkedin.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${sp.name} on LinkedIn`}
                                >
                                  <LinkedInIcon width={20} height={20} />
                                </SpeakerXLink>
                              ) : null}
                              {xLink ? (
                                <SpeakerXLink
                                  href={xLink.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${sp.name} on X`}
                                >
                                  <XIcon width={20} height={20} />
                                </SpeakerXLink>
                              ) : null}
                            </div>
                          </SpeakerLinkRow>
                        </SpeakerNameRow>
                        <SpeakerBio>{sp.bio}</SpeakerBio>
                      </SpeakerInfoCol>
                    </SpeakerCard>

                    {(sp.talkTitle || (sp.abstract && sp.abstract.length)) && (
                      <TalkInfo>
                        {sp.talkTitle ? (
                          <p className="mb-2">
                            <strong className="font-medium">Talk Title:</strong>{" "}
                            {sp.talkTitle}
                          </p>
                        ) : null}

                        {sp.abstract && sp.abstract.length
                          ? sp.abstract.map((para: string, pi: number) => (
                              <p
                                key={pi}
                                className={
                                  pi < sp.abstract.length - 1
                                    ? "mb-2"
                                    : undefined
                                }
                              >
                                {para}
                              </p>
                            ))
                          : null}
                      </TalkInfo>
                    )}
                  </div>
                )
              })}
            </ContentSection>
          </MainContent>
        </Content>
      </Section>

      <FloatingTocButton
        type="button"
        visible={isBackToTocVisible}
        onClick={() => scrollToSection("table-of-contents")}
        aria-label="Back to table of contents"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 14L12 8L18 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </FloatingTocButton>
    </Container>
  )
}

export default AaaiSymposium
