import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Image, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Wishlist = () => {
  return (
    <Box  mb="10px" align="center">
    <Box 
        mb="6px"
        w="100%" 
        h="70px" 
        p="20px"
        display={["none","none","flex"]}
        justifyContent="space-between"
        fontSize={["14px"]}
        >
        <Box  w="59%" display="flex" justifyContent="space-evenly" >
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#">NEW ARRIVALS</Link>
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#mens">DESIGNERS</Link>
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#">CLOTHING</Link>
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#">SHOES</Link>
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#">BAGS</Link>
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#">ACCESSORIES</Link>
              <Link color="gray" style={{ textDecoration: 'none' }}  href="#">FESTIVE SEASON</Link>
              <Link color="red" style={{ textDecoration: 'none' }}  href="#">SALE</Link>
        </Box>
        
    
              <Box fontSize={['12px']} mr="60px" p="10px"  w="18%" display="flex" justifyContent="right" alignItems="center" border="1px solid lightgray" >
              <SearchIcon boxSize="18px" pos="absolute"/>
              <Input variant='unstyled'  placeholder='Search for...'/>    
              </Box>
         
    </Box>
    <Box  w="80%" >
        <Text mb="10px">
            THERE ARE NO PRODUCTS ON YOUR WISHLIST.
        </Text  >
        <Text color="gray" mb="10px" >
            Check out our new arrivals and start adding to your wishlist now!
        </Text>
        <Button mb="40px" >SHOP NEW ARRIVALS</Button>
        <hr/>
        <Box mb="20px" mt="20px" display="flex" >
        <Box  display="flex" justifyContent="center" alignItems="end" m="10px">
        <Image w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/02_Product-Categories/FallWinter22/CW48_PB_Ski_20221213143043.jpg"/>
            <Box position="absolute" mb="20px"  color="white" >
                    <Container  fontSize={["10px","16px","26px"]}>
                          SKIWEAR 
                    </Container>
                    <Button size={['xs','md','lg']} mt="10px" color="black">
                        SHOP NOW {`>>`}
                    </Button>
            </Box>
        </Box>
        <Box  display="flex" justifyContent="center" alignItems="end" m="10px">
        <Image w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/01_Designers/SS23/CW48_PB_Blazers_20221130122421.jpg"/>
            <Box position="absolute" mb="20px" color="white" >
                    <Container  fontSize={["10px","16px","26px"]}>
                        BLAZERS
                    </Container>
                    <Button size={['xs','md','lg']} mt="10px" color="black">
                        SHOP NOW {`>>`}
                    </Button>
            </Box>
        </Box>
        </Box>
        <hr/>
        </Box>
    </Box>
  )
}

export default Wishlist
