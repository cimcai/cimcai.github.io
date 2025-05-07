import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import type { CIMCRoutes } from "../App"

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
    h-24
    w-screen
    flex
    fixed
    max-md:pl-6
    bg-white/90
    bg-opacity-90
  `}
  ${({ isOpen }) =>
    isOpen &&
    tw`
      max-md:h-screen
      max-md:justify-center
      items-center
  `}
`

const NavbarStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<NavbarIsOpenProps>`
  max-width: 50em;
  ${tw`
    z-10
    flex
    items-center
    md:flex-row
    text-cimc-navbar
    md:gap-14
    max-md:hidden
  `}
  ${({ isOpen }) =>
    isOpen &&
    tw`max-md:block
    max-md:flex
    max-md:flex-col
    max-md:items-center
    max-md:justify-center
    max-md:gap-8
  `}
`

const NavbarLogoContainer = styled.div`
  ${tw`
    w-[225px]
    [flex-shrink: 0]
    pl-2
    max-md:hidden
  `}
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
      <button
        onClick={toggleMenu}
        tw="md:hidden absolute top-4 right-4"
        type="button"
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <NavbarStyle isOpen={isOpen}>
        <NavbarLogoContainer>
          <img src="/cimclogo.png" alt="CIMC logo" />
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
        <a key="events" href="https://lu.ma/cimc">
          Events
        </a>
      </NavbarStyle>
    </NavbarContainer>
  )
}
