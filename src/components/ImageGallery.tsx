import { motion, AnimatePresence } from "framer-motion"
import ImageCard from "./ImageCard"
import SkeletonCard from "./SkeletonCard"
import type { ImageGalleryProps } from "../utils/types"
import { GalleryContainer, Wrapper, EmptyMessage } from "../styles/ImageGalleryStyles"

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets = [], loading }) => {
  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <GalleryContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div key={index} layout>
                <SkeletonCard />
              </motion.div>
            ))
          ) : pets.length > 0 ? (
            pets.map((pet) => (
              <motion.div key={pet.id} layout>
                <ImageCard pet={pet} />
              </motion.div>
            ))
          ) : (
            <EmptyMessage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              No pets found. Try adjusting your filters.
            </EmptyMessage>
          )}
        </GalleryContainer>
      </AnimatePresence>
    </Wrapper>
  )
}

export default ImageGallery
