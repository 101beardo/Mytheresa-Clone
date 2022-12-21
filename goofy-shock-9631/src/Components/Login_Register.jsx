import React, { useState } from 'react'
import { Box, Text, Input, Button, Checkbox,Select, Stack, Radio, RadioGroup} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/AuthReducer/action'

const LoginRegister = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()



  const handleSubmit=()=>{
 
    if(email&&password){
      dispatch(login({email,password})).then(r=>{
        navigate("/womens")
      })
    }
  }
  return (
    <Box id="Login_Register">    
    <Box
    width="100%"
    m="auto"
    mt="20px"
  ></Box>
    <Box display={["block","flex","flex"]}>
        
        {/* Register */}
   
            <Box w={["null","null","50%"]} padding="5%" id="Register">
                <Text fontSize="16.38px" opacity="0.8"> CREATE AN ACCOUNT</Text>
                <Text mt="10px" fontSize="14px" opacity="0.8"> Please enter the following information to create your account. </Text>
                {/* <Input mt="20px" color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input> */}
                <RadioGroup mt="30px" >
                  <Stack direction='row'>
                    <Radio value='1'>Ms.</Radio>
                    <Radio value='2'>Mrs.</Radio>
                    <Radio value='3'>Mr.</Radio>
                  </Stack>
                </RadioGroup>
                <Select mt="20px">
                <option></option>
                <option>academic title</option>
                <option>Dr.</option>
                <option>Prof.</option>
                <option>Prof. Dr.</option>
                </Select>
                <Input mt="20px" placeholder='first name *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
                <Input mt="20px" placeholder='last name *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
                <Input mt="20px" placeholder='Email address *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
                <Input mt="10px" decoration="none" placeholder='Password *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
                <Text mt="15px" opacity="0.8"><Checkbox mt="3px"></Checkbox>  From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at privacy@mytheresa.com.</Text>
                <Text mt="15px" opacity="0.8">I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing privacy@mytheresa.com.</Text>
                <Text mt="15px" opacity="0.8">* required fields</Text>
                <Button mt="25px" padding="15px">REGISTER</Button>
            </Box>
  
         {/* border */}
            <Box
              border="0px"
              borderTop="2px"
              borderColor="gray.200"
              height="100%"
            ></Box>

        {/* Login */}
        <Box w={["null","null","50%"]} padding="5%" id="login">
            <Text fontSize="16.38px" opacity="0.8"> ALREADY REGISTERED?</Text>
            <Text mt="10px" fontSize="14px" opacity="0.8"> If you have an account with us, please log in. </Text>
            <Input mt="20px" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email address *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
            <Input mt="10px" type="password" value={password} onChange={e=>setPassword(e.target.value)} decoration="none" placeholder='Password *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
            <Text mt="5px" opacity="0.8">* required fields</Text>
            <Text mt="10px" opacity="0.8" _hover={{cursor:"pointer", opacity:"1" }}>Forgot Your Password?</Text>
            <Button color="white" bg="black" mt="20px" onClick={handleSubmit} >LOGIN</Button>
            <Text mt="15px" opacity="0.8">At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.</Text>
        </Box>
    </Box>
    </Box>  
  )
}

export default LoginRegister;