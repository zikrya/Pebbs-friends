import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

type SearchBarProps = {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm)

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 300)

    return () => clearTimeout(handler)
  }, [inputValue, setSearchTerm])

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search pets..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </SearchContainer>
  )
}

export default SearchBar


const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`
