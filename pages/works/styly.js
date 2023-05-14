import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="STYLY">
      <Container>
        <Title>
          Typing- Speed Check <Badge>2022</Badge>
        </Title>
        <P>
        A typing speed check web app is a web-based application that allows users to test and measure their typing speed and accuracy.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/Typing-Speed-game.github.io">
            github.com/coder-sagar-sketch/Typing-Speed-game.github.io <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website Preview</Meta>
            <Link href="https://coder-sagar-sketch.github.io/Typing-Speed-game.github.io/">
            You can play it here: https://coder-sagar-sketch.github.io/Typing-Speed-game.github.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        
  
        <WorkImage src="/images/works/styly_eyecatch.png" alt="STYLY" />
        <WorkImage src="/images/works/styly_01.png" alt="STYLY" />
        
      </Container>
    </Layout>
  )
  
  export default Work
