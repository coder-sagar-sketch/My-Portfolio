import {
    
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="The four painters">
      <Container>
        <Title>
          Frontend design of youtube <Badge>2022-2023</Badge>
        </Title>
        <P>
        The frontend design of YouTube is a combination of simple and elegant visual design and user interface that allows users to easily discover, view, and interact with videos on the platform.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJs, CSS  </span>
          </ListItem>
         
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/Frontend-youtube_home">
              Source Code
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Preview</Meta>
            <Link href="https://coder-sagar-sketch.github.io/Frontend-youtube_home/">
              Demo: https://coder-sagar-sketch.github.io/Frontend-youtube_home/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Key-Components</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            
              <Badge mr={2}>Header</Badge>
              The header of the YouTube homepage contains the YouTube logo, the search bar.
              <ExternalLinkIcon mx="2px" />
            
          </ListItem>
  
          <ListItem>
            
              <Badge mr={2}>Video list</Badge>
              The video list component of YouTube displays a list of recommended or related videos based on the selected video. Each video in the list displays the video thumbnail, title, and view count.
              <ExternalLinkIcon mx="2px" />
          
          </ListItem>
        </UnorderedList>
  
       
  
        <WorkImage
          src="/images/works/the-four-painters_eyecatch.jpg"
          alt="walknote"
        />
        <WorkImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
        <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
