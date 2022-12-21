
import { Image } from '@chakra-ui/image'
import { Box, Link, Text } from '@chakra-ui/layout'
import { Input, Button } from '@chakra-ui/react'
import React from 'react'
import pic1 from "../Assests/payments_methods.png"
import pic2 from "../Assests/delivered_by.png"
import { Icon } from '@chakra-ui/icon'
import {AiFillLinkedin,AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube,AiFillWechat,AiFillWeiboCircle} from "react-icons/ai"
import {MdFacebook} from "react-icons/md"
import {ImPinterest,ImMobile} from "react-icons/im"


const Footer = () => {
  return (
    <Box mx="3%">
      <Box  align="center" >
      SHOP WHENEVER, WHEREVER WITH THE APP
      <Box m="25px" display="flex" justifyContent="center" >
        <Link mr="-340px" href='https://apps.apple.com/app/id484615570?mt=8' ><Image w="27%" src='https://abilenetx.gov/ImageRepository/Document?documentId=3797'/></Link>
        <Link href='https://play.google.com/store/apps/details?id=com.mytheresa.app.mytheresa'><Image w="27%" src='https://abilenetx.gov/ImageRepository/Document?documentId=3796'/></Link>
      </Box>
      <hr/>
      <Box align="left" m="30px"  display={["block","flex","flex"]} justifyContent="space-evenly" >
            <Text  w={["100%","25%","25%"]} >SERVICE & SECURITY
              <Box   m="10px"  fontSize="15px" >

                
                <Text> ✔  Fast delivery</Text>
                <Text  mb="10px" color="gray" >Delivery within 2 business days</Text>
                
                <Text > ✔  Free returns within 30 days </Text>
                <Text  mb="10px" color="gray" >Convenient return service</Text>
                <Text> ✔  Secure payment and data protection </Text>
                <Text  mb="10px" color="gray" >SSL encryption for secure transactions and personal data</Text>
              </Box>
            </Text>
            <Text  w={["100%","25%","25%"]} >MYTHERESA
            <Box color="gray" w="95%"  m="10px"  fontSize="15px" >
                <Text>About us</Text>
                <Text>Trust & services</Text>
                <Text>Sustainability</Text>
                <Text>Press</Text>
                <Text>Careers</Text>
                <Text>Investor Relations</Text>
                <Text>Affiliates</Text>
                <Text>Tax-Free Shopping</Text>
              </Box>
            </Text>
            <Text w={["100%","25%","25%"]} >CUSTOMER CARE
            <Box color="gray" w="95%"  m="10px"  fontSize="15px" >
                <Text>Contact us</Text>
                <Text>Shipping information</Text>
                <Text>Secure payment</Text>
                <Text>Exchanges</Text>
                <Text>Returns</Text>
                <Text>After sale service</Text>
                <Text>Gift card</Text>
              </Box>
            </Text>
            <Text  w={["100%","25%","25%"]} >GET TREND UPDATES, STYLE TIPS AND MORE
            <Box w="95%"  m="10px"  fontSize="15px" >
                <Box mb="10px" display="flex" >
                <Input placeholder="your email address here ..." />
                <Button>SIGN UP</Button>
                </Box>
                <Box mb="10px" >
                <Text>Wish list</Text>
                <Text color="gray" >Receive personal notifications</Text>
                </Box>
                <Box>
                <Text>Follow us on</Text>
                <Box display="flex" color="black" >
                <Icon mr="3px" boxSize="25px" as={AiFillLinkedin}/>
                <Icon mx="3px" boxSize="25px" as={MdFacebook}/>
                <Icon mx="3px" boxSize="25px" as={AiOutlineTwitter}/>
                <Icon mx="3px" boxSize="25px" as={ImPinterest}/>
                <Icon mx="3px" boxSize="25px" as={AiOutlineInstagram}/>
                <Icon mx="3px" boxSize="25px" as={AiFillYoutube}/>
                <Icon mx="3px" boxSize="25px" as={ImMobile}/>
                <Icon mx="3px" boxSize="25px" as={AiFillWechat}/>
                <Icon mx="3px" boxSize="25px" as={AiFillWeiboCircle}/>
                </Box>
                </Box>
              </Box>
            </Text>
          </Box>
      </Box>
      <hr/>



      <Box mb="50px" display="flex" justifyContent="space-between" color="gray" >
      <Box>
      <Text display="flex" mx="10px" >payment methods:
      <Image w="70%"  mx="10px" src={pic1}/>
      </Text>
      
      </Box>
      <Box>
      <Text w="50%"  display="flex" mx="10px" >delivered by:
      <Image src={pic2}/>
      </Text>
      </Box>
      </Box>


      <Box display="flex" m="10px" justifyContent="space-between" color="gray" >
      <Box>
      <Text>copyright © 2006-2022 mytheresa.com</Text>
      </Box>
      <Box display="flex" >
      <Text mx="10px" >terms of use</Text>
      <Text mx="10px" >privacy policy</Text>
      <Text mx="10px" >imprint</Text>
      </Box>
      </Box>



      
    </Box>
  )
}

export default Footer
