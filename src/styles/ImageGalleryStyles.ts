import styled from "styled-components"
import { theme } from "../styles/theme"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 16px;
`

export const ViewToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  background: transparent;
  color: ${theme.colors.textSecondary};
  border: 1px solid ${theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${theme.colors.lilacLight};
    color: ${theme.colors.lilacDark};
    border-color: ${theme.colors.lilacDark};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const GalleryContainer = styled(motion.div)<{ $view: "grid" | "list" }>`
  display: ${({ $view }) => ($view === "grid" ? "grid" : "flex")};
  grid-template-columns: ${({ $view }) => ($view === "grid" ? "repeat(auto-fill, minmax(280px, 1fr))" : "none")};
  flex-direction: ${({ $view }) => ($view === "list" ? "column" : "unset")};
  gap: 24px;
  width: 100%;
  padding: 24px;
  align-items: ${({ $view }) => ($view === "list" ? "center" : "unset")};
`

export const ListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 750px;
  background: ${theme.colors.surface};
  padding: 24px;
  border-radius: 16px;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ListImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const ListContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 8px 0;
`

export const ListDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
`

export const EmptyMessage = styled(motion.p)`
  text-align: center;
  font-size: 18px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
  padding: 32px;
  background: ${theme.colors.surface};
  border-radius: 20px;
  box-shadow: ${theme.shadows.sm};
  width: 100%;
`

