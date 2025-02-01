import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">About</StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  )
}

export default NavBar

// Styled Components
const Nav = styled.nav`
  background: #007bff;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`

const NavItem = styled.li``

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`
