import styled from 'styled-components'
import { theme } from './theme'

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background: ${theme.colors.surface};
  border-radius: 12px;
  box-shadow: ${theme.shadows.md};
`

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${theme.colors.textSecondary};
  font-weight: bold;
  padding: 20px;
`

