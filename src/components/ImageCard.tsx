import { memo, useState, useEffect } from "react"
import { usePetContext } from "../context/usePetContext"
import type { ImageCardProps } from "../utils/types"
import { Card, ImageWrapper, StyledImage, Info, Title, Description } from "../styles/ImageCardStyles"

const ImageCard: React.FC<ImageCardProps> = memo(({ pet }) => {
  const { selectedPets, toggleSelection } = usePetContext()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState("data:image/gif;base64,R0lGODlhAQABAAAAACw=")
  const isSelected = selectedPets.has(pet.id)

  useEffect(() => {
    const img = new Image()
    img.src = pet.url

    const handleLoad = () => {
      setImageSrc(pet.url)
      setImageLoaded(true)
    }

    img.addEventListener('load', handleLoad)

    return () => {
      img.removeEventListener('load', handleLoad)
    }
  }, [pet.url])

  return (
    <Card
      $selected={isSelected}
      onClick={() => toggleSelection(pet.id)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <ImageWrapper>
        <StyledImage
          src={imageSrc}
          alt={pet.title}
          loading="lazy"
          style={{
            opacity: imageLoaded ? 1 : 0.3,
            transform: `scale(${imageLoaded ? 1 : 0.95})`,
            backgroundColor: !imageLoaded ? "#f0f0f0" : "transparent"
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </ImageWrapper>
      <Info>
        <Title>{pet.title}</Title>
        <Description>{pet.description}</Description>
      </Info>
    </Card>
  )
})

ImageCard.displayName = 'ImageCard'

export default ImageCard
