import styled from "styled-components"
import tw from "twin.macro"

const NotFoundContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    h-screen
    text-center
    bg-white
    text-black
  `}
`

const Title = styled.h1`
  ${tw`
    text-6xl
    font-bold
  `}
`

const Message = styled.p`
  ${tw`
    text-xl
    mt-4
  `}
`

const StyledLink = styled.a`
  ${tw`
    text-xl
    mt-8
    text-blue-500
    hover:underline
  `}
`

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Message>Oops! The page you're looking for does not exist.</Message>
      <StyledLink href="/">Go back to Home</StyledLink>
    </NotFoundContainer>
  )
}

export default NotFound
