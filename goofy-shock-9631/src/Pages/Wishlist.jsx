import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Image, Input, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWishData } from '../Redux/AppReducer/action';

const Wishlist = () => {
    const wish=useSelector((store)=>store.AppReducer.wish);
    const dispatch=useDispatch()


    useEffect(()=>{
      
        dispatch(getWishData())
      
    },[wish.length,dispatch])
    console.log(wish)
  
  return (
    <Box  mb="10px" align="center">
    
    <Box  w="80%" >
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    
    <Box textAlign='center' w={['100%','100%','100%']} border="px solid red">
            <SimpleGrid border="px solid red" 
                 columns={[1,2,3]} 
                 spacing='20px'>
                     {
            wish.length && wish.map((item)=>{
            return(
                    <Box p="50px" m="50px" align="center" borderRadius="5%" boxShadow="dark-lg" key={item.id}>
                     
                      <Text paddingLeft="5px" color="gray">{item.title}</Text>
                      <Image 
                      borderRadius='10px'
                      bgColor="white"
                      w="50%" 
                      h="50%"
                      src={item.image} 
                      />
                      <Text fontSize="18px" color="black">{item.category}</Text>
                      {/* <Text color="gray">{item.description}</Text> */}
                     <Text fontWeight='bold' color="black">{item.price}</Text>
                     <Box display={['block','block','flex']} justifyContent={["space-between","space-evenly",'space-between']}>
                      <Button >Proceed to checkout</Button>
                     
                     </Box>
                     </Box>
                           )
                          })}
               
                </SimpleGrid>
                
           
    </Box>
    </Box>
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
