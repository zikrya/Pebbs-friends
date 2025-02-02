import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const NavBar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">
            Home
            <LinkUnderline layoutId="underline" />
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">
            About
            <LinkUnderline layoutId="underline" />
          </StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  )
}

export default NavBar

const Nav = styled.nav`
  background: ${theme.colors.surface};
  padding: 16px 0;
  display: flex;
  justify-content: center;
  box-shadow: ${theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
`

const NavItem = styled.li``

const StyledLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: ${theme.transitions.default};
  position: relative;
  padding: 8px 0;

  &:hover {
    color: ${theme.colors.lilacDark};
  }
`

const LinkUnderline = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: ${theme.colors.lilacDark};
`