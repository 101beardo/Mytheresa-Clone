import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React from 'react';
import './WomenPage.css'
function WomenPage() {
  return (
          <>
          <Box
            className='img1'>
            <Image 
             className='img1-1'
             
              src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg' alt='shiv'/>
              </Box>
    {/* //----------------------------img2------------------------------------- */}
          {/* img2---------------- */}
               <Container>
                    <Box 
                       className='img2'
                       bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1')">
                      <Box className='text1'>YOUR NEW OUTLOOK</Box>
                      <Box className='text2'>Cruise 2023</Box>
                      <Button className='button2'>SHOP NOW</Button>
                        </Box>
                  </Container>
      {/* -----------------------textcontainer------------------------------- */}
                          <Box className='textcont'>
                             <Box className='textcont-1'>DON'T MISS OUT</Box>
                             <Box className='textcont-2'>New Arrivals</Box>
                             <Box className='textcont-3'>Christian Louboutin, Paris Texas, A.P.C., Victoria Beckham...</Box>
                             <Box className='textcont-4'><Button className='textcont-but'>SHOP NOW </Button></Box>
                          </Box>
        {/*--------- ---------------bigimg--------------------------------- -------*/}
        <Box className='bigimg'>
          <Box className='bigimg-1'>
            <Box className='bigtext-1'>PARIS TEXAS X MYTHERESA</Box>
            <Box className='bigtext-2'>The Exclusive Capsule <br/> Collection</Box>
          </Box>
          <Box className='bigimg-2'>
            <Box className='bigtext-1'>Seasonal Flats</Box>
            <Box className='bigtext-2'>Because cozy feet are <br/> happy feet</Box>
          </Box>
        </Box>
        {/*---------------------------------Bigpic------------------------------------------- */}
            <Box className='bigpic'>
              <Box className='bigpic-1'>
                <Image className='bigimage' src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/Paris-Texas-ActboxTall_2x_20221212102147.jpg?imwidth=600&imdensity=1"/>
              </Box>
              <Box className='bigpic-2'>
                 <Box className="bigpic-2-1">
                  <Image className="bigpic-2-img" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_3_2x_20221212110651.jpg?imwidth=600&imdensity=1"/>
                 </Box>
                 <Box className="bigpic-2-2">
                
                  <Box className='bigpic-2-2-buttondiv'><Button className='bigpic-2-2-button'>SHOP NOW </Button></Box>
                  <hr className='hr'/>
                  <Text className='bigpic-2-2-textsmall'>CONTEMPORARY JEWELRY</Text>
                  <Text className='bigpic-2-2-text'>Craft and style rolled into <br/> one</Text>
                 </Box>
                 <Box className="bigpic-2-3">
                  <Image className="bigpic-2-img" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_4_2x_20221212110650.jpg?imwidth=600&imdensity=1"/>
                 </Box>
              </Box>
            </Box>
{/* -----------------------------------twobutton------------------------------------------------- */}
        
        <Box className='twobutton'>
          <Box className='twobuttondiv'>
          <Button className='twobutton-1'>SHOP NOW</Button>
          </Box>
          <Box className='twobuttondiv'>
           <Button className='twobutton-1'>SHOP NOW</Button>
          </Box>
        </Box>
        <hr className='hr1'/>
  {/* ------------------------------nextbigdiv------------------------------------------------ */}
         
          <Box className='bigimg'>
          <Box className='bigimg-1'>
            <Box className='bigtext-1'>WHAT'S THE ANGLE?</Box>
            <Box className='bigtext-2'>Sharpen your edit of <br/> winter-sun shades</Box>
          </Box>
          <Box className='bigimg-2'>
            <Box className='bigtext-1'>GLAMAROUS GOWNS</Box>
            <Box className='bigtext-2'>Designed to make a <br/>statement</Box>
          </Box>
        </Box>
        {/*---------------------------------Bigpic------------------------------------------- */}
            <Box className='bigpic'>
             
              <Box className='bigpic-2'>
                 <Box className="bigpic-2-1">
                  <Image className="bigpic-2-img" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
                 </Box>
                 <Box className="bigpic-2-2">
                
                  <Box className='bigpic-2-2-buttondiv'><Button className='bigpic-2-2-button'>SHOP NOW</Button></Box>
                  <hr className='hr'/>
                  <Text className='bigpic-2-2-textsmall'>YOU NEW FLEX</Text>
                  <Text className='bigpic-2-2-text'>The Antigona Stretch Bag <br/> from Givenchy</Text>
                 </Box>
                 <Box className="bigpic-2-3">
                  <Image className="bigpic-2-img" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_2_2x_20221212110608.jpg?imwidth=600&imdensity=1"/>
                 </Box>
              </Box>
              <Box className='bigpic-1'>
                <Image className='bigimage' src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_ActboxTall_2_2x_20221213120617.jpg?imwidth=600&imdensity=1"/>
              </Box>
            </Box>
{/* -----------------------------------twobutton------------------------------------------------- */}
        
        <Box className='twobutton'>
          <Box className='twobuttondiv'>
          <Button className='twobutton-1'>SHOP NOW</Button>
          </Box>
          <Box className='twobuttondiv'>
           <Button className='twobutton-1'>SHOP NOW</Button>
          </Box>
        </Box>
        <hr className='hr1'/>

{/* --------------------------------------------------------------------------------------------------- */}
        
        </>     
  )
}

export default WomenPage