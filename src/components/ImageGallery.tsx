import React from 'react'
import styled from 'styled-components'
import ImageCard from './ImageCard'
import { usePetContext } from '../context/PetContext'

type Pet = {
  id: string
  title: string
  description: string
  url: string
}

type ImageGalleryProps = {
  pets: Pet[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets }) => {
  const { selectedPets } = usePetContext()

  if (!selectedPets) {
    console.error('PetContext is not available, make sure PetProvider is wrapping the app')
    return <h1>Error: PetContext is not available</h1>
  }

  return (
    <GalleryContainer>
      {pets.map((pet) => (
        <ImageCard key={pet.id} pet={pet} />
      ))}
    </GalleryContainer>
  )
}

export default ImageGallery

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
`
