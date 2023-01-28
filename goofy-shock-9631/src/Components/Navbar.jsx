import React from 'react'
import { Box, Link, useDisclosure,Button, Collapse, Icon, Image, useColorModeValue, Text} from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'
import { AiOutlineUser } from 'react-icons/ai'
import {HiOutlineShoppingBag} from 'react-icons/hi'




const Navbar = () => {
  const isAuth=useSelector(store=>store.AuthReducer.isAuth)
  // console.log(isAuth)
     // border="1px solid red"
     
  const { isOpen, onToggle } = useDisclosure()
  const navigate=useNavigate()

  return (
   <Box mb="50px"   align="center" >
      <Box 
          mb="40px"
          w="100%" 
          h="70px" 
          p="20px"
          display={["none","none","flex"]}
          justifyContent="space-between"
          // position={"fixed"}
          zIndex={1}
          >
          <Box  w="25%" display="flex" justifyContent="space-evenly" >
                <Link style={{ textDecoration: 'none' }}  onClick={()=>{navigate(`/womens`)}}>WOMEN</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={()=>{navigate(`/mens`)}}>MEN</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={()=>{navigate(`/kids`)}} >KIDS</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/life`)}}>LIFE</Link>
          </Box>
          
          <Box color="gray" fontSize={['12px']} fontWeight="bold" w="40%" display="flex" justifyContent="space-evenly"  >
                <Link style={{ textDecoration: 'none' }}  href='#r'>Signup for Newsletter</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/login`)}}>My account</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/wishlist`)}}>My wishlist</Link>

                <Link style={{ textDecoration: 'none' }}  href='#'>Malaysia | English</Link>
                {isAuth ? <Box display="flex" > <Link mr="10px" style={{ textDecoration: 'none' }}  onClick={() => {}} >Logout</Link> <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/admin`)}}><Icon as={AiOutlineUser}/>  </Link></Box> : <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/logini`)}}>Login</Link>}
          </Box>
          </Box>
        <Box w="100%" 
          h="70px" 
          p="20px"
          display={["flex","flex","none"]}
          // position={"fixed"}
          fontSize='20px'
          bgColor="white"
          zIndex={99999}
          align="right">
                <Box w="100%">
                        {isOpen ? <Button  onClick={onToggle}   p="10px" ><Icon boxSize="25px" as={CgClose}/></Button> : <Button bgColor="white" onClick={onToggle}   p="10px" ><Icon  boxSize="25px" as={GiHamburgerMenu}/></Button> } 
       
                        <Collapse in={isOpen} animateOpacity>
                                <Box
                                    p='90px'
                                    mt='0px'
                                    bg='white'
                                    rounded='md'
                                    shadow='dark-lg'
                                    zIndex={2}
                                    display="flex"
                                    flexDirection="column"
                                    align="center"
                                    >
              
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href='#'>WOMEN</Link>
            
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}  href="#men">MEN</Link>
              
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}   href="#kids">KIDS</Link>
              
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={onToggle}   href="#">LIFE</Link> 
                                </Box>
                            </Collapse>
                    </Box>
          
        </Box>
    
      
      <Box>
        <Image style={{cursor:"pointer"}} mt="30px" onClick={()=>{navigate(`/womens`)}}  w="22%" src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20221130T110112'/>
      </Box>
      

      
      <Box w={["90%"]}>
        <Box onClick={()=>{navigate(`/cart`)}} style={{cursor:"pointer"}} ml="89%" display={"flex"} >
          <Text mt="6%" >Shopping Bag</Text>
          <Icon boxSize={["40px"]} as={HiOutlineShoppingBag}/>
        </Box>
      </Box>
      
    

     
      
</Box>
  
  );
};

export default Navbar;
