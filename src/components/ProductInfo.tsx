import React, { useState } from 'react'
import { Stack, Image, Text, Heading, Badge, Button, Input } from '@chakra-ui/react'

import minus from '../utils/img/icon-minus.svg'
import plus from '../utils/img/icon-plus.svg'
import CustomCart from './Cart'


const ProductInfo:React.VFC = () => {
    let newPrice:string = "125.00";
    let discount:string = "50";
    let oldPrice:string = "250.00";
    const [qty, setQty] = useState(0)
    let stock = 5;


    return (
        <>
        <Stack>
        <Text textTransform="uppercase" fontWeight="bold" letterSpacing={2} fontSize={"sm"} color="primary.500">Sneakers company</Text>
        <Heading>Fall Limited Edition Sneakers</Heading>
        </Stack>
        <Stack spacing={8}>
        <Text color="gray.500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
          <Stack spacing={0}>
          <Stack direction="row" alignItems="center" spacing={4}>
            <Text fontSize={"2xl"} fontWeight={700}>${newPrice}</Text>
            
            <Badge colorScheme="primary" paddingX={2} color="primary.500" fontSize={"md"} borderRadius="md">{discount}%</Badge>
          </Stack>
          <Stack>
            <Text textDecoration="line-through" color={"gray.400"} fontWeight={600}>${oldPrice}</Text>
          </Stack>
          </Stack>

        </Stack>
        <Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={6}>
          <Stack direction="row" backgroundColor={"gray.100"} borderRadius={"md"}>
          <Button cursor={qty < 1 ? "not-allowed" : "pointer"} onClick={()=>qty > 0 ?  setQty(qty-1) : null}>
            <Image src={minus}/>
          </Button>
          <Input width={12} textAlign="center" value={qty} border="none"/>
          <Button cursor={qty >= stock ? "not-allowed" : "pointer"}  onClick={()=>qty >= stock ? null :  setQty(qty+1)}>
          <Image src={plus}/>
          </Button>

        </Stack>

        <Button colorScheme="primary" width={60} leftIcon={<CustomCart color="white"/>}>Add to cart</Button>
          </Stack>

        <Stack>
          {qty >= stock && 
          <Text>Limit : {stock}</Text>}
        </Stack>
        </Stack>
        </>
    )
}

export default ProductInfo;