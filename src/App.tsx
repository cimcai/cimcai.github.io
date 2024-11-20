import { Outlet, ScrollRestoration } from "react-router-dom"
import { createRef, RefObject } from "react"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Mission from "./pages/Mission"
import Projects from "./pages/Projects"
import Team from "./pages/Team"
import Library from "./pages/Library"
import Contact from "./pages/Contact"

export interface CIMCRoutes {
  path: string;
  name: string;
  element: JSX.Element;
  nodeRef: RefObject<unknown>;
}

export const routes:CIMCRoutes[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    nodeRef: createRef()
  },
  {
    path: "/mission",
    name: "Mission",
    element: <Mission />,
    nodeRef: createRef() },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
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
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
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
