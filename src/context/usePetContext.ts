import { useContext } from 'react'
import { PetContext } from './PetContext'

export const usePetContext = () => {
  const context = useContext(PetContext)
  if (!context) throw new Error('usePetContext must be used within a PetProvider')
  return context
}
