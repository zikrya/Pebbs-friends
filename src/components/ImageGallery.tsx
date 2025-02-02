import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ImageCard from "./ImageCard"
import type { ImageGalleryProps } from "../utils/types"
import { List, Grid } from "lucide-react"
import { GalleryContainer, Wrapper, Controls, ViewToggle, ListItem, ListImage, ListContent, ListTitle, ListDescription,  EmptyMessage } from "../styles/ImageGalleryStyles"

const ImageGallery: React.FC<ImageGalleryProps> = ({ pets = [] }) => {
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
          {pets.length > 0 ? (
            pets.map((pet) =>
              view === "grid" ? (
                <motion.div key={pet.id} layout>
                  <ImageCard pet={pet} />
                </motion.div>
              ) : (
                <ListItem key={pet.id} layout>
                  <ListImage src={pet.url} alt={pet.title} />
                  <ListContent>
                    <ListTitle>{pet.title}</ListTitle>
                    <ListDescription>{pet.description}</ListDescription>
                  </ListContent>
                </ListItem>
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
