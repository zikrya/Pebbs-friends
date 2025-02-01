import styled from 'styled-components'

export const Card = styled.div<{ $selected: boolean }>`
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

export const Info = styled.div`
  text-align: center;
  margin-top: 8px;
`
