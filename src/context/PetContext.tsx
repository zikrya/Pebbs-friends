import React, { createContext, useState, useContext } from 'react'

type PetContextType = {
  selectedPets: string[]
  toggleSelection: (id: string) => void
  selectAll: (ids: string[]) => void
  clearSelection: () => void
}

const PetContext = createContext<PetContextType | undefined>(undefined)

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPets, setSelectedPets] = useState<string[]>([])

  const toggleSelection = (id: string) => {
    setSelectedPets((prev) =>
      prev.includes(id) ? prev.filter((petId) => petId !== id) : [...prev, id]
    )
  }

  const selectAll = (ids: string[]) => {
    setSelectedPets(ids)
  }

  const clearSelection = () => {
    setSelectedPets([])
  }

  return (
    <PetContext.Provider value={{ selectedPets, toggleSelection, selectAll, clearSelection }}>
      {children}
    </PetContext.Provider>
  )
}

export const usePetContext = () => {
  const context = useContext(PetContext)
  if (!context) throw new Error('usePetContext must be used within a PetProvider')
  return context
}
