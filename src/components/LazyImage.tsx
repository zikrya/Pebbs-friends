import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import  { LazyImageProps } from "../utils/types"


const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return <Image ref={ref} src={inView ? src : ''} alt={alt} />
}

export default LazyImage

// Styled Components
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ src }) => (src ? 1 : 0)};
`
