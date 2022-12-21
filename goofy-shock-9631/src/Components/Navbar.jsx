import React from 'react'
import { Box, Link, useDisclosure,Button, Collapse, Icon, Image, useColorModeValue, Text} from '@chakra-ui/react'
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
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/login`)}}>My account</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/wishlist`)}}>My wishlist</Link>

                <Link style={{ textDecoration: 'none' }}  href='#'>Malaysia | English</Link>
                {isAuth ? <Box display="flex" > <Link mr="10px" style={{ textDecoration: 'none' }}  onClick={() => {}} >Logout</Link> <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/admin`)}}><Icon as={AiOutlineUser}/>  </Link></Box> : <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/logini`)}}>Login</Link>}
          </Box>
          </Box>
     


      
          {/* <Link style={{ textDecoration: "none" }} onClick={onOpen}>
            Malaysia | English
          </Link>

                <Link style={{ textDecoration: "none" }} onClick={onOpen}> Malaysia | English</Link>


          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
            borderBottomRadius="0"
            display={["none", "none", "flex"]}
          >
            <ModalOverlay />
            <ModalContent>
              <Box bg="#F2F2F2" pb="20px">
                <ModalHeader
                  m="auto"
                  fontWeight="light"
                  fontSize="md"
                  textAlign="center"
                  mb="25px"
                >
                  PLEASE CHOOSE THE DESTINATION OF DELIVERY.
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box display="flex" gap="5%">
                    <Box width="30%">
                      <Text as="h4" fontSize="sm">
                        YOUR REGION
                      </Text>
                      <Select
                        variant="outline"
                        placeholder="Asia"
                        htmlSize={4}
                        width="auto"
                        mt="3px"
                      >
                        <option>Please choose...</option>
                        <option>All</option>
                        <option>Africa</option>
                        <option>Europe</option>
                        <option>Latin America</option>
                        <option>North America</option>
                        <option>Oceania</option>
                      </Select>
                    </Box>
                    <Box height="80%" width="45%">
                      <Text as="h4" fontSize="sm">
                        YOUR DELIVERY DESTINATION
                      </Text>
                      <Select
                        variant="outline"
                        placeholder="India"
                        htmlSize={4}
                        width="auto"
                        mt="3px"
                      >
                        <option>Please choose...</option>
                        <option>Azerbaijan</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Bhutan</option>
                        <option>Brunei</option>
                        <option>China</option>
                        <option>Georgia</option>
                        <option>Hong Kong</option>
                        <option>Indonesia</option>
                        <option>Israel</option>
                        <option>Japan</option>
                        <option>Japan</option>
                      </Select>
                    </Box>
                    <Box height="80%" width="30%">
                      <Text as="h4" fontSize="sm">
                        YOUR LANGUAGE
                      </Text>
                      <Select
                        variant="outline"
                        placeholder="English"
                        htmlSize={4}
                        width="auto"
                        mt="3px"
                      >
                        <option>Please choose a language</option>
                      </Select>
                    </Box>
                  </Box>
                  <Button
                    color="white"
                    bg="black"
                    display="block"
                    m="auto"
                    mt="30px"
                  >
                    CONTINUE SHOPPING
                  </Button>
                </ModalBody>
              </Box>

              <ModalFooter pb="30px">
                <Text as="p" textAlign="center">
                  Please note: the items in your shopping bag may be deleted if
                  you change your region or your delivery destination.
                </Text>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </Box> 
        </Box> */}
        <Box w="100%" 
          h="70px" 
          p="20px"
          display={["flex","flex","none"]}
          position={"fixed"}
          fontSize='20px'
          bgColor="white"
          zIndex={99999}
          align="right">
                <Box w="100%">
                        {isOpen ? <Button  onClick={onToggle}   p="10px" ><Icon boxSize="25px" as={CgClose}/></Button> : <Button bgColor="white" onClick={onToggle}   p="10px" ><Icon  boxSize="25px" as={GiHamburgerMenu}/></Button> } 
       
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
      
</Box>
  
  );
};

export default Navbar;
