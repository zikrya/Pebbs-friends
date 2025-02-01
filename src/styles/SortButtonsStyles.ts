import styled from 'styled-components'

export const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`

export const SortButton = styled.button<{ active: boolean }>`
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? '#007bff' : '#f8f9fa')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ active }) => (active ? '#0056b3' : '#ddd')};
  }
`
