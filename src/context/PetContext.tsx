import { createContext, useState, useContext, ReactNode } from 'react'
import { PetContextType } from '../utils/types'


const PetContext = createContext<PetContextType | undefined>(undefined)

export const PetProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPets, setSelectedPets] = useState<string[]>([])

  const toggleSelection = (id: string) => {
    setSelectedPets((prev) =>
      prev.includes(id) ? prev.filter((petId) => petId !== id) : [...prev, id]
    )
  }

  const selectAll = (ids: string[]) => setSelectedPets(ids)
  const clearSelection = () => setSelectedPets([])

  return (
    <PetContext.Provider value={{ selectedPets: new Set(selectedPets), toggleSelection, selectAll, clearSelection }}>
      {children}
    </PetContext.Provider>
  )
}

export const usePetContext = () => {
  const context = useContext(PetContext)
  if (!context) throw new Error('usePetContext must be used within a PetProvider')
  return context
}
