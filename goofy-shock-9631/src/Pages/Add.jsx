import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData } from '../Redux/AppReducer/action'

const Add = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [image,setImage]=useState("")


    const submitHandler=(e)=>{
        e.preventDefault()
        if(image){

            dispatch(addData({image:image}))
            .then(()=>navigate('/arrival'))
        }

    }

    
  return (
    <div  align="center" w="50%" >
       <form onSubmit={submitHandler} >
        <input style={{border:"1px solid black"}} value={image} placeholder="add image here" onChange={(e)=>setImage(e.target.value)} />
        <Button  type="submit" >Add Product</Button>
       </form>
    </div>
  )
}

export default Add
