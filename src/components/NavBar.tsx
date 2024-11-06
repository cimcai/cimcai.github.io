import styled from "styled-components"
import tw from "twin.macro"
import { Link } from "react-scroll"
import { useEffect, useState } from "react";

const NavbarContainer = styled.div`
  ${tw`
    h-16
    w-screen
    flex
    items-center
    justify-center
    fixed
    max-md:pl-6
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
    text-xl
    gap-3
  `}
`

interface NavbarProps {
  setClick?: (showMenu: boolean) => undefined;
  shouldBeTransparent: boolean;
}

export default function Navbar({shouldBeTransparent}: NavbarProps) {

  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(()=>{
    if (shouldBeTransparent) {
      setBackgroundColor("transparent")
    } else {
      setBackgroundColor("black")
    }
  }, [shouldBeTransparent])
  return (
    <>
      <NavbarContainer css={{backgroundColor, transition: 'background-color 0.5s ease'}}>
        <NavbarStyle>
          <Link to="home" className="select-none cursor-pointer" smooth duration={400} activeStyle={{textDecoration: 'underline', textUnderlinePosition: "under"}} spy saveHashHistory>Home</Link>
          <Link to="mission" className="select-none cursor-pointer" smooth duration={400} offset={-64} activeStyle={{textDecoration: 'underline', textUnderlinePosition: "under"}} spy saveHashHistory>Mission</Link>
          <Link to="library" className="select-none cursor-pointer" smooth duration={400} offset={-64} activeStyle={{textDecoration: 'underline', textUnderlinePosition: "under"}} spy saveHashHistory>Library</Link>
        </NavbarStyle>
      </NavbarContainer>
    </>
  )
}
