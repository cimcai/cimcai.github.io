import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";

export interface Project {
  id: number;
  name: string;
  need?: string;
  mission?: string;
  missionLong?: string;
  institution?: string;
  approach?: string;
  teamDescription?: string;
  pictureUrl?: string;
  references?: string;
  teamMembers?: string;
  submitTime: Date;
}

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  loading: false,
  error: null,
  fetchProjects: async () => {
    set({ loading: true, error: null });
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      set({ error: error.message, loading: false });
    } else {
      set({ projects: data || [], loading: false, error: null });
    }
  },
}));
