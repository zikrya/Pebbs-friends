import styled from "styled-components"
import { theme } from "./theme"

export const DownloadContainer = styled.div`
  position: fixed;
  bottom: ${theme.spacing.xl};
  right: ${theme.spacing.xl};
  z-index: 10;
`

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.xs};
`

export const ButtonText = styled.span`
  font-weight: ${theme.typography.fontWeights.medium};
`

export const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSizes.md};
  background: ${theme.colors.lilacDark};
  color: ${theme.colors.surface};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows.lg};

  &:hover {
    background: ${theme.colors.lilacLight};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
  }
`

