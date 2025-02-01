import React from 'react'
import styled from 'styled-components'
import { usePetContext } from '../context/PetContext'
import { useFetchPets } from '../hooks/useFetchPets'
import { downloadImage, downloadImagesAsZip } from '../utils/downloadUtils'

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
      <DownloadBtn onClick={handleDownload}>
        Download
      </DownloadBtn>
    </DownloadContainer>
  )
}

export default DownloadButton

const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const DownloadBtn = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #0056b3;
  }
`
