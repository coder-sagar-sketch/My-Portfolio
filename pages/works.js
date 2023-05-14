import {Container,  Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'


import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'


const Works =() =>{
    return (
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Portfolio" thumbnail={thumbInkdrop}>
          A Portfolio is a collection of materials that showcase an individual's skills, experience, and achievements to potential employers.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Real-time food delivery System"
            thumbnail={thumbWalknote}
          >
            Real-time food delivery system should be fast, reliable, and easy to use for both customers and restaurants. 
            
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Frontend design of youtube"
            thumbnail={thumbFourPainters}
          >
            The frontend design of YouTube is a combination of simple and elegant visual design and user interface that allows users to easily discover, view, and interact with videos on the platform.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="E-shop Web App">
          E-shop Web App suggests fresh vegetable(...). shops based on a web app is a website or web application that enables users to browse and purchase vegetables online.

So, you can check a shop info as soon as you found. Let's go out and have a delicious vegetables!
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem id="margelo" thumbnail={thumbMargelo} title=" Musisc-Player">
        Music player clone should provide users with a familiar and seamless music listening experience, while also offering unique features and customization options that distinguish it from the original music player.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Room- Chat App"
          >
            A room chat web app is a web-based application that allows users to participate in real-time chat conversations with others in a specific chat room or channel.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem id="styly" thumbnail={thumbStyly} title="Typing- Speed Check">
        A typing speed check web app is a web-based application that allows users to test and measure their typing speed and accuracy.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
        <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Analog Clock">
        Analog - Clock
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      

      

      

      
        </Container>
        </Layout>
    )
}

export default Works
