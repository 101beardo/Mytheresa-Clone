import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from './Sidebar'
import { getdata } from '../Redux/AppReducer/action';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import { useState } from 'react';


function Arrival() {
    const dispatch=useDispatch();

    const data=useSelector((store)=>store.AppReducer.data);
    console.log('sdkjfb',data);
  useEffect(()=>{
    dispatch(getdata)
    // axios.get('http://localhost:8080/mens').then((res)=>setData(res.data))
  },[]);
  //const nPages = Math.ceil(data.length /10)
// console.log('shshsh',data.mens);
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
            data&&data.map((item)=>{
            return(
                    <Box key={item.price}>
                     
                      <Text paddingLeft="5px" color="gray" position='absolute'>{item.productbutton}</Text>
                      <Image 
                      borderRadius='10px'
                      bgColor="white"
                      w="100%" 
                      src={item.lazyloaded} 
                      alt="shiv"/>
                      <Text fontSize="18px" color="black">{item.ph1}</Text>
                      <Text color="gray">{item.pa1}</Text>
                     <Text fontWeight='bold' color="black">{item.price}</Text>
                     <Box display={['block','block','flex']} justifyContent={["space-between","space-evenly",'space-between']}>
                      <Button >ADD TO CART</Button>
                      <Button >ADD TO WISHLIST</Button>
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