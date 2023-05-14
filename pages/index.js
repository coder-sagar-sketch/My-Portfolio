import NextLink from 'next/link'
import { 
  Link,
  Container, 
  Box, 
  List,
  ListItem,
  Heading, 
  Button,
  chakra,
  Icon, 
  SimpleGrid,
  useColorModeValue
 } from "@chakra-ui/react"
 
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWechat
  
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page=()=> {
  return (
    <Layout>
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I'm a Frontend Developer besed in India!
        </Box>
        
        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as='h2' varient='page-title'>
                    SHUBHAM SAGAR
                </Heading>
                <p>Frontend-Developer( Developer / Designer)</p>
            </Box>
            <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>

        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Introduction
          </Heading>
          <Paragraph>
          "Hello, my name is Shubham Sagar and I am a recent graduate with a degree in B.Tech. As a fresher, I am eager to start my career and apply my knowledge and skills in a professional setting.

During my studies, I developed a strong foundation in Frontend/Design Developer , which I believe will be valuable in the workplace. I also participated in Real-life Projects Problem, which helped me develop my teamwork and leadership skills.

I am passionate about Computer Science / IT Industry, and I am excited to learn from experienced professionals and contribute to the growth of the company. In my free time, I enjoy Art,Music See Anime Program,Reading Manga etc, which I believe help me maintain a balanced lifestyle and enhance my creativity.

I am looking forward to the opportunity to work in a dynamic environment and take on new challenges."
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      
        </Section>
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in  Uttar Pradesh, India.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the High School Program in the Kendriya Vidyalaya Aligarh (k.v.s).
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Intermediate Program in the Kendriya Vidyalaya Aligarh (k.v.s).
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Pursing the B. Tech  by Computer Science & Information Technology program in the Graduate School of
          Mahatma Jyotiba Phule Rohilkhand University, Bareilly.
          
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, See Anime Programmes, Reading Manga
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/coder-sagar-sketch" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ShubhamSagar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/shubham-sagar-b42a17220/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @SHUBHAM'S SAGAR
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:sagaryatanshuibham@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWechat />}
              >
                @Email-Shubham's Sagar
              </Button>
            </Link>
          </ListItem>
          
            
        </List>

        

       
      

       
      </Section>

    </Container>
    </Layout>
  )
}

export default Page