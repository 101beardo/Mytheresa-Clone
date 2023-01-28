import React, { useState } from 'react';
import { Box, Text, Input, Button} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';

const Login = () => {
  // const isAuthError=useSelector(store=>store.AuthReducer.isAuthError)
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
    else{
      alert("Wrong Credentials")
    }
  }
  return (
    <Box padding="5%" id="login">
            <Text fontSize="16.38px" opacity="0.8"> ALREADY REGISTERED?</Text>
            <Text mt="10px" fontSize="14px" opacity="0.8"> If you have an account with us, please log in. </Text>
            <Input mt="20px" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email address *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
            <Input mt="10px" type="password" value={password} onChange={e=>setPassword(e.target.value)} decoration="none" placeholder='Password *' color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input>
            <Text mt="5px" opacity="0.8">* required fields</Text>
            <Text mt="10px" opacity="0.8" _hover={{cursor:"pointer", opacity:"1" }}>Forgot Your Password?</Text>
            <Button color="white" bg="black" mt="20px" onClick={handleSubmit} >LOGIN</Button>
            <Text mt="15px" opacity="0.8">At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.</Text>
        </Box>
  )
}

export default Login;