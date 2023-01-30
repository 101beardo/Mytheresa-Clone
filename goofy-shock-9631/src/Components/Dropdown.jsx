import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Image,
     Link,
    Input,
    Button
} from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";

 function Dropdown() {
    const [value,setValue]=useState("")
    const navigate=useNavigate();
    const data=useSelector((store)=>store.AppReducer.data);
    // console.log(data,"datalength");
    const onChange=(e)=>{
        setValue(e.target.value)

    }  
    const onSearch=(searchTerm)=>{
        setValue(searchTerm)
    }
    // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box  mb="10px" align="center">
         <Box 
          mb="6px"
          w="100%" 
          h="70px" 
          p="20px"
          display={["none","none","flex"]}
          justifyContent="space-between"
          fontSize={["14px"]}
    
          
          >
          <Box  w="59%" display="flex" justifyContent="space-evenly" >
                <Link color="gray" style={{ textDecoration: 'none' }}   onClick={()=>{navigate(`/arrival`)}}>NEW ARRIVALS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#mens">DESIGNERS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">CLOTHING</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">SHOES</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">BAGS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">ACCESSORIES</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">FESTIVE SEASON</Link>
                <Link color="red" style={{ textDecoration: 'none' }}  href="#">SALE</Link>
          </Box>
          
      
                <Box fontSize={['12px']} mr="60px" p="10px"  w="18%" display="flex" justifyContent="right" alignItems="center" border="1px solid lightgray" >
                <SearchIcon boxSize="18px" pos="absolute"/>
                <Input value={value} onChange={onChange} variant='unstyled'  placeholder=''/>    
                <Button display="none" onClick={()=>onSearch(value)}></Button>
                <Box w="1500%" mt="170px" border="px solid red">
            {data.filter(item=>{
              const searchTerm=value.toLowerCase();
              const fullname=item.pa1.toLowerCase();
              return searchTerm && fullname.startsWith(searchTerm) &&
              fullname!==searchTerm
            }).slice(0,2)
            .map((item)=>(
              (
               <Link style={{ textDecoration: 'none' }}  onClick={()=>{navigate(`/product/${item.id}`)}}>
                <Box  
                display="inline"
                onClick={()=>onSearch(item.pa1)} 
                bgColor="white"
                className='dropdown-row' 
                cursor='pointer'
                textAlign='start'
                // margin="2px 0px 20px 20px"
                key={item.price}>
                  {item.pa1}
                 <Box>
                  <Image  bgColor="grey" width="20%" src={item.lazyloaded}/>
                 </Box>
                </Box>
                </Link> 
                )
            ))}
          </Box>
          </Box>

                
           
      </Box>
      <hr /> 
      </Box>
    )
}

export default Dropdown


