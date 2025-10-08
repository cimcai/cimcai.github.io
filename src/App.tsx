import { type RefObject, createRef, useEffect } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import Events from "./pages/Events"
import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import Library from "./pages/Library"
import Mission from "./pages/Mission"
import ResearchProposals from "./pages/Proposals"
import Research from "./pages/Research"
import Team from "./pages/Team"
import { useProjectsStore } from "./store/projectsStore"
import { useReferencesStore } from "./store/referencesStore"

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
    path: "/research",
    name: "Research",
    element: <Research />,
    nodeRef: createRef(),
  },
  {
    path: "/research/proposals",
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
  {
    path: "/events",
    name: "Events",
    element: <Events />,
    nodeRef: createRef(),
  },
  {
    path: "/jobs",
    name: "Join us",
    element: <Jobs />,
    nodeRef: createRef(),
  },
]

function App() {
  // Only pass routes with root-level paths (no slashes after the first character)
  const rootRoutes = routes.filter((r) => r.path.match(/^\/?[^/]*$/))
  const fetchProjects = useProjectsStore((s) => s.fetchProjects)
  const fetchReferences = useReferencesStore((s) => s.fetchReferences)
  useEffect(() => {
    fetchProjects()
    fetchReferences()
  }, [fetchProjects, fetchReferences])

  return (
    <div>
      <Navbar routes={rootRoutes} />
      <Outlet />
      <Footer routes={rootRoutes} />
      <ScrollRestoration />
    </div>
  )
}

export default App
