# Copilot Instructions for CIMC Website

## Project Overview
- This is a Vite + React (TypeScript) static website for CIMC, with Tailwind CSS for styling.
- Main entry: `src/App.tsx`, with routing and page components in `src/pages/`.
- Shared UI components are in `src/components/`.
- Data is loaded from static JSON files in `src/data/`.
- Supabase integration is initialized in `src/supabaseClient.ts` and `src/lib/supabaseClient.ts` (if used).

## Key Patterns & Conventions
- Use functional React components and hooks (no class components).
- Styling is via Tailwind CSS (`tailwind.css` in `src/styles/`).
- Styled-components are paired with `twin.macro`; list utility classes on separate lines inside the template literal (even for short sets) to match the repo-wide multi-line style refactor.
- Assets (images, fonts) are in `public/` and referenced with relative paths.
- TypeScript types are in `src/types/`.
- Data-driven UI: e.g., `src/data/news.json` and `src/data/links.json` are mapped to UI lists.
- Use `store/` for simple state management (e.g., `projectsStore.ts`).

## Developer Workflows
- **Install dependencies:** `npm install`
- **Run local dev server:** `npm run preview` (see README)
- **Build for production:** `npm run build`
- **No formal test suite** (as of Oct 2025)
- **No backend/server code**; all logic is client-side/static

## Integration Points
- Supabase: see `src/supabaseClient.ts` for configuration and usage
- No other external APIs or backend services

## Project-Specific Notes
- All navigation and routing is handled client-side (no SSR)
- Use only assets in `public/` for images/videos
- Avoid direct DOM manipulation; use React patterns
- Keep all new data files in `src/data/` and update relevant components to consume them

## Examples
- To add a new event: update `src/data/news.json` and ensure `NewsList.tsx` renders it
- To add a new team member: update `src/data/profiles.json` and ensure `Team.tsx` renders it

## Key Files/Directories
- `src/components/` — shared UI components
- `src/pages/` — top-level pages
- `src/data/` — static data sources
- `src/styles/` — Tailwind and global styles
- `public/` — static assets

---
For more, see `README.md` or ask for clarification on project-specific patterns.
