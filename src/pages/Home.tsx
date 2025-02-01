import { useState, useMemo } from 'react'
import { useFetchPets } from '../hooks/useFetchPets'
import ImageGallery from '../components/ImageGallery'
import SearchBar from '../components/SearchBar'
import SortButtons from '../components/SortButton'
import SelectionControls from '../components/SelectionControls'
import DownloadButton from '../components/DownloadButton'
import { usePetContext } from '../context/PetContext'
import styled from 'styled-components'

function Home() {
  const { pets, loading, error } = useFetchPets()
  const { selectedPets } = usePetContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredPets = useMemo(() => {
    return pets.filter((pet) =>
      pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [pets, searchTerm])

  const sortedPets = useMemo(() => {
    return [...filteredPets].sort((a, b) => {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    })
  }, [filteredPets, sortOrder])

  const handleDownload = () => {
    selectedPets.forEach((id) => {
      const pet = pets.find((p) => p.id === id)
      if (pet) {
        const link = document.createElement('a')
        link.href = pet.url
        link.download = `${pet.title}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    })
  }

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  return (
    <Container>
      <h1>Pet Gallery</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <SelectionControls />

      <ImageGallery pets={sortedPets} />

      <DownloadButton handleDownload={handleDownload} disabled={selectedPets.length === 0} />
    </Container>
  )
}

export default Home

const Container = styled.div`
  text-align: center;
  padding: 20px;
`
