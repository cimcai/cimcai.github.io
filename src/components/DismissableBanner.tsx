import type React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"

const BannerContainer = styled.div`
  ${tw`
      flex-col
      pt-16
    `}
`

interface DismissibleBannerProps {
  description: string
  callToAction: string
  route: string
}

const DismissibleBanner: React.FC<DismissibleBannerProps> = ({
  description,
  callToAction,
  route,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(false)
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    window.location.href = route
  }

  // If the banner is not visible, return null (don't render anything)
  if (!isVisible) return null

  return (
    <BannerContainer>
      <div className="bg-gray-800 text-white px-6 py-6 rounded-lg flex items-center justify-between mx-auto max-w-2xl">
        <div className="flex items-center space-x-2">
          <p>
            {description}
            <NavLink
              to={route}
              className="select-none cursor-pointer underline-offset-4"
              style={{ textDecorationLine: "underline", color: "white" }}
            >
              {callToAction}
            </NavLink>
          </p>
        </div>

        <button
          onClick={handleDismiss}
          className="text-white hover:text-gray-300 focus:outline-none"
          aria-label="Dismiss banner"
          type="button"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </BannerContainer>
  )
}

export default DismissibleBanner
