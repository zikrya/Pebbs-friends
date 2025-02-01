import { memo } from 'react'
import { usePetContext } from '../context/usePetContext'
import LazyImage from './LazyImage'
import { ImageCardProps } from '../utils/types'
import { Card, Info } from '../styles/ImageCardStyles'


const ImageCard: React.FC<ImageCardProps> = memo(({ pet }) => {
  const { selectedPets, toggleSelection } = usePetContext()
  const isSelected = selectedPets.has(pet.id)

  return (
    <Card onClick={() => toggleSelection(pet.id)} $selected={isSelected}>
      <LazyImage src={pet.url} alt={pet.title} />
      <Info>
        <h3>{pet.title}</h3>
        <p>{pet.description}</p>
      </Info>
    </Card>
  )
})

export default ImageCard
