import { createContext } from "react"

export type Pet = {
    id: string
    title: string
    description: string
    url: string
  }

export  type ImageCardProps = {
    pet: Pet
    view?: "grid" | "list"
  }

export type ImageGalleryProps = {
    pets: Pet[]
    loading?: boolean
  }

export type LazyImageProps = {
    src: string
    alt: string
  }

export type SearchBarProps = {
    searchTerm: string
    setSearchTerm: (value: string) => void
  }

export  type SelectionControlsProps = {
    pets: Pet[]
  }

export type SortButtonsProps = {
    sortOrder: 'asc' | 'desc'
    setSortOrder: (order: 'asc' | 'desc') => void
  }

export type PetContextType = {
    selectedPets: Set<string>
    toggleSelection: (id: string) => void
    selectAll: (ids: string[]) => void
    clearSelection: () => void
  }

export const PetContext = createContext<PetContextType | undefined>(undefined)