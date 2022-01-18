import React, { useState } from 'react'
import { Stack, Image} from '@chakra-ui/react'

interface Props {
    images: string[];
    prev: string;
    next: string;
}


const Carousel:React.VFC<Props> = ({images, prev, next}) => {
    
    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
         <Stack width="100%" minWidth="350px">
             
             <Image src={selectedImage} width="80%" borderRadius="md" position="relative" zIndex={1}/>
             
             
             
             

             
             <Stack direction="row" spacing={5} width="80%">
                 {images.map(image => 
                 <Image width="21%" opacity={selectedImage === image ? 0.5 : 1} src={image}  cursor="pointer" borderRadius="md" onClick={()=> {
                     setSelectedImage(image);
                  
                    }}/>)
                 }
             </Stack>
         </Stack>   
    )
}

export default Carousel;
