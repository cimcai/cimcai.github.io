import type React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Circle = styled.div`
  ${tw`flex items-center justify-center bg-black p-2`}
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const Bar = styled.div`
  ${tw`bg-white`}
  height: 1px;
  width: 16px;
`

const BarContainer = styled.div`
  ${tw`flex flex-col`}
  gap: 6px;
`

interface MenuButtonProps {
  isOpen: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen }) => (
  <Circle>
    <BarContainer>
      <Bar />
      {!isOpen && <Bar />}
    </BarContainer>
  </Circle>
)

export default MenuButton
