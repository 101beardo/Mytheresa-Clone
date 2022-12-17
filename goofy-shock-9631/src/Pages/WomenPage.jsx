import { Box,Button,Image,Text } from '@chakra-ui/react'
import './WomenPage.css'
import Dropdown from '../Components/Dropdown'
function WomenPage() {

  return <>
        
  {/* -----------------------navbar----------------------------------------- */}
  <Dropdown/>
{/* ------------------------------------------------------------------------------- */}
          <Box
            id='img1'
            width='90%'
            height='auto'
            margin='auto'
            marginTop='50px'
            >
            <Image 
             width='100%'
            //  className='img1-1'
             
              src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg' alt='shiv'/>
              </Box>
    {/* //----------------------------img2------------------------------------- */}
          {/*---------------------------------- img2---------------- */}
               <Box>
                    <Box 
                       className='img2'
                      height='750px'
                      width='90%'
                      margin='auto'
                      marginTop=' 30px'
                      display=' flex'
                      flexDirection=' column'
                      justifyContent=' center'
                      alignItems=' center'
                      backgroundPosition='center'
                      backgroundSize='cover'
                       backgroundRepeat='no-repeat'
                      rowGap=' 20px'
                      bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1')">
                      <Box
                      //  className='text1'
                       color='white'
                       fontSize='26px'
                       marginTop= '15px'>YOUR NEW OUTLOOK</Box>
                      <Box
                         className='text2'
                         color='white'
                        fontSize='65px'
                        >Cruise 2023</Box>
                      <Button 
                      // className='button2'
                      border='none'
                      borderRadius='0px'
                      _hover={{ bg:'black'}}
                      backgroundColor='white'
                      color='black'
                      w='11%'
                      h='40px'
                      fontSize= '20px'
                      fontWeight= '400'
                      letterSpacing= '1px'>SHOP NOW</Button>
                        </Box>
                  </Box>
      {/* -----------------------textcontainer------------------------------- */}
                          <Box className='textcont'
                          w= '90%'
                          bgColor='#f6f6f6'
                          h='300px'
                          m= 'auto'
                          mt= '50px'
                          borderTop= '1px solid #dad8d8'
                          borderBottom= '1px solid #dad8d8 '
                          display= 'flex'
                          flexDirection= 'column'
                          justifyContent= 'center'
                          alignItems= 'center'
                          rowGap= '20px'
                          >
                             <Box 
                            //  className='textcont-1'
                             fontSize='22px'>DON'T MISS OUT</Box>
                             <Box
                              // className='textcont-2'
                             fontSize='40px'>New Arrivals</Box>
                             <Box 
                            //  className='textcont-3'
                            fontSize='22px'
                             >Christian Louboutin, Paris Texas, A.P.C., Victoria Beckham...</Box>
                             <Box className='textcont-4'>
                              <Button 
                              // className='textcont-but'
                              border='none'
                              borderRadius="0px"
                              _hover={{ bg:'black'}}
                              bgColor='black'
                              color='white'
                              h= '40px'
                              w='120%'
                              fontSize= '16px'
                              fontWeight='400'
                              letterSpacing= '1'>SHOP NOW </Button></Box>
                          </Box>
        {/*--------- ---------------bigimg--------------------------------- -------*/}
        <Box 
        // className='bigimg'
        w='90%'
        border='px solid red'
        display='flex'
        h=' 200px'
        m='auto'
        mt='50px'
        justifyContent= 'space-around'
        >
          <Box className='bigimg-1'>
            <Box 
            // className='bigtext-1'
            fontSize='24px'
            textAlign= 'center'
            >PARIS TEXAS X MYTHERESA</Box>
            <Box 
            // className='bigtext-2'
            textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'>The Exclusive Capsule <br/> Collection</Box>
          </Box>
          <Box className='bigimg-2'>
            <Box 
            // className='bigtext-1'
            fontSize='24px'
            textAlign= 'center'>Seasonal Flats</Box>
            <Box 
            // className='bigtext-2'
            textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'>Because cozy feet are <br/> happy feet</Box>
          </Box>
        </Box>
        {/*---------------------------------Bigpic------------------------------------------- */}
            <Box 
            // className='bigpic'
            w='90%'
            h='auto'
            m='auto'
            border='px solid red'
            display ='flex'
            justifyContent='space-between'
            columnGap= '30px'

            >
              <Box 
              // className='bigpic-1'
              h='auto'
              border='px solid red'
              w= '50%'
              >
                <Image 
                // className='bigimage' 
                w='100%'
                src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/Paris-Texas-ActboxTall_2x_20221212102147.jpg?imwidth=600&imdensity=1"/>
              </Box>
              <Box 
              // className='bigpic-2'
              width='50%'
              >
                 <Box className="bigpic-2-1">
                  <Image className="bigpic-2-img"
                  w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_3_2x_20221212110651.jpg?imwidth=600&imdensity=1"/>
                 </Box>
                 <Box 
                //  className="bigpic-2-2"
                 border='px solid red'      
                 w= '100%'
                 m='auto'
                 >
                
                  <Box 
                  // className='bigpic-2-2-buttondiv'
                  w='20%'
                  h='40px'
                  margin= 'auto'
                  mt= '85px'
                  >
                    <Button 
                    // className='bigpic-2-2-Button'
                    border='none'
                    _hover={{ bg:'black'}}
                    bgColor= 'black'
                    borderRadius='0px'
                    color='white'
                    h= '40px'
                    w='100%'
                    fontSize= '13px'
                    fontWeight= '400'
                    letterSpacing= '1px'
                    >SHOP NOW </Button></Box>
                  <Box 
                  // className='hr'
                  marginTop= '100px'
                  />
                  <Text 
                  className='bigpic-2-2-textsmall'
                  fontSize='24px'
                  textAlign='center'
                  >CONTEMPORARY JEWELRY</Text>
                  <Text 
                  // className='bigpic-2-2-text'
                   textAlign= 'center'
                   fontSize= '40px'
                   mt= '18px'
                  >Craft and style rolled into <br/> one</Text>
                 </Box>
                 <Box className="bigpic-2-3">
                  <Image
                  //  className="bigpic-2-img"
                  w='100%'
                   src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_4_2x_20221212110650.jpg?imwidth=600&imdensity=1"/>
                 </Box>
              </Box>
            </Box>
{/* -----------------------------------twobutton------------------------------------------------- */}
        
        <Box 
        // className='twobutton'
        w='90%'
        border='px solid red'
        m= 'auto'
        mt= '40px'
        display= 'flex'
        justifyContent= 'space-around'
        
        >
          <Box 
          // className='twobuttondiv
          border='px solid red'
         
          >
          <Button 
          // className='twobutton-1'
          _hover={{ bg:'black'}}
          border='none'
          borderRadius='0px'
          bgColor= 'black;'
          color='white'
          h= '40px'
          w='100%'
          fontSize ='13px'
          fontWeight= '400'
          letterSpacing= '1px'
          >SHOP NOW</Button>
          </Box>
          <Box className='twobuttondiv'>
           <Button 
          //  className='twobutton-1'
          _hover={{ bg:'black'}}
          borderRadius='0px'
            border='none'
            backgroundColor= 'black;'
            color='white'
            h= '40px'
            w='100%'
            fontSize ='13px'
            fontWeight= '400'
            letterSpacing= '1px'
           >SHOP NOW</Button>
          </Box>
        </Box>
       
  {/* ------------------------------nextbigdiv------------------------------------------------ */}
         
          <Box className='bigimg'
           width='90%'
            border='px solid red'
            display='flex'
            height=' 200px'
            margin='auto'
            marginTop='50px'
            justifyContent='space-around'
          >
          <Box className='bigimg-1'>
            <Box className='bigtext-1'
             fontSize='24px'
             textAlign= 'center'
            >WHAT'S THE ANGLE?</Box>
            <Box className='bigtext-2'
            textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'
            >Sharpen your edit of <br/> winter-sun shades</Box>
          </Box>
          <Box className='bigimg-2'>
            <Box className='bigtext-1'
            fontSize='24px'
             textAlign= 'center'
            >GLAMAROUS GOWNS</Box>
            <Box className='bigtext-2'
             textAlign= 'center'
            fontSize='40px'
            marginTop= '18px'
            >Designed to make Link <br/>statement</Box>
          </Box>
        </Box>
        {/*---------------------------------Bigpic------------------------------------------- */}
            
            <Box 
            // className='bigpic'
            w='90%'
            h='auto'
            m='auto'
            border='px solid red'
            display ='flex'
            justifyContent='space-between'
            columnGap= '30px'

            >
              
              <Box 
              // className='bigpic-2'
              width='50%'
              >
                 <Box className="bigpic-2-1">
                  <Image className="bigpic-2-img"
                  w="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
                 </Box>
                 <Box 
                //  className="bigpic-2-2"
                 border='px solid red'      
                 w= '100%'
                 m='auto'
                 >
                
                  <Box 
                  // className='bigpic-2-2-buttondiv'
                  w='20%'
                  h='40px'
                  margin= 'auto'
                  mt= '85px'
                  >
                    <Button 
                    // className='bigpic-2-2-Button'
                    border='none'
                    _hover={{ bg:'black'}}
                    bgColor= 'black'
                    borderRadius='0px'
                    color='white'
                    h= '40px'
                    w='100%'
                    fontSize= '13px'
                    fontWeight= '400'
                    letterSpacing= '1px'
                    >SHOP NOW </Button></Box>
                  <Box 
                  // className='hr'
                  marginTop= '100px'
                  />
                  <Text 
                  className='bigpic-2-2-textsmall'
                  fontSize='24px'
                  textAlign='center'
                  >YOUR NEW FLEX</Text>
                  <Text 
                  // className='bigpic-2-2-text'
                   textAlign= 'center'
                   fontSize= '40px'
                   mt= '18px'
                  >The Antigona Stretch Bag  <br/>from Givenchy</Text>
                 </Box>
                 <Box className="bigpic-2-3">
                  <Image
                  //  className="bigpic-2-img"
                  w='100%'
                   src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_2_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
                 </Box>
              </Box>
              <Box 
              // className='bigpic-1'
              h='auto'
              border='px solid red'
              w= '50%'
              >
                <Image 
                // className='bigimage' 
                w='100%'
                src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_ActboxTall_2_2x_20221213120617.jpg?imwidth=600&imdensity=1"/>
              </Box>
            </Box>
{/* -----------------------------------twobutton------------------------------------------------- */}
        
<Box 
        // className='twobutton'
        width='90%'
        border='px solid red'
        margin= 'auto'
        marginTop= '40px'
        display= 'flex'
        justifyContent= 'space-around'
        >
          <Box 
          // className='twobuttondiv
          // width='10%'
          // height='40px'
          // margin= 'auto'
          >
          <Button 
          // className='twobutton-1'
          borderRadius='0px'
          _hover={{ bg:'black'}}
          border='none'
          backgroundColor= 'black;'
          color='white'
          height= '40px'
          width='100%'
          fontSize ='13px'
          fontWeight= '400'
          letterSpacing= '1px'
          >SHOP NOW</Button>
          </Box>
          <Box className='twobuttondiv'>
           <Button 
          //  className='twobutton-1'
          borderRadius='0px'
          _hover={{ bg:'black'}}
            border='none'
            backgroundColor= 'black;'
            color='white'
            height= '40px'
            width='100%'
            fontSize ='13px'
            fontWeight= '400'
            letterSpacing= '1px'
           >SHOP NOW</Button>
          </Box>
        </Box>
       

{/* --------------------------------------------------------------------------------------------------- */}
                  <Box 
                  
                  border='px solid red'
                  w="90%"
                  margin='auto'
                  marginTop='20px'
                  textAlign='center'>
                    <Text
                    textAlign= 'center'
                    fontSize= '24px'
                    color="black">
                      PREP SCHOOL
                    </Text>
                    <Box
                    textAlign= 'center'
                    marginTop='10px'
                    fontSize= '40px'
                    color="black">
                    Where polished is the guiding<br/> principle
                    </Box>
                    
                  </Box>


    {/* ----------------------------fourimages------------------------------------------ */}
                <Box
                border="px solid red"
                width="90%"
                display="flex"
                margin='auto'
                marginTop='20px'
                gap="30px"
                color="black"
                fontSize='24px'
                textAlign="center"
                >
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_1_2x_20221212102029.jpg"/>
                  <Text>Self-Portrait</Text>
                  </Box>
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_2_2x_20221212102030.jpg"  />
                  <Text>Gucci</Text>
                  </Box>
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_3_2x_20221212102029.jpg" />
                  <Text>Valentino</Text>
                  </Box>
                  <Box>
                  <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_4_2x_20221212102028.jpg"/>
                  <Text>Oscar de la Renta</Text>
                  </Box>
                </Box>
        <Box 
        // className='twobutton'
        width='90%'
        border='px solid red'
        margin= 'auto'
        marginTop= '40px'
        display= 'flex'
        justifyContent= 'space-around'
        >
         
          <Button 
          // className='twobutton-1'
          borderRadius='0px'
          _hover={{ bg:'black'}}
          border='none'
          backgroundColor= 'black;'
          color='white'
          height= '40px'
          width='10%'
          fontSize ='16px'
          fontWeight= '400'
          letterSpacing= '1px'
          >SHOP NOW</Button>
          
          </Box>
    {/* ---------------------------------last section--------------------------------------------- */}
          <Box
          w='90%'
          // bgColor='#f6f6f6'
          borderTop= '1px solid #dad8d8'
          borderBottom='1px solid #dad8d8'
          margin='auto'
          marginTop='100px'
        
          
          >
            <Box>
            <Text
            fontSize='27px'
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
            marginTop='20px'
            >
            <Box
            width="45%"
            border="px solid black"
            color="black">
            <Text fontSize='24px' color="black">A LUXURY SHOPPING EXPERIENCE</Text>

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
       
          </>
  
}

export default WomenPage