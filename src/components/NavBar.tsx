import styled from "styled-components"
import tw from "twin.macro"
import { NavLink } from "react-router-dom"
import { CIMCRoutes } from "../App"

const NavbarContainer = styled.div`
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
`
const NavbarStyle = styled.div`
  max-width: 50em;
  ${tw`
    w-[729px]
    z-10
    text-white
    flex
    flex-row
    md:text-xl
    max-md:text-base
    md:gap-4
    max-md:gap-2
  `}
`

interface NavbarProps {
  routes: CIMCRoutes[];
  setClick?: (showMenu: boolean) => undefined;
}

export default function Navbar({routes}: NavbarProps) {
  return (
    <NavbarContainer css={{transition: 'background-color 0.5s ease'}}>
      <NavbarStyle>
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
          >
            {route.name}
          </NavLink>
        ))}
      </NavbarStyle>
    </NavbarContainer>
  )
}

