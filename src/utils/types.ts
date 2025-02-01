export type Pet = {
    id: string
    title: string
    description: string
    url: string
  }

export  type ImageCardProps = {
    pet: Pet
  }

export type ImageGalleryProps = {
    pets: Pet[]
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
