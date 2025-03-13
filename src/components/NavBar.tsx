import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import type { CIMCRoutes } from "../App"

const NavbarContainer = styled.div<{ isOpen: boolean }>`
  ${tw`
    h-16
    w-screen
    flex
    items-center
    justify-center
    fixed
    max-md:pl-6
    bg-black
    bg-opacity-80
  `}
  ${({ isOpen }) => isOpen && tw`max-md:h-screen`}
`
const NavbarStyle = styled.div<{ isOpen: boolean }>`
  max-width: 50em;
  ${tw`
    w-[729px]
    z-10
    text-white
    flex
    md:flex-row
    text-xl
    md:gap-4
    max-md:hidden
  `}
  ${({ isOpen }) =>
    isOpen &&
    tw`max-md:block
    max-md:flex
    max-md:flex-col
    max-md:items-center
    max-md:justify-center
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
        tw="md:hidden absolute top-4 right-4 text-white"
        type="button"
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <NavbarStyle isOpen={isOpen}>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className="select-none cursor-pointer underline-offset-4"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                textDecorationLine: isActive ? "underline" : "",
                color: isPending ? "red" : "white",
                viewTransitionName: isTransitioning ? "fade" : "",
              }
            }}
            onClick={toggleMenu}
          >
            {route.name}
          </NavLink>
        ))}
      </NavbarStyle>
    </NavbarContainer>
  )
}
