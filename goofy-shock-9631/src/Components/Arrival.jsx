import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from './Sidebar'
import { getdata } from '../Redux/AppReducer/action';
import Pagination from './Pagination';
import { useState } from 'react';
import { useMemo } from 'react';
import {useLocation,useSearchParams} from 'react-router-dom'


let PageSize=6;
function Arrival() {
  //const [data,setData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const dispatch=useDispatch();
  const [searchParams,setSearchParams]=useSearchParams();
  const location=useLocation();
  //const [category,setCategory]=useState(initialCategory||[])
  const initialSort=searchParams.getAll('sort')
  const [sort,setSortBy]=useState(initialSort[0] || "");

  const handleSort=(e)=>{
      setSortBy(e.target.value);
  }
  const data=useSelector((store)=>store.AppReducer.data);
  const [products,setProducts]=useState(data);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(()=>{
    dispatch(getdata)
   //  axios.get('http://localhost:8080/mens').then((res)=>setData(res.data))
  },[]);

  useEffect(()=>{
    let params={};
    sort&&(params.sort=sort)
    setSearchParams(params)
  },[setSearchParams,sort])

   useEffect(()=>{

    if(location||data.length===0){
      const sortBy=searchParams.get("sort")
      const getDataParams={
        params:{
          _sort:sortBy&&"price",
          _order:sortBy
        }
      }
      dispatch(getdata(getDataParams))
    }
   },[location.search])
 
 
 
  return (
    <>
    <Box  display='flex' justifyContent='space-evenly' border="px solid red">
    
      <Text  color="gray" paddingTop='0px' textAlign={'center'}>{data.length} Products</Text>
      <Select onChange={handleSort} size={[100,100,100]} color="gray" border="none" w="10%">
        <option>Sorting</option>
        <option defaultChecked={sort==='asc'} name="sortBy" value="low-to-high"> Price low to high</option>
        <option defaultChecked={sort==='desc'} name='sortBy' value="high-to-low"> Price high to low</option>
      </Select>
      
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
     
    </Box>
    <hr/>
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    <Sidebar/>
    
    <Box textAlign='center' w={['100%','100%','100%']} border="px solid red">
            <SimpleGrid border="px solid red" 
                 columns={[1,2,3]} 
                 spacing='20px'>
                     {
            currentTableData.map((item)=>{
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
                     <Text fontWeight='bold' color="black">₤ {item.price}</Text>
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