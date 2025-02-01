import { useState, useMemo } from 'react'
import { Pet } from '../utils/types'

export const usePetFilters = (pets: Pet[]) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredAndSortedPets = useMemo(() => {
    return [...pets]
      .filter((pet) =>
        pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      )
  }, [pets, searchTerm, sortOrder])

  return { searchTerm, setSearchTerm, sortOrder, setSortOrder, filteredAndSortedPets }
}
