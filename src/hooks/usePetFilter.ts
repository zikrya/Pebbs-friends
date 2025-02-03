import { useState, useMemo } from "react"
import Fuse from "fuse.js"
import { Pet } from "../utils/types"

export const usePetFilters = (pets: Pet[]) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const fuse = useMemo(() => {
    return new Fuse(pets, {
      keys: ["title", "description"],
      threshold: 0.3,
    })
  }, [pets])

  const filteredAndSortedPets = useMemo(() => {
    let results = searchTerm ? fuse.search(searchTerm).map((result) => result.item) : pets

    return results.sort((a, b) =>
      sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    )
  }, [pets, searchTerm, sortOrder, fuse])

  return { searchTerm, setSearchTerm, sortOrder, setSortOrder, filteredAndSortedPets }
}
