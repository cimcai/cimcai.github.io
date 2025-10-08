import { create } from "zustand"
import { snakeToCamel } from "../lib/snakeToCamel"
import { supabase } from "../lib/supabaseClient"

export interface Reference {
  id: number
  title: string
  url: string
  authors: string
  publication: string
  year: string
  projectId: number
}

interface ReferencesState {
  references: Reference[]
  loading: boolean
  error: string | null
  fetchReferences: () => Promise<void>
}

export const useReferencesStore = create<ReferencesState>((set) => ({
  references: [],
  loading: false,
  error: null,
  fetchReferences: async () => {
    set({ loading: true, error: null })
    const { data, error } = await supabase.from("references").select("*")
    if (error) {
      set({ error: error.message, loading: false })
    } else {
      const transformedData = (data || []).map((reference) => {
        const camelReference = snakeToCamel(reference) as Omit<
          Reference,
          "id" | "title" | "url" | "authors" | "publication" | "year"
        > & {
          id: string | number
          title: string
          url: string
          authors: string
          publication: string
          year: string
        }
        return {
          ...camelReference,
          id: Number(camelReference.id),
          title: String(camelReference.title),
          url: String(camelReference.url),
          authors: String(camelReference.authors),
          publication: String(camelReference.publication),
          year: String(camelReference.year),
        } as Reference
      })
      set({ references: transformedData, loading: false, error: null })
    }
  },
}))
