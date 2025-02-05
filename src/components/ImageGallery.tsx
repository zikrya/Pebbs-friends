import ImageCard from "./ImageCard"
import SkeletonCard from "./SkeletonCard"
import { Wrapper, GalleryContainer, EmptyMessage } from "../styles/ImageGalleryStyles"
import type { ImageGalleryProps } from "../utils/types"

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets, loading = false }) => {
  if (loading) {
    return (
      <Wrapper>
        <GalleryContainer>
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </GalleryContainer>
      </Wrapper>
    )
  }

  if (!pets?.length) {
    return (
      <Wrapper>
        <EmptyMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          No pets found
        </EmptyMessage>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <GalleryContainer>
        {pets.map((pet) => (
          <ImageCard key={pet.id} pet={pet} />
        ))}
      </GalleryContainer>
    </Wrapper>
  )
}

export default ImageGallery
