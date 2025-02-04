import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ImageCard from "./ImageCard"
import SkeletonCard from "./SkeletonCard"
import type { ImageGalleryProps } from "../utils/types"
import { List, Grid } from "lucide-react"
import { GalleryContainer, Wrapper, Controls, ViewToggle, EmptyMessage } from "../styles/ImageGalleryStyles"

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets = [], loading }) => {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <Wrapper>
      <Controls>
        <ViewToggle onClick={() => setView(view === "grid" ? "list" : "grid")}>
          {view === "grid" ? (
            <>
              <List size={16} />
              <span>List</span>
            </>
          ) : (
            <>
              <Grid size={16} />
              <span>Grid</span>
            </>
          )}
        </ViewToggle>
      </Controls>

      <AnimatePresence mode="wait">
        <GalleryContainer
          key={view}
          $view={view}
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
            pets.map((pet) =>
              view === "grid" ? (
                <motion.div key={pet.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <ImageCard pet={pet} view={view}/>
                </motion.div>
              ) : (
                <motion.div key={pet.id} layout>
                  <ImageCard pet={pet} view={view} />
                </motion.div>
              ),
            )
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
