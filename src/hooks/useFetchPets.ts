import { useState, useEffect, useRef } from 'react'

const CACHE_KEY = 'cachedPets'
const CACHE_EXPIRY = 60 * 60 * 1000

export const useFetchPets = () => {
  const [pets, setPets] = useState<{ id: string; title: string; description: string; url: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    const cachedData = localStorage.getItem(CACHE_KEY)
    const parsedData = cachedData ? JSON.parse(cachedData) : null

    if (parsedData && Date.now() - parsedData.timestamp < CACHE_EXPIRY) {
      console.log('Loaded pets from cache')
      setPets(parsedData.pets)
      setLoading(false)
      return
    }

    const fetchPets = async () => {
      try {
        const response = await fetch('https://eulerity-hackathon.appspot.com/pets')
        if (!response.ok) throw new Error('Failed to fetch pets')
        const data = await response.json()

        const petsWithId = data.map((pet: any, index: number) => ({
          ...pet,
          id: pet.id || `${pet.title}-${index}`
        }))

        localStorage.setItem(CACHE_KEY, JSON.stringify({ pets: petsWithId, timestamp: Date.now() }))

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