import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import { routes } from "../App"
import { CIMCLogo } from "./CIMCLogo"
import LinkedInIcon from "./icons/LinkedInIcon"
import XIcon from "./icons/XIcon"
import YouTubeIcon from "./icons/YouTubeIcon"

const FooterContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    bg-black
  `}
`

const FooterLayout = styled.div`
  ${tw`
    w-full
    max-w-[1216px]
  bg-black
  text-white
    pt-20
    px-6
    md:px-4
    justify-center
    flex flex-col
`}
`
const FooterContent = styled.div`
  ${tw`flex flex-col md:flex-row justify-between gap-10 pb-10`}
`
const FooterCol = styled.div`
  ${tw`flex flex-col gap-4 min-w-[180px]`}
`
const FooterHeading = styled.div`
  ${tw`mb-2 text-base`}
`
const SocialRow = styled.div`
  ${tw`flex items-center gap-4 mt-6 mb-2`}
`
const FooterBottomRow = styled.div`
  ${tw`w-full flex justify-center py-12`}
`
const FooterBottomContent = styled.div`
  ${tw`w-full flex md:flex-row flex-col
     md:justify-between
     gap-6
     items-center
     text-white text-cimc-helvetica-small
  `}
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLayout>
        <FooterContent>
          {/* Left: Logo & Socials */}
          <FooterCol>
            <CIMCLogo color="white" />
            <SocialRow>
              <a
                href="https://x.com/CIMCAI"
                aria-label="X"
                title="X (Twitter)"
                className="hover:opacity-80"
              >
                <XIcon />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                title="YouTube"
                className="hover:opacity-80"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="hover:opacity-80"
              >
                <LinkedInIcon />
              </a>
            </SocialRow>
          </FooterCol>

          <FooterContent>
            <FooterCol>
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

            <FooterCol>
              <FooterHeading>Contact</FooterHeading>
              <div>
                <div className="mb-1">Address:</div>
                <div className="text-white/60 text-sm">
                  CIMC
                  <br />
                  Street xyz,C
                  <br />
                  San FranciscoC
                  <br />
                </div>
              </div>
            </FooterCol>
          </FooterContent>
        </FooterContent>
        <FooterBottomRow>
          <FooterBottomContent>
            <div>© 2025 CIMC. All rights reserved.</div>
            <a href="/terms" tw="hover:underline text-white/60">
              Terms and Conditions
            </a>
          </FooterBottomContent>
        </FooterBottomRow>
      </FooterLayout>
    </FooterContainer>
  )
}

export default Footer
