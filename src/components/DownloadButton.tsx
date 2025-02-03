import{ useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"
import { usePetContext } from "../context/usePetContext"
import { useFetchPets } from "../hooks/useFetchPets"
import { downloadImage, downloadImagesAsZip } from "../utils/downloadUtils"
import {
  DownloadContainer,
  DownloadBtn,
  ButtonIcon,
  ButtonText,
  ProgressBar,
} from "../styles/DownloadButtonStyles"

const DownloadButton: React.FC = () => {
  const { selectedPets } = usePetContext()
  const { pets } = useFetchPets()
  const [isDownloading, setIsDownloading] = useState(false)
  const [progress, setProgress] = useState(0) // Track progress

  const selectedImages = pets.filter((pet) => selectedPets.has(pet.id))

  const handleDownload = async () => {
    setIsDownloading(true)
    setProgress(0)

    if (selectedImages.length === 1) {
      const pet = selectedImages[0]
      await downloadImage(pet.url, pet.title)
    } else {
      await downloadImagesAsZip(selectedImages, setProgress)
    }

    setIsDownloading(false)
    setProgress(0)
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
            disabled={isDownloading} // Prevent spam clicking
          >
            <ButtonIcon>
              <Download size={20} />
            </ButtonIcon>
            <ButtonText>
              {isDownloading ? `Downloading ${progress}%` : `Download (${selectedImages.length})`}
            </ButtonText>
          </DownloadBtn>
          {isDownloading && <ProgressBar style={{ width: `${progress}%` }} />} {/* Show progress bar */}
        </DownloadContainer>
      )}
    </AnimatePresence>
  )
}

export default DownloadButton
