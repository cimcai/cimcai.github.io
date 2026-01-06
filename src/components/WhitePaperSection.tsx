import type { MouseEvent } from "react"
import styled from "styled-components"
import tw from "twin.macro"

type WhitePaperVariant = "light" | "dark"
type WhitePaperAlign = "center" | "start"

type WhitePaperSectionProps = {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  ctaTarget?: "_blank" | "_self" | "_parent" | "_top"
  onCtaClick?: (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void
  className?: string
  variant?: WhitePaperVariant
  align?: WhitePaperAlign
}

const Container = styled.section<{ $variant: WhitePaperVariant }>`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    gap-8
    px-6
    md:px-0
    py-[55px]
    text-center
  `}
  ${({ $variant }) =>
    $variant === "dark" ? tw`bg-black text-white` : tw`bg-white text-black`}
`

const Title = styled.h2`
  ${tw`
    font-questrial
    uppercase
    text-[32px]
    md:text-[48px]
    leading-[1.05]
    tracking-[10.56px]
    text-black
    font-normal
  `}
`
const CTAButton = styled.button<{ $variant: WhitePaperVariant }>`
  ${tw`
    flex
    w-[394px]
    h-[55px]
    px-[56px]
    py-[10px]
    justify-center
    items-center
    gap-[6px]
    shrink-0
    rounded-tr-[10px]
    border-[2px]
    text-[20px]
    tracking-[-0.02em]
    transition-colors
    duration-200
    shadow-[inset_0_0_0_1px_rgba(10,13,18,0.18),inset_0_-2px_0_0_rgba(10,13,18,0.05),0_1px_2px_0_rgba(10,13,18,0.05)]
  `}
  ${({ $variant }) =>
    $variant === "dark"
      ? tw`bg-transparent border-white text-white hover:(bg-white text-black)`
      : tw`bg-white border-[#8A8989] text-[#2C2C2C] hover:(bg-[#2C2C2C] text-white)`}
`

export const WhitePaperSection = ({
  title = "WHITEPAPER",
  ctaLabel = "Read the Whitepaper",
  ctaHref,
  ctaTarget = "_self",
  onCtaClick,
  className,
  variant = "light",
  align = "center",
}: WhitePaperSectionProps) => {
  const anchorProps = ctaHref
    ? {
        href: ctaHref,
        target: ctaTarget,
        rel: ctaTarget === "_blank" ? "noreferrer" : undefined,
      }
    : {}
  const buttonProps = ctaHref ? {} : { type: "button" as const }

  return (
    <Container $variant={variant} className={className}>
      <Title>{title}</Title>
      <CTAButton
        as={ctaHref ? "a" : "button"}
        $variant={variant}
        {...anchorProps}
        {...buttonProps}
        onClick={onCtaClick}
      >
        {ctaLabel}
      </CTAButton>
    </Container>
  )
}

export type { WhitePaperSectionProps }
