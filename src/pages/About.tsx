import * as React from 'react'
import styled from 'styled-components'

const About: React.FC = () => {
  return (
    <Container>
      <h1>About This App</h1>
      <p>This is a simple pet gallery app built using React, TypeScript, and Styled Components.</p>
    </Container>
  )
}

export default About

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
`
