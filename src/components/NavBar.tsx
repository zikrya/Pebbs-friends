import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { theme } from "../styles/theme"
import { Camera } from "lucide-react"

const NavBar: React.FC = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContent>
        <LogoSection>
          <LogoLink to="/">
            <LogoIcon>
              <Camera size={20} />
            </LogoIcon>
            <LogoText>Pebbs</LogoText>
          </LogoLink>
        </LogoSection>

        <NavList>
          {[
            { path: "/gallery", label: "Gallery" },
            { path: "/about", label: "About" },
          ].map((item) => (
            <NavItem key={item.path}>
              <NavLinkWrapper to={item.path} $isActive={location.pathname === item.path}>
                {item.label}
                <AnimatePresence>
                  {location.pathname === item.path && (
                    <ActiveBackground
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      layoutId="nav-background"
                    />
                  )}
                </AnimatePresence>
                <LinkHighlight layoutId="nav-highlight" />
              </NavLinkWrapper>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
      <NavBorder $isScrolled={isScrolled} />
    </Nav>
  )
}

export default NavBar

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: ${(props) => (props.$isScrolled ? "12px 0" : "20px 0")};
  background: ${(props) => (props.$isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent")};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
`

const NavBorder = styled.div<{ $isScrolled: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(props) => (props.$isScrolled ? "rgba(124, 122, 235, 0.1)" : "transparent")},
    transparent
  );
  opacity: ${(props) => (props.$isScrolled ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoSection = styled.div`
  position: relative;
  z-index: 2;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  position: relative;
  padding: 8px;
  margin: -8px;
  border-radius: 99px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${theme.colors.lilacDark};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.lilacLight}20, ${theme.colors.lilacLight}05);
    border-radius: 10px;
    transform: rotate(-5deg);
    transition: transform 0.2s ease;
  }

  ${LogoLink}:hover &::before {
    transform: rotate(0deg);
  }
`

const LogoText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.text};
  letter-spacing: -0.3px;
`

const NavList = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  z-index: 1;
`

const NavItem = styled.div`
  position: relative;
`

const NavLinkWrapper = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  display: block;
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? theme.colors.lilacDark : theme.colors.text)};
  text-decoration: none;
  transition: color 0.2s ease;
  border-radius: 99px;

  &:hover {
    color: ${theme.colors.lilacDark};
  }
`

const ActiveBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: ${theme.colors.lilacLight}10;
  border-radius: 99px;
  z-index: -1;
`

const LinkHighlight = styled(motion.div)`
  position: absolute;
  bottom: 4px;
  left: 16px;
  right: 16px;
  height: 2px;
  background: ${theme.colors.lilacDark};
  border-radius: 99px;
  opacity: 0;
  transform-origin: left center;
  transform: scaleX(0);
  transition: all 0.2s ease;

  ${NavLinkWrapper}:hover & {
    opacity: 0.5;
    transform: scaleX(1);
  }
`
