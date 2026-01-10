import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/**
 * Hook to redirect old hash-based URLs to new browser routes
 * Preserves query parameters during redirect
 */
export const useHashRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Remove the # and any query params
      const hashPath = hash.split("?")[0].replace("#", "")
      const queryString = hash.split("?")[1] || ""

      // Map old hash routes to new browser routes
      const redirectMap: Record<string, string> = {
        "/": "/",
        "/mission": "/mission",
        "/research": "/research",
        "/team": "/team",
        "/library": "/library",
        "/events": "/events",
        "/events/aaai-symposium": "/events/aaai-symposium",
        "/jobs": "/jobs",
        "/jobs/engineer": "/jobs/engineer",
        "/jobs/executive-assistant": "/jobs/executive-assistant",
      }

      const newPath = redirectMap[hashPath]
      if (newPath) {
        // Clear the hash and navigate to the new route
        window.history.replaceState(null, "", window.location.pathname)
        navigate(newPath + (queryString ? `?${queryString}` : ""), {
          replace: true,
        })
      }
    }
  }, [navigate])
}
