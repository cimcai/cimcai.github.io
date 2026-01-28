import { create } from "zustand"
import { snakeToCamel } from "../lib/snakeToCamel"
import { supabase } from "../lib/supabaseClient"

export interface Project {
  id: number
  name: string
  need?: string
  mission?: string
  missionLong?: string
  institution?: string
  approach?: string
  teamDescription?: string[]
  pictureUrl?: string
  teamMembers?: string[]
  submitTime: Date
}

interface ProjectsState {
  projects: Project[]
  loading: boolean
  error: string | null
  fetchProjects: () => Promise<void>
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  loading: false,
  error: null,
  fetchProjects: async () => {
    set({ loading: true, error: null })
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .or("hide.is.null,hide.eq.false")
    if (error) {
      set({ error: error.message, loading: false })
    } else {
      const transformedData = (data || []).map((project) => {
        const camelProject = snakeToCamel(project) as Omit<
          Project,
          "submitTime"
        > & { submitTime: string | Date }
        return {
          ...camelProject,
          submitTime: new Date(camelProject.submitTime),
        } as Project
      })
      set({ projects: transformedData, loading: false, error: null })
    }
  },
}))
