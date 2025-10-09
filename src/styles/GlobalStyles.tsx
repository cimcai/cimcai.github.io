import { createGlobalStyle } from "styled-components"
import tw, { GlobalStyles as BaseStyles, theme } from "twin.macro"

const CustomStyles = createGlobalStyle({
  html: {
    minHeight: "100%",
  },
  body: {
    minHeight: "100vh",
    backgroundColor: theme`colors.black`,
    ...tw`
      antialiased
    `,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
