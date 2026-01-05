import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import "./styles/tailwind.css"
import App, { routes } from "./App"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...routes.map((route) => ({
        index: route.path === "/",
        path: route.path === "/" ? undefined : route.path,
        element: route.element,
      })),
      { path: "*", element: <NotFound /> },
    ],
  },
])
const container = document.getElementById("root")
if (!container) throw new Error("Root element not found")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
