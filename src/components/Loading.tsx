import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const LoadingIndicator: React.FC = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spinner />
      <LoadingText>Loading Pebbs...</LoadingText>
    </LoadingContainer>
  )
}

export default LoadingIndicator

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(180deg, rgba(246, 245, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${theme.colors.lilacLight};
  border-top: 3px solid ${theme.colors.lilacDark};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

const LoadingText = styled.p`
  margin-top: 16px;
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.lilacDark};
  font-weight: 500;
`