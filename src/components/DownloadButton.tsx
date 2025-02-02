import type * as React from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
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
    <DownloadContainer>
      <DownloadBtn as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleDownload}>
        <ButtonIcon>
          <Download size={20} />
        </ButtonIcon>
        <ButtonText>Download {selectedImages.length > 1 ? `(${selectedImages.length})` : ""}</ButtonText>
      </DownloadBtn>
    </DownloadContainer>
  )
}

export default DownloadButton

