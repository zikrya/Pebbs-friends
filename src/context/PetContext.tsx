import React, { createContext, useState, useContext, useCallback, useMemo } from 'react'

type PetContextType = {
  selectedPets: Set<string>
  toggleSelection: (id: string) => void
  selectAll: (ids: string[]) => void
  clearSelection: () => void
}

const PetContext = createContext<PetContextType | undefined>(undefined)

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPets, setSelectedPets] = useState<Set<string>>(new Set())

  const toggleSelection = useCallback((id: string) => {
    setSelectedPets((prevSelectedPets) => {
      const newSelection = new Set(prevSelectedPets)
      newSelection.has(id) ? newSelection.delete(id) : newSelection.add(id)
      return newSelection
    })
  }, [])

  const selectAll = useCallback((ids: string[]) => setSelectedPets(new Set(ids)), [])
  const clearSelection = useCallback(() => setSelectedPets(new Set()), [])

  const contextValue = useMemo(() => ({ selectedPets, toggleSelection, selectAll, clearSelection }), [
    selectedPets, toggleSelection, selectAll, clearSelection
  ])

  return <PetContext.Provider value={contextValue}>{children}</PetContext.Provider>
}

export const usePetContext = () => {
  const context = useContext(PetContext)
  if (!context) throw new Error('usePetContext must be used within a PetProvider')
  return context
}
