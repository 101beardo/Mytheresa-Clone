import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteData, getData, getdata } from '../Redux/AppReducer/action'
import { store } from '../Redux/store'

const Admin = () => {
  const data=useSelector(store=>store.AppReducer.data)
  const disapatch=useDispatch()
  const navigate=useNavigate()


  useEffect(()=>{
    
      disapatch(getData)
    
  },[data.length,disapatch])



  console.log(data)
  return (
    <>
    <Box  display='flex' justifyContent='space-evenly' border="px solid red">
      <Button mb="10px" onClick={()=>navigate('/add')} >Add New Products</Button>
    
      <Text  color="gray" paddingTop='0px' textAlign={'center'}>{data.length} Products in Total</Text>
     
    </Box>
    <hr/>
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    
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
                     <Box display={['block','block','flex']} justifyContent={["space-between","space-evenly",'space-between']}>
                      <Button >Edit</Button>
                      <Button onClick={()=>{disapatch(deleteData(item.id))}} >Delete</Button>
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

export default Admin
