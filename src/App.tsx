import { type RefObject, createRef } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import Library from "./pages/Library"
import Mission from "./pages/Mission"
import ResearchProposals from "./pages/Proposals"
import Team from "./pages/Team"

export interface CIMCRoutes {
  path: string
  name: string
  element: JSX.Element
  nodeRef: RefObject<unknown>
}

export const routes: CIMCRoutes[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    nodeRef: createRef(),
  },
  {
    path: "/mission",
    name: "Mission",
    element: <Mission />,
    nodeRef: createRef(),
  },
  {
    path: "/proposals",
    name: "Proposals",
    element: <ResearchProposals />,
    nodeRef: createRef(),
  },
  {
    path: "/team",
    name: "Team",
    element: <Team />,
    nodeRef: createRef(),
  },
  {
    path: "/library",
    name: "Library",
    element: <Library />,
    nodeRef: createRef(),
  },
]

function App() {
  return (
    <div>
      <Navbar routes={routes} />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
