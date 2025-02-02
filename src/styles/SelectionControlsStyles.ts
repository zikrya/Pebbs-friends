// SelectionControlsStyles.ts
import styled, { css } from "styled-components"
import { theme } from "./theme"

export const ControlsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
`

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.xs};
  transition: ${theme.transitions.default};
`

export const ControlButton = styled.button<{ $variant: "primary" | "secondary" }>`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.01em;

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background: ${theme.colors.surface};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};

          ${ButtonIcon} {
            color: ${theme.colors.lilacDark};
          }

          &:hover {
            background: ${theme.colors.lilacLight};
            border-color: ${theme.colors.lilacDark};
            transform: translateY(-1px);
            box-shadow: 0 4px 12px ${theme.colors.lilac};
          }

          &:active {
            transform: translateY(0);
          }
        `
      : css`
          background: ${theme.colors.lilacDark};
          color: ${theme.colors.surface};
          border: none;
          box-shadow: 0 2px 8px rgba(124, 122, 235, 0.25);

          ${ButtonIcon} {
            color: ${theme.colors.surface};
          }

          &:hover {
            background: rgba(124, 122, 235, 1);
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(124, 122, 235, 0.35);
          }

          &:active {
            transform: translateY(0);
          }
        `}
`