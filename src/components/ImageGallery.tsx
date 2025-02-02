import React from "react"
import { motion } from "framer-motion"
import ImageCard from "./ImageCard"
import type { ImageGalleryProps } from "../utils/types"
import styled from "styled-components"
import { theme } from "../styles/theme"

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets = [] }) => {
  return (
    <GalleryContainer>
      {pets.length > 0 ? (
        pets.map((pet, index) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ImageCard pet={pet} />
          </motion.div>
        ))
      ) : (
        <EmptyMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          No pets found. Try adjusting your filters.
        </EmptyMessage>
      )}
    </GalleryContainer>
  )
}

export default ImageGallery

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 24px;
`

const EmptyMessage = styled(motion.p)`
  text-align: center;
  font-size: 18px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
  padding: 32px;
  background: ${theme.colors.surface};
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`