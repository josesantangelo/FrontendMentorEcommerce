import React from 'react'
import { Stack, Image, Link, Avatar } from '@chakra-ui/react'
import logo from '../utils/img/logo.svg'
import cart from '../utils/img/icon-cart.svg'
import avatar from '../utils/img/image-avatar.png'


const Nav:React.VFC = () => {
    return (
        <Stack spacing={6} paddingBottom={6} paddingTop={2} direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={12} alignItems={"center"}>
          <Stack>
            <Image width="100%" src={logo} />
          </Stack>
          <Stack direction="row" color={"gray.400"} fontSize={"sm"} spacing={6}>
            <Link>Collections</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            
          </Stack>
          
        </Stack>
        <Stack direction="row" spacing={6} alignItems="center">
           <Image src={cart}  width={6} height={6}/>
          <Avatar src={avatar} width={10} height={10}/>
          


        </Stack>
      </Stack>
    )
}

export default Nav;
