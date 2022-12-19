// import { Box, Button, Link } from "@chakra-ui/react"
// import { SearchIcon } from '@chakra-ui/icons'
// import { Input } from '@chakra-ui/react'
// import { useDisclosure } from "@chakra-ui/react"


// function Dropdown(){
//     return(
//    <Box>
//          {/* <Box 
//           mb="6px"
//           w="100%" 
//           h="70px" 
//           p="20px"
//           display={["none","none","flex"]}
//           justifyContent="space-between"
//           fontSize={["14px"]}
//         
          
//           >
//           <Box  w="59%" display="flex" justifyContent="space-evenly" >
//                 <Link color="gray" style={{ textDecoration: 'none' }} >NEW ARRIVALS</Link>
//                 <Link color="gray" style={{ textDecoration: 'none' }}  href="#mens">DESIGNERS</Link>
//                 <Link color="gray" style={{ textDecoration: 'none' }}  href="#">CLOTHING</Link>
//                 <Link color="gray" style={{ textDecoration: 'none' }}  href="#">SHOES</Link>
//                 <Link color="gray" style={{ textDecoration: 'none' }}  href="#">BAGS</Link>
//                 <Link color="gray" style={{ textDecoration: 'none' }}  href="#">ACCESSORIES</Link>
//                 <Link color="gray" style={{ textDecoration: 'none' }}  href="#">FESTIVE SEASON</Link>
//                 <Link color="red" style={{ textDecoration: 'none' }}  href="#">SALE</Link>
//           </Box>
          
      
//                 <Box fontSize={['12px']} mr="60px" p="10px"  w="18%" display="flex" justifyContent="right" alignItems="center" border="1px solid lightgray" >
//                 <SearchIcon boxSize="18px" pos="absolute"/>
//                 <Input variant='unstyled'  placeholder='Search for...'/>    
//                 </Box>
           
//       </Box>
//       <hr /> */}

//     </Box>
//     )
    
// }
   
// export default Dropdown
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    Link
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


export default function Navbar() {
    const navigate=useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}>
                NEW ARRIVALS
               
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
            
            
        </Menu>
        
    )
}