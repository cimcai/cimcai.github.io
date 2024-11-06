import styled from 'styled-components'
import tw from 'twin.macro'
import { Link as LinkRouter } from 'react-router-dom'

const NavbarContainer = styled.div`
  ${tw`
    h-20
    w-screen
    flex
    items-center
    justify-center
    fixed
    `}
`

const NavbarStyle = styled.div`
  max-width: 50em;
  ${tw`
  w-[729px]
  z-10
  text-gray-200
  flex
  flex-row
  justify-between
  text-2xl
    `}
`

interface NavbarProps {
  setClick?: (showMenu: boolean) => undefined;
}

export default function Navbar({setClick}: NavbarProps) {
  return (
    <>
      <NavbarContainer>
        <NavbarStyle>
          <LinkRouter to='/'>Home</LinkRouter>
          <LinkRouter onClick={setClick ? ()=>setClick(false) : undefined} to='/mission'>Mission</LinkRouter>
          <LinkRouter onClick={setClick ? ()=>setClick(false) : undefined} to='/projects'>Projects</LinkRouter>
          <LinkRouter onClick={setClick ? ()=>setClick(false) : undefined} to='/events'>Events</LinkRouter>
          <LinkRouter onClick={setClick ? ()=>setClick(false) : undefined} to='/library'>Library</LinkRouter>
          <LinkRouter onClick={setClick ? ()=>setClick(false) : undefined} to='/contact'>Contact</LinkRouter>
          <LinkRouter  onClick={setClick ? ()=>setClick(false) : undefined} to='/team'>Team</LinkRouter>
        </NavbarStyle>
      </NavbarContainer>
    </>
  )
}
