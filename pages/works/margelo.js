import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Margelo">
      <Container>
        <Title>
          Musisc-Player <Badge>2022</Badge>
        </Title>
        <P>
        Music player clone should provide users with a familiar and seamless music listening experience, while also offering unique features and customization options that distinguish it from the original music player.
        </P>
       
  
        <List ml={4} my={4}>
          
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Spotify Api /  React / Styled-components
            </span>
          </ListItem>
          
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/Music-player">
            github.com/coder-sagar-sketch/Music-player<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
        </List>
  
        <WorkImage src="/images/works/margelo_eyecatch.png" alt="Website" />
  
        
  
        
        
      </Container>
    </Layout>
  )
  
  export default Work

  