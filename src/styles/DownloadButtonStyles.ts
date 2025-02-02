import styled from "styled-components"
import { motion } from "framer-motion"
import { theme } from "./theme"

export const DownloadContainer = styled(motion.div)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 10;
`

export const DownloadBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  background: ${theme.colors.lilacDark};
  color: ${theme.colors.surface};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(124, 122, 235, 0.3);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
`

export const ButtonText = styled.span`
  font-weight: 600;
  letter-spacing: 0.5px;
`