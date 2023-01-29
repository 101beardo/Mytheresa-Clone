import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, useNavigate, useParams } from 'react-router-dom'
import { getdata, updateData } from '../Redux/AppReducer/action'

const Edit = () => {
    const {id}=useParams()
    const data=useSelector(store=>store.AppReducer.data)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [currentItem,setCurrentItem]=useState({price:""})

    const submitHandle=(e)=>{
        e.preventDefault()
        dispatch(updateData(id,currentItem))
        .then(()=>{
            navigate("/admin")
        })
    }
  
  
    useEffect(()=>{
      
        dispatch(getdata())
      
    },[data.length,dispatch])

    useEffect(()=>{
        if(id){
            const product=data.find((item)=>item.id===Number(id))
            product && setCurrentItem(product)
            console.log(data)
        }
    },[id,data.length])
  

  return (
    <Box ml="40%" w="20%">
      <form onSubmit={submitHandle} >
      <Input value={currentItem.price} onChange={e=>setCurrentItem({...currentItem,price:e.target.value})}/>
      <Button fontSize={["16px","","","20px"]} border="1px solid black" _hover={{bgColor:'white'}} bgColor="white"  m="20px" type="submit"  >Update Price</Button>
      </form>
    </Box>
  )
}

export default Edit
