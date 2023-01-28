import React from 'react'
import { Box, Link, useDisclosure,Button, Collapse, Icon, Image} from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { store } from '../Redux/store'
import { AiOutlineUser } from 'react-icons/ai'




const Navbar = () => {
  const isAuth=useSelector(store=>store.AuthReducer.isAuth)
  // console.log(isAuth)
     // border="1px solid red"

  const { isOpen, onToggle,onClose,onOpen } = useDisclosure()
  const navigate=useNavigate()

  return (
   <Box mb="50px"  align="center" >
      <Box 
          mb="40px"
          w="100%" 
          h="70px" 
          p="20px"
          display={["none","none","flex"]}
          justifyContent="space-between"
        //   position={"fixed"}
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
                {isAuth ? <Box display="flex" > <Link mr="10px" style={{ textDecoration: 'none' }}  onClick={() => {}} >Logout</Link> 
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/admin`)}}><Icon as={AiOutlineUser}/>  </Link></Box> : <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/logini`)}}>Login</Link>}
          </Box>
          </Box>
     


      
        
      <Image  mt="30px"  w="22%" src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20221130T110112'/>
      
</Box>
  
  );
};

export default Navbar;
