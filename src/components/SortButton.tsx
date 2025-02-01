import * as React from 'react'
import { SortContainer, SortButton } from '../styles/SortButtonsStyles'
import { SortButtonsProps } from '../utils/types'


const SortButtons: React.FC<SortButtonsProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <SortContainer>
      <SortButton onClick={() => setSortOrder('asc')} active={sortOrder === 'asc'}>
        Sort A-Z
      </SortButton>
      <SortButton onClick={() => setSortOrder('desc')} active={sortOrder === 'desc'}>
        Sort Z-A
      </SortButton>
    </SortContainer>
  )
}

export default SortButtons
