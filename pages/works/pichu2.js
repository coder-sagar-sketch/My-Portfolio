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
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="pichu*pichu">
      <Container>
        <Title>
          Analog Clock <Badge>2022</Badge>
        </Title>
        <P>
          Analog - Clock
        </P>
  
        <List ml={4} my={4}>
          
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/Analog-clock.github.io">
            github.com/coder-sagar-sketch/Analog-clock.github.io <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website Preview</Meta>
            <Link href="https://coder-sagar-sketch.github.io/Analog-clock.github.io/">
            Live Demo Here : https://coder-sagar-sketch.github.io/Analog-clock.github.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        
  
      
  
        <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
        
      </Container>
    </Layout>
  )
  
  export default Work
