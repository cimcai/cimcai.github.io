import styled from "styled-components";
import tw from "twin.macro";
import { LineBreak } from "../components/LineBreak";

const LaunchEventSection = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
    text-white
    selection:text-white
    selection:bg-gray-500
    to-white
    bg-black
    md:text-cimc-forward
    text-cimc-substack-button

  `}
`;

const LaunchEventContainer = styled.div`
  ${tw`
    md:w-[860px]
    flex
    flex-col
    justify-center
    md:items-center
    max-md:px-6
    max-md:pb-8
    md:pt-28
    md:pb-24
  `}
`;

const LaunchEventHeader = styled.div`
  ${tw`
    md:w-[860px]
    md:mb-16
    flex
    max-md:flex-col
    max-md:gap-12
    max-md:py-16
    md:justify-between
    md:items-center
  `}
`;

const LaunchEventTitle = styled.div`
  ${tw`
    md:text-cimc-white-hero
    max-md:text-cimc-logo
  `}
`;

const LaunchEventButton = styled.a`
  ${tw`
    flex
    text-cimc-navbar
    h-[55px]
    px-[56px]
    py-[10px]
    justify-center
    items-center
    text-[#2C2C2C]
    rounded-tr-[10px]
    border-[2px] border-[#8A8989]
    bg-white
    shadow-[inset_0_0_0_1px_rgba(10,13,18,0.18),inset_0_-2px_0_0_rgba(10,13,18,0.05),0_1px_2px_0_rgba(10,13,18,0.05)]
    hover:(bg-[#2C2C2C] text-white)
  `}
`;

const LaunchEventContent = styled.a`
  ${tw`
    flex
    max-md:flex-col
    md:w-[860px]
    md:h-[179px]
    items-center
    justify-between
  `}
`;

export const LaunchEvent = () => {
  return (
    <LaunchEventSection>
      <LaunchEventContainer>
        <LaunchEventHeader>
          <LaunchEventTitle>Launch Event</LaunchEventTitle>
          <LaunchEventButton href="./#library?tag=Launch%20Event">
            Watch the whole event
          </LaunchEventButton>
        </LaunchEventHeader>
        <p className="md: mb-16">
          The California Institute for Machine Consciousness officially opened
          its doors in a landmark three-day event featuring visionary keynotes,
          groundbreaking discussions, and the world’s leading thinkers in
          machine consciousness research. Pioneers like Stephen Wolfram, Joscha
          Bach, Michael Levin, and others shared insights that set the stage
          for a new era of understanding machine awareness and ethical AI.
        </p>
        <p className="md: mb-16">
          Explore the event highlights and join us on this ambitious journey
          towards decoding consciousness itself.
        </p>
        <LaunchEventContent>
          <div className="text-cimc-helvetica-30 max-w-[360px]">
            CIMC Introduction: Lou de K (VP of Programs)
          </div>
          <iframe
            width="340"
            height="178"
            src={"https://www.youtube.com/embed/I8M07sluLsA"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </LaunchEventContent>
        <LineBreak width="100%" color="white" mt="11px" mb="11px" />
        <LaunchEventContent>
          <div className="text-cimc-helvetica-30 max-w-[360px]">
            Joscha Bach: CIMC’s Vision
          </div>
          <iframe
            width="340"
            height="178"
            src={"https://www.youtube.com/embed/xIiWwSkoWrM"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </LaunchEventContent>
        <LineBreak width="100%" color="white" mt="11px" mb="11px" />
        <LaunchEventContent className="mb-16">
          <div className="text-cimc-helvetica-30 max-w-[360px]">
            Eric Newton: How it Started.
          </div>
          <iframe
            width="340"
            height="178"
            src={"https://www.youtube.com/embed/I8zGTMVlzPk"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </LaunchEventContent>
      </LaunchEventContainer>
    </LaunchEventSection>
  );
};
