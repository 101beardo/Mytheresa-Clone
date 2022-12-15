import { Box, Button, Container, Image, Link, Text } from '@chakra-ui/react'
import { Icon, Input } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"




const Mens = () => {
  return (
    // border="1px solid red"
    <Box id='mens' align="center">
      <Box 
          mb="6px"
          w="100%" 
          h="70px" 
          p="20px"
          display={["none","none","flex"]}
          justifyContent="space-between"
          fontSize={["14px"]}
          // position="sticky"
          
          >
          <Box  w="59%" display="flex" justifyContent="space-evenly" >
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">NEW ARRIVALS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#mens">DESIGNERS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">CLOTHING</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">SHOES</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">BAGS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">ACCESSORIES</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">FESTIVE SEASON</Link>
                <Link color="red" style={{ textDecoration: 'none' }}  href="#">SALE</Link>
          </Box>
          
          <Box fontSize={['12px']} mr="60px"  w="20%" display="flex" >
                <Box  >
                {/* <Icon boxSize="23px" right="6%" top="29%" position="absolute" as={AiOutlineSearch}/> */}
                <Input width='130%' placeholder='Search for...'/>
                </Box>
          </Box> 
      </Box>
      <hr />
        <Box w={["90%"]} display="flex" justifyContent="center" alignItems="center" m="auto" mt="30px">
        <Image w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW50/Big_FestiveNOV_LIFE_desktop_2x_20221205101257.jpg?imwidth=1180&imdensity=1"/>
            <Box position="absolute"  color="white" >
                    <Container  fontSize={["10px","16px","26px"]}>
                        SEASON'S GREETINGS
                    </Container>
                    <Container  fontSize={["16px","26px","56px"]}>
                        Festive Home Décor
                    </Container>
                    <Button size={['xs','md','lg']} mt="10px" color="black">
                        SHOP NOW {`>>`}
                    </Button>
            </Box>
        </Box>
        <Box m="50px" >
          <Text>MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION</Text>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</Text>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</Text>
          <Box align="left" m="30px" w={["100%","100%","80%"]} display={["block","flex","flex"]} justifyContent="space-evenly" >
            <Text>A LUXURY SHOPPING EXPERIENCE
              <Box w="95%"  m="10px"  fontSize="15px" >
              <ul >
                <li>The finest edit of more than 100 international luxury brands</li>
                <li>400 new arrivals each week directly from the runway</li>
                <li>Well-curated selection of items for a boutique-like shopping experience</li>
                <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
              </ul>
              </Box>
            </Text>
            <Text>SERVICE AND QUALITY
            <Box w="95%"  m="10px"  fontSize="15px" >
              <ul >
                <li>Authentic products guaranteed</li>
                <li>Fast, reliable delivery to over 130 countries within 72 hours</li>
                <li>Free returns and exchanges within 30 days</li>
                <li>Exceptional customer service available 24 hours a day, 7 days a week in 13 different languages</li>
              </ul>
              </Box>
            </Text>
          </Box>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >Mytheresa has a long and rich fashion heritage that spans more than 30 years. What began in the heart of Munich as a contained local boutique offering creations from international designers has now grown to become one of the most innovative luxury e-commerce companies in the world. Whether you’re paying a visit to our Mytheresa Store, browsing from your computer at home, or shopping on-the-go via our mobile app, our goal always remains the same: to provide the perfect space that caters to all your shopping desires.</Text>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >At Mytheresa we know that stylish men love fashion too and as a result, our professional Customer Service team is here to help with your order and make sure you are always dressed for success.</Text>
        </Box>
    </Box>
  )
}

export default Mens
