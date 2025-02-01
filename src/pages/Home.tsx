import { useFetchPets } from '../hooks/useFetchPets'
import { usePetFilters } from '../hooks/usePetFilter'
import { usePetContext } from '../context/usePetContext'
import ImageGallery from '../components/ImageGallery'
import SearchBar from '../components/SearchBar'
import SortButtons from '../components/SortButton'
import SelectionControls from '../components/SelectionControls'
import DownloadButton from '../components/DownloadButton'
import styled from 'styled-components'

function Home() {
  const { pets, loading, error } = useFetchPets()
  const { selectedPets } = usePetContext()
  const { searchTerm, setSearchTerm, sortOrder, setSortOrder, filteredAndSortedPets } = usePetFilters(pets)

  if (loading) return <LoadingContainer>Loading...</LoadingContainer>
  if (error) return <ErrorContainer>Error: {error}</ErrorContainer>

  return (
    <Container>
      <h1>Pebbs</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <SelectionControls pets={filteredAndSortedPets} />
      <ImageGallery pets={filteredAndSortedPets} />

      {selectedPets.size > 0 && <DownloadButton />}
    </Container>
  )
}

export default Home

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
`

const LoadingContainer = styled.h1`
  text-align: center;
  margin-top: 50px;
`

const ErrorContainer = styled.h1`
  color: red;
  text-align: center;
  margin-top: 50px;
`
