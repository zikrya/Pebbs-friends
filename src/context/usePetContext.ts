import { useContext } from 'react'
import { PetContext } from '../utils/types'

export const usePetContext = () => {
  const context = useContext(PetContext)
  if (!context) throw new Error('usePetContext must be used within a PetProvider')
  return context
}
