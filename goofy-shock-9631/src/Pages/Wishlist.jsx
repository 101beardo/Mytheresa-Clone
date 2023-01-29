import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Image, Input, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartData, deleteWishData, getdata, getWishData } from '../Redux/AppReducer/action';

const Wishlist = () => {
    const wish=useSelector((store)=>store.AppReducer.wish);
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const handleCart=(payload)=>{
        dispatch(addCartData(payload)) 
        navigate(`/cart`)
      }


    useEffect(()=>{
      
        dispatch(getWishData())
      
      
    },[wish.length,dispatch])
    // console.log(wish)
  
  return (
    <Box  mb="10px" align="center">
    
    <Box  w="80%" >
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    
    <Box w="100%" border="px solid blue">
    <SimpleGrid columns={[1,2,3,4]} spacing="10px" >
              {  wish?.length>0&&
                wish.map((e)=>{
                  return(
                    <Box boxShadow='xs' >
                    <Box style={{cursor:"pointer"}} onClick={()=>{navigate(`/product/${e.id}`)}} ><Box  p='6' rounded='md'  border="px solid rgb(153, 153, 153)">
                      <Box key={e.id} border="px solid blue"  w="100%"> 
                        <Image border="px solid blue" src={e.lazyloaded}/>
                      </Box>
                     <Box border="px solid green" h="50%" w="100%">
                      <Text mt="5px" ml="5px" fontSize="16px" color="rgb(153, 153, 153)">{e.pa1}</Text>
                     <Box alignItems="center">
                      <Text   ml="5px" color="black" fontSize="20px" fontWeight="500" >{e.category}</Text>
                      <Text style={{ marginLeft:"5px",  color:"black"}}>₹{e.price}</Text> 
                      <Text ml="5px" fontWeight="700" color="rgb(35,187,117)">{e.productbutton}</Text> 
                      </Box>
                      {/* <Image ml="10px" w="16px" h="16px" display="inline" src={disImg}/> */}
                      {/* <Text  style={{display:"inline",fontSize:"14px", color:" color: rgb(102, 102, 102);", marginLeft:"10px"}}>₹ 100 discount on 1st order</Text> */}
                      <Button  ml="5px" borderRadius="50px" h="22px" w="50%" color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      {/* <Button  _hover={{bgColor:'rgb(35,187,117)'}} ml="10px" mt="10px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">{e.rating}⭐</Button> */}
                      </Box>
                    </Box>
                    </Box>
                    <Button m="5px"  w={["115px","","","50%"]} fontSize={["20px","","","20px"]}  bgColor="black" color="white" _hover={{bgColor:'black'}}  onClick={()=>{handleCart(e)}} >{`🛒`}Buy Now</Button>
                    <Button fontSize={["16px","","","20px"]} border="1px solid black" _hover={{bgColor:'white'}} bgColor="white"  m="20px"  onClick={()=>{dispatch(deleteWishData(e.id))}} >Remove From Wishlist</Button>
                    </Box>
                  )
                })
              }
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
