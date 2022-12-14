import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'
function WomenPage() {
  return (
          <>
            <Box
             w="90%"
             margin='auto'
             mt={50}
             h='auto'>
            <Image w="100%" 
              src='https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg' alt='shiv'/>
              </Box>
       
        
    {/* ---------------Second carousel--------------------------------------- */}
        
                      <Box w="90%" 
                      display="flex" 
                      justifyContent="center" 
                      alignItems="center" 
                      m="auto" 
                      mt='30px'>
                        <Image 
                        w="100%" 
                        src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1"/>
                          <Box 
                          position="absolute" 
                          color="white">
                              <Container 
                              fontSize={["10px","16px","26px"]}>
                                Season'ss itemsdf
                              </Container>
                              <Container 
                              fontSize={["16px","26px","56px"]}>
                                festie home dee
                              </Container>
                              <Button size={['xs','md','lg']} mt="10px" color="black">
                                  shop now {`>>`}
                              </Button>
                          </Box>
                      </Box>
                        {/* //---------------------------- */}

                          
                           <Box h="400px"
                              bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1')"
                              bgPosition="center"
                              bgRepeat="no-repeat"
                           />
                        
                          
                       
        </>     
  )
}

export default WomenPage