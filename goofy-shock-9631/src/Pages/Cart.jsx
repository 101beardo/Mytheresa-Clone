
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../Redux/AppReducer/action';
import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'



const Cart = () => {
    const bag=useSelector((store)=>store.AppReducer.bag);
    const dispatch=useDispatch()


    useEffect(()=>{
      
        dispatch(getCartData())
      
    },[bag.length,dispatch])
    console.log(bag)
  
  return (
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    
    <Box textAlign='center' w={['100%','100%','100%']} border="px solid red">
            <SimpleGrid border="px solid red" 
                 columns={[1,2,3]} 
                 spacing='20px'>
                     {
            bag.length && bag.map((item)=>{
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
  )
}

export default Cart
