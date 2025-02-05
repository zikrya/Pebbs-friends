import styled from "styled-components"
import { theme } from "./theme"

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  isolation: isolate;
`

export const SearchWrapper = styled.div<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  background: ${theme.colors.surface};
  border-radius: 28px;
  padding: 6px 6px 6px 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: ${({ $isFocused }) =>
    $isFocused
      ? '0 8px 32px -8px rgba(124, 122, 235, 0.16), 0 4px 16px -4px rgba(124, 122, 235, 0.12)'
      : '0 4px 24px -6px rgba(124, 122, 235, 0.06), 0 12px 48px -12px rgba(124, 122, 235, 0.08)'};
  transform: translateY(${({ $isFocused }) => ($isFocused ? '-2px' : '0')});
  will-change: transform, box-shadow;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(124, 122, 235, 0.3),
      rgba(124, 122, 235, 0.1)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: ${props => props.$isFocused ? 1 : 0};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 28px -6px rgba(124, 122, 235, 0.12), 0 16px 40px -12px rgba(124, 122, 235, 0.1);

    &::after {
      opacity: 0.8;
    }
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, background-color;

  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${SearchWrapper}:hover & {
    background: ${theme.colors.lilac};

    svg {
      transform: scale(1.05);
    }
  }
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: ${theme.colors.textSecondary};
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus::placeholder {
    color: ${theme.colors.textSecondary};
    opacity: 0.7;
  }
`