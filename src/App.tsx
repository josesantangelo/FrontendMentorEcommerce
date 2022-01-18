
import { Stack, Container, StackDivider} from '@chakra-ui/react'
import Nav from './components/Nav'

import image1 from './utils/img/image-product-1.jpg'
import image2 from './utils/img/image-product-2.jpg'
import image3 from './utils/img/image-product-3.jpg'
import image4 from './utils/img/image-product-4.jpg'
import previous from './utils/img/icon-previous.svg'
import next from './utils/img/icon-next.svg'
import Carousel from './components/Carousel'
import ProductInfo from './components/ProductInfo'
function App() {

  return (
    <Container as="main" maxWidth="container.lg">
      <Stack divider={<StackDivider/>} spacing={0}>
          <Nav/>
        <Stack direction={{base: "column", sm: "row"}} >
          <Stack flex={1} marginTop={6}>
            <Carousel prev={previous} next={next} images={[image1,image2,image3,image4]}/>
          </Stack>
          <Stack flex={1} spacing="10%" alignSelf="center">
            <ProductInfo/>
          </Stack>
        </Stack>
      </Stack>

        
    </Container>
  )
}

export default App


