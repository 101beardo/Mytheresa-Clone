import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from './Sidebar'
import { addCartData, addWishData, getdata } from '../Redux/AppReducer/action';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Arrival() {
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const data=useSelector((store)=>store.AppReducer.data);
   
    // console.log('sdkjfb',data);
  useEffect(()=>{
    dispatch(getdata)
    // axios.get('http://localhost:8080/mens').then((res)=>setData(res.data))
  },[data.length,dispatch]);
  //const nPages = Math.ceil(data.length /10)
// console.log('shshsh',data.mens);

const handleCart=(payload)=>{
  dispatch(addCartData(payload)) 
  navigate(`/cart`)
}

const handleWish=(payload)=>{
  dispatch(addWishData(payload)) 
  navigate(`/wishlist`)
}

{/* <Button onClick={()=>{handleCart(item)}}>ADD TO CART</Button>
                     <Button onClick={()=>{handleWish(item)}} >ADD TO WISHLIST</Button> */}
  return (
    <>
    <Box  display='flex' justifyContent='space-evenly' border="px solid red">
    
      <Text  color="gray" paddingTop='0px' textAlign={'center'}>{data.length} Products</Text>
      <Select size={[100,100,100]} color="gray" border="none" w="10%">
        <option>Sorting</option>
        <option>Price low to high</option>
        <option> Price high to low</option>
        <option>New Items</option>
      </Select>
      
     
    </Box>
    <hr/>
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    <Sidebar/>
    <Box textAlign='center' w={['100%','100%','100%']} border="px solid red">
            <SimpleGrid border="px solid red" 
                 columns={[1,2,3]} 
                 spacing='20px'>
                     {
            data?.length && data.map((item)=>{
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
                     <Box w="100%" display={['block','block','flex']} justifyContent={["space-between","space-evenly",'space-between']}>
                      <Button fontSize={"10px"} onClick={()=>{handleCart(item)}}>ADD TO CART</Button>
                     <Button fontSize={"10px"}  onClick={()=>{handleWish(item)}} >ADD TO WISHLIST</Button>
                     </Box>
                     </Box>
                           )
                          })}
               
                </SimpleGrid>
                
           
    </Box>
    </Box>
    </>
  )
}


export default Arrival