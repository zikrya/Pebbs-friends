import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import styled from "styled-components"
import { theme } from "../styles/theme"
import { ArrowRight, Dog } from "lucide-react"
import { Link } from "react-router-dom"

function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Container>
      <BackgroundAnimation />
      <Content>
        <LeftSection>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            <TitleWrapper>
              <SubTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                In loving memory
              </SubTitle>
              <Title>
                <NameWrapper>
                  <Name>Pebbs</Name>
                  <NameDecoration />
                </NameWrapper>
              </Title>
            </TitleWrapper>
            <Description>
              A digital sanctuary celebrating the joy, love, and unforgettable moments shared with our beloved companion
            </Description>
            <CTAButton to="/gallery">
              <ButtonContent>
                <span>Explore Memories</span>
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </ButtonContent>
            </CTAButton>
          </motion.div>
        </LeftSection>

        <RightSection>
          <IllustrationWrapper>
            <DogIconWrapper
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Dog size={320} strokeWidth={1.5} />
            </DogIconWrapper>
            <Blob />
          </IllustrationWrapper>
        </RightSection>
      </Content>
    </Container>
  )
}

const BackgroundAnimation = () => (
  <BackgroundWrapper>
    {[...Array(15)].map((_, i) => (
      <Particle
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </BackgroundWrapper>
)

const Container = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${theme.colors.lilac};
  border-radius: 50%;
  opacity: 0.2;
  animation: float 20s infinite ease-in-out;

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${theme.spacing.xxl};
  max-width: 1400px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing.xl};
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const TitleWrapper = styled.div`
  margin-bottom: ${theme.spacing.xl};
`

const SubTitle = styled(motion.h2)`
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.lilacDark};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0.9;
`

const Title = styled.h1`
  font-size: 92px;
  font-weight: ${theme.typography.fontWeights.bold};
  line-height: 1.1;
  color: ${theme.colors.text};

  @media (max-width: 968px) {
    font-size: 64px;
  }
`

const NameWrapper = styled.span`
  display: inline-block;
  position: relative;
`

const Name = styled.span`
  background: linear-gradient(135deg, ${theme.colors.lilacDark}, #8583E1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
`

const NameDecoration = styled.div`
  position: absolute;
  bottom: 0.1em;
  left: -0.1em;
  right: -0.1em;
  height: 0.3em;
  background: ${theme.colors.lilac};
  z-index: 0;
  transform-origin: left;
  animation: expand 1.5s ease-out forwards;

  @keyframes expand {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`

const Description = styled.p`
  font-size: ${theme.typography.fontSizes.xl};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xxl};
  max-width: 540px;

  @media (max-width: 968px) {
    margin: 0 auto ${theme.spacing.xxl};
    font-size: ${theme.typography.fontSizes.lg};
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  position: relative;
  isolation: isolate;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.lilacDark}, #8583E1);
  color: white;
  border-radius: ${theme.borderRadius.xl};
  font-size: ${theme.typography.fontSizes.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
  transition: ${theme.transitions.default};
  box-shadow:
    0 4px 15px rgba(124, 122, 235, 0.3),
    0 2px 4px rgba(124, 122, 235, 0.1);

  ${CTAButton}:hover & {
    transform: translateY(-2px);
    box-shadow:
      0 6px 20px rgba(124, 122, 235, 0.4),
      0 2px 8px rgba(124, 122, 235, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  ${CTAButton}:hover &::before {
    transform: translateX(100%);
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 968px) {
    min-height: 400px;
  }
`

const IllustrationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DogIconWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  color: ${theme.colors.lilacDark};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Blob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: ${theme.colors.lilac};
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: pulse 8s ease-in-out infinite;
  z-index: 0;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1) translate(-50%, -50%);
    }
    50% {
      transform: scale(1.1) translate(-45%, -45%);
    }
  }

  @media (max-width: 968px) {
    width: 300px;
    height: 300px;
  }
`

export default Home
