import React from 'react'
import {Box,Button,Text,Image, Heading} from '@chakra-ui/react'
import { useSelector } from "react-redux";
import {useEffect,useState} from "react";
import {addCartData, addWishData, getdata } from '../Redux/AppReducer/action';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SinglePage=()=>{
  const{id}=useParams();
  const data=useSelector((store)=>store.AppReducer.data);
    const [currentProduct,setCurrentProduct]=useState({})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    // const notifySuccess = (res)=>{toast.success(res)};
    // notifySuccess("Item deleted from Cart")
   useEffect(()=>{
    dispatch(getdata())
    console.log(data)
    },[])

   useEffect(()=>{
    if(id){
          const product=data.find((item)=>item.id===Number(id))
          product&&setCurrentProduct(product)
           
    }
   },[id])
  //  console.log(currentProduct,"curr")
//    const handleCart=(payload)=>{
//     dispatch(addCartData(payload))
//     alert("Item added in Cart")
//     console.log(payload);
//    }


const handleCart=(payload)=>{
  dispatch(addCartData(payload)) 
  navigate(`/cart`)
}

const handleWish=(payload)=>{
  dispatch(addWishData(payload)) 
  navigate(`/wishlist`)
}


  return (
    <>
     <Box display={["block","","flex","flex"]} pt="40px" w="75%" m="auto" mt="7%" border="px solid red">
       <Box w={["","100%","","50%"]} border="px solid red" m={["auto","auto","","none"]}>
          <Image border="px solid red" display="block" m="auto" src={currentProduct.lazyloaded} />
        <Box  display={["grid","","","flex"]} gap={["10px","","",""]} w="70%" m="auto" mt="20%" border="px solid red">
       <Button  w={["115px","","","95%"]} fontSize={['8px','10px','15px']} border="1px solid black" _hover={{bgColor:'white'}} bgColor="white" onClick={()=>{handleWish(currentProduct)}} >{`>>`}Add To Wishlist</Button> 
        <Button  w={["115px","","","50%"]} fontSize={['8px','10px','15px']}  bgColor="black" color="white" _hover={{bgColor:'black'}}  onClick={()=>{handleCart(currentProduct)}} >{`🛒`}Buy Now</Button>
        </Box>
        <Box  display={["flex","","","flex"]} gap="10px" justifyContent="center">
        <Image  w={["15%","","","10%"]} m="right" mt="5%" src={currentProduct.lazyloaded}/>
        <Image w={["15%","","","10%"]} m="right" mt="5%" src={currentProduct.lazyloaded}/>
        </Box>
       </Box>
       <Box ml={["","","4%","4%"]} w={["","100%","","50%"]}  border="px solid red">
        <Text mt="5px" ml="10px" fontSize="18px" color="rgb(153, 153, 153)">{currentProduct.pa1}</Text>
        <Text ml="9px" fontWeight="700" color="rgb(35,187,117)">{currentProduct.category}</Text> 
        <Box display="flex" alignItems="center">
                      <Text ml="10px" color="black" fontSize="27px" fontWeight="700" >₹{currentProduct.price}</Text>
                      {/* <del style={{display:"inline", marginLeft:"5px",  color:"rgb(153, 153, 153)"}}>₹{currentProduct?.original_price}</del>  */}

                      </Box>
                      {/* <Image ml="10px" w="16px" h="16px" display="inline" src={disImg}/> */}
                      <Text  style={{display:"inline",fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"10px"}}>₹ 100 discount on 1st order</Text>
                      <Text  style={{fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"12px"}}>Favorite</Text>
                      <Button  ml="10px" borderRadius="50px" h="22px" w={["","","","22%"]} color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      <Button  _hover={{bgColor:'rgb(35,187,117)'}} ml="10px" mt="15px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">3.6⭐</Button>

                      <Box mt="8%">
                        <Heading color="black">Product Details</Heading>
                        <Text color="rgb(153, 153, 153)" ml="8px">Item : Good ✔</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Quality : Excellent ⭐</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Multipacks</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Good quality Product made of very fine quality material. This Product is long lasting.</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Country of Origin : India 🌐</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">More Information...</Text>
                      </Box>
       </Box>
     </Box>
    </>
  )
}

export default SinglePage