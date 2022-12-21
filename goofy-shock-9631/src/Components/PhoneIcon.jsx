
import { Icon } from '@chakra-ui/icon'

import { Box, Text } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'


import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"


const PhoneIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box isOpen={isOpen} >
    <Box 
    pos="fixed"
    display={["none","none","flex"]}
    mt="20%"
    bgColor="gray.400"
    boxSize="45px"
    color="white"
    justifyContent="center"
    alignItems="center"
    
    
    >        
      <Icon  boxSize="25px" onMouseEnter={onOpen} onMouseLeave={onClose} as={BsFillTelephoneFill}/>
      
    
    {/* <Box align="center" mt="20%" bgColor="white" pos="fixed" border="1px solid red" w="300px"  onMouseEnter={onOpen} onMouseLeave={onClose} >
    <Text>
    +49 89 127695-101
    </Text>
    <Text>
    Argentina: 0800-666-0663
    </Text>
    <Text>
    Chile: 800-914-515
    </Text>
    <Text>
    Colombia: 01800-518-5268
    </Text>
    <Text>
    Mexico: 01-800-099-0703
    </Text>
    <Text>
    Peru: 0800-78259
    </Text>
    <Text>
    Puerto Rico: 1-787-303-4205
    </Text>
  </Box> */}
  </Box>
  </Box>
  )
}

export default PhoneIcon
