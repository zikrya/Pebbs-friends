import * as React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { theme } from '../styles/theme'

const About: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <HeaderContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title>The Story of Pebbs</Title>
            <Subtitle>A tale of love, inspiration, and code</Subtitle>
          </HeaderContent>
        </Header>

        <StorySection>
          <ImageSection>
            <ImagePlaceholder>
              <Heart size={32} />
              <ImageText>Add a photo of Pebbs here</ImageText>
            </ImagePlaceholder>
          </ImageSection>

          <Section>
            <SectionTitle>
              <GradientText>Why Pebbs?</GradientText>
            </SectionTitle>
            <Paragraph>
              It's funny I actually have built a similar application in the past, but it was React Native, and it was designed to be a tiktok for pets. I thought it would be a fun way to give a homage to a very special girl!
            </Paragraph>
            <Paragraph>
              I wasn't sure that I even wanted to be a developer, until I fell in a rabbithole of youtube videos on web development. When decidicing to create a project, I went with the basic html blog page, but I need something to cetner the site towards, so I chose my pitbull Pebbles. Whenever I was stressed, upset, or excited, she was always there for me, to make me feel better, or just be happy to be next to me. The love she had inside her is something very rare. So I thought it was a no brainer to make an appreciation site based on her.
            </Paragraph>
            <Quote>
              "Because of her, I was able to start my career in Software Development and grow a passion for it"
            </Quote>
            <Paragraph>
              Listen, the site was horrible, it had a deep lilac background color, was called PebbsClub, and looked like something youd see in the early 2000s. However, it became a starting point for me to starting iterating on. I made so many versions of PebbsClub, until it was a full-stack React application, solely based on my loved for Pebbes.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>
              <GradientText>R.I.P Pebbles</GradientText>
            </SectionTitle>
            <Paragraph>
              However 2 years ago, she passed away from cancer, which was very tough for me. KLnowing her for over a decade as a very healthy energetic ball of energy, to seeing her slowly detoriate was something I could never be prepared for. When I heard there's nothing we could do about saving her life, I became utterly distraught and didn't know what to do.
            </Paragraph>
            <Paragraph>
              I realized I needed to just show her as much love as I can and make sure she's happy and comfortable until the end, so until the day she was put down, her tail stayed wagging with a big smile on her face. I now reflect on how much she was there for me even though she was just a dog. She got me through some dark times, and I can't explain how thankful I am to her.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>
              <GradientText>Honoring her memory</GradientText>
            </SectionTitle>
            <Paragraph>
              Last year, well reminiscing about her, I decided that I was going to build something to remeber her by, something to show how much I love her.
            </Paragraph>
            <Paragraph>
              So after drafting some ideas, I decided to build a little dumb pet tiktok called Pebbs, so I could prove that I will never forget her.
            </Paragraph>
            <Quote>
              "Even though it was just a side project, for me it meant so much more, because she's the reason I'm a developer right now"
            </Quote>
          </Section>
        </StorySection>
      </Content>
    </Container>
  )
}

export default About

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(246, 245, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`

const Header = styled.header`
  padding: 80px 0 40px;
  text-align: center;
`

const HeaderContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 16px;
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  font-size: 20px;
  color: ${theme.colors.textSecondary};
  margin: 0;
`

const StorySection = styled.div`
  padding: 40px 0 80px;
`

const Section = styled.section`
  margin-bottom: 60px;
`

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 24px;
  letter-spacing: -0.01em;
`

const GradientText = styled.span`
  background: linear-gradient(135deg, ${theme.colors.lilacDark}, #8583E1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${theme.colors.text};
  margin: 0 0 24px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Quote = styled.blockquote`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  color: ${theme.colors.lilacDark};
  margin: 40px 0;
  padding: 0 40px;
  text-align: center;
  position: relative;

  &::before,
  &::after {
    content: '"';
    position: absolute;
    font-size: 60px;
    opacity: 0.2;
  }

  &::before {
    left: 0;
    top: -20px;
  }

  &::after {
    right: 0;
    bottom: -40px;
  }
`

const ImageSection = styled.div`
  margin: 40px 0 60px;
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, rgba(124, 122, 235, 0.1), rgba(124, 122, 235, 0.05));
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: ${theme.colors.lilacDark};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(124, 122, 235, 0.15), rgba(124, 122, 235, 0.08));
    transform: translateY(-2px);
  }
`

const ImageText = styled.span`
  font-size: 16px;
  color: ${theme.colors.textSecondary};
`