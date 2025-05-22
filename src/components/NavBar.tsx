import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import type { CIMCRoutes } from "../App"
import { CIMCLogo } from "./CIMCLogo"

export const shouldForwardProp =
  <TCustomProps extends Record<string, unknown>>(
    customProps: ReadonlyArray<keyof TCustomProps>,
  ) =>
  (prop: string): boolean =>
    !customProps.includes(prop)

interface NavbarIsOpenProps {
  isOpen: boolean
}

const NavbarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<NavbarIsOpenProps>`
  ${tw`
      md:h-24
      h-12
      w-full
      flex
      justify-center
      fixed
      md:px-6
      bg-white/90
      bg-opacity-90
      z-10
  `}
  ${({ isOpen }) =>
    isOpen &&
    tw`
      max-md:h-screen
      max-md:justify-center
      items-center
      max-md:flex-col
  `}
`

const NavbarInnerContainer = styled.div`
  ${tw`
    w-full
    max-w-[1216px]
    md:justify-between
    flex
    items-center
  `}
`

const NavbarStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<NavbarIsOpenProps>`
  ${tw`
    flex
    items-center
    md:flex-row
    text-cimc-navbar
    md:gap-8
    max-md:hidden
    justify-start
  `}
  ${({ isOpen }) =>
    isOpen &&
    tw`max-md:flex
    max-md:flex-col
    max-md:items-center
    max-md:justify-center
    max-md:gap-8
  `}
`

const NavbarLogoContainer = styled.div`
  ${tw`
    pr-12
  `}
`

const ContactButton = styled.a.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<NavbarIsOpenProps>`
  ${tw`
    rounded-tr-[10px]
    rounded-bl-none
    rounded-tl-none
    rounded-br-none
    border-2
    border-solid
    border-white/10
    bg-black
    text-white
    text-cimc-contact-button
    shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)]
    h-[44px]
    px-[56px]
    py-[10px]
    md:flex
    justify-center
    items-center
    gap-[var(--spacing-sm,6px)]
    no-underline
  `};
  ${({ isOpen }) => !isOpen && "display: none;"}
`

interface NavbarProps {
  routes: CIMCRoutes[]
  setClick?: (showMenu: boolean) => undefined
}

export default function Navbar({ routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarContainer isOpen={isOpen}>
      <NavbarInnerContainer>
        <button
          onClick={toggleMenu}
          tw="md:hidden absolute top-4 right-4"
          type="button"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <NavbarStyle isOpen={isOpen}>
          <NavbarLogoContainer>
            <CIMCLogo width={108} />
          </NavbarLogoContainer>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className="select-none cursor-pointer underline-offset-4"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  textDecorationLine: isActive ? "underline" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "fade" : "",
                }
              }}
              onClick={toggleMenu}
            >
              {route.name}
            </NavLink>
          ))}
        </NavbarStyle>
        <ContactButton href="mailto:proposals@cimc.ai" isOpen={isOpen}>
          Contact
        </ContactButton>
      </NavbarInnerContainer>
    </NavbarContainer>
  )
}
