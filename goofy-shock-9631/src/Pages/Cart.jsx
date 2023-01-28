
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartData, getCartData } from '../Redux/AppReducer/action';
import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



const Cart = () => {
    const bag=useSelector((store)=>store.AppReducer.bag);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [total, settotal] = useState(0);


    useEffect(()=>{
      
        dispatch(getCartData())
      
    },[bag.length,dispatch])
    

    const handleTotal = () => {
      let Total = 0;
      bag.map((ele) => {
        Total += Math.floor(ele.price);
      });
      settotal(Total);
    };
    useEffect(() => {
      handleTotal();
    }, [bag]);



 
  return (
    
    
      <Box align="center" >
            {
            bag.length && bag.map((item)=>{
            return(
              <Box p="50px" w="90%" display={"flex"}  border={"1px solid gray"} key={item.id}>
                <Box  w="100%" >  

                <Text  color="black">{item.description}</Text>

                <Text paddingLeft="5px" color="gray">{item.title}</Text>
              
                <Text fontSize="18px" color="black">{item.category}</Text>
             
                <Text fontWeight='bold' color="black">{`Price : ${item.price}`}</Text>
                
                <Button onClick={()=>{dispatch(deleteCartData(item.id))}} >Delete</Button>
                
                </Box>

                <Box boxSize={["80px","90px","140px"]} >
              
                  <Image 
                  borderRadius='10px'
                  bgColor="white"
                  h="100%"
                  src={item.image} 
                  />
                </Box>
            
             </Box>
            )
          })} 
          <Box w="90%" fontWeight='bold' align="end" >
            Total Price : {total}
          </Box>
          <Button m="20px" onClick={()=>{navigate(`/checkout`)}} >Proceed to checkout</Button>      
      </Box>
  )
}

export default Cart
