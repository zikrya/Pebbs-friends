// SortButtonsStyles.ts
import styled, { css } from "styled-components"
import { theme } from "./theme"

export const SortContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.xs};
  transition: ${theme.transitions.default};

  @media (max-width: 768px) {
    margin-right: 4px;
  }
`

export const SortButton = styled.button<{ $active?: boolean }>`
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

  ${({ $active }) =>
    $active
      ? css`
          background: ${theme.colors.lilacLight};
          color: ${theme.colors.lilacDark};
          border: 1px solid ${theme.colors.lilacDark};

          ${ButtonIcon} {
            color: ${theme.colors.lilacDark};
          }

          &:hover {
            background: ${theme.colors.lilacLight};
            transform: translateY(-1px);
            box-shadow: 0 4px 12px ${theme.colors.lilac};
          }
        `
      : css`
          background: ${theme.colors.surface};
          color: ${theme.colors.textSecondary};
          border: 1px solid ${theme.colors.border};

          ${ButtonIcon} {
            color: ${theme.colors.textSecondary};
          }

          &:hover {
            background: ${theme.colors.background};
            color: ${theme.colors.text};
            border-color: ${theme.colors.lilacDark};
            transform: translateY(-1px);

            ${ButtonIcon} {
              color: ${theme.colors.lilacDark};
            }
          }
        `}

  &:active {
    transform: translateY(0);
  }
`