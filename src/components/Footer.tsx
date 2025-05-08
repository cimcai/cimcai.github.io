import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import { routes } from "../App"

const FooterContainer = styled.div`
  ${tw`w-full bg-black text-white py-10 px-6 md:px-4`}
`
const FooterContent = styled.div`
  ${tw`max-w-4xl flex flex-col md:flex-row justify-between gap-10 md:gap-0`}
`
const FooterCol = styled.div`
  ${tw`flex flex-col gap-4 min-w-[180px]`}
`
const FooterHeading = styled.div`
  ${tw`font-bold mb-2 text-base`}
`
const SocialRow = styled.div`
  ${tw`flex items-center gap-4 mt-6 mb-2`}
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left: Logo & Socials */}
        <FooterCol>
          <div className="mb-2">
            {/* Logo SVG */}
            <svg
              version="1.1"
              width="120"
              height="36"
              viewBox="0 0 173.73067 51.723999"
              className="text-white"
            >
              <title>CIMC Logo</title>
              <g transform="matrix(1.3333333,0,0,-1.3333333,-48.000401,4238.8667)">
                <g transform="translate(0,-2.7400955)">
                  <g transform="translate(120.1103,3143.7522)">
                    <path
                      d="M 0,0 V 27.772 L -11.481,0 h -1.202 -1.914 -1.201 L -27.279,27.772 V 0 h -5.6 v 37.551 h 1.557 4.043 1.344 L -13.64,7.81 -1.345,37.551 H 0 4.043 5.6 V 0 Z m -43.46,0 h 5.6 v 37.551 h -5.6 z m -9.127,25.515 c -2.372,4.28 -6.932,7.179 -12.172,7.179 -7.681,0 -13.907,-6.227 -13.907,-13.908 0,-7.681 6.226,-13.908 13.907,-13.908 5.24,0 9.8,2.899 12.172,7.179 l 4.831,-2.518 c -3.281,-6.02 -9.665,-10.105 -17.003,-10.105 -10.687,0 -19.351,8.664 -19.351,19.352 0,10.688 8.664,19.352 19.351,19.352 7.338,0 13.722,-4.085 17.003,-10.105 z m 98.775,2.429 c -3.28,6.02 -9.664,10.105 -17.002,10.105 -10.688,0 -19.352,-8.664 -19.352,-19.352 0,-10.688 8.664,-19.352 19.352,-19.352 7.338,0 13.722,4.085 17.002,10.105 l -4.831,2.517 C 38.986,7.688 34.425,4.789 29.186,4.789 c -7.681,0 -13.908,6.227 -13.908,13.908 0,7.681 6.227,13.907 13.908,13.907 5.239,0 9.8,-2.898 12.171,-7.178 z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <SocialRow>
            {/* X icon */}
            <a
              href="/"
              aria-label="X"
              title="X (Twitter)"
              className="hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X (Twitter)</title>
                <path
                  fill="white"
                  d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06Z"
                />
              </svg>
            </a>
            {/* YouTube icon */}
            <a
              href="/"
              aria-label="YouTube"
              title="YouTube"
              className="hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <rect width="24" height="24" rx="4" fill="white" />
                <path d="M10 15.5V8.5L16 12L10 15.5Z" fill="black" />
              </svg>
            </a>
            {/* LinkedIn icon */}
            <a
              href="/"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <rect width="24" height="24" rx="4" fill="white" />
                <path
                  d="M7.5 9.5h2v7h-2v-7zm1-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2h2v1h.03c.28-.53.97-1.09 2-1.09 2.14 0 2.53 1.41 2.53 3.25v3.84h-2v-3.41c0-.81-.01-1.85-1.13-1.85-1.13 0-1.3.88-1.3 1.79v3.47h-2v-7z"
                  fill="black"
                />
              </svg>
            </a>
          </SocialRow>
        </FooterCol>

        {/* Center: About */}
        <FooterCol>
          <FooterHeading>About</FooterHeading>
          <div className="flex flex-col gap-1 text-white/90">
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
          </div>
        </FooterCol>

        {/* Right: Contact */}
        <FooterCol>
          <FooterHeading>Contact</FooterHeading>
          <div className="mb-2 font-bold">Terms and Conditions</div>
          <div className="text-white/90 text-sm">
            <div>Address:</div>
            <div>CIMC</div>
            <div>Street xyz,</div>
            <div>San Francisco</div>
          </div>
        </FooterCol>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
