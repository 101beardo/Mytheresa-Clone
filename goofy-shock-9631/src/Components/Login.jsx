import React from 'react';
import { Box, Text, Input, Button} from '@chakra-ui/react'

const Login = () => {
  return (
    <Box w="50%" padding="5%">
     <Text fontSize="16.38px" opacity="0.8"> ALREADY REGISTERED?</Text>
     <Text mt="10px" fontSize="14px" opacity="0.8"> If you have an account with us, please log in. </Text>
     <Input mt="20px" placeholder='Email address *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
     <Input mt="10px" decoration="none" placeholder='Password *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
     <Text mt="5px" opacity="0.8">* required fields</Text>
     <Text mt="10px" opacity="0.8" _hover={{cursor:"pointer", opacity:"1" }}>Forgot Your Password?</Text>
     <Button color="white" bg="black" mt="20px">LOGIN</Button>
     <Text mt="15px" opacity="0.8">At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.</Text>
    </Box>
  )
}

export default Login;