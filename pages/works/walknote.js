import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="walknote">
      <Container>
        <Title>
          Real-time food delivery System <Badge>2022-2023</Badge>
        </Title>
        <P>
         Real-time food delivery system should be fast, reliable, and easy to use for both customers and restaurants. It should provide a seamless experience that allows customers to order their favorite food items and have them delivered to their doorstep in real-time, while also providing restaurants with a way to manage orders and deliveries efficiently!
        </P>
        
        <List ml={4} my={4}>
          
            
          
          <ListItem>
            <Meta>Stack</Meta>
            <span>ExpressJs, NodeJs, MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/coder-sagar-sketch/food-delovey-system-">
              Source Code
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Key- Components</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            
              <Badge mr={2}>User interface</Badge>
              The system should have a user-friendly interface that allows customers to easily browse through different restaurants, menus, and dishes. 『food-delivery』
              <ExternalLinkIcon mx="2px" />
            
          </ListItem>
  
          <ListItem>
            
              <Badge mr={2}>Order management</Badge>
              The system should be able to manage orders in real-time, from receiving the order to dispatching the delivery person. It should also provide customers with real-time updates on the status of their orders.
              <ExternalLinkIcon mx="2px" />
            
          </ListItem>
  
          <ListItem>
            
              <Badge mr={2}>Delivery management</Badge>
              The system should be able to manage the delivery process efficiently, from assigning delivery personnel to tracking the delivery in real-time.
            
            <ExternalLinkIcon mx="2px" />
          </ListItem>
  
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
          <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
        </SimpleGrid>
        <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_05.png" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  