import { Box,Button,GridItem,Image,Select,SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Sidebar from './Sidebar'
import { getdata } from '../Redux/AppReducer/action';
import Pagination from './Pagination';


let PageSize=6;
function Arrival() {
  const [currentPage, setCurrentPage] = useState(1);
  const [value,setValue]=useState([])
    const dispatch=useDispatch();

    const data=useSelector((store)=>store.AppReducer.data);
    console.log('sdkjfb',data);
  useEffect(()=>{
    dispatch(getdata)
  
  },[]);
  const handleSort=(e)=>{
    setValue(e.target.value);
 }
  return (
    <>
    <Box  display='flex' justifyContent='space-evenly' border="px solid red">
    
      <Text  color="gray" paddingTop='0px' textAlign={'center'}>{data.length} Products</Text>
      <Select onChange={handleSort} size={[100,100,100]} color="gray" border="none" w="10%">
        <option>Sorting</option>
        <option name="sortBy" value="low-to-high"> Price low to high</option>
        <option  name='sortBy' value="high-to-low"> Price high to low</option>
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
            data&&data.map((item)=>{
            return(
                    <Box p="50px" m="50px" align="center" borderRadius="5%" boxShadow="dark-lg" key={item.id}>
                     
                      <Text paddingLeft="5px" color="gray">{item.title}</Text>
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