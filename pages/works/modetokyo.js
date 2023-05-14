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
          Room- Chat App <Badge>2022</Badge>
        </Title>
        <P>
        A room chat web app is a web-based application that allows users to participate in real-time chat conversations with others in a specific chat room or channel.
        </P>
       
  
        <List ml={4} my={4}>
          
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              JavaScript, Html,  CSS
            </span>
          </ListItem>
          
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/Real-time-group-App.github.io">
            github.com/coder-sagar-sketch/Real-time-group-App.github.io<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
        </List>
  
        <WorkImage src="/images/works/modetokyo_eyecatch.png" alt="Website" />
  
        
  
        
        
      </Container>
    </Layout>
  )
  
  export default Work

  