import { useState } from 'react'
import { useFetchPets } from '../hooks/useFetchPets'
import ImageGallery from '../components/ImageGallery'
import styled from 'styled-components'

function Home() {
  const { pets, loading, error } = useFetchPets()
  const [selectedPets, setSelectedPets] = useState<string[]>([])

  const toggleSelection = (id: string) => {
    setSelectedPets((prev) =>
      prev.includes(id) ? prev.filter((petId) => petId !== id) : [...prev, id]
    )
  }

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  return (
    <Container>
      <h1>Pebbs</h1>
      <ImageGallery pets={pets} selectedPets={selectedPets} toggleSelection={toggleSelection} />
    </Container>
  )
}

export default Home

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
`
