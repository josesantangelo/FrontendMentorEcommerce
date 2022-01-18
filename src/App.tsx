import { useState } from 'react'
import { Text, Stack, Container, StackDivider, Heading,Badge, Button, Input, Image} from '@chakra-ui/react'
import Nav from './components/Nav'
import minus from './utils/img/icon-minus.svg'
import plus from './utils/img/icon-plus.svg'
import CustomCart from './components/Cart'
import image1 from './utils/img/image-product-1.jpg'
import image2 from './utils/img/image-product-2.jpg'
import image3 from './utils/img/image-product-3.jpg'
import image4 from './utils/img/image-product-4.jpg'
import previous from './utils/img/icon-previous.svg'
import next from './utils/img/icon-next.svg'
import Carousel from './components/Carousel'
import ProductInfo from './components/ProductInfo'
function App() {
let newPrice:string = "125.00";
let discount:string = "50";
let oldPrice:string = "250.00";
const [qty, setQty] = useState(0)
let stock = 5;
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


