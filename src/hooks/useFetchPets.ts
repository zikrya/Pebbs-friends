import { useState, useEffect } from 'react'

export const useFetchPets = () => {
  const [pets, setPets] = useState<{ id: string; title: string; description: string; url: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://eulerity-hackathon.appspot.com/pets')
        if (!response.ok) throw new Error('Failed to fetch pets')
        const data = await response.json()

        const petsWithId = data.map((pet: any, index: number) => ({
          ...pet,
          id: pet.id || `${pet.title}-${index}`
        }))

        setPets(petsWithId)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPets()
  }, [])

  return { pets, loading, error }
}
