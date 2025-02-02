import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { SearchContainer, SearchWrapper, SearchIcon, SearchInput } from '../styles/SearchBarStyles'

const SearchBar: React.FC<{ searchTerm: string; setSearchTerm: (term: string) => void }> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <SearchContainer>
      <SearchWrapper $isFocused={isFocused}>
        <SearchIcon>
          <Search size={20} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search pets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </SearchWrapper>
    </SearchContainer>
  )
}

export default SearchBar