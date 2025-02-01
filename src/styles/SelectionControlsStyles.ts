import styled from 'styled-components'

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`

export const ControlButton = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #ddd;
  }
`
