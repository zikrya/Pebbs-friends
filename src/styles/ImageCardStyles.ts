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
  height: 360px; // Fixed height for consistency

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
  width: 100%;
  height: 240px; // Increased height
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 16px 16px 0 0;
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center; // Reset to center
  transition: all 0.3s ease-in-out;
  will-change: transform;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

export const Info = styled.div`
  padding: 16px;
  background: ${theme.colors.surface};
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`