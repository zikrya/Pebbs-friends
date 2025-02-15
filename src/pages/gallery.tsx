import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { useFetchPets } from '../hooks/useFetchPets'
import { usePetFilters } from '../hooks/usePetFilter'
import ImageGallery from '../components/ImageGallery'
import SearchBar from '../components/SearchBar'
import SortButtons from '../components/SortButton'
import SelectionControls from '../components/SelectionControls'
import DownloadButton from '../components/DownloadButton'
import LoadingIndicator from '../components/Loading'
import { theme } from '../styles/theme'

function Gallery() {
  const { pets, loading, error } = useFetchPets()
  const { searchTerm, setSearchTerm, sortOrder, setSortOrder, filteredAndSortedPets } = usePetFilters(pets)

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingIndicator key="loading" />
      ) : (
        <Container
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pebbs
            </Title>

            <ControlsWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

              <ControlsBar>
                <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <SelectionControls pets={filteredAndSortedPets} />
              </ControlsBar>
            </ControlsWrapper>
          </Header>

          <Content>
            {error ? (
              <ErrorContainer>Error: {error}</ErrorContainer>
            ) : (
              <GalleryContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <ImageGallery pets={filteredAndSortedPets} loading={loading} />
              </GalleryContainer>
            )}

            <DownloadButton />
          </Content>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default Gallery

const Container = styled(motion.div)`
  background: linear-gradient(180deg, rgba(246, 245, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`

const Header = styled.header`
  padding: 40px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: transparent;
`

const Title = styled(motion.h1)`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.text};
  position: relative;
  margin: 0;
  letter-spacing: -0.02em;
`

const Content = styled.main`
  flex: 1;
  padding: 0 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`

const ControlsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  margin: -20px auto 0;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 12px;
  }
`

const ControlsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  background: rgba(246, 245, 255, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(124, 122, 235, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 12px;

    /* Make buttons container flex */
    & > div {
      display: flex;
      gap: 8px;
      width: 100%;

      /* Make all buttons equal width */
      button {
        flex: 1;
        padding: 10px;
        justify-content: center;
        font-size: 13px;

        /* Adjust icon spacing */
        span {
          margin-right: 4px;
        }
      }
    }
  }
`

const GalleryContainer = styled(motion.div)`
  width: 100%;
  padding: 0;
  display: grid;
  gap: 24px;
  margin-top: 20px;
`

const ErrorContainer = styled.div`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSizes.md};
  background: rgba(255, 255, 255, 0.8);
  padding: 24px;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  margin-top: 100px;
  text-align: center;
  border: 1px solid rgba(124, 122, 235, 0.1);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow:
    0 4px 24px -6px rgba(124, 122, 235, 0.06),
    0 12px 48px -12px rgba(124, 122, 235, 0.08);
`