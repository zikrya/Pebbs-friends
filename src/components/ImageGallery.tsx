import React from 'react'
import styled from 'styled-components'
import ImageCard from './ImageCard'

type Pet = {
  id: string
  title: string
  description: string
  url: string
}

type ImageGalleryProps = {
  pets: Pet[]
  selectedPets: string[]
  toggleSelection: (id: string) => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets, selectedPets, toggleSelection }) => {
  return (
    <GalleryContainer>
      {pets.map((pet) => (
        <ImageCard
          key={pet.id}
          pet={pet}
          isSelected={selectedPets.includes(pet.id)}
          toggleSelection={toggleSelection}
        />
      ))}
    </GalleryContainer>
  )
}

export default ImageGallery

// Styled Components
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
`
