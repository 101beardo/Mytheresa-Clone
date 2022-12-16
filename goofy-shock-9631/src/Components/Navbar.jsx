import React from 'react'
import { Box, Link, useDisclosure,Button, Collapse, Icon, Image} from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"
import { useNavigate } from 'react-router'




const Navbar = () => {
     // border="1px solid red"

  const { isOpen, onToggle } = useDisclosure()
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
                <Link style={{ textDecoration: 'none' }}  href='#'>My account</Link>
                <Link style={{ textDecoration: 'none' }}  href='#'>My wishlist</Link>
                <Link style={{ textDecoration: 'none' }}  href='#'>Malaysia | English</Link>
          </Box> 
      </Box>

      <Box w="100%" 
          h="70px" 
          p="20px"
          display={["flex","flex","none"]}
          // position={"fixed"}
          fontSize='20px'
          zIndex={1}
          align="right">
                <Box w="100%">
                        {isOpen ? <Button  onClick={onToggle}   p="10px" ><Icon boxSize="25px" as={CgClose}/></Button> : <Button  onClick={onToggle}   p="10px" ><Icon boxSize="25px" as={GiHamburgerMenu}/></Button> } 
       
                        <Collapse in={isOpen} animateOpacity>
                                <Box
                                    p='90px'
                                    mt='4'
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
      <Image  mt="30px"  w="22%" src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20221130T110112'/>
      
      <Box>

      </Box>
   </Box>
  )
}

export default Navbar
