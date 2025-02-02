import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download } from 'lucide-react'
import { usePetContext } from "../context/usePetContext"
import { useFetchPets } from "../hooks/useFetchPets"
import { downloadImage, downloadImagesAsZip } from "../utils/downloadUtils"
import { DownloadContainer, DownloadBtn, ButtonIcon, ButtonText } from "../styles/DownloadButtonStyles"

const DownloadButton: React.FC = () => {
  const { selectedPets } = usePetContext()
  const { pets } = useFetchPets()

  const selectedImages = pets.filter((pet) => selectedPets.has(pet.id))

  const handleDownload = () => {
    if (selectedImages.length === 1) {
      const pet = selectedImages[0]
      downloadImage(pet.url, pet.title)
    } else {
      downloadImagesAsZip(selectedImages)
    }
  }

  return (
    <AnimatePresence>
      {selectedImages.length > 0 && (
        <DownloadContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <DownloadBtn
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ButtonIcon>
              <Download size={20} />
            </ButtonIcon>
            <ButtonText>
              Download {selectedImages.length > 1 ? `(${selectedImages.length})` : ""}
            </ButtonText>
          </DownloadBtn>
        </DownloadContainer>
      )}
    </AnimatePresence>
  )
}

export default DownloadButton