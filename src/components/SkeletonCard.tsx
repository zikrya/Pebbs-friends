import ContentLoader from "react-content-loader"
import styled from "styled-components"
import { theme } from "../styles/theme"

const SkeletonCard = () => (
  <SkeletonWrapper>
    <ContentLoader
      speed={2}
      width="100%"
      height={400}
      viewBox="0 0 350 400"
      backgroundColor={theme.colors.lilacLight}
      foregroundColor={theme.colors.lilac}
    >
      <rect x="0" y="0" rx="16" ry="16" width="100%" height="240" />

      <rect x="24" y="264" rx="8" ry="8" width="180" height="24" />

      <rect x="24" y="300" rx="6" ry="6" width="280" height="16" />
      <rect x="24" y="324" rx="6" ry="6" width="200" height="16" />
    </ContentLoader>
  </SkeletonWrapper>
)

export default SkeletonCard

const SkeletonWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  overflow: hidden;
  background: ${theme.colors.surface};
  box-shadow: ${theme.shadows.sm};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`
