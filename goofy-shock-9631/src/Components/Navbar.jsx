import React from 'react'
import {Select,ModalOverlay,ModalFooter,ModalBody,Text,Box, Modal,ModalContent,ModalHeader,ModalCloseButton, Link, useDisclosure,Button, Collapse, Icon, Image} from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"
import { useNavigate } from 'react-router'




const Navbar = () => {
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
                <Link style={{ textDecoration: 'none' }}  href='#'>My account</Link>
                <Link style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/wishlist`)}}>My wishlist</Link>

                {/* <Link style={{ textDecoration: 'none' }}  href='#'>Malaysia | English</Link> */}
          
     


      
          <Link style={{ textDecoration: "none" }} onClick={onOpen}>
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
        </Box>
      
      <Image  mt="30px"  w="22%" src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20221130T110112'/>
      </Box>

  
  );
};

export default Navbar;
