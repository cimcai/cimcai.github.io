import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

const ContactContainer = styled.div`
  ${tw`
      text-black
      bg-white
      flex
      justify-center
      max-md:px-6
      pt-16
      pb-40
    `}
  color: ${theme`colors.cimc_blue`};
  height: calc(100vh - 226px);
`
const Contact = () => {
  return (
    <ContactContainer>
      <div className="md:w-[729px] max-md:w-full">
        <p className="text-cimc-heading py-4">
          CONTACT
        </p>
        <p className="text-cimc-standard leading-tight">
          Please direct inquiries to
          <br/>
          <br/>
          Joscha Bach
          <br/>
          <a className="underline underline-offset-2" href="mailto:joscha@cimc.ai">joscha@cimc.ai</a>
          <br/>
          <br/>
          Erik Newton
          <br/>
          <a className="underline underline-offset-2" href="mailto:erik@cimc.ai">erik@cimc.ai</a>
        </p>
      </div>
    </ContactContainer>
  )
}

export default Contact
