import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from './Sidebar'
import { getdata } from '../Redux/AppReducer/action';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import { useState } from 'react';
const Items=[1,2,3,4,4,5,5,6,6,7]
console.log(items);
function Arrival() {
  //const [page,setPage]=useState(1);


    const dispatch=useDispatch();
    const our =dispatch(getdata())
    console.log(our);
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
         data.map((item)=>{
            return(
                    <Box key={item.price}>
                      <Text pos="absolute" pl={[300,180,300,300]} color="gray">❤</Text>
                      <Text paddingLeft="5px" color="gray" position='absolute'>{item.productbutton}</Text>
                      <Image 
                      borderRadius='10px'
                      bgColor="white"
                      w="100%" 
                      src={item.lazyloaded} 
                      alt="shiv"/>
                      <Text fontSize="18px" color="black">{item.ph1}</Text>
                      <Text color="gray">{item.pa1}</Text>
                     <Text fontWeight='bold' color="black">{item.price}</Text></Box>
                           )
                          })}
               
                </SimpleGrid>
           
    </Box>
    </Box>
    </>
  )
}
function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Arrival