import React from 'react'
import { usePetContext } from '../context/PetContext'
import { SelectionControlsProps } from '../utils/types'
import { ControlsContainer, ControlButton } from '../styles/SelectionControlsStyles'


const SelectionControls: React.FC<SelectionControlsProps> = ({ pets }) => {
  const { selectAll, clearSelection } = usePetContext()

  return (
    <ControlsContainer>
      <ControlButton onClick={() => selectAll(pets.map((pet) => pet.id))}>
        Select All
      </ControlButton>
      <ControlButton onClick={clearSelection}>Clear Selection</ControlButton>
    </ControlsContainer>
  )
}

export default SelectionControls
