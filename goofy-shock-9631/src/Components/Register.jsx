import React from 'react'
import { Box, Text, Input, Button, Checkbox,Select} from '@chakra-ui/react'

const Register = () => {
  return (
    <Box w="50%" padding="5%">
    <Text fontSize="16.38px" opacity="0.8"> CREATE AN ACCOUNT</Text>
    <Text mt="10px" fontSize="14px" opacity="0.8"> Please enter the following information to create your account. </Text>
    {/* <Input mt="20px" color="rgb(117, 117, 117)" background-color="#fbfbfb"></Input> */}
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
  )
}

export default Register