import styled from "styled-components"
import { motion } from "framer-motion"
import { theme } from "./theme"

export const Card = styled(motion.div)<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.surface};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(124, 122, 235, 0.4), rgba(124, 122, 235, 0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: ${({ $selected }) => ($selected ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%; // 1:1 Aspect ratio
  overflow: hidden;
`

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

export const Info = styled.div`
  padding: 16px;
  background: ${theme.colors.surface};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  line-height: 1.4;
`