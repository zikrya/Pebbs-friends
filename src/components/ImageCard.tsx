import { memo } from "react"
import { usePetContext } from "../context/usePetContext"
import type { ImageCardProps } from "../utils/types"
import { Card, ImageWrapper, StyledImage, Info, Title, Description } from "../styles/ImageCardStyles"

const ImageCard: React.FC<ImageCardProps> = memo(({ pet }) => {
  const { selectedPets, toggleSelection } = usePetContext()
  const isSelected = selectedPets.has(pet.id)

  return (
    <Card
      $selected={isSelected}
      onClick={() => toggleSelection(pet.id)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <ImageWrapper>
        <StyledImage src={pet.url || "/placeholder.svg"} alt={pet.title} />
      </ImageWrapper>
      <Info>
        <Title>{pet.title}</Title>
        <Description>{pet.description}</Description>
      </Info>
    </Card>
  )
})

export default ImageCard
