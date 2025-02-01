import React from 'react'
import ImageCard from './ImageCard'
import { ImageGalleryProps  } from '../utils/types'
import { GalleryContainer } from '../styles/ImageGalleryStyles'


const ImageGallery: React.FC<ImageGalleryProps> = ({ pets = [] }) => {
  return (
    <GalleryContainer>
      {pets.map((pet) => (
        <ImageCard key={pet.id} pet={pet} />
      ))}
    </GalleryContainer>
  )
}

export default ImageGallery
