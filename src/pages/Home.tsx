import { useState } from 'react'
import { useFetchPets } from '../hooks/useFetchPets'
import ImageCard from '../components/ImageCard'
import styled from 'styled-components'

function Home() {
  const { pets, loading, error } = useFetchPets()
  const [selectedPets, setSelectedPets] = useState<string[]>([])

  console.log('Pets from Hook:', pets)
  console.log('Loading state:', loading)
  console.log('Error state:', error)

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
      <Gallery>
        {pets.map((pet) => (
          <ImageCard
            key={pet.id}
            pet={pet}
            isSelected={selectedPets.includes(pet.id)}
            toggleSelection={toggleSelection}
          />
        ))}
      </Gallery>
    </Container>
  )
}

export default Home

const Container = styled.div`
  text-align: center;
  padding: 20px;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
`
