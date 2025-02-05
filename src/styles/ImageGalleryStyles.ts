import styled from "styled-components"
import { theme } from "../styles/theme"
import { motion } from "framer-motion"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 1024px) {
    padding: 0;
    display: flex;
    justify-content: center;
  }
`

export const GalleryContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 24px;
  justify-content: center;

  /* Tablet view */
  @media (max-width: 1024px) and (min-width: 601px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    width: 95%;
    margin: 0 auto;

    & > div {
      width: calc(50% - 20px);
      max-width: 400px;
      position: relative;
      left: -16px;
      margin: 0;
    }
  }

  /* Mobile view */
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;
    width: 92%;
    margin: 0 auto;

    & > div {
      width: 100%;
      max-width: 350px;
      position: relative;
      left: -16px;
      margin: 0;
    }
  }
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
