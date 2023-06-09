import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Portfolio <Badge>2023-</Badge>
        </Title>
        <P>
          A Portfolio is a collection of materials that showcase an individual's skills, experience, and achievements to potential employers.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://coder-sagar-sketch.netlify.app/">
            https://coder-sagar-sketch.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Next.JS, ReactJS</span>
          </ListItem>
          
        </List>
  
        <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
        <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
        
      </Container>
    </Layout>
  )
  
  export default Work
