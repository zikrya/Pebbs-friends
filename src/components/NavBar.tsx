import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'
import { Camera } from 'lucide-react'

const NavBar: React.FC = () => {
  const location = useLocation()

  return (
    <Nav>
      <NavContent>
        <LogoSection>
          <Logo>
            <LogoIcon>
              <Camera size={24} />
            </LogoIcon>
            <LogoText>Pebbs</LogoText>
          </Logo>
        </LogoSection>

        <NavList>
          <NavItem $isActive={location.pathname === "/"}>
            <StyledLink to="/">
              Home
              {location.pathname === "/" && (
                <LinkUnderline layoutId="underline" />
              )}
            </StyledLink>
          </NavItem>
          <NavItem $isActive={location.pathname === "/about"}>
            <StyledLink to="/about">
              About
              {location.pathname === "/about" && (
                <LinkUnderline layoutId="underline" />
              )}
            </StyledLink>
          </NavItem>
        </NavList>
      </NavContent>
    </Nav>
  )
}

export default NavBar

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(124, 122, 235, 0.1);
`

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(124, 122, 235, 0.1), rgba(124, 122, 235, 0.05));
  border-radius: 12px;
  color: ${theme.colors.lilacDark};
`

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text};
  letter-spacing: -0.5px;
  margin: 0;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li<{ $isActive: boolean }>`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -16px;
    left: -12px;
    right: -12px;
    bottom: -16px;
    background: ${props => props.$isActive ? 'rgba(124, 122, 235, 0.08)' : 'transparent'};
    border-radius: 12px;
    z-index: -1;
    transition: background 0.3s ease;
  }

  &:hover::before {
    background: rgba(124, 122, 235, 0.05);
  }
`

const StyledLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: ${theme.transitions.default};
  position: relative;
  padding: 8px 0;
  display: block;

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
  border-radius: 2px;
`