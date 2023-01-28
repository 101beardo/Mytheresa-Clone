import { Box,Button,Image,Text ,SimpleGrid} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function WomenPage() {
  const navigate = useNavigate()
  return (

    <Box
    align="center"
    >
      <Box 
      w="90%"
      >
     <Image  mb="30px" w={'100%'} src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg"/>
     <Box  mt="30px" m="auto" display='flex' justifyContent='center' alignItems="center">
     <Image mb="30px" w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1"/>
      <Box mt="15%" color="white" position='absolute'>
        <Text fontSize={['10px','16px','26px']}>YOUR NEW OUTLOOK</Text>
        <Text fontSize={["16px","26px",'56px']}>Cruise 2023</Text>
        <Button onClick={() => navigate('/arrival')} size={["xs","sm","md"]} marginTop='10px' borderRadius='0px' bgColor="white"color="black" _hover={{bgColor:'white'}}>SHOP NOW {`>>`}</Button>
      </Box>
      </Box>
      <Box mb="50px" boxShadow='inner'  p="8px" bgColor="#faf9f8">
        <Text mt="50px" mb="20px" fontSize={['10px','10px','20px']}>DON'T MISS OUT</Text>
        <Text mb="25px" fontSize={["13px","20px",'36px']}>New Arrival</Text>
        <Text mb="25px" fontSize={['10px','10px','20px']}>Stella McCartney, Victoria Beckham, Chloé, Ganni...</Text>
        <Button onClick={() => navigate('/arrival')} mb="25px" borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
      </Box>

     <Box display={["block",'block','flex']}>
      <Box mx="10px" align="center" w={['100%','100%','50%']}>
        <Text mb="30px" fontSize={['10px','10px','20px']}>PARIS TEXAS MYTHERESA</Text>
        <Text mb="30px" fontSize={["13px","20px",'36px']}>The Exclusive Capsule <br/> Collection</Text>
        <Image mb="30px"  src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/Paris-Texas-ActboxTall_2x_20221212102147.jpg?imwidth=600&imdensity=1"/>
        <Button onClick={() => navigate('/arrival')} mb="30px" borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
      </Box>
      <Box mx="10px" display='block'>
      <Box  border="px solid red" align="center" w={["100%","100%","100%"]}>
      <Text mb="30px" fontSize={['10px','10px','20px']}>SEASONAL FLATS</Text>
        <Text mb="30px" fontSize={["13px","20px",'36px']}>Because cozy feets are <br/> happy feets</Text>
        <Image mb="30px" w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_3_2x_20221212110651.jpg?imwidth=600&imdensity=1"/>
        <Button onClick={() => navigate('/arrival')} mb="30px" borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
        </Box>
        <hr/>
        <Box mt="23px" border="px solid red" align="center" w={["100%","100%","100%"]}>
       <Text mb="30px" fontSize={['10px','10px','20px']}>CONTEMPORARY JEWELRY</Text>
        <Text mb="30px" fontSize={["13px","20px",'36px']}>Craft and style rolled into <br/> one</Text>
        <Image mb="30px" w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_4_2x_20221212110650.jpg?imwidth=600&imdensity=1"/>
        <Button onClick={() => navigate('/arrival')} mb="30px"  borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
        </Box>
      </Box>
     </Box>
      <hr/>

      <Box mt="23px" display={["block",'block','flex']}>
      
      <Box  mx="10px" display='block'>
      <Box  border="px solid red" align="center" w={["100%","100%","100%"]}>
      <Text mt="20px"  mb="30px"  fontSize={['10px','10px','20px']}>WHAT'S THE ANGLE?</Text>
        <Text mb="30px" fontSize={["13px","20px",'36px']}>Sharpen Your Edit of <br/>Winter-Sun Shades</Text>
        <Image mb="30px" w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
        <Button onClick={() => navigate('/arrival')} mb="30px" borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
        </Box>
        <hr/>
        <Box mt="23px" border="px solid red" align="center" w={["100%","100%","100%"]}>
       <Text mt="20px" mb="30px" fontSize={['10px','10px','20px']}>YOUR NEW FLEX</Text>
        <Text mb="30px" fontSize={["13px","20px",'36px']}>The Antigona stretch bag <br/>from Givenchy</Text>
        <Image mb="30px" w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_2_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
        <Button onClick={() => navigate('/arrival')} mb="30px"  borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
        </Box>
      </Box>
      <Box mx="10px" align="center" w={['100%','100%','50%']}>
        <Text mt="20px" mb="30px" fontSize={['10px','10px','20px']}>GLAMAROUS GOWNS</Text>
        <Text mb="30px" fontSize={["13px","20px",'36px']}>Designed to make a<br/> Statement</Text>
        <Image mb="30px"  src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_ActboxTall_2_2x_20221213120617.jpg?imwidth=600&imdensity=1"/>
        <Button onClick={() => navigate('/arrival')} mb="30px" borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
      </Box>
     </Box>
      <hr/>
      <SimpleGrid mb="30px" columns={[2,2,4]} spacing='20px'>
        <Box><Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_1_2x_20221212102029.jpg"/>Self-Portrait</Box>
        <Box><Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_2_2x_20221212102030.jpg"/>Gucci</Box>
        <Box><Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_3_2x_20221212102029.jpg"/>Valentino</Box>
        <Box><Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_4_2x_20221212102028.jpg"/>Oscar de la Renta</Box>
       
      </SimpleGrid>
      <Button onClick={() => navigate('/arrival')} mb="30px" borderRadius='0px' bgColor="black" color="white" _hover={{bgColor:"black"}}>SHOP NOW {`>>`}</Button>
     <hr/>

     <Box
          w='90%'
          // bgColor='#f6f6f6'
          margin='auto'
          marginTop='50px'
        
          
          >
            <Box>
            <Text
            fontSize='16px'
            color="black"
            textAlign='center'
            >MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</Text>
            <br/>
            <Text>Mytheresa is the most-trusted source for finding the
               finest selection of luxurious womenswear. Our expert buying 
               team travels the globe with Link simple mission: to bring 
               international fashion’s finest directly to your doorstep. 
               With our runway-fresh new arrivals every week, an easy-to-
               navigate platform and Link mobile app to shop on-the-go, we 
               ensure Link boutique-like feeling for Link unique shopping experience.</Text>
            </Box>

           <Box
            display='flex'
            justifyContent='space-evenly'
            gap="20px"
            border="px solid red"
            width='100%'
            marginTop='10px'
            >
            <Box
            width="45%"
            border="px solid black"
            color="black">
            <Text fontSize='18px' color="black">A LUXURY SHOPPING EXPERIENCE</Text>

              <ul>
                <li>The finest edit of more than 200 international luxury brands</li>
                <li>900 new arrivals each week directly from the runway</li>
                <li>Well-curated selection of items for Link boutique-like shopping experience</li>
                <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
              </ul> 
            </Box>
            <Box
            width="48%"
            border="px solid black"
            color="black">
            <Text fontSize='24px' color="black">SERVICE AND QUALITY</Text>

          <ul>
            <li>Authentic products guaranteed</li>
            <li>Fast, reliable delivery within 3 business days</li>
            <li>Free returns and exchanges within 30 days</li>
            <li>Exceptional customer service available 24 hours Link day, 7 days Link week in 13 different languages</li>
          </ul> 
            </Box>
           </Box>
         <br/>
          <Text>Whether you are looking for the latest 
            Bottega Veneta pouch for everyday wear, Jimmy
             Choo heels for an upcoming wedding, or Link Burberry
              scarf to gift Link friend, our edit comprises the key
               pieces that you need for an elegant season ahead.
                With our assortment of timeless items and exclusive
                 capsule collections, which includes everything from
                  the understated luxury of Loro Piana and avant-garde
                   appeal of Maison Margiela, to Saint Laurent bags and 
                   time-honored Gucci loafers; you are certain to find 
                   everything you want to build your dream closet.</Text>
                   <br/>
          
          <Text>Get inspired by our coveted edit, which makes occasion 
            dressing easy by breaking down our buy into easy-to-shop 
            categories such as fashion sneakers or exquisite gowns. 
            Delve into our exclusive selection of designer must-haves.
             Our exceptional customer service team is here to help you
              through every step of the order process, and beyond, to make
               sure you start every day dressed to conquer.</Text>
          <br/>
          <Text>Shop with us and discover why Mytheresa is your final
             destination for online shopping for women.</Text>
          </Box>


     </Box>
</Box>
  )
}

export default WomenPage