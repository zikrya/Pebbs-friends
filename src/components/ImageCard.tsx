import React from 'react'
import styled from 'styled-components'
import { usePetContext } from '../context/PetContext'

type Pet = {
  id: string
  title: string
  description: string
  url: string
}

type ImageCardProps = {
  pet: Pet
}

const ImageCard: React.FC<ImageCardProps> = ({ pet }) => {
  const { selectedPets, toggleSelection } = usePetContext()
  const isSelected = selectedPets.has(pet.id)

  return (
    <Card onClick={() => toggleSelection(pet.id)} $selected={isSelected}>
      <Image src={pet.url} alt={pet.title} />
      <Info>
        <h3>{pet.title}</h3>
        <p>{pet.description}</p>
      </Info>
      <Checkbox
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelection(pet.id)}
        onClick={(e) => e.stopPropagation()}
      />
    </Card>
  )
}

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

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`

const Info = styled.div`
  text-align: center;
  margin-top: 8px;
`

const Checkbox = styled.input`
  margin-top: 10px;
  transform: scale(1.2);
`
