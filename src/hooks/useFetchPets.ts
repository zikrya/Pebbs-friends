import { useState, useEffect } from 'react'

type Pet = {
  id: string
  imageUrl: string
  title: string
  description: string
  createdAt: string
}

export function useFetchPets() {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://eulerity-hackathon.appspot.com/pets')
        if (!response.ok) throw new Error('Failed to fetch pets')

        const data: Pet[] = await response.json()
        console.log('Fetched Pets:', data)
        setPets(data)
      } catch (err) {
        console.error('Error fetching pets:', err)
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchPets()
  }, [])

  return { pets, loading, error }
}
