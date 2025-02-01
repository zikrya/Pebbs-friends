import React from 'react'
import { SearchContainer, SearchInput } from '../styles/SearchBarStyles'
import  { SearchBarProps } from "../utils/types"


const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search pets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  )
}

export default SearchBar
