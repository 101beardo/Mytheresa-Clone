
import { Box, Button, Container, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'

import React from 'react'
import { useNavigate } from 'react-router-dom';






const Mens = () => {
  const navigate=useNavigate()
  return (
    // border="1px solid red"
    <Box  mb="10px" align="center">
      {/* <Box 
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
                <Link color="gray" style={{ textDecoration: 'none' }}   onClick={()=>{navigate(`/sidebar`)}}>NEW ARRIVALS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#mens">DESIGNERS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">CLOTHING</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">SHOES</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">BAGS</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">ACCESSORIES</Link>
                <Link color="gray" style={{ textDecoration: 'none' }}  href="#">FESTIVE SEASON</Link>
                <Link color="red" style={{ textDecoration: 'none' }}  href="#">SALE</Link>
          </Box>
          
      
                <Box fontSize={['12px']} mr="60px" p="10px"  w="18%" display="flex" justifyContent="right" alignItems="center" border="1px solid lightgray" >
                <SearchIcon boxSize="18px" pos="absolute"/>
                <Input variant='unstyled'  placeholder='Search for...'/>    
                </Box>
           
      </Box>
      <hr /> */}
        <Box w={["90%"]} display="flex" justifyContent="center" alignItems="center" m="auto" mt="30px">
        <Image w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/DESKTOP_2X_20221213142316.jpg?imwidth=1180&imdensity=1"/>
            <Box position="absolute"  color="white" >
                    <Container  fontSize={["10px","16px","26px"]}>
                        _IT'S THE SEASON
                    </Container>
                    <Container  fontSize={["16px","26px","56px"]}>
                        Smart looks
                    </Container>
                    <Button size={['xs','md','lg']} mt="10px" color="black" onClick={() => navigate('/arrival')}>
                        SHOP NOW {`>>`}
                    </Button>
            </Box>
        </Box>
        <Box  w={["90%"]} display="flex"  mt="30px">
        <Box display={["none","none","flex"]} w="50%" bgColor="black" ></Box>
        <Image w={["100%","100%","50%"]} src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG2/BIG_2_2X_20221212123720.jpg?imwidth=1180&imdensity=1"/>
            <Box  mt="15%" ml="8%" justify="center" align="left" position="absolute"  color="white" >
                    <Text mb="20px" display={["none","none","flex"]}  fontSize={["16px","26px","56px"]}>
                        Winter shoes
                    </Text>
                    <Text mb="40px" display={["none","none","flex"]} fontSize={["10px","16px","16px"]}>
                        The temperature may rise and fall but style is constant
                    </Text>
                    <Button onClick={() => navigate('/arrival')} display={["none","flex","flex"]} size={['xs','md','lg']} mt="10px" color="black">
                        SHOP NOW {`>>`}
                    </Button>
            </Box>
        </Box>
        <Box  w={["90%"]} display="flex"  mt="30px">
        <Image w={["100%","100%","50%"]} src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW49/BIG3/EN_ACTBOX1_DESKTOP_2x_20221205114710.jpg?imwidth=1180&imdensity=1"/>
        <Box display={["none","none","flex"]} w="50%" bgColor="black" >
        <Box  mt="15%" ml="8%" justify="center" align="left" position="absolute"  color="white" >
                    <Text mb="20px" display={["none","none","flex"]}  fontSize={["16px","26px","56px"]}>
                        SALE
                    </Text>
                    <Text mb="40px" display={["none","none","flex"]} fontSize={["10px","16px","16px"]}>
                        Starts now - up to 50% off
                    </Text>
                    <Button onClick={() => navigate('/arrival')} display={["none","flex","flex"]} size={['xs','md','lg']} mt="10px" color="black">
                        SHOP SALE {`>>`}
                    </Button>
            </Box>
        </Box>
        </Box>
        <Box m="50px" >
          <Text>MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION</Text>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</Text>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</Text>
          <Box align="left" m="30px" w={["100%","100%","80%"]} display={["block","flex","flex"]} justifyContent="space-evenly" >
            <Text>A LUXURY SHOPPING EXPERIENCE
              <Box w="95%"  m="10px"  fontSize="15px" >
              <UnorderedList >
                <ListItem>The finest edit of more than 100 international luxury brands</ListItem>
                <ListItem>400 new arrivals each week directly from the runway</ListItem>
                <ListItem>Well-curated selection of items for a boutique-like shopping experience</ListItem>
                <ListItem>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</ListItem>
              </UnorderedList>
              </Box>
            </Text>
            <Text>SERVICE AND QUALITY
            <Box w="95%"  m="10px"  fontSize="15px" >
              <UnorderedList >
                <ListItem>Authentic products guaranteed</ListItem>
                <ListItem>Fast, reliable delivery to over 130 countries within 72 hours</ListItem>
                <ListItem>Free returns and exchanges within 30 days</ListItem>
                <ListItem>Exceptional customer service available 24 hours a day, 7 days a week in 13 different languages</ListItem>
              </UnorderedList>
              </Box>
            </Text>
          </Box>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >Mytheresa has a long and rich fashion heritage that spans more than 30 years. What began in the heart of Munich as a contained local boutique offering creations from international designers has now grown to become one of the most innovative luxury e-commerce companies in the world. Whether you’re paying a visit to our Mytheresa Store, browsing from your computer at home, or shopping on-the-go via our mobile app, our goal always remains the same: to provide the perfect space that caters to all your shopping desires.</Text>
          <Text m="10px"  fontSize="15px" align="left"  w={["100%","100%","80%"]} >At Mytheresa we know that stylish men love fashion too and as a result, our professional Customer Service team is here to help with your order and make sure you are always dressed for success.</Text>
        </Box>
        <hr/>
    </Box>
  )
}

export default Mens
