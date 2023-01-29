import { Box, Button, Input, Text } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData } from '../Redux/AppReducer/action'

const Add = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [lazyloaded,setLazyloaded]=useState("")
    const [pa1,setPa1]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [productbutton,setProductbutton]=useState("")


    const submitHandler=(e)=>{
        e.preventDefault()
        const payload={lazyloaded,pa1,category,price,productbutton}
        if(payload){

            dispatch(addData(payload))
            .then(()=>navigate('/admin'))
        }

    }

    
  return (
    <Box align="center" >
       <form onSubmit={submitHandler} >
        <Box m="10px" >
        <lable>Add Image URl here : </lable>
        <input  style={{border:"1px solid black"}} value={lazyloaded} placeholder="add image here" onChange={(e)=>setLazyloaded(e.target.value)} />
        </Box>
        <Box m="10px">
        <label>Add Product Title here : </label>
        <input  style={{border:"1px solid black"}} value={pa1} placeholder="add title here" onChange={(e)=>setPa1(e.target.value)} />
        </Box>
        <Box m="10px">
        <label>Add Product Category here : </label>
        <input  style={{border:"1px solid black"}} value={category} placeholder="add category here" onChange={(e)=>setCategory(e.target.value)} />
        </Box>
        <Box m="10px">
        <label>Add Product Price here : </label>
        <input  style={{border:"1px solid black"}} value={price} placeholder="add price here" onChange={(e)=>setPrice(e.target.value)} />
        </Box>
        <Box m="10px">
        <label>Add Product Season here : </label>
        <input  style={{border:"1px solid black"}} value={productbutton} placeholder="add NEW Season here" onChange={(e)=>setProductbutton(e.target.value)} />
        </Box>
        <Button fontSize={["20px","","","20px"]}  bgColor="black" color="white" _hover={{bgColor:'black'}} m="10px" type="submit">Add Product</Button>
       </form>
    </Box>
  )
}

export default Add
