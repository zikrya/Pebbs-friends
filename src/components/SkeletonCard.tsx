import ContentLoader from "react-content-loader"
import styled from "styled-components"

const SkeletonCard = () => (
  <SkeletonWrapper>
    <ContentLoader
      speed={2}
      width={280}
      height={350}
      viewBox="0 0 280 350"
      backgroundColor="#e3e3e3"
      foregroundColor="#d6d6d6"
    >
      <rect x="0" y="0" rx="16" ry="16" width="100%" height="250" />
      <rect x="10" y="270" rx="6" ry="6" width="60%" height="20" />
      <rect x="10" y="300" rx="6" ry="6" width="80%" height="16" />
    </ContentLoader>
  </SkeletonWrapper>
)

export default SkeletonCard

const SkeletonWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  border-radius: 16px;
  overflow: hidden;
  background: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`
