import {
    
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Menkiki (麺利き)">
      <Container>
        <Title>
          E-shop Web App <Badge>2022-2023</Badge>
        </Title>
        <P>
        E-shop Web App suggests fresh vegetable(...). shops based on a web app is a website or web application that enables users to browse and purchase vegetables online.
        
        </P>
        <P>
          So, you can check a shop info as soon as you found.  Let&apos;s go out and have a delicious vegetables!
        </P>
        
  
        <List ml={4} my={4}>
          
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, PHP </span>
          </ListItem>
          
            
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/e-shop-website">
            github.com/coder-sagar-sketch/e-shop-website <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Preview</Meta>
            <Link href="https://coder-sagar-sketch.github.io/e-shop-website/html">
              Demo:  github.com/coder-sagar-sketch/e-shop-website <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        
  
        <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
          <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
