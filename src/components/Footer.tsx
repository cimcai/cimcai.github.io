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
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X (Twitter)</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9455 23.9648L10.396 16.0549L3.44886 23.9648H0.509766L9.09209 14.1959L0.509766 1.96484H8.05571L13.286 9.41986L19.8393 1.96484H22.7784L14.5943 11.2813L23.4914 23.9648H15.9455ZM19.2185 21.7349H17.2398L4.71811 4.19484H6.6971L11.7121 11.218L12.5793 12.4367L19.2185 21.7349Z"
                  fill="white"
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
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path
                  d="M23.7609 8.16489C23.7609 8.16489 23.5266 6.51021 22.8047 5.78364C21.8906 4.82739 20.8688 4.8227 20.4 4.76645C17.0438 4.5227 12.0047 4.52271 12.0047 4.52271H11.9953C11.9953 4.52271 6.95625 4.5227 3.6 4.76645C3.13125 4.8227 2.10938 4.82739 1.19531 5.78364C0.473438 6.51021 0.24375 8.16489 0.24375 8.16489C0.24375 8.16489 0 10.1102 0 12.0508V13.8696C0 15.8102 0.239062 17.7555 0.239062 17.7555C0.239062 17.7555 0.473437 19.4102 1.19062 20.1368C2.10469 21.093 3.30469 21.0602 3.83906 21.1633C5.76094 21.3461 12 21.4024 12 21.4024C12 21.4024 17.0438 21.393 20.4 21.154C20.8688 21.0977 21.8906 21.093 22.8047 20.1368C23.5266 19.4102 23.7609 17.7555 23.7609 17.7555C23.7609 17.7555 24 15.8149 24 13.8696V12.0508C24 10.1102 23.7609 8.16489 23.7609 8.16489ZM9.52031 16.0774V9.33208L16.0031 12.7165L9.52031 16.0774Z"
                  fill="white"
                />
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
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <g clip-path="url(#clip0_6_34977)">
                  <path
                    d="M22.2234 0.964844H1.77187C0.792187 0.964844 0 1.73828 0 2.69453V23.2305C0 24.1867 0.792187 24.9648 1.77187 24.9648H22.2234C23.2031 24.9648 24 24.1867 24 23.2352V2.69453C24 1.73828 23.2031 0.964844 22.2234 0.964844ZM7.12031 21.4164H3.55781V9.96016H7.12031V21.4164ZM5.33906 8.39922C4.19531 8.39922 3.27188 7.47578 3.27188 6.33672C3.27188 5.19766 4.19531 4.27422 5.33906 4.27422C6.47813 4.27422 7.40156 5.19766 7.40156 6.33672C7.40156 7.47109 6.47813 8.39922 5.33906 8.39922ZM20.4516 21.4164H16.8937V15.8477C16.8937 14.5211 16.8703 12.8102 15.0422 12.8102C13.1906 12.8102 12.9094 14.2586 12.9094 15.7539V21.4164H9.35625V9.96016H12.7687V11.5258H12.8156C13.2891 10.6258 14.4516 9.67422 16.1813 9.67422C19.7859 9.67422 20.4516 12.0461 20.4516 15.1305V21.4164Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_34977">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.964844)"
                    />
                  </clipPath>
                </defs>
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
