import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteData, getData, getdata } from '../Redux/AppReducer/action'
import { store } from '../Redux/store'

const Admin = () => {
  const data=useSelector(store=>store.AppReducer.data)
  const dispatch=useDispatch()
  const navigate=useNavigate()


  useEffect(()=>{
    
      dispatch(getdata())
    
  },[data.length,dispatch])



  console.log(data)
  return (
    <>
    <Box  display='flex' justifyContent='space-evenly' border="px solid red">
      <Button fontSize={["16px","","","20px"]} border="1px solid black" _hover={{bgColor:'white'}} bgColor="white"  m="20px"  onClick={()=>navigate('/add')} >Add New Products</Button>
    
      <Text  color="gray" paddingTop='0px' textAlign={'center'}>{data.length} Products in Total</Text>
     
    </Box>
    <hr/>
    <Box boxShadow='base' p='6' rounded='md' bg='white'  mt="20px"  display='flex' w="100%">
    
    <Box textAlign='center' w={['100%','100%','100%']} border="px solid red">
    <SimpleGrid columns={[1,2,3,4]} spacing="10px" >
              {  data?.length>0&&
                data.map((e)=>{
                  return(
                    <Box>
                    <Link to={`/product/${e.id}`}><Box boxShadow='xs' p='6' rounded='md'  border="px solid rgb(153, 153, 153)">
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
                    </Link>
                    
                    <Button fontSize={["20px","","","20px"]}  bgColor="black" color="white" _hover={{bgColor:'black'}}  onClick={()=>{dispatch(deleteData(e.id))}} >Delete</Button>
                    <Button fontSize={["16px","","","20px"]} border="1px solid black" _hover={{bgColor:'white'}} bgColor="white"  m="20px"  onClick={()=>navigate(`/edit/${e.id}`)} >Update Price</Button>
                    </Box>
                  )
                })
              }
            </SimpleGrid>
                
           
    </Box>
    </Box>
    </>
  )
}

export default Admin
