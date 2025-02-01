import React, { createContext, useState, useContext } from 'react'

type PetContextType = {
  selectedPets: Set<string>
  toggleSelection: (id: string) => void
  selectAll: (ids: string[]) => void
  clearSelection: () => void
}

const PetContext = createContext<PetContextType | undefined>(undefined)

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPets, setSelectedPets] = useState<Set<string>>(new Set())

  const toggleSelection = (id: string) => {
    setSelectedPets((prevSelectedPets) => {
      const newSelection = new Set(prevSelectedPets)
      if (newSelection.has(id)) {
        newSelection.delete(id)
      } else {
        newSelection.add(id)
      }
      return newSelection
    })
  }

  const selectAll = (ids: string[]) => {
    setSelectedPets(new Set(ids))
  }

  const clearSelection = () => {
    setSelectedPets(new Set())
  }

  return (
    <PetContext.Provider value={{ selectedPets, toggleSelection, selectAll, clearSelection }}>
      {children}
    </PetContext.Provider>
  )
}

export const usePetContext = () => {
  const context = useContext(PetContext)
  if (!context) {
    throw new Error('usePetContext must be used within a PetProvider')
  }
  return context
}
