import type * as React from "react"
import styled from "styled-components"
import { motion, useScroll, useTransform } from "framer-motion"
import { theme } from "../styles/theme"
import pebblesImg from "../assets/pebbles.jpg"

const About: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <Container>
      <BackgroundGradient style={{ y: backgroundY }} />
      <BackgroundPattern />

      <Hero>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroLabel>
              <LabelDot />
              Our Story
            </HeroLabel>
            <HeroTitle>The Story of Pebbs</HeroTitle>
          </motion.div>
        </HeroContent>
        <HeroAccent />
      </Hero>

      <Content>
        <Section>
          <TwoColumnLayout>
            <TextColumn>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <SectionLabel>The Beginning</SectionLabel>
                <SectionTitle>
                  <GradientText>Why Pebbs?</GradientText>
                </SectionTitle>
                <StoryText>
                  It's funny I actually have built a similar application in the past, but it was React Native, and it
                  was designed to be a tiktok for pets. I thought it would be a fun way to give a homage to a very
                  special girl!
                </StoryText>
                <StoryText>
                  I wasn't sure that I even wanted to be a developer, until I fell in a rabbithole of youtube videos on
                  web development. When decidicing to create a project, I went with the basic html blog page, but I need
                  something to cetner the site towards, so I chose my pitbull Pebbles. Whenever I was stressed, upset,
                  or excited, she was always there for me, to make me feel better, or just be happy to be next to me.
                  The love she had inside her is something very rare. So I thought it was a no brainer to make an
                  appreciation site based on her.
                </StoryText>
                <StoryText>
                  "Because of her, I was able to start my career in Software Development and grow a passion for it"
                </StoryText>
                <StoryText>
                  Listen, the site was horrible, it had a deep lilac background color, was called PebbsClub, and looked
                  like something youd see in the early 2000s. However, it became a starting point for me to starting
                  iterating on. I made so many versions of PebbsClub, until it was a full-stack React application,
                  solely based on my loved for Pebbes.
                </StoryText>
              </motion.div>
            </TextColumn>
            <ImageColumn>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ImageContainer>
                  <ImageWrapper>
                    <StyledImage src={pebblesImg || "/placeholder.svg"} alt="Pebbles the dog" />
                    <ImageOverlay />
                  </ImageWrapper>
                  <ImageAccent />
                  <ImageAccentTwo />
                </ImageContainer>
              </motion.div>
            </ImageColumn>
          </TwoColumnLayout>
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeader>
              <SectionLabel>The Journey</SectionLabel>
              <SectionTitle>
                <GradientText>R.I.P Pebbles</GradientText>
              </SectionTitle>
            </SectionHeader>
            <ContentGrid>
              <GridItem>
                <StoryCard>
                  <CardContent>
                    However 2 years ago, she passed away from cancer, which was very tough for me. KLnowing her for over
                    a decade as a very healthy energetic ball of energy, to seeing her slowly detoriate was something I
                    could never be prepared for. When I heard there's nothing we could do about saving her life, I
                    became utterly distraught and didn't know what to do.
                  </CardContent>
                </StoryCard>
              </GridItem>
              <GridItem>
                <StoryCard>
                  <CardContent>
                    I realized I needed to just show her as much love as I can and make sure she's happy and comfortable
                    until the end, so until the day she was put down, her tail stayed wagging with a big smile on her
                    face. I now reflect on how much she was there for me even though she was just a dog. She got me
                    through some dark times, and I can't explain how thankful I am to her.
                  </CardContent>
                </StoryCard>
              </GridItem>
            </ContentGrid>
          </motion.div>
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeader>
              <SectionLabel>The Legacy</SectionLabel>
              <SectionTitle>
                <GradientText>Honoring her memory</GradientText>
              </SectionTitle>
            </SectionHeader>
            <ContentGrid>
              <GridItem>
                <StoryCard>
                  <CardContent>
                    Last year, well reminiscing about her, I decided that I was going to build something to remeber her
                    by, something to show how much I love her.
                  </CardContent>
                </StoryCard>
              </GridItem>
              <GridItem>
                <StoryCard>
                  <CardContent>
                    So after drafting some ideas, I decided to build a little dumb pet tiktok called Pebbs, so I could
                    prove that I will never forget her.
                  </CardContent>
                </StoryCard>
              </GridItem>
            </ContentGrid>
          </motion.div>
        </Section>
      </Content>
    </Container>
  )
}

export default About

const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`

const BackgroundGradient = styled(motion.div)`
  position: fixed;
  inset: -100%;
  background: radial-gradient(circle at 50% 50%, ${theme.colors.lilacLight}10 0%, transparent 70%);
  opacity: 0.6;
  pointer-events: none;
`

const BackgroundPattern = styled.div`
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(${theme.colors.lilacLight}08 1px, transparent 1px),
    linear-gradient(90deg, ${theme.colors.lilacLight}08 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  pointer-events: none;
`

const Hero = styled.div`
  position: relative;
  padding: 140px 0 100px;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
`

const HeroAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${theme.colors.lilacLight}40, transparent);
`

const LabelDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background: ${theme.colors.lilacDark};
  border-radius: 50%;
  margin-right: 12px;
  vertical-align: middle;
`

const HeroLabel = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${theme.colors.lilacDark};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`

const HeroTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(135deg, ${theme.colors.text}, ${theme.colors.text}dd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 24px;
  max-width: 800px;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`

const Section = styled.section`
  margin-bottom: 120px;
  position: relative;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`

const TextColumn = styled.div`
  max-width: 520px;
`

const ImageColumn = styled.div`
  position: relative;
`

const ImageContainer = styled.div`
  position: relative;
  margin: 40px;
`

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px ${theme.colors.lilacLight}20;
`

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, ${theme.colors.lilacLight}10, transparent);
  mix-blend-mode: overlay;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1.01);
`

const ImageAccent = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 180px;
  height: 180px;
  border: 1px solid ${theme.colors.lilacLight}30;
  border-radius: 24px;
  z-index: -1;
`

const ImageAccentTwo = styled(ImageAccent)`
  top: -20px;
  right: -20px;
  width: 140px;
  height: 140px;
  border-color: ${theme.colors.lilacLight}20;
`

const SectionLabel = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${theme.colors.lilacDark};
  margin-bottom: 16px;
`

const SectionHeader = styled.div`
  margin-bottom: 60px;
`

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.2;
`

const GradientText = styled.span`
  background: linear-gradient(135deg, ${theme.colors.lilacDark}, #8583E1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StoryText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
  margin: 0 0 24px;

  &:last-child {
    margin-bottom: 0;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.div`
  position: relative;
`

const StoryCard = styled.div`
  position: relative;
  padding: 40px;
  background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid ${theme.colors.lilacLight}20;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(135deg, ${theme.colors.lilacLight}40, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const CardContent = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  margin: 0;
`
