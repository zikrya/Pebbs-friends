import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import { usePetContext } from '../context/PetContext'
import LazyImage from './LazyImage'
import { ImageCardProps } from "../utils/types"



const ImageCard: React.FC<ImageCardProps> = memo(({ pet }) => {
  const { selectedPets, toggleSelection } = usePetContext()
  const isSelected = selectedPets.has(pet.id)

  const handleClick = useCallback(() => toggleSelection(pet.id), [pet.id, toggleSelection])

  return (
    <Card onClick={handleClick} $selected={isSelected}>
      <LazyImage src={pet.url} alt={pet.title} />
      <Info>
        <h3>{pet.title}</h3>
        <p>{pet.description}</p>
      </Info>
    </Card>
  )
})

export default ImageCard

const Card = styled.div<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: ${({ $selected }) => ($selected ? '#e3f2fd' : '#fff')};
  border-radius: 8px;
  border: 2px solid ${({ $selected }) => ($selected ? '#007bff' : '#ddd')};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`

const Info = styled.div`
  text-align: center;
  margin-top: 8px;
`
