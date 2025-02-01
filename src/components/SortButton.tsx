import React from 'react'
import styled from 'styled-components'

type SortButtonsProps = {
  sortOrder: 'asc' | 'desc'
  setSortOrder: (order: 'asc' | 'desc') => void
}

const SortButtons: React.FC<SortButtonsProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <SortContainer>
      <SortButton onClick={() => setSortOrder('asc')} $active={sortOrder === 'asc'}>
        Sort A-Z
      </SortButton>
      <SortButton onClick={() => setSortOrder('desc')} $active={sortOrder === 'desc'}>
        Sort Z-A
      </SortButton>
    </SortContainer>
  )
}

export default SortButtons

const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`

const SortButton = styled.button<{ $active: boolean }>`
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#007bff' : '#f8f9fa')};
  color: ${({ $active }) => ($active ? '#fff' : '#333')};
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ $active }) => ($active ? '#0056b3' : '#ddd')};
  }
`
