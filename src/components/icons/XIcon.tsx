import type React from "react"

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X (Twitter)</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9455 23.9648L10.396 16.0549L3.44886 23.9648H0.509766L9.09209 14.1959L0.509766 1.96484H8.05571L13.286 9.41986L19.8393 1.96484H22.7784L14.5943 11.2813L23.4914 23.9648H15.9455ZM19.2185 21.7349H17.2398L4.71811 4.19484H6.6971L11.7121 11.218L12.5793 12.4367L19.2185 21.7349Z"
      fill="currentColor"
    />
  </svg>
)

export default XIcon
