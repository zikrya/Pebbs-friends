import styled from "styled-components"
import { theme } from "./theme"

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`

export const SearchWrapper = styled.div<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  background: ${theme.colors.surface};
  border-radius: 28px;
  padding: 6px 6px 6px 24px;
  transition: all 0.2s ease-in-out;
  box-shadow:
    0 4px 24px -6px rgba(124, 122, 235, 0.06),
    0 12px 48px -12px rgba(124, 122, 235, 0.08);

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(124, 122, 235, 0.2),
      rgba(124, 122, 235, 0.1)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: ${props => props.$isFocused ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: ${theme.colors.lilacLight};
  color: ${theme.colors.lilacDark};
  margin-right: 12px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  font-size: ${theme.typography.fontSizes.md};
  color: ${theme.colors.text};
  outline: none;
  padding: 0;

  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`