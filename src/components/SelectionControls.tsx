import type * as React from "react"
import { Check, X } from "lucide-react"
import { usePetContext } from "../context/usePetContext"
import type { SelectionControlsProps } from "../utils/types"
import { ControlsContainer, ControlButton, ButtonIcon } from "../styles/SelectionControlsStyles"

const SelectionControls: React.FC<SelectionControlsProps> = ({ pets }) => {
  const { selectedPets, selectAll, clearSelection } = usePetContext()

  const allSelected = selectedPets.size === pets.length

  const handleClick = () => {
    if (allSelected) {
      clearSelection()
    } else {
      selectAll(pets.map((pet) => pet.id))
    }
  }

  return (
    <ControlsContainer>
      <ControlButton onClick={handleClick} $variant={allSelected ? "secondary" : "primary"}>
        <ButtonIcon>{allSelected ? <X size={16} /> : <Check size={16} />}</ButtonIcon>
        {allSelected ? "Clear Selection" : "Select All"}
      </ControlButton>
    </ControlsContainer>
  )
}

export default SelectionControls
