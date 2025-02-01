import { useState, useEffect, useRef } from 'react'

const CACHE_KEY = 'cachedPets'
const CACHE_EXPIRY = 60 * 60 * 1000

export const useFetchPets = () => {
  const cachedData = localStorage.getItem(CACHE_KEY)
  const parsedData = cachedData ? JSON.parse(cachedData) : null
  const initialPets = parsedData && Date.now() - parsedData.timestamp < CACHE_EXPIRY ? parsedData.pets : []

  const [pets, setPets] = useState(initialPets)
  const [loading, setLoading] = useState(initialPets.length === 0) //
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  const preloadImage = (url: string) => {
    const img = new Image()
    img.src = url
  }

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    if (initialPets.length > 0) {
      setLoading(false)
      return
    }

    const fetchPets = async () => {
      try {
        const response = await fetch('https://eulerity-hackathon.appspot.com/pets', {
          headers: {
            'Cache-Control': 'max-age=86400, public'
          }
        })

        if (!response.ok) throw new Error('Failed to fetch pets')
        const data = await response.json()

        const petsWithId = data.map((pet: any, index: number) => ({
          ...pet,
          id: pet.id || `${pet.title}-${index}`
        }))

        petsWithId.forEach((pet) => preloadImage(pet.url))

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
